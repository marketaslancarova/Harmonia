import React from "react";

import products from "../utils/products";

const ShopPage = () => {
  return (
    <div>
      <h1>Shop Page</h1>
      {products.map((product) => (
        <>{product}</>
      ))}
    </div>
  );
};

export default ShopPage;
