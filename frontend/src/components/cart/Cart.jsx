import React,{useEffect,useState} from 'react';

import { useCart } from '../../context/CartContext';
import { Box, Typography, Grid, Card, CardContent, CardMedia, IconButton, Button, Modal, Backdrop, Fade } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseurl } from '../../setupEnv';
import {useLoader} from '../../context/LoaderContext'
import {useLogin} from '../../context/LoginContext'
import AuthService from '../../AuthService';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Cart() {
  const { cartItems, removeItemFromCart, decreaseQuantity, increaseQuantity ,setCartItems} = useCart();
  const {loaderdispatcher}=useLoader()
  const {login}=useLogin()
  const [open, setOpen] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const navigate = useNavigate();

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

  const generateOrderID = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePayment = async() => {

    try{

      console.log("hello1")
    const respo=await axios.post("http://localhost:5000/api/cart/updatecart",{cart:[]},{headers:{token:AuthService.gettoken()}})
    console.log(respo)
    console.log("hello2")
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
    const respo2=await axios.post("http://localhost:5000/api/cart/createorder",{orderdetails:orderDetails},{headers:{token:AuthService.gettoken()}})
    setOrderData(orderDetails);
    setCartItems([])
    setOpen(false);
    navigate(`/orderTracking/${newOrderID}`); // Navigate to order tracking page with new order ID
  }catch(err){
    console.log(err)
  }
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
              Payment Gateway
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Payment gateway.
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
            </Typography>
          </Box>
        </Box>
      )}
    </div>
  );
}

export default Cart;
