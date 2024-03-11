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
        <div>
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
          <form>
            <fieldset onSubmit={}>
              <h3>Personal info</h3>
              <label htmlFor="Name">Name:</label>
              <input type="text" />
              <label htmlFor="Name">Surname:</label>
              <input type="text" /> <br />
              <label htmlFor="Mobile">Mobile:</label>
              <input type="number"/>
              <h3>Address</h3>
              <label htmlFor="Country">Country:</label>
              <input type="text"/> <br />
              <label htmlFor="City">City:</label>
              <input type="text"/> <br />
              <label htmlFor="Country">Country:</label>
              <input type="text"/> <br />
              <label htmlFor="Number">Number:</label>
              <input type="text"/> <br />

                <button></button>
            </fieldset>
          </form>
        </div>
      ) : (
        <div>
          <p>Your cart is empty</p>
          <button onClick={() =>{ window.open('/products')}}>Back on products</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;