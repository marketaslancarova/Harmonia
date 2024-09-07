import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout.component";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ChakrasPage from "./pages/ChakrasPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="product/:id" element={<ProductDetailPage />} />
          <Route path="chakras" element={<ChakrasPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
