import React from 'react';
import Chatbot from '../components/chatbot';
import productInfo from '../data/productInfo';
import './Home.css';

const ChatHome = () => {
  return (
    <div>
      <h1>Welcome to Our Product Page</h1>
      <div className="product-list">
        {productInfo.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.name} />
            <p>Price: ${product.price}</p>
            <p>Manufacturer: {product.manufacturer}</p>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Chatbot />
    </div>
  );
};

export default ChatHome;
