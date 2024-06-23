import React,{useEffect} from 'react';
import { useCart } from '../../context/CartContext';
import { Box, Typography, Grid, Card, CardContent, CardMedia, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { baseurl } from '../../setupEnv';
import {useLoader} from '../../context/LoaderContext'
import {useLogin} from '../../context/LoginContext'
import AuthService from '../../AuthService';
function Cart() {
  const { cartItems, removeItemFromCart, decreaseQuantity, increaseQuantity ,setCartItems} = useCart();
  const {loaderdispatcher}=useLoader()
  const {login}=useLogin()

  useEffect(()=>{
    const run =async()=>{
    try{
      loaderdispatcher({type:"FETCH_STARTED",payload:"fetching started"})
      const respo =await axios.post(`${baseurl}/api/cart/getcart`,{cart:cartItems},{headers:{token:AuthService.gettoken()}})
      loaderdispatcher({type:"FETCH_SUCCESS",payload:"fetching completed"})
      setCartItems(respo.data.cart)
    }catch(err){
      console.log(err)
      loaderdispatcher({type:"FETCH_ERROR",payload:"fetching error"})
    }
  }
    run();
  },[login])

  useEffect(()=>{
    const run =async()=>{
    try{
      const respo=await axios.post('http://localhost:5000/api/cart/updatecart',{cart:cartItems},{headers:{token:AuthService.gettoken()}})
    }catch(err){
      console.log(err)
    }
  }
  run();
  },[cartItems])

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
