import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" md:ml-[66px] md:w-[1200px] md:h-[300px] flex md:flex-row flex-col justify-between ">
      <div className="md:w-[320px] md:h-[180px] w-[160px] h-[90px] flex flex-col justify-around">
        <div className="w-full h-[36px] flex items-center ">
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
        <div className="text-left">
          <span className="text-[#626687] font-medium md:text-[14px] text-[8px]">
            We provide information about properties such as houses, villas and
            apartments to help people find their dream home
          </span>
        </div>
        <div className="flex gap-10">
          <AiFillFacebook color="#3C4563 " size={20} />
          <BsTwitter color="#3C4563 " size={20} />
          <AiFillInstagram color="#3C4563 " size={20} />
        </div>
      </div>
      <div className="md:w-[700px] w-[400px] md:h-[180px] h-[160px] flex flex-row">
        <div className="flex flex-col justify-start text-left ml-[100px]">
          <h1 className="md:text-[18px] text-[10px] font-semibold text-[#0E1735] md:py-2 ">
            Property
          </h1>
          <span className="md:text-[14px] text-[8px] font-normal text-[#888B97] md:py-2">
            House
          </span>
          <span className="md:text-[14px] text-[8px] font-normal text-[#888B97] md:py-2">
            Apartment
          </span>
          <span className="md:text-[14px] text-[8px] font-normal text-[#888B97] md:py-2">
            Villa
          </span>
        </div>
        <div className="flex flex-col justify-around text-left ml-[100px]">
          <h1 className="md:text-[18px] text-[10px] font-semibold text-[#0E1735]">
            Article
          </h1>
          <span className="md:text-[14px] text-[8px] font-normal text-[#888B97] md:py-[2px]">
            New Article
          </span>
          <span className="md:text-[14px] text-[8px] font-normal text-[#888B97] md:py-[2px]">
            Popular Article
          </span>
          <span className="md:text-[14px] text-[8px] font-normal text-[#888B97] md:py-[2px]">
            Most Read
          </span>
          <span className="md:text-[14px] text-[8px] font-normal text-[#888B97] md:py-[2px]">
            Tips & Tricks{" "}
          </span>
        </div>
        <div className="flex flex-col justify-start text-left ml-[100px]">
          <h1 className="md:text-[18px] text-[10px] font-semibold text-[#0E1735] md:py-2 ">
            Contact
          </h1>
          <span className="md:text-[14px] text-[8px] font-normal text-[#888B97] md:py-2">
            2464 Royal Ln. Mesa, New Jersey 45463
          </span>
          <span className="md:text-[14px] text-[8px] font-normal text-[#888B97] md:py-2">
            (671) 555-0110
          </span>
          <span className="md:text-[14px] text-[8px] font-normal text-[#888B97] md:py-2">
            info@hounter.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
