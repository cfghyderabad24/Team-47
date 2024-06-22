import React, { createContext, useContext, useState,useEffect } from 'react';

// Create CartContext
const CartContext = createContext();

// Custom hook to use CartContext
export function useCart() {
  return useContext(CartContext);
}

// CartContextProvider component
export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  useEffect(()=>{
    console.log(cartItems)
  },[cartItems])

  // Function to add item to cart
  // Function to add item to cart
const addItemToCart = (item) => {
    const newItem = {
      ...item,
      quantity: 1,
      totalPrice: item.totalPrice ? item.totalPrice : 0, // Ensure item.price is defined
    };
    setCartItems((prevItems) => [...prevItems, newItem]);
  };
  

  // Function to remove item from cart
  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Function to decrease quantity of an item in cart
const decreaseQuantity = (itemId) => {
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.totalPrice - item.totalPrice/(item.quantity),
            }
          : item
      )
    );
  };
  
  // Function to increase quantity of an item in cart
  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + item.totalPrice/(item.quantity),
            }
          : item
      )
    );
  };
  
  

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, decreaseQuantity, increaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
