import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  
  const { pid, productName, price, productImage } = props.data;
   // Get the addToCart and cartItems 
  const { addToCart, cartItems } = useContext(ShopContext);

  //count of the current product in the cart
  const cartItemCount = cartItems[pid];

  return (
    <div className="product">
      {/* Display the product image, product name and price */}
      <img src={productImage} 
      style={{ width: '100%', height: 'auto', borderRadius: '10px' }}/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> €{price}</p>
      </div>
      {/* Add to Cart button */}
      <button className="addToCartBttn" onClick={() => addToCart(pid)}>
        Book Now {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      
    </div>
  );
};