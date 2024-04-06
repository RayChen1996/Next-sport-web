import React from "react";
import TrainingCard from "../../GridItem/TrainingCard";

export default function NewsActive() {
  const Data = [{}];
  return (
    <div className=" bg-white container w-4/5 ">
      <div className=" h-fit    m-auto ">
        <h1 className=" text-2xl text-left font-bold">最新活動</h1>
        <div className=" md:flex justify-between">
          <div className=" md:flex gap-2 items-center ">
            <label className="w-20 hidden md:block">地點</label>
            <select className=" w-full select bg-white border-[#B3B5E8] select-bordered">
              <option>----</option>
              <option>台中市</option>
              <option>台中市</option>
              <option>台中市</option>
            </select>
          </div>
          <div className="  md:flex gap-2 items-center">
            <label className="w-10 hidden md:block">類別</label>

            <ul className="w-full my-3 text-[#1E1E1E] cursor-pointer justify-around md:justify-start flex gap-2">
              <li>羽球</li>
              <li>健身</li>
              <li>爬山</li>
              <li>騎車</li>
              <li>網球</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className=" grid gap-1 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
        </div>
      </div>
    </div>
  );
}
