import React from 'react';
import { useCart } from '../../context/CartContext';
import { Box, Typography, Grid, Card, CardContent, CardMedia, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function Cart() {
  const { cartItems, removeItemFromCart, decreaseQuantity, increaseQuantity } = useCart();

  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  const handleDecreaseQuantity = (itemId) => {
    decreaseQuantity(itemId);
  };

  const handleIncreaseQuantity = (itemId) => {
    increaseQuantity(itemId);
  };

  return (
    <div style={{ margin: '100px' }}>
      <Typography variant="h2" gutterBottom>
        Cart
      </Typography>
      <Grid container spacing={3}>
        {cartItems.map((item) => (
          <Grid item key={item.id} xs={12}>
            <Card sx={{ display: 'flex' }}>
              <CardMedia
                component="img"
                sx={{ width: 140 }}
                image={item.image}
                alt={item.name}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography component="div" variant="h5">
                  {item.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Quantity: {item.quantity}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Total Price: ${item.totalPrice.toFixed(2)}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <IconButton onClick={() => handleDecreaseQuantity(item.id)} color="primary">
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={() => handleIncreaseQuantity(item.id)} color="primary">
                    <AddIcon />
                  </IconButton>
                  <IconButton onClick={() => handleRemoveItem(item.id)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box mt={3} textAlign="center">
        <Button variant="contained" color="secondary" onClick={() => alert('Redirect to payment page or book now')}>
          Book Now
        </Button>
      </Box>
    </div>
  );
}

export default Cart;
