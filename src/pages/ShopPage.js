import React from "react";

import products from "../utils/products";

const ShopPage = () => {
  return (
    <div>
      <h1>Shop Page</h1>
      {products.map((product) => (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default ShopPage;
