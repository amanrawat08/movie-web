import React from "react";
import logo from "../img/logo.png";
import profile from "../img/profile.jpg";
function Header() {
  return (
    <div className="flex flex-row justify-between bg-black pl-[50px] pr-[50px] items-center">
      <div className="flex align-middle">
        <a href="#" className="flex items-center">
          <img src={logo} alt="logo.png" />
        </a>

        <div className="ml-[50px]">
          <ul className="flex items-center ">
            <li className="pt-[35px] pb-[35px] mr-[2.25rem] text-sm ">
              <a href="" className="text-white  hover:text-white">
                Home
              </a>
            </li>
            <li className="pt-[35px] pb-[35px] mr-[2.25rem] text-sm ">
              <a href="" className="text-white hover:text-white">
                Series
              </a>
            </li>
            <li className="pt-[35px] pb-[35px] mr-[2.25rem] text-sm ">
              <a href="" className="text-white hover:text-white">
                Movies
              </a>
            </li>
            <li className="pt-[35px] pb-[35px] mr-[2.25rem] text-sm ">
              <a href="" className="text-white hover:text-white">
                Pages
              </a>
            </li>
            <li className="pt-[35px] pb-[35px] mr-[2.25rem] text-sm ">
              <a href="" className="text-white hover:text-white">
                Pricing
              </a>
            </li>
            <li className="pt-[35px] pb-[35px] mr-[2.25rem] text-sm ">
              <a href="" className="text-white hover:text-white">
                Contract
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex align-middle ">
        <div className="text-white w-8 h-8 rounded-[50%] border-1 border-white text-center p-[13px] justify-center items-center relative flex border border-white-600">
          <i className="fas fa-search"></i>
        </div>
        <div className="sm:ml-[15px] sm:pl-[15px] ml-[10px] pl-[10px] relative before:content-[''] before:bg-white before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-5 before:w-[1px] text-white w-8 h-8 rounded-[50%] border-1 border-white text-center p-[13px] justify-center items-center relative flex border border-white-600 sm:ml-[15px] sm:pl-[15px] ml-[10px] pl-[10px] relative before:content-[''] before:bg-white before:absolute before:left-0 before:top-1/2  before:-translate-y-1/2 before:transform before:h-5 before:w-[1px]">
          <div className="">
            <i class="fas fa-bell"></i>
          </div>
        </div>
        <div className="ml-[10px] sm:ml-[15px] pl-[10px] sm:pl-[15px] relative before:content-[''] before:bg-white before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-5 before:w-[1px] w-[49px]">
          <div>
            <div className="min-w-[32px] min-h-[32px] leading-[32px] w-[11%]  rounded-full overflow-hidden h-[2px]">
              <img src={profile} alt="profile" />
            </div>
          </div>
        </div>
        <div className="ml-[10px] sm:ml-[15px]">
          <a
            href="#"
            className="text-[14px] inline-block rounded-[3px] transition-all duration-300 py-[5px] px-[15px] bg-[#f4181c] text-white font-medium hover:bg-white hover:text-[#333333]"
          >
            Subcribe Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
