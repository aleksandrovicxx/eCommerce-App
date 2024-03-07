import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [purchasedProducts, setPurchasedProducts] = useState([]);

  return (
    <CartContext.Provider value={{ purchasedProducts, setPurchasedProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};



