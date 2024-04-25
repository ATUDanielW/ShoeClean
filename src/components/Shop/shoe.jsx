import React from "react";
import { PRODUCTS } from "../../product";
import { Product } from "./product";

import "./shoe.css";

export const Shoe = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1> Shoe Cleaning</h1>
      </div>

      {/* display all products details */}
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <footer class="py-5 my-5 bg-danger">
      <h5>© 2023 SHOE DOCTOR, Inc. All Rights Reserved</h5>
      </footer>
    </div>
  );
};