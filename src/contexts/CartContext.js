import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [purchasedProducts, setPurchasedProducts] = useState([]);

  const deleteProduct = (productId) => {
    setPurchasedProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  };

  const deleteAllProducts = () => {
    setPurchasedProducts([]);
  };

  return (
    <CartContext.Provider value={{ purchasedProducts, setPurchasedProducts, deleteProduct, deleteAllProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};