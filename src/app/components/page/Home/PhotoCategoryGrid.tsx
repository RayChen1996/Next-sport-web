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
    <div className=" h-full p-3 w-4/5 container md:grid-flow-col grid grid-cols-2 md:grid-cols-2 gap-2 relative">
      <div className="col-span-2 md:col-span-3 col-start-1 relative">
        <Image
          src={RecommandImage}
          alt=""
          height={50}
          className=" w-full h-full "
        />
        <div className="text-white absolute bottom-2 left-3">台中市-游泳</div>
      </div>
      <div className="col-span-1 relative">
        <Image src={RecommandImage2} alt="" width={240} />
        <div className="text-white absolute bottom-2 left-3">台中市-游泳</div>
      </div>
      <div className="col-span-1 relative">
        <Image src={RecommandImage3} alt="" width={240} />
        <div className="text-white absolute bottom-2 left-3">台中市-游泳</div>
      </div>
      <div className="col-span-1 relative">
        <Image src={RecommandImage4} alt="" width={240} />
        <div className="text-white absolute bottom-2 left-3">台中市-游泳</div>
      </div>
      <div className="col-span-1 relative">
        <Image src={RecommandImage5} alt="" width={240} />
        <div className="text-white absolute bottom-2 left-3">台中市-游泳</div>
      </div>
      <div className="col-span-1 relative">
        <Image src={RecommandImage6} alt="" width={240} />
        <div className="text-white absolute bottom-2 left-3">台中市-游泳</div>
      </div>
      <div className="col-span-1 relative">
        <Image src={RecommandImage7} alt="" width={240} />
        <div className="text-white absolute bottom-2 left-3">台中市-游泳</div>
      </div>
    </div>
  );
}
