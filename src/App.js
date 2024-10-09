import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import ContactUs from "./Components/Contactus";
import Blog from "./Components/Blog";
import OurProduct from "./Components/OurProduct";
import Categorie from "./Components/Categorie";
import Dashboard from "./Components/Dashboard/Dashboard";
import Update from "./Components/Dashboard/Update";
import ProductContent from "./Components/Dashboard/ProductContent";
import ProductDetail from "./Components/ProductDetails";
const App = () => {
  return (
      <Routes>
        {/* Visitors Routes  */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/our-products" element={<OurProduct />}></Route>
        <Route path="/our-products/:categorie" element={<Categorie />}></Route>
        <Route path="/our-product/:id" element={<ProductDetail />}></Route>

        {/* //dashboard routes */}
        <Route path="/admin-dashboard" element={<Dashboard />}></Route>
        <Route path="/admin-dashboard/update-product/:id" element={<Update />}></Route>
        <Route path="/admin-dashboard/product-content/:id" element={<ProductContent />}></Route>
        
      </Routes>
  );
};

export default App;