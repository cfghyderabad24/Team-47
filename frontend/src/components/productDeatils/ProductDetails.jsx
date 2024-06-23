import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {useLogin} from "../../context/LoginContext.jsx"
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import image7 from '../../assets/image7.png';
import image8 from '../../assets/image8.png';
import {
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Link,
} from '@mui/material';
import { useCart } from '../../context/CartContext';

// Sample product data
const sampleProducts = [
  {
    id: 1,
    name: 'Coding Toy',
    description: 'A fun and interactive coding toy for kids. This toy not only entertains but also educates by introducing basic programming concepts in a playful manner. It comes with a variety of challenges and puzzles that help children develop problem-solving skills. The toy is made from safe, non-toxic materials and is suitable for children aged 5 and up. It encourages creativity and logical thinking, making it an ideal gift for young tech enthusiasts.',
    image: image3,
    price: 29.99,
    manufacturer: 'TechToys Inc.',
    features: ['Interactive learning', 'Safe materials', 'Age 5+'],
    videoLink: 'https://youtu.be/N4WxbY2kCjk?si=3dEH3EduTyCRwNl-',
    themesCovered: ['Toons Time', 'Art Ninjas', 'Movers and Shakers'],
    components: ['Colorful Cartoon Characters (Sprites) and Background images (Backdrops)', 'Coding Blocks', 'ProGame Gaming Boards', 'Activity Book with step-by-step instructions', 'Explainer Video Tutorials', 'License key for Android App', 'Leaderboards', 'Unlimited FUN!'],
    requiredTechnology: 'Android Device',
    ageRange: 'Suitable for Ages: 7 – 99',
  },
  {
    id: 2,
    name: 'Coding Without Computers',
    description: 'A unique and engaging way for students to learn coding without the need for computers. This product uses tangible, physical blocks and a digital app to bring coding concepts to life.',
    image: image1,
    price: 99.99,
    manufacturer: 'RoboTech',
    features: ['DIY assembly', 'Programmable', 'STEM educational'],
    videoLink: 'https://youtu.be/N4WxbY2kCjk?si=3dEH3EduTyCRwNl-',
  },
  {
    id: 3,
    name: 'Coding with Computers',
    description: 'An interactive coding kit designed for learners who prefer to code using computers. This kit provides an immersive experience where students can learn programming concepts through a combination of physical and digital tools.',
    image: image2,
    price: 119.99,
    manufacturer: 'DigitalLearning Inc.',
    features: ['Computer-Based Learning', 'Interactive Software', 'Hands-On Coding', 'Comprehensive Learning'],
    components: ['Physical Coding Blocks', 'Interactive Coding Software', 'ProGame Gaming Boards', 'Activity Book with step-by-step instructions', 'Explainer Video Tutorials', 'License key for Software', 'Leaderboards', 'Unlimited FUN!'],
    requiredTechnology: 'Computer',
    ageRange: 'Suitable for Ages: 7 – 99',
  },
  {
    id: 4,
    name: 'Coding for the Visually Challenged',
    description: 'To truly build inclusive classrooms, we have developed Coding Kits specifically designed for the visually challenged. These kits enable visually impaired students to engage with coding concepts through tactile and auditory learning tools.',
    image: image4,
    price: 149.99,
    manufacturer: 'InclusiveTech',
    features: ['Inclusive Learning', 'Tactile Tools', 'Auditory Feedback', 'Engaging Activities'],
    components: ['Braille Coding Blocks', 'Auditory Guidance App', 'Tactile Gaming Board', 'Activity Book with step-by-step instructions', 'Support Materials'],
    requiredTechnology: 'Android Device',
    ageRange: 'Suitable for Ages: 7 – 99',
  },
  {
    id: 5,
    name: 'ProGame Hybrid Model (With and Without Computers)',
    description: 'The ProGame Hybrid Model combines the best of both worlds by offering a versatile coding learning experience that can be used with or without computers. Designed for ages 7 to 99, this model allows learners to engage with coding concepts through tangible physical blocks and a digital app, as well as interactive software for a comprehensive learning experience.',
    image: image5,
    price: 179.99,
    manufacturer: 'ProGame Innovations',
    features: ['Versatile Learning', 'Engaging and Interactive', 'No Prior Coding Knowledge Needed', 'Educational and Fun'],
    components: ['Colorful Cartoon Characters (Sprites) and Background images (Backdrops)', 'Coding Blocks', 'ProGame Gaming Boards', 'Activity Book with step-by-step instructions', 'Explainer Video Tutorials', 'License key for Android App and Interactive Software', 'Leaderboards', 'Unlimited FUN!'],
    requiredTechnology: 'Android Device, Windows or Mac OS',
    ageRange: 'Suitable for Ages: 7 – 99',
  },
  {
    id: 6,
    name: 'Artificial Intelligence',
    description: 'An advanced coding kit designed to introduce learners to the fascinating world of Artificial Intelligence (AI). This kit includes both physical and digital components to help learners understand and implement AI concepts through hands-on projects.',
    image: image6,
    price: 199.99,
    manufacturer: 'AI Learning Labs',
    features: ['AI Learning', 'Interactive Projects', 'Comprehensive Content', 'User-Friendly'],
    components: ['AI Coding Blocks', 'Interactive AI Software', 'ProGame Gaming Boards', 'Activity Book with step-by-step instructions', 'Explainer Video Tutorials', 'License key for AI Software', 'Leaderboards', 'Unlimited FUN!'],
    requiredTechnology: 'Computer',
    ageRange: 'Suitable for Ages: 10 – 99',
  },
  {
    id: 7,
    name: 'LifeSkills 360 App',
    description: 'The LifeSkills 360 App is a comprehensive digital platform designed to enhance essential life skills in young learners. The app offers interactive lessons and activities that cover a wide range of life skills, from communication and leadership to financial literacy and emotional intelligence.',
    image: image7,
    price: 49.99,
    manufacturer: 'LifeSkills Tech',
    features: ['Interactive Lessons', 'Wide Range of Topics', 'User-Friendly', 'Progress Tracking'],
    requiredTechnology: 'Android Device',
    ageRange: 'Suitable for Ages: 7 – 99',
  },
  {
    id: 8,
    name: 'LifeSkills 360 Print',
    description: 'The LifeSkills 360 Print is a printed workbook designed to complement the LifeSkills 360 App. It offers a range of activities and exercises that help learners develop essential life skills through offline, hands-on practice.',
    image: image8,
    price: 19.99,
    manufacturer: 'LifeSkills Tech',
    features: ['Hands-On Activities', 'Comprehensive Content', 'Easy to Use'],
    components: ['LifeSkills 360 Workbook', 'Activity Sheets', 'Instructional Guide'],
    ageRange: 'Suitable for Ages: 7 – 99',
  },
  // Add more products as needed
];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItemToCart } = useCart(); // Access addItemToCart function from CartContext
  
  const {login} =useLogin()

  // Find the selected product based on id parameter
  const product = sampleProducts.find((product) => product.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [openDialog, setOpenDialog] = useState(false);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
      setTotalPrice(product.price * value);
    }
  };

  const handleAddToCart = () => {
    if(!login){
      alert("login to continue")
      navigate("/signin")
      return
    }
    setOpenDialog(true);
  };

  const handleConfirmAddToCart = () => {
    setOpenDialog(false);
    const cartItem = {
      id: product.id,
      name: product.name,
      image: product.image, // Include the image property here
      quantity,
      totalPrice,
    };
    
    addItemToCart(cartItem); // Add selected product to cart
    navigate('/cart'); // Navigate to cart page
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Box sx={{ mt: 10, mx: 25 }}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12}>
          <Typography variant="h2" component="div" gutterBottom>
            {product.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="div">
            {product.description}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="div">
            <strong>Price:</strong> ${product.price.toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="div">
            <strong>Manufacturer:</strong> {product.manufacturer}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="div">
            <strong>Features:</strong>
            <ul>
              {Array.isArray(product.features) ? (
                product.features.map((feature, index) => <li key={index}>{feature}</li>)
              ) : (
                <li>{product.features}</li>
              )}
            </ul>
          </Typography>
        </Grid>
        {product.themesCovered && (
          <Grid item xs={12}>
            <Typography variant="body1" component="div">
              <strong>Themes Covered:</strong> {product.themesCovered.join(', ')}
            </Typography>
          </Grid>
        )}
        {product.components && (
          <Grid item xs={12}>
            <Typography variant="body1" component="div">
              <strong>Components:</strong>
              <ul>
                {product.components.map((component, index) => (
                  <li key={index}>{component}</li>
                ))}
              </ul>
            </Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddToCart}
            style={{ marginTop: '1rem' }}
          >
            Add to Cart
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="div">
            <strong>Watch Product Video:</strong>{' '}
            <Link href={product.videoLink} target="_blank" rel="noopener">
              Click here
            </Link>
          </Typography>
        </Grid>
      </Grid>

      {/* Dialog for quantity selection */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Select Quantity</DialogTitle>
        <DialogContent>
          <TextField
            type="number"
            label="Quantity"
            variant="outlined"
            value={quantity}
            onChange={handleQuantityChange}
            inputProps={{ min: 1 }}
          />
          <Typography variant="body1" component="div" style={{ marginTop: '1rem' }}>
            <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmAddToCart} color="primary" variant="contained">
            Add to Cart
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ProductDetails;
