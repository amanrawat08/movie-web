import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // slick theme CSS
/* import AOS from "aos";
import "aos/dist/aos.css"; */
export default function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust to control how long each slide is displayed (milliseconds)
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  /*  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []); */
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="relative">
          <img src="/img/banner1.jpg" alt="Banner 2" />
          <aside className="absolute bottom-[18%]  left-[75px]">
            <h2 className="title sm:mb-5 mb-3 lg:mb-[30px] lg:text-[80px] sm:text-[50px] text-[36px] font-bold block leading-[1] animation-one text-white">
              Land And Sea
            </h2>
            <span className="subtitle text-white sm:text-[25px] text-[20px] font-bold sm:mb-0 mb-2">
              Romantic Movie I 1 hr 45 minutes{" "}
            </span>
            <div className="flex items-center mt-7 sm:mt-10 md:mt-14 animation-three">
              <a
                href="#"
                className="inline-block rounded-[3px] transition-all duration-300 sm:py-[15px] sm:px-[25px] px-[20px] py-[10px] bg-[#f4181c] text-white font-semibold hover:bg-white hover:text-[#333333] !text-[16px]"
              >
                Watch Now
              </a>
            </div>
          </aside>
        </div>
        <div className="relative">
          <img src="/img/banner2.jpg" alt="Banner 2" />
          <aside className="absolute bottom-[18%]  left-[75px]">
            <h2 className="title sm:mb-5 mb-3 lg:mb-[30px] lg:text-[80px] sm:text-[50px] text-[36px] font-bold block leading-[1] animation-one text-white">
              The Lost Girl
            </h2>
            <div className="subtitle text-white sm:text-[25px] text-[20px] font-bold sm:mb-0 mb-2">
              Fell Good I 4 minutes{" "}
            </div>
            <span className="flex items-center mt-7 sm:mt-10 md:mt-14 animation-three">
              <a
                href="#"
                className="inline-block rounded-[3px] transition-all duration-300 sm:py-[15px] sm:px-[25px] px-[20px] py-[10px] bg-[#f4181c] text-white font-semibold hover:bg-white hover:text-[#333333] !text-[16px]"
              >
                Watch Now
              </a>
            </span>
          </aside>
        </div>
      </Slider>
    </div>
  );
}
