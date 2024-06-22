import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: '1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 600,
}));

const StyledCardMedia = styled(CardMedia)({
  height: 500,
  width: '100%',
  objectFit: 'cover',
});

const StyledButton = styled(Button)({
  marginTop: '1rem',
  alignSelf: 'center',
});

const ProductCard = ({ product, onViewMore }) => {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        alt={product.name}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={() => onViewMore(product.id)}
        >
          View More
        </StyledButton>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
