import React from 'react';
import { useCart } from '../../contexts/CartContext';
import "./CartPage.css"

const CartPage = () => {
  const { purchasedProducts } = useCart();

  return (
    <div>
      <h2>Cart Items</h2>
      {purchasedProducts.length > 0 ? (
        <table>
            {purchasedProducts.map(product => (
            <tr>
                <td key={product.id} className='imgPurchasedProduct'>
                    <img src={product.image} alt={product.title}/>
                </td>
                <td className='detailsPurchasedProduct'>{product.title}</td>
                <td className='pricePurchasedProduct'>{product.price}</td>
            </tr>
          ))}
        </table>


        
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}

export default CartPage;
