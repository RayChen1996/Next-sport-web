import React from "react";
import Image from "next/image";
import RecommandImage from "@/../../public/推薦01.png";
import RecommandImage2 from "@/../../public/推薦02.png";
import RecommandImage3 from "@/../../public/推薦03.png";
import RecommandImage4 from "@/../../public/推薦04.png";
import RecommandImage5 from "@/../../public/推薦05.png";
import RecommandImage6 from "@/../../public/推薦06.png";
import RecommandImage7 from "@/../../public/推薦07.png";

export default function PhotoCategoryGrid() {
  return (
    <div className=" w-full  flex gap-2 justify-center items-center bg-white   ">
      <div className=" h-full w-full md:w-1/3  sm:relative  ">
        <Image
          src={RecommandImage}
          alt=""
          className=" sm:w-full w-full h-full"
        />
      </div>

      <div className="  h-full grid grid-cols-3 gap-2 relative">
        <div className="  sm:block col-span-1">
          <Image src={RecommandImage2} alt="" width={240} />
        </div>
        <div className="  sm:block col-span-1">
          <Image src={RecommandImage3} alt="" width={240} />
        </div>
        <div className="  sm:block col-span-1">
          <Image src={RecommandImage4} alt="" width={240} />
        </div>
        <div className="  sm:block col-span-1">
          <Image src={RecommandImage5} alt="" width={240} />
        </div>
        <div className="  sm:block col-span-1">
          <Image src={RecommandImage6} alt="" width={240} />
        </div>
        <div className="  sm:block col-span-1">
          <Image src={RecommandImage7} alt="" width={240} />
        </div>
        {/* <div className="hidden sm:block absolute bg-white h-full w-1/4 top-0 left-0"></div> */}
      </div>
    </div>
  );
}
