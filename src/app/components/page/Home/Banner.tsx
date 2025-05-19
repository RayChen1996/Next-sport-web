import React from "react";
import Image from "next/image";
import BannerPng from "@/../../public/bn.png";
import SearchIcon from "@/../../public/searchl.svg";
export default function Banner() {
  return (
    <div className="relative min-h-[480px]">
      <Image src={BannerPng} alt="Banner" fill className="w-full bg-cover" />

      <div className="absolute bottom-8 left-6 w-5/6 md:bottom-32 md:left-32">
        <h1 className="py-3 text-3xl font-bold text-white">
          您，今天運動了嗎？
        </h1>
        <div className="w-full gap-1 md:flex md:w-2/5 md:justify-between">
          <div className="w-full md:w-2/5">
            <label className="input flex w-full border-none bg-white">
              <Image src={SearchIcon} alt="" />

              <input
                type="text"
                placeholder="您在找人運動嗎？"
                className="w-full border-none"
              />
            </label>
          </div>
          <div className="mt-3 w-full md:mt-0 md:w-3/5">
            <button className="btn btn-primary w-full border-none bg-[#B3B5E8] text-[#1E1E1E] md:w-1/2">
              立即開始運動
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
