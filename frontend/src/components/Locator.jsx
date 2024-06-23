// src/Locator.jsx
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';
import Map from "../assets/jpmc.png"

const Locator = () => {
  const [selectedOption, setSelectedOption] = useState('school');
  const [location, setLocation] = useState(null);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const findNearbyPlaces = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    setLoading(true);
    setError(null);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        fetchPlaces(latitude, longitude);
      },
      () => {
        setLoading(false);
        alert('Unable to retrieve your location');
      }
    );
  };

  const fetchPlaces = (lat, lng) => {
    const types = {
      school: 'school',
      ngo: 'organization',
      crs: 'political',
      govt: 'government_office',
    };

    const type = types[selectedOption];

    axios.get(`/api/places`, {
      params: {
        location: `${lat},${lng}`,
        radius: 5000,
        type
      }
    })
    .then(response => {
      setPlaces(response.data.results);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching places:', error);
      setError('Failed to fetch places');
      setLoading(false);
    });
  };

  const sendEmail = () => {
    const templateParams = {
      to_name: 'Recipient Name',
      message: `Selected option: ${selectedOption}, Location: ${location?.latitude}, ${location?.longitude}`,
    };

    emailjs
      .send('service_3p0kc1t', 'template_ghjwgub', templateParams, 'kIU1hBcBTZrixhr32')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.error('FAILED...', error);
        }
      );
  };

  const getStaticMapUrl = () => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const center = location ? `${location.latitude},${location.longitude}` : '0,0';
    return `https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=15&size=600x300&maptype=roadmap&key=${apiKey}`;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Find Nearest Places</h1>
      <div className="mb-4">
        <select 
          className="border p-2 rounded"
          value={selectedOption} 
          onChange={handleOptionChange}
        >
          <option value="school">Schools</option>
          <option value="ngo">NGOs</option>
          <option value="crs">CRS Officials</option>
          <option value="govt">Government Officials</option>
        </select>
      </div>
      <div className="mb-4">
        <button 
          className="bg-blue-500 text-white p-2 rounded mr-2" 
          onClick={findNearbyPlaces}
        >
          Find Nearby
        </button>
      </div>
      <div className="relative" onClick={sendEmail}>
        <img src={Map} alt="Map" className="w-full rounded cursor-pointer" />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="list-disc pl-5">
        {places.length > 0 ? (
          places.map((place) => (
            <li key={place.place_id} className="mb-2">
              {place.name}
            </li>
          ))
        ) : (
          !loading && <li>No stakeholders found</li>
        )}
      </ul>
    </div>
  );
};

export default Locator;
