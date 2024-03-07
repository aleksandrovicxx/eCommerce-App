import { Link } from 'react-router-dom';
import React from 'react';
import { useCart } from '../../contexts/CartContext';
import "./allproduct.css"
import SingleProductPage from '../views/SingleProductPage';

const AllProducts = ({ product }) => {
  const { purchasedProducts, setPurchasedProducts } = useCart();

  return (
    <div className='mainDiv'>
      <Link to={`products/${product.id}`}>
        
      </Link>
    </div>
  );
}

export default AllProducts;
