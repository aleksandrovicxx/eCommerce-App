import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { FaTimes } from 'react-icons/fa';
import "./CartPage.css";

const CartPage = () => {
  const { purchasedProducts, deleteProduct, deleteAllProducts } = useCart();

  const removeSingleProduct = (productId) => {
    deleteProduct(productId);
  };

  const removeAllProducts = () => {
    deleteAllProducts();
  };

  return (
    <div>
      <h2>Cart Items</h2>
      <div className='divForDeleteBtn'>
        <button className='deleteBtn' onClick={removeAllProducts}>Delete all products</button>
      </div>
      {purchasedProducts.length > 0 ? (
        <table>
          <tbody>
            {purchasedProducts.map(product => (
              <tr key={product.id}>
                <td className='imgPurchasedProduct'>
                  <img src={product.image} alt={product.title} />
                </td>
                <td className='detailsPurchasedProduct'>{product.title}</td>
                <td className='pricePurchasedProduct'>${product.price}</td>
                <td>
                  <FaTimes className='x' onClick={() => removeSingleProduct(product.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default CartPage;