// App.jsx
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Menu from './sections/Menu';
import Hero from './sections/Hero';
import Style from './sections/Style';
import NewArrival from './sections/NewArrival';
import Redifine from './sections/Redifine';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import WishList from './pages/WishList';
import AllListing from "./pages/AllListing";
import Order from './pages/Order';
import Model from "./pages/Model";

function HomePage() {
  return (
    <>
      <Hero />
      <Style />
      <NewArrival />
      <Redifine />
      <FAQ />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Menu />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/orders" element={<Order />} />
        <Route path = '/listing' element ={<AllListing/> }  />
        <Route path = '/listing/:productId' element ={<Model/> }  />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;