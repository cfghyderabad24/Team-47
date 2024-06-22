import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Paper } from '@mui/material';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const OrderTracking = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating delay

        const exampleOrder = {
          id: orderId,
          status: 'Processing',
          items: [
            { id: '1', name: 'Product A', quantity: 2, price: 50.00, image: 'https://example.com/productA.jpg' },
            { id: '2', name: 'Product B', quantity: 1, price: 30.00, image: 'https://example.com/productB.jpg' }
          ],
          tracking: [
            { status: 'Processing', description: 'Order placed', timestamp: '2024-06-24T12:00:00Z' },
            { status: 'Processing', description: 'Packing', timestamp: '2024-06-24T13:00:00Z' },
            { status: 'Dispatched', description: 'Shipped', timestamp: '2024-06-24T14:00:00Z' },
            { status: 'Delivered', description: 'Delivered', timestamp: '2024-06-25T10:00:00Z' }
          ]
        };

        setOrder(exampleOrder);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching order data:', error);
        setLoading(false);
      }
    };

    fetchOrderData();
  }, [orderId]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIndex(prevIndex => {
        if (prevIndex < order.tracking.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 2000); // Adjust the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [order]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Processing':
        return <HourglassEmptyIcon color="primary" />;
      case 'Dispatched':
        return <LocalShippingIcon color="primary" />;
      case 'Delivered':
        return <CheckCircleIcon color="primary" />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <Typography variant="h2" gutterBottom>
        Loading...
      </Typography>
    );
  }

  if (!order) {
    return (
      <Typography variant="h2" gutterBottom>
        Order not found
      </Typography>
    );
  }

  return (
    <Box px={3} py={5}>
      <Typography variant="h4" gutterBottom>
        Order Tracking - Order ID: {order.id}
      </Typography>
      <Box mb={4}>
        <Grid container spacing={3}>
          {order.items.map((item) => (
            <Grid item key={item.id} xs={12} sm={6}>
              <Card sx={{ display: 'flex' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 140 }}
                  image={item.image}
                  alt={item.name}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="div" variant="h6">
                    {item.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Quantity: {item.quantity}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Price: ${item.price.toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Paper elevation={3} variant="outlined">
        <Box p={3}>
          <Typography variant="h5" gutterBottom>
            Tracking Information
          </Typography>
          <Box mb={2}>
            <Box display="flex" alignItems="center">
              {getStatusIcon(order.tracking[currentStepIndex].status)}
              <Typography variant="body1" color="textSecondary" sx={{ ml: 1 }}>
                {order.tracking[currentStepIndex].description}
              </Typography>
            </Box>
            <Typography variant="caption" color="textSecondary">
              {new Date(order.tracking[currentStepIndex].timestamp).toLocaleString()}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default OrderTracking;
