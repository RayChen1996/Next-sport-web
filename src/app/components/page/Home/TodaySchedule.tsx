import React from "react";

export default function TodaySchedule() {
  return (
    <div className=" w-full bg-white h-full flex min-w-md max-w-screen-xl m-auto">
      <div className=" w-1/3 ">
        <ul className=" flex justify-center flex-col h-full gap-2">
          <li>每日任務</li>
          <li>訓練菜單</li>
          <li>配對組員</li>
        </ul>
      </div>
      <div className="w-2/3  flex flex-col items-center justify-center">
        <h1 className=" text-2xl py-2 text-black font-bold">預計今日運動</h1>
        <span>Time to work！</span>
        <div className="py-2 flex text-black font-bold w-1/2 items-center  justify-center gap-2 ">
          <span className=" p-2 bg-[#BDC0C2]">0</span>
          <span className="p-2 bg-[#BDC0C2]"> 5</span>
          <span>：</span>
          <span className="p-2 bg-[#BDC0C2]">0</span>
          <span className="p-2 bg-[#BDC0C2]">0</span>
        </div>
        <div>
          <button className="btn btn-primary  w-80 ">設定</button>
        </div>
      </div>
    </div>
  );
}
