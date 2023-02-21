import React from "react";
import { AiFillMail } from "react-icons/ai";

const Subscribe = () => {
  return (
    <div className="md:w-[1440px] w-[720px] md:h-[500px] h-[250px] flex items-center">
      <div className="ml-[66px] w-[1200px] h-[312px] bg-subscribe rounded-[32px] ">
        <div className="flex flex-row justify-around">
          <div className="flex flex-col w-[150px] h-[312px] items-center justify-around ">
            <div className="md:w-[81px] w-[40px] md:h-[81px] h-[40px] rounded-[32px] bg-subscribe1 border-white border-5"></div>
            <div className="md:w-[36px] w-[16px] md:h-[36px] h-[18px] rounded-full  bg-rec3"></div>
          </div>
          <div className="flex flex-col md:w-[150px] w-[75px]  md:h-[312px] h-[170px] items-center justify-around ">
            <div className="md:w-[36px] w-[18px] md:h-[36px] h-[18px] rounded-full  bg-ronald"></div>
            <div className="md:w-[81px] w-[40px] md:h-[81px] h-[40px] rounded-[32px] bg-subscribe2 bg-no-repeat border-white border-5"></div>
          </div>
          <div className="flex flex-col justify-around items-center">
            <span className="md:text-[32px] text-[18px] text-[#1B1C57] font-semibold md:w-[424px] w-[212px] md:h-[96] h-[50px]">
              Subscribe For More Info and update from Hounter
            </span>
            <div className=" md:w-[496px] w-[300px] md:h-[56px] h-[30px] rounded-full bg-white border-2 mt-4 flex items-center justify-between">
              <div className="flex flex-row items-center justify-around">
                <AiFillMail color="#3B82F6" size="24px" className="ml-5" />
                <span className="text-[#888B97] text-[14px] md:ml-5 ml-1">
                  Your email here
                </span>
              </div>
              <div className="rounded-full md:h-[50px] h-[30px] md:w-[109px] w-[60px] bg-[#10B981] flex items-center justify-center">
                <span className="text-white font-semibold md:text-[14px] text-[8px]  ">
                  {" "}
                  Subsribe Now
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[150px] h-[312px] items-center justify-around ">
            <div className="md:w-[81px] w-[40px] md:h-[81px] h-[40px] rounded-[32px] bg-subscribe3 bg-no-repeat border-white border-5"></div>
            <div className="md:w-[36px] w-[16px] md:h-[36px] h-[18px] rounded-full  bg-henry"></div>
          </div>
          <div className="flex flex-col md:w-[150px] w-[75px]  md:h-[312px] h-[170px] items-center justify-around ">
            <div className="md:w-[36px] w-[18px] md:h-[36px] h-[18px] rounded-full  bg-howard"></div>
            <div className="md:w-[81px] w-[40px] md:h-[81px] h-[40px] rounded-[32px] bg-subscribe4 bg-no-repeat border-white border-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
