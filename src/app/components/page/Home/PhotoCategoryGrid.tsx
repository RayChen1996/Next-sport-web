import React from "react";
import Image from "next/image";
import RecommandImage from "@/../../public/推薦01.png";
import RecommandImage2 from "@/../../public/推薦02.png";
import RecommandImage3 from "@/../../public/推薦03.png";
import RecommandImage4 from "@/../../public/推薦04.png";
import RecommandImage5 from "@/../../public/推薦05.png";
import RecommandImage6 from "@/../../public/推薦06.png";
import RecommandImage7 from "@/../../public/推薦07.png";

/** - 縣市運動區塊 */
export default function PhotoCategoryGrid() {
  return (
    <>
      <div className="  h-full z-50 p-3 w-4/5 container grid-flow-row grid grid-cols-2 md:grid-flow-col  md:grid-rows-2  gap-2 relative">
        <div className="  col-span-2   h-full md:row-span-2 md:col-span-3 relative">
          <Image src={RecommandImage} fill alt="" />
          <Image src={RecommandImage} alt="" height={240} />

          <div className="text-white absolute bottom-2 left-3">台中市-游泳</div>
        </div>
        <div className="md:col-span-1 relative">
          <Image src={RecommandImage2} alt="" height={240} />
          <div className="text-white absolute bottom-2 left-3">台中市-游泳</div>
        </div>
        <div className="md:col-span-1 relative">
          <Image src={RecommandImage3} alt="" height={240} />
          <div className="text-white absolute bottom-2 left-3">台中市-游泳</div>
        </div>
        <div className="md:col-span-1 relative">
          <Image src={RecommandImage4} alt="" height={240} />
          <div className="text-white absolute bottom-2 left-3">台中市-游泳</div>
        </div>
        <div className="md:col-span-1 relative">
          <Image src={RecommandImage5} alt="" height={240} />
          <div className="text-white absolute bottom-2 left-3">台中市-游泳</div>
        </div>
        <div className="md:col-span-1 relative">
          <Image src={RecommandImage6} alt="" height={240} />
          <div className="text-white absolute bottom-2 left-3">台中市-游泳</div>
        </div>
        <div className="md:col-span-1 relative">
          <Image src={RecommandImage7} alt="" height={240} />
          <div className="text-white absolute bottom-2 left-3">台中市-游泳</div>
        </div>
      </div>
    </>
  );
}
