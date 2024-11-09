import React from "react";
import Slider from "react-slick";
function Movieslider() {
  const settings = {
    infinite: true, // Enables infinite loop
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Speed of autoplay (in ms)
    arrows: true, // Show navigation arrows
    dots: true, // Show pagination dots
  };
  return (
    <div>
      <div>
        <h2>Latest Movies</h2>
        <div className="movie-slider">
          <Slider {...settings}>
            {/* First Slide */}
            <div className="relative group">
              <div className="product-img relative overflow-hidden block rounded-[10px]">
                <a
                  href="#"
                  className="overflow-hidden w-full block group-hover:scale-[1.2] transition-all duration-300"
                >
                  <img
                    src="https://streamo.vuejstemplate.com/images/product/movie-01.jpg"
                    alt="Product Image"
                    className="default-img transition-all duration-500 w-full"
                  />
                </a>
              </div>
              <div className="product-content absolute bottom-[40px] left-0 right-0 w-full text-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 transform translate-y-full group-hover:translate-y-0">
                <div>
                  <a
                    href="#"
                    className="text-[20px] font-semibold hover:text-yellow transition-all duration-300 text-white"
                  >
                    Movie Title
                  </a>
                </div>
                <div className="flex justify-center mt-[5px]">
                  <div className="quality flex items-center">
                    <span className="mr-1 font-medium text-white text-[15px]">
                      Quality:{" "}
                    </span>
                    <label className="text-white">HD</label>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-3">
                  <a
                    href="/movie/the-lost-girl"
                    className="text-[14px] inline-block rounded-[3px] transition-all duration-300 py-[6px] px-3 bg-[#f4181c] text-white font-medium hover:bg-white hover:text-[#333333] leading-[1]"
                  >
                    Watch Now
                  </a>
                </div>
              </div>
            </div>

            {/* Second Slide */}
            <div className="relative group">
              <div className="product-img relative overflow-hidden block rounded-[10px]">
                <a
                  href="#"
                  className="overflow-hidden w-full block group-hover:scale-[1.2] transition-all duration-300"
                >
                  <img
                    src="https://streamo.vuejstemplate.com/images/product/movie-02.jpg"
                    alt="Product Image"
                    className="default-img transition-all duration-500 w-full"
                  />
                </a>
              </div>
              <div className="product-content absolute bottom-[40px] left-0 right-0 w-full text-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 transform translate-y-full group-hover:translate-y-0">
                <div>
                  <a
                    href="#"
                    className="text-[20px] font-semibold hover:text-yellow transition-all duration-300 text-white"
                  >
                    Movie Title 2
                  </a>
                </div>
                <div className="flex justify-center mt-[5px]">
                  <div className="quality flex items-center">
                    <span className="mr-1 font-medium text-white text-[15px]">
                      Quality:{" "}
                    </span>
                    <label className="text-white">HD</label>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-3">
                  <a
                    href="/movie/the-lost-girl"
                    className="text-[14px] inline-block rounded-[3px] transition-all duration-300 py-[6px] px-3 bg-[#f4181c] text-white font-medium hover:bg-white hover:text-[#333333] leading-[1]"
                  >
                    Watch Now
                  </a>
                </div>
              </div>
            </div>

            {/* Third Slide */}
            <div className="relative group">
              <div className="product-img relative overflow-hidden block rounded-[10px]">
                <a
                  href="#"
                  className="overflow-hidden w-full block group-hover:scale-[1.2] transition-all duration-300"
                >
                  <img
                    src="https://streamo.vuejstemplate.com/images/product/movie-03.jpg"
                    alt="Product Image"
                    className="default-img transition-all duration-500 w-full"
                  />
                </a>
              </div>
              <div className="product-content absolute bottom-[40px] left-0 right-0 w-full text-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 transform translate-y-full group-hover:translate-y-0">
                <div>
                  <a
                    href="#"
                    className="text-[20px] font-semibold hover:text-yellow transition-all duration-300 text-white"
                  >
                    Movie Title 3
                  </a>
                </div>
                <div className="flex justify-center mt-[5px]">
                  <div className="quality flex items-center">
                    <span className="mr-1 font-medium text-white text-[15px]">
                      Quality:{" "}
                    </span>
                    <label className="text-white">HD</label>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-3">
                  <a
                    href="/movie/the-lost-girl"
                    className="text-[14px] inline-block rounded-[3px] transition-all duration-300 py-[6px] px-3 bg-[#f4181c] text-white font-medium hover:bg-white hover:text-[#333333] leading-[1]"
                  >
                    Watch Now
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Movieslider;
