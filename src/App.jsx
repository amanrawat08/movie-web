import { useState } from "react";
import Header from "./assets/header";
import Banner from "./banner";
import Movieslider2 from "./Movieslider2";
import { movieData } from "./data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./HeroSection";
import StaticBanner from "./StaticBanner";
import Footer from "./assets/Footer";
import Home from "./Home";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
