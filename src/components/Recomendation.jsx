import React from "react";
import { RxDividerHorizontal } from "react-icons/rx";
import { AiFillHome, AiFillFire } from "react-icons/ai";
import { MdVilla, MdOutlineApartment } from "react-icons/md";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaWallet } from "react-icons/fa";

const Recomendation = () => {
  return (
    <div className="max-w-[1440px] h-[800px]">
      {/* header */}
      <div className="md:ml-[66px] md:w-[1240px] flex flex-row justify-between">
        <div className="md:h-[70px] flex flex-col items-start">
          <div className="flex ">
            <RxDividerHorizontal color="#F59E0B" />
            <span className="text-[#F59E0B] font-medium md:text-[14px]">
              Our Recomendation
            </span>
          </div>
          <div className="flex items-start">
            <h1 className="text-[#1B1C57] md:text-[32px] font-semibold">
              Featured House
            </h1>
          </div>
        </div>
        <div className="md:h-[70px] flex items-end ">
          <div className="md:h-[52px] flex flex-row items-center">
            <div className="flex flex-row items-center rounded-[32px] bg-[#D1FAE5]">
              <AiFillHome color="#10B981" size={30} className="ml-7" />
              <button className="md:w-[136px] md:h-[52px] text=[#10B981] md:text[18px] font-medium">
                House
              </button>
            </div>
            <div className="flex flex-row items-center rounded-[32px] bg-transparent border-2 md:ml-5">
              <MdVilla color="#888B97" size={30} className="ml-7" />
              <button className="md:w-[119px] md:h-[52px] text=[#888B97]">
                Villa
              </button>
            </div>
            <div className="flex flex-row items-center rounded-[32px] bg-transparent border-2 ml-5">
              <MdOutlineApartment color="#888B97" size={30} className="ml-7" />
              <button className="md:w-[136px] md:h-[52px] text=[#888B97]">
                Apartment{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="h-[70px] flex items-end justify-end">
          <div className="h-[52px] flex flex-row">
            <div className="md:w-[52px] h-[52px] rounded-full bg-[#E0E3EB] hover:bg-[#10B981] flex items-center justify-center">
              <SlArrowLeft />
            </div>
            <div className="md:w-[52px] h-[52px] rounded-full bg-[#E0E3EB] hover:bg-[#10B981] flex items-center justify-center">
              <SlArrowRight />
            </div>
          </div>
        </div>
      </div>
      {/* body */}
      <div className="md:w-[1240px] md:ml-[66px] mt-[50px] flex flex-row gap-6">
        <div className="w-[340px] h-[552px] ">
          <div className="w-full h-[382px] bg-house1 rounded-[32px] flex items-end justify-start">
            <div className="w-[112px] h-[34px] rounded-[32px] bg-[#FEE2E2] mb-5 ml-5 flex items-center justify-center md:gap-2">
              <AiFillFire color="#EF4444" className="mb-1" />
              <h1 className="text-[#EF4444] text-[14px] flex items-end justify-center">
                Popular
              </h1>
            </div>
          </div>
          <h1 className="text-[#0E1735] md:text-[24px] font-medium md:mt-6 flex items-start">
            Roselands House
          </h1>
          <span className="text-[#3C4563] md:text-[20px] font-medium flex items-start">
            $ 35.000.000
          </span>
          <div className="flex flex-row md:mt-8">
            <div className="bg-rec3 rounded-full md:w-[50px] w-[390px] md:h-[50px] h-[30px] bg-no-repeat flex items-center justify-center"></div>
            <div className="flex flex-col items-start md:ml-4">
              <h1 className="text-[#0E1735] md:text-[18px] font-medium">
                Dianne Russell
              </h1>
              <span className="text-[#888B97] md:text-[14px] font-medium">
                {" "}
                Manchester, Kentucky
              </span>
            </div>
          </div>
        </div>
        <div className="w-[340px] h-[552px]">
          <div className="w-full h-[382px] bg-house2 rounded-[32px] flex flex-col items-start justify-end">
            <div className="w-[112px] h-[34px] rounded-[32px] border-black border-2 bg-[#DBEAFE] mb-5 ml-5 flex md:gap-2 justify-center items-center">
              <AiFillHome color="#1D4ED8" className="mb-1" />
              <h1 className="text-[#1D4ED8] text-[14px] flex items-end justify-center">
                New house
              </h1>
            </div>
          </div>
          <h1 className="text-[#0E1735] md:text-[24px] font-medium md:mt-6 flex items-start">
            Woodlandside
          </h1>
          <span className="text-[#3C4563] md:text-[20px] font-medium flex items-start">
            $ 20.000.000
          </span>
          <div className="flex flex-row md:mt-8">
            <div className="bg-robert rounded-full md:w-[50px] w-[390px] md:h-[50px] h-[30px] bg-no-repeat flex items-center justify-center"></div>
            <div className="flex flex-col items-start md:ml-4">
              <h1 className="text-[#0E1735] md:text-[18px] font-medium">
                Robert Fox
              </h1>
              <span className="text-[#888B97] md:text-[14px] font-medium">
                {" "}
                Dr. San Jose, South Dakota
              </span>
            </div>
          </div>
        </div>
        <div className="w-[340px] h-[552px]">
          <div className="w-full h-[382px] bg-house3 rounded-[32px] flex  flex-col items-start justify-end">
            <div className="w-[112px] h-[34px] rounded-[32px] bg-[#D1FAE5] mb-5 ml-5 flex md:gap-2 justify-center items-center">
              <FaWallet color="#047857" className="mb-1" />
              <h1 className="text-[#047857] text-[14px] flex items-end justify-center">
                Best Deals
              </h1>
            </div>
          </div>
          <h1 className="text-[#0E1735] md:text-[24px] font-medium md:mt-6 flex items-start">
            The Old Lighthouse
          </h1>
          <span className="text-[#3C4563] md:text-[20px] font-medium flex items-start">
            $ 44.000.000
          </span>
          <div className="flex flex-row md:mt-8">
            <div className="bg-ronald rounded-full md:w-[50px] w-[390px] md:h-[50px] h-[30px] bg-no-repeat flex items-center justify-center"></div>
            <div className="flex flex-col items-start md:ml-4">
              <h1 className="text-[#0E1735] md:text-[18px] font-medium">
                Ronald Richards
              </h1>
              <span className="text-[#888B97] md:text-[14px] font-medium">
                {" "}
                Santa Ana, Illinois
              </span>
            </div>
          </div>
        </div>
        <div className="w-[340px] h-[552px] ">
          <div className="w-full h-[382px] bg-house4 bg-no-repeat rounded-[32px] flex items-end justify-start">
            <div className="w-[112px] h-[34px] rounded-[32px] bg-[#FEE2E2] mb-5 ml-5 flex items-center justify-center md:gap-2">
              <AiFillFire color="#EF4444" className="mb-1" />
              <h1 className="text-[#EF4444] text-[14px] flex items-end justify-center">
                Popular
              </h1>
            </div>
          </div>
          <h1 className="text-[#0E1735] md:text-[24px] font-medium md:mt-6 flex items-start">
            Cosmo's House
          </h1>
          <span className="text-[#3C4563] md:text-[20px] font-medium flex items-start">
            $ 22.000.000
          </span>
          <div className="flex flex-row md:mt-8">
            <div className="bg-jenny rounded-full md:w-[50px] w-[390px] md:h-[50px] h-[30px] bg-no-repeat flex items-center justify-center"></div>
            <div className="flex flex-col items-start md:ml-4">
              <h1 className="text-[#0E1735] md:text-[18px] font-medium">
                Jenny Wilson
              </h1>
              <span className="text-[#888B97] md:text-[14px] font-medium">
                {" "}
                Preston Rd. Inglewood, Maine
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomendation;
