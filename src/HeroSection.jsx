import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HeroSection = () => {
  // Hardcoded movie data
  const movieData = [
    {
      title: "Never Stop Looking",
      img: "https://streamo.vuejstemplate.com/images/slider/slider-hm4-4.png",
      price: "450Tk",
      originalPrice: "500Tk",
    },
    {
      title: "The Walk",
      img: "https://streamo.vuejstemplate.com/images/slider/slider-hm4-3.png",
      price: "270Tk",
      originalPrice: "300Tk",
    },
    /*   {
      title: "The Lost Girl",
      img: "/images/slider/slider-hm4-5.png",
      price: "300Tk",
      originalPrice: "350Tk",
    },
    {
      title: "Silkovettes In The Attic",
      img: "/images/slider/slider-hm4-6.png",
      price: "500Tk",
      originalPrice: "550Tk",
    },
    {
      title: "Two Paglo",
      img: "/images/slider/slider-hm4-7.png",
      price: "200Tk",
      originalPrice: "250Tk",
    }, */
  ];

  return (
    <div className="hero-slider group relative mt-16">
      <div className="overflow-hidden">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: ".hero-slider_arrows__prevbtn",
            nextEl: ".hero-slider_arrows__nextbtn",
          }}
        >
          {movieData.map((movie, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex items-center tvseries bg-no-repeat bg-cover 2xl:bg-center !h-[380px] md:!h-[450px] lg:!h-[500px] xl:!h-[450px] before:content-[''] before:h-full before:w-full before:absolute before:top-0 before:left-0 bg-[#000]"
                style={{ backgroundImage: `url(${movie.img})` }}
              >
                <div className="slider-content ml-4 pr-4 xl:ml-10 2xl:ml-[100px] z-9 relative">
                  <h1 className="title sm:mb-5 mb-3 lg:mb-[30px] lg:text-[80px] sm:text-[50px] text-[36px] font-bold block leading-[1] animation-one text-white">
                    {movie.title}
                  </h1>
                  <div className="flex items-center animation-two">
                    <span className="subtitle text-red text-[25px] lg:text-[35px] font-bold">
                      {movie.price}
                    </span>
                    <span className="ml-5 subtitle text-white text-[25px] lg:text-[35px] font-bold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-full before:h-[2px] before:bg-white">
                      {movie.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center mt-7 sm:mt-10 md:mt-14 animation-three">
                    <a
                      href={`/movie/${movie.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="inline-block rounded-[3px] transition-all duration-300 sm:py-[15px] sm:px-[25px] px-[20px] py-[10px] bg-[#f4181c] text-white font-semibold hover:bg-white hover:text-[#333333] !text-[16px]"
                    >
                      Watch Now
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hero-slider_arrows flex justify-between w-full absolute top-1/2 -translate-y-1/2 z-99">
          <div
            className="hero-slider_arrows__prevbtn swipper-arrow text-red hover:text-white transition-all duration-300 text-[60px] opacity-0 group-hover:opacity-100 group-hover:ml-5 ml-0"
            role="button"
            aria-label="Previous slide"
          >
            <i className="zmdi zmdi-chevron-left bold-important"></i>
          </div>
          <div
            className="hero-slider_arrows__nextbtn swipper-arrow text-red hover:text-white transition-all duration-300 text-[60px] opacity-0 group-hover:opacity-100 group-hover:mr-5 mr-0"
            role="button"
            aria-label="Next slide"
          >
            <i className="zmdi zmdi-chevron-right bold-important"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
