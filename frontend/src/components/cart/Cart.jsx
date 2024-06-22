import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Box, Typography, Grid, Card, CardContent, CardMedia, IconButton, Button, Modal, Backdrop, Fade } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeItemFromCart, decreaseQuantity, increaseQuantity } = useCart();
  const [open, setOpen] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const navigate = useNavigate();

  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  const handleDecreaseQuantity = (itemId) => {
    decreaseQuantity(itemId);
  };

  const handleIncreaseQuantity = (itemId) => {
    increaseQuantity(itemId);
  };

  const generateOrderID = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePayment = () => {
    const newOrderID = generateOrderID();
    const orderDetails = {
      id: newOrderID,
      status: 'Processing',
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image
      }))
    };
    setOrderData(orderDetails);
    setOpen(false);
    navigate(`/orderTracking/${newOrderID}`); // Navigate to order tracking page with new order ID
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
        <Button variant="contained" color="secondary" onClick={handleOpen}>
          Book Now
        </Button>
      </Box>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Dummy Payment Gateway
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              This is a dummy payment gateway. Implement your actual payment processing here.
            </Typography>
            <Box mt={3} textAlign="center">
              <Button variant="contained" color="primary" onClick={handlePayment}>
                Pay Now
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {orderData && (
        <Box mt={3} textAlign="center">
          <Typography variant="h5" gutterBottom>
            Order ID: {orderData.id}
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="center">
            <CheckCircleIcon color="primary" />
            <Typography variant="h6" gutterBottom>
              Payment Successful
            </Typography>
          </Box>
        </Box>
      )}
    </div>
  );
}

export default Cart;
