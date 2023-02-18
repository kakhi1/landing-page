import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { SlArrowRight } from "react-icons/sl";
export const Home = () => {
  return (
    <div className="relative flex flex-row w-full h-[720px]">
      <div className="bg-white h-full w-[50%] flex flex-col justify-end md:ml-[66px]">
        <div className="md:w-[496px] md:h-[35%]  text-left">
          <h1 className="text-[40px] font-Lexend text-[#1B1C57] font-semibold capitalize">
            find the place to live{" "}
            <div className="font-outline-2 text-transparent">your dreams</div>{" "}
            easily here
          </h1>
          <span className="text-[16px] font-Lexend text-[#626687] font-light">
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </span>
        </div>
        <div className="md:w-[496px] md:h-[35%]">
          <div className="w-full md:h-[56px] rounded-full border-2 mt-4 flex items-center justify-between">
            <div className="flex flex-row items-center">
              <HiLocationMarker color="#F59E0B" size="24px" className="ml-5" />
              <span className="text-[#888B97] text-[14px] ml-5">
                Search for the location you want!
              </span>
            </div>
            <div className="rounded-full h-full w-[109px] bg-[#10B981] flex items-center justify-center">
              <span className="text-white font-semibold text-[14px]  ">
                {" "}
                Search
              </span>
              <SlArrowRight color="white" />
            </div>
          </div>
          <div className="mt-7">
            <span className="text-[16px] text-[#888B97] flex justify-start">
              Our Partnership{" "}
            </span>
            <div className="flex flex-row h-[64px] items-center gap-5 bg-no-repeat ">
              <div className="bg-hero2 bg-no-repeat w-[20%] h-full"></div>
              <div className="bg-hero3 bg-no-repeat w-[20%] h-full"></div>
              <div className="bg-hero4 bg-no-repeat w-[20%] h-full"></div>
              <div className="bg-hero1 bg-no-repeat w-[20%] h-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-hero bg-no-repeat h-[720px] w-[50%]"></div>
      {/* navbar */}
      <div className="absolute md:ml-[66px]  top-[100px] md:h-[45px] w-full z-10">
        <div className="h-[45px] flex">
          <div className="w-[50%] h-[36px] flex items-center ">
            <div className="w-[36px] h-[36px]">
              <div className="w-full h-[36px] bg-[#F59E0B] rounded-[4px] flex items-end  rounded-br-[24px]">
                <div className="ml-[4px] w-[32px] h-[32px] bg-[#4BE4C9] rounded-[4px] rounded-br-[24px]"></div>
              </div>
            </div>
            <div className="w-[67px] h-[20]">
              <p className="text[16px] font-bold text-[#1B1C57] ml-[24px]">
                Hounter
              </p>
            </div>
          </div>
          <div className="h-full w-[50%] flex flex-row gap-10 items-center ">
            <div>
              <ul className="flex gap-4 text-white h-[34px]">
                <li>
                  <button className="flex md:w-[96px] items-center text-[14px] justify-center border-2 border-white-500/100 rounded-[40px]">
                    About Us
                  </button>
                </li>
                <li>
                  <button className="flex md:w-[96px] items-center justify-center border-2 border-white-500/100 rounded-[40px]">
                    {" "}
                    Article
                  </button>
                </li>
                <li>
                  <button className="flex md:w-[96px] items-center justify-center border-2 border-white-500/100 rounded-[40px]">
                    Property{" "}
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <button className=" w-[107px] h-[46px] bg-green-100 text-green-700 font-bold rounded-[32px]">
                Sign Up!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
