import React from "react";
import { RxDividerHorizontal } from "react-icons/rx";
import { MdBedroomParent, MdBathroom } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { BsFillHouseFill, BsFillTelephoneFill } from "react-icons/bs";
const Tour = () => {
  return (
    <div className="w-[1440px] h-[550px]">
      <div className="md:ml-[66px] md:w-[1200px] h-[460px] flex flex-row items-center justify-center">
        {/* left side  */}
        <div className="flex flex-col items-start w-[600px] h-[full]">
          <div className="text-left space-y-4">
            <div className="flex ">
              <RxDividerHorizontal color="#F59E0B" />
              <span className="text-[#F59E0B] font-medium md:text-[14px]">
                Our Recomendation
              </span>
            </div>
            <h1 className="text-[#1B1C57] font-semibold md:text-[32px] p-1">
              Lets tour and see our house!
            </h1>
            <span className="text=[#626687] font-normal md:text-[16px] p-1">
              Houses recommended by our partners that have been curated to
              become the home of your dreams!
            </span>
            <h3 className="text-[#1B1C57] md:text-[16px] font-semibold ">
              House Detail
            </h3>
          </div>
          <div class="w-full  grid gap-4 grid-cols-2 grid-rows-2 mt-4">
            <div className="flex items-center space-x-10">
              <MdBedroomParent color="#888B97" />
              <span className="text-medium text-[#3C4563] md:text-[16px]">
                4 Bedrooms
              </span>
            </div>
            <div className="flex items-center space-x-10">
              <MdBathroom color="#888B97" />
              <span className="text-medium text-[#3C4563] md:text-[16px]">
                2 Bathrooms
              </span>
            </div>
            <div className="flex items-center space-x-10">
              <AiFillCar color="#888B97" />
              <span className="text-medium text-[#3C4563] md:text-[16px]">
                1 Carport
              </span>
            </div>
            <div className="flex items-center space-x-10">
              <BsFillHouseFill color="#888B97" />
              <span className="text-medium text-[#3C4563] md:text-[16px]">
                2 Floors
              </span>
            </div>
          </div>
          <div className="border-t-4 border-[#F0F3FD] w-full mt-4 flex flex-row py-4 ">
            <div className="flex flex-row ">
              <div className="bg-rec3 rounded-full md:w-[50px] w-[390px] md:h-[50px] h-[30px] bg-no-repeat flex items-center justify-center"></div>
              <div className="flex flex-col items-start md:ml-4">
                <h1 className="text-[#0E1735] md:text-[18px] font-medium">
                  Dianne Russell
                </h1>
                <span className="text-[#888B97] md:text-[14px] font-medium">
                  {" "}
                  Manager Director
                </span>
              </div>
            </div>
            <div className="md:w-[163px] md:h-[48px] rounded-[32px] bg-[#10B981] flex flex-row items-center justify-around ml-20 ">
              <BsFillTelephoneFill color="white" />
              <button className="  text-white text-[14px] font-semibold">
                Contact Now
              </button>
            </div>
          </div>
        </div>
        {/* right side  */}
        <div className="md:w-[488px] md:h-[416px] flex justify-end items-start relative ml-2">
          <div className="bg-tour w-[90%] h-[90%] absolute"></div>
          <div className="absolute flex flex-row justify-end items-end gap-1 bottom-0 left-0">
            <div className="bg-tour1 md:w-[280px] md:h-[165px]"></div>
            <div className="bg-tour2 md:w-[90px] md:h-[80px]"></div>
            <div className="bg-tour3 md:w-[90px] md:h-[80px] "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
