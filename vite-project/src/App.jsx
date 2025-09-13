import React from "react";
import "./App.css";

import Analytics from "./Components/Analytics";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import Testimonial from "./Components/Testimonial";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Notifyme from "./Components/Notifyme";
import BacktoTop from "./Components/BacktoTop";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Notifyme />
      <Products />
      <Testimonial />
      <Footer />
      <BacktoTop />
    </div>
  );
}

export default App;
