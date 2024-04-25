//IMPORTS
import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/shop-context';
import { PRODUCTS } from '../product';
import './checkout.css';



export const Checkout = () => {

  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext); 

  const [paymentMethod, setPaymentMethod] = useState('credit card');
  
 
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  
  const handleCheckout = () => {
    checkout(); //checkout function from the context 

    
    alert("successful"); //message indicate order was successful.
  };

  return (
    <div>
      <h1>Checkout</h1>

      <div>
        <h2>Payment Information</h2>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="credit card"
              checked={paymentMethod === 'credit card'}
              onChange={handlePaymentMethodChange}
            />
            Credit Card
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={handlePaymentMethodChange}
            />
            PayPal
          </label>
        </div>
      </div>

      <div>
        <h2>Order Summary</h2>
        {/* display products */}
        <ul>
          {Object.entries(cartItems).map(([itemId, quantity]) => (
            <li key={itemId}>
              {PRODUCTS.find((product) => product.pid === Number(itemId)).productName} x {quantity}
            </li>
          ))}
        </ul>
        <p>Total: ${getTotalCartAmount().toFixed(2)}</p>
      </div>
     

      <button onClick={handleCheckout}>Place Order</button>

      <footer className="py-5 my-5 bg-danger">
      {/* footer. */}
        <h5>© 2023 SHOES4U, Inc. All Rights Reserved</h5>
      </footer>
    </div>
  );
};
