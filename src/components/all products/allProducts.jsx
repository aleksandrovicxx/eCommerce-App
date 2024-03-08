import { Link } from 'react-router-dom';
import React from 'react';
import { useCart } from '../../contexts/CartContext';
import "./allproduct.css"
import SingleProductPage from '../views/SingleProductPage';

const AllProducts = ({ product }) => {
  const { purchasedProducts, setPurchasedProducts } = useCart();

  const handleBuyClick = (singleProduct) => {
    setPurchasedProducts(prevProducts => [...prevProducts, singleProduct]);
  };

  const handleBoxClick = (singleProduct) =>{
    <SingleProductPage/>
  }
  return (
    <div className='mainDiv'>
      <Link to={`products/${product.id}`}>
      {product.map(singleProduct => (
        <div key={singleProduct.id} className="divForBoxes">
          <table className='table' onClick={() => handleBoxClick(singleProduct)}> 
            <tbody>
              <tr>
                <td colSpan="2"><img src={singleProduct.image} alt={singleProduct.title} className='imgProduct'/></td>
              </tr>
              <tr>
                <td colSpan="2"><strong>{singleProduct.title}</strong></td>
              </tr>
              <tr>
                <td colSpan="2">{singleProduct.price}$</td>
              </tr>
              <tr>
                <td>
                  <button className='btnBuy' onClick={() => handleBuyClick(singleProduct)}>Buy</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      </Link>
    </div>
  );
}

export default AllProducts;
