import React from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../productCard/ProductCard';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import image7 from '../../assets/image7.png';
import image8 from '../../assets/image8.png';

const sampleProducts = [
  {
    id: 1,
    name: 'Coding Toy',
    description: 'A fun and interactive coding toy for kids.',
    image: image1,
  },
  {
    id: 2,
    name: 'Coding Without Computers',
    description: 'Build and program your own robot.',
    image: image2,
  },
  {
    id: 3,
    name: 'Coding With Computers',
    description: 'Create 3D objects from your computer designs.',
    image: image3,
  },
  {
    id: 4,
    name: 'Coding for visually Challenged ',
    description: 'A drone with smart flying capabilities.',
    image: image4,
  },
  {
    id: 5,
    name: 'Hybrid Model',
    description: 'Experience virtual reality in a new way.',
    image: image5,
  },
  {
    id: 6,
    name: 'Artificial Intelligence',
    description: 'Keep track of your health and notifications.',
    image: image6,
  },
  {
    id: 7,
    name: 'Life Skills 360 App',
    description: 'Portable speaker with high-quality sound.',
    image: image7,
  },
  {
    id: 8,
    name: 'Life Skills 360 Print',
    description: 'Listen to music wirelessly with comfort.',
    image: image8,
  },
];

function Products() {
  const navigate = useNavigate();

  const handleViewMore = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <Grid container spacing={4} justifyContent="center">
      {sampleProducts.map((product) => (
        <Grid item key={product.id}>
          <ProductCard product={product} onViewMore={handleViewMore} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
