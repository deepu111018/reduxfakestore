import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./container/Header";
import ProductListing from "./container/ProductListing";
import "./App.css";
import ProductDetails from "./container/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
