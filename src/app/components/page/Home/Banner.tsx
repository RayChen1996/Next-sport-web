import React from "react";
import Image from "next/image";
import BannerPng from "@/../../public/bn.png";
import SearchIcon from "@/../../public/searchl.svg";
export default function Banner() {
  return (
    <div className=" container  relative   h-72 ">
      <Image src={BannerPng} alt="Banner" fill className="w-full bg-cover" />

      <div className=" w-5/6 absolute left-6 bottom-8 md:bottom-32 md:left-32  ">
        <h1 className=" text-white font-bold text-3xl py-3">
          您，今天運動了嗎？
        </h1>
        <div className=" w-full md:w-2/5  md:flex md:justify-between gap-1  ">
          <div className="w-full  md:w-2/5">
            <label className="w-full flex input bg-white border-none   ">
              <Image src={SearchIcon} alt="" />

              <input
                type="text"
                placeholder="您在找人運動嗎？"
                className="border-none w-full  "
              />
            </label>
          </div>
          <div className="w-full  md:w-3/5 md:mt-0 mt-3 ">
            <button className="btn w-full md:w-1/2   btn-primary border-none text-[#1E1E1E] bg-[#B3B5E8]">
              立即開始運動
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
