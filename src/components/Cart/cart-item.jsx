// imports 
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { pid, productName, price, productImage } = props.data; 
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext); 

  //renders an item in the shopping cart with its image, name and price  
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: €{price}</p>
        <div className="countHandler">
        {/* remove product */}
          <button onClick={() => removeFromCart(pid)}> - </button>
          <input
            value={cartItems[pid]}
            // allows users to update item count
            onChange={(e) => updateCartItemCount(Number(e.target.value), pid)}
          />
          {/* add product*/}
          <button onClick={() => addToCart(pid)}> + </button> 
        </div>
      </div>
    </div>
  );
};