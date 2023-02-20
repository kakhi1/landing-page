import React from "react";
import { RxBorderSolid } from "react-icons/rx";
import { BsFillClockFill } from "react-icons/bs";

const Partner = () => {
  return (
    <div>
      <div className="max-w-[1200px] h-[753px] ml-[66px]">
        <div className=" flex flex-col items-center">
          <RxBorderSolid color="#F59E0B" size={30} />
          <span className="text-[#F59E0B] text-[14px] font-normal">
            {" "}
            See tips and trick from our partnership
          </span>
          <h1 className="text-[#1B1C57] font-semibold md:text-[32px]">
            Find out more about selling and buying homes
          </h1>
          <div className="bg-[#10B981] rounded-[32px] md:w-[118px] md:h-[46px] flex items-center mt-4 ">
            <button className="text=[14px] font-semibold text-white  w-full h-full ">
              More Artikel
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4">
          {/* left side  */}
          <div className="gap-4 h-full w-[50%]">
            <div className="md:w-[572px] w-[300px] flex flex-row pt-10 gap-4">
              <div className="w-[200px] h-[146px] rounded-[32px] bg-partner"></div>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex flex-row items-center">
                    <div className="bg-rec3 rounded-full md:w-[50px] w-[39px] md:h-[50px] h-[30px] bg-no-repeat flex items-center justify-end"></div>
                    <div className="flex flex-col items-center md:ml-4">
                      <h1 className="text-[#0E1735] md:text-[18px] font-medium">
                        Dianne Russell
                      </h1>
                    </div>
                  </div>
                  <span className="text-[#1B1C57] text-[18px] font-normal text-left mt-2">
                    The things we need to check when we want to buy a house
                  </span>
                </div>
                <div className="flex flex-row mt-2">
                  <BsFillClockFill color="888B97" />{" "}
                  <span className="text-[14px] text-[#888B97] font-normal ml-2">
                    4 min read | 25 Apr 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-[572px] w-[300px] flex flex-row pt-10 gap-4">
              <div className="w-[200px] h-[146px] rounded-[32px] bg-partner1"></div>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex flex-row items-center">
                    <div className="bg-henry rounded-full md:w-[50px] w-[39px] md:h-[50px] h-[30px] bg-no-repeat flex items-center justify-end"></div>
                    <div className="flex flex-col items-center md:ml-4">
                      <h1 className="text-[#0E1735] md:text-[18px] font-medium">
                        Courtney Henry
                      </h1>
                    </div>
                  </div>
                  <span className="text-[#1B1C57] text-[18px] font-normal text-left mt-4">
                    7 Ways to distinguish the quality of the house we want to
                    buy
                  </span>
                </div>
                <div className="flex flex-row mt-4">
                  <BsFillClockFill color="888B97" />{" "}
                  <span className="text-[14px] text-[#888B97] font-normal ml-2">
                    2 min read | 22 Apr 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-[572px] w-[300px] flex flex-row pt-10 gap-4">
              <div className="w-[200px] h-[146px] rounded-[32px] bg-partner2"></div>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex flex-row items-center">
                    <div className="bg-darlene rounded-full md:w-[50px] w-[39px] md:h-[50px] h-[30px] bg-no-repeat flex items-center justify-end"></div>
                    <div className="flex flex-col items-center md:ml-4">
                      <h1 className="text-[#0E1735] md:text-[18px] font-medium">
                        Darlene Robertson
                      </h1>
                    </div>
                  </div>
                  <span className="text-[#1B1C57] text-[18px] font-normal text-left mt-4">
                    The best way to know the quality of the house we want to buy
                  </span>
                </div>
                <div className="flex flex-row mt-4">
                  <BsFillClockFill color="888B97" />{" "}
                  <span className="text-[14px] text-[#888B97] font-normal ml-2">
                    2 min read | 24 Apr 2021
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* right side  */}
          <div className="h-[524px] w-[560px] pt-10 ">
            <div className="bg-partner3 md:w-[560px] w-[300px] md:h-[280px] h-[200px] rounded-[32px]"></div>
            <div className="flex flex-col items-start">
              <div className="flex flex-row my-4">
                <div className="bg-cameron rounded-full md:w-[50px] w-[39px] md:h-[50px] h-[30px] bg-no-repeat flex items-center justify-end"></div>
                <div className="flex flex-col items-center justify-center md:ml-4">
                  <h1 className="text-[#0E1735] md:text-[18px] font-medium">
                    Cameron Williamson
                  </h1>
                </div>
              </div>
              <h1 className="text-[#1B1C57] text-[24px] font-normal text-left">
                12 Things to know before buying a house
              </h1>
              <span className="text-[14px] text-[#888B97] font-normal text-left my-4">
                Want to buy a house but are unsure about what we should know,
                here I will try to explain what we should know and check when we
                want to buy a house
              </span>
              <span className="text-[14px] text-[#888B97] font-normal text-left">
                8 min read | 25 Apr 2021
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
