import React from "react";
import TrainingCard from "../../GridItem/TrainingCard";

export default function NewsActive() {
  const Data = [{}];
  return (
    <div className=" bg-white container w-4/5 ">
      <div className=" h-fit   max-w-5xl m-auto ">
        <h1 className=" text-2xl text-left font-bold">最新活動</h1>
        <div className=" flex justify-between">
          <div className=" flex gap-2 items-center ">
            <label>地點</label>
            <select className=" select bg-white border-[#B3B5E8] select-bordered">
              <option>----</option>
              <option>台中市</option>
              <option></option>
              <option></option>
            </select>
          </div>
          <div className=" flex gap-2">
            <label>類別</label>

            <ul className=" flex gap-2">
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
