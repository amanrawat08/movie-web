import React from "react";
import Header from "./assets/header";
import Banner from "./banner";
import Movieslider2 from "./Movieslider2";
import { movieData } from "./data";
import HeroSection from "./HeroSection";
import StaticBanner from "./StaticBanner";
import Footer from "./assets/Footer";
function Home() {
  const latestMovie = movieData.filter((movie) => movie.category === "latest");
  const horrorMovie = movieData.filter((movie) => movie.category === "horror");
  const familyMovie = movieData.filter(
    (movie) => movie.category === "WatchWithFamily"
  );
  return (
    <>
      <Banner />
      <Movieslider2 latestMovie={latestMovie} />
      <Movieslider2 latestMovie={horrorMovie} />
      <HeroSection />
      <Movieslider2 latestMovie={familyMovie} />
      <Movieslider2 latestMovie={latestMovie} />
      <Movieslider2 latestMovie={horrorMovie} />
      <StaticBanner />
    </>
  );
}

export default Home;
