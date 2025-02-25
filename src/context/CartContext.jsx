import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (item) => {
    setCart([...cart, item]);
    navigate('/cart');
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
}; 