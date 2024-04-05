import React from "react";
import Image from "next/image";
import BannerPng from "@/../../public/bn.png";
import SearchIcon from "@/../../public/searchl.svg";
export default function Banner() {
  return (
    <div className=" relative md:h-full  ">
      <Image src={BannerPng} alt="Banner" className=" w-full" width={1024} />

      <div className=" absolute top-36 left-36 ">
        <h1 className=" text-white font-bold text-3xl py-3">
          您，今天運動了嗎？
        </h1>
        <div className=" flex gap-2">
          <label className="flex input bg-white border-none w-full max-w-xs">
            <Image src={SearchIcon} alt="" />

            <input
              type="text"
              placeholder="您在找人運動嗎"
              className="border-none"
            />
          </label>

          <button className="btn btn-primary border-none text-[#1E1E1E] bg-[#B3B5E8]">
            立即開始運動
          </button>
        </div>
      </div>
    </div>
  );
}
