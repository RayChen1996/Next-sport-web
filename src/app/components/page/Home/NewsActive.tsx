"use client";

import React from "react";
import TrainingCard from "../../GridItem/TrainingCard";
import { useActivities } from "@/hooks/api/useActivities";

const cities = [
  "台北市",
  "新北市",
  "基隆市",
  "桃園市",
  "新竹市",
  "新竹縣",
  "苗栗縣",
  "台中市",
  "彰化縣",
  "南投縣",
  "雲林縣",
  "嘉義市",
  "嘉義縣",
  "台南市",
  "高雄市",
  "屏東縣",
  "宜蘭縣",
  "花蓮縣",
  "台東縣",
  "澎湖縣",
  "金門縣",
  "連江縣",
];

export default function NewsActive() {
  const { data, isLoading } = useActivities();
  console.log(data);
  return (
    <div className="container w-4/5 bg-white">
      <div className="m-auto h-fit">
        <h1 className="text-left text-2xl font-bold">最新活動</h1>
        <div className="mt-10 justify-between md:flex">
          <div className="items-center gap-2 md:flex">
            <label className="hidden w-20 md:block">地點</label>
            <select className="select select-bordered w-full border-[#B3B5E8] bg-white">
              <option>----</option>
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
          </div>
          <div className="items-center gap-2 md:flex">
            <label className="hidden w-10 md:block">類別</label>

            <ul className="my-3 flex w-full cursor-pointer justify-around gap-2 text-[#1E1E1E] md:justify-start">
              <li>羽球</li>
              <li>健身</li>
              <li>爬山</li>
              <li>騎車</li>
              <li>網球</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="mt-10 grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
          <TrainingCard />
        </div>
      </div>
    </div>
  );
}
