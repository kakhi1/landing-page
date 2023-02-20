import React from "react";
import { RxBorderSolid } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";

const Review = () => {
  return (
    <div className="h-[850px] w-[2332] md:ml-[66px]">
      <div className=" flex flex-col items-center">
        <RxBorderSolid color="#F59E0B" size={30} />
        <span className="text-[#F59E0B] text-[14px] font-normal">
          {" "}
          See Our Review
        </span>
        <h1 className="text-[#1B1C57] font-semibold md:text-[32px]">
          What Our User Say About Us
        </h1>
      </div>
      <div className="w-[1140px] flex flex-row p-8 overflow-y-auto">
        {/* /////////// */}
        <div className="w-[740px] h-[505px] flex flex-col justify-end items-center relative m-8 ">
          <div className="w-full h-[400px] bg-review bg-no-repeat absolute top-0 "></div>
          <div className="w-[612px] h-[249px] rounded-[16px] bg-white m-2 drop-shadow-xl text-left z-10 flex flex-col">
            <div className="p-8 flex-row">
              <h1 className="text-[#1B1C57] text-[20px] font-semibold pb-4">
                Best! I got the house I wanted through Hounter
              </h1>
              <span className="text-[#626687] font-normal text-[14px]">
                Through this website I can get a house with the type and
                specifications I want very easily, without a complicated process
                to be able to find information on the house we want.
              </span>
              <div className="flex flex-row justify-between py-4">
                <div className="flex flxe-rows ">
                  <div className="bg-rec3 rounded-full md:w-[50px] w-[390px] md:h-[50px] h-[30px] bg-no-repeat flex flex-row items-center justify-center"></div>
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
                <div className="flex flex-row justify-around items-center">
                  <AiFillStar size={30} color="#F59E0B" />
                  <span className="text-[#3C4563] font-semibold md:text-[20px]">
                    4.6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[740px] h-[505px] flex flex-col justify-end items-center relative mt-8">
          <div className="w-full h-[400px] bg-review1 bg-no-repeat absolute top-0 "></div>
          <div className="w-[612px] h-[249px] rounded-[16px] bg-white m-2 drop-shadow-xl text-left z-10 flex flex-col">
            <div className="p-8 flex-row">
              <h1 className="text-[#1B1C57] text-[20px] font-semibold pb-4">
                My house sold out fast!
              </h1>
              <span className="text-[#626687] font-normal text-[14px]">
                I was finally able to sell my house quickly through Hounter by
                immediately setting me up with people who wanted my house. I
                also do not get a discount from the sale of my house. Awesome!
              </span>
              <div className="flex flex-row justify-between py-4">
                <div className="flex flxe-rows ">
                  <div className="bg-henry rounded-full md:w-[50px] w-[390px] md:h-[50px] h-[30px] bg-no-repeat flex flex-row items-center justify-center"></div>
                  <div className="flex flex-col items-start md:ml-4">
                    <h1 className="text-[#0E1735] md:text-[18px] font-medium">
                      Courtney Henry
                    </h1>
                    <span className="text-[#888B97] md:text-[14px] font-medium">
                      {" "}
                      CEO Andarafish
                    </span>
                  </div>
                </div>
                <div className="flex flex-row justify-around items-center">
                  <AiFillStar size={30} color="#F59E0B" />
                  <span className="text-[#3C4563] font-semibold md:text-[20px]">
                    4.3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[740px] h-[505px] flex flex-col justify-end items-center relative m-8 ">
          <div className="w-full h-[400px] bg-review2 bg-no-repeat absolute top-0 "></div>
          <div className="w-[612px] h-[249px] rounded-[16px] bg-white m-2 drop-shadow-xl text-left z-10 flex flex-col">
            <div className="p-8 flex-row">
              <h1 className="text-[#1B1C57] text-[20px] font-semibold pb-4">
                Through the Hounter, I can get a house for my self
              </h1>
              <span className="text-[#626687] font-normal text-[14px]">
                By looking for information about what kind of house we want, we
                managed to get the house we wanted very quickly, and directly
                connected with the seller to be able to ask about the details,
                very helpful!
              </span>
              <div className="flex flex-row justify-between py-4">
                <div className="flex flxe-rows ">
                  <div className="bg-howard rounded-full md:w-[50px] w-[390px] md:h-[50px] h-[30px] bg-no-repeat flex flex-row items-center justify-center"></div>
                  <div className="flex flex-col items-start md:ml-4">
                    <h1 className="text-[#0E1735] md:text-[18px] font-medium">
                      Esther Howard
                    </h1>
                    <span className="text-[#888B97] md:text-[14px] font-medium">
                      {" "}
                      Head of Marketing
                    </span>
                  </div>
                </div>
                <div className="flex flex-row justify-around items-center">
                  <AiFillStar size={30} color="#F59E0B" />
                  <span className="text-[#3C4563] font-semibold md:text-[20px]">
                    4.6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
