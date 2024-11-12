import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { movieData } from "./data";
function Movieslider2(props) {
  const { latestMovie } = props;
  return (
    <div className="container-fluid px-4 xl:px-10 2xl:px-[100px] pt-[50px] bg-[#000000]">
      <div>
        <div className="text-left pb-[15px] mb-[30px] border-b border-[#444444]">
          <h2 className="font-bold -mt-[5px] block relative text-[18px] md:text-[20px] lg:text-[24px] leading-[1] text-white">
            {" "}
            Latest Movie
          </h2>
        </div>
        <div className="upcoming-area relative">
          <Swiper spaceBetween={40} slidesPerView={"auto"}>
            {latestMovie.map((movie, index) => (
              <SwiperSlide key={index} className="w-[230px]">
                <div className="product-wrap relative overflow-hidden rounded-[10px] mb-30 group block">
                  <div className="product-img relative overflow-hidden block rounded-[10px] group-hover:scale-[1.2] transition-all duration-300">
                    <a
                      href={`/movie/${movie.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="w-full block"
                    >
                      <img
                        src={movie.img}
                        alt={movie.title}
                        className="default-img transition-all duration-500 w-full"
                      />
                    </a>
                  </div>
                  <div className="product-content flex flex-col my-4 text-center justify-center opacity-0 group-hover:opacity-100 absolute -bottom-[50px] group-hover:bottom-0 transition-all duration-500 z-10 w-full">
                    <h3>
                      <a
                        href={`/movie/${movie.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="text-[20px] font-semibold hover:text-yellow transition-all duration-300 text-white"
                      >
                        {movie.title}
                      </a>
                    </h3>
                    <div className="flex justify-center mt-[5px]">
                      <div className="quality flex items-center">
                        <span className="mr-1 font-medium text-white text-[15px]">
                          Quality:{" "}
                        </span>
                        <label className="text-white">HD</label>
                      </div>
                      <div>
                        <span className="text-white hidden">{`Date: ${movie.date}`}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mt-3">
                      <a
                        href={`/movie/${movie.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="text-[14px] inline-block rounded-[3px] transition-all duration-300 py-[6px] px-3 bg-[#f4181c] text-white font-medium hover:bg-white hover:text-[#333333] leading-[1]"
                      >
                        Watch Now
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Movieslider2;
