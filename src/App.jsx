import React from "react";
import { Routes, Route } from "react-router-dom";
import Homes from "./pages/Homes";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/Contact";
import Work from "./pages/Work";
import ScrollToTop from "./commponent/ScrollToTop";

const App = () => {
  return (
    <div>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
};

export default App;