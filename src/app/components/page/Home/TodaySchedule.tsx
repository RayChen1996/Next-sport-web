import React from "react";

export default function TodaySchedule() {
  return (
    <div className=" container p-5 w-2/3  md:w-4/5 bg-white h-full md:flex m-auto">
      <div className=" w-full md:w-1/3 ">
        <ul className=" flex flex-row md:flex-col justify-between md:justify-center   h-full gap-2">
          <li>每日任務</li>
          <li>訓練菜單</li>
          <li>配對組員</li>
        </ul>
      </div>
      <div className=" bg-[#FAFAFA] w-full md:w-4/5    flex flex-col items-center justify-center">
        <h1 className=" text-2xl py-2 text-black font-bold">預計今日運動</h1>
        <span>Time to work！</span>
        <div className="py-2 flex text-black font-bold w-1/2 items-center  justify-center gap-2 ">
          <span className="p-2 rounded-md bg-[#BDC0C2]">0</span>
          <span className="p-2 rounded-md bg-[#BDC0C2]"> 5</span>
          <span>：</span>
          <span className="p-2 rounded-md bg-[#BDC0C2]">0</span>
          <span className="p-2 rounded-md bg-[#BDC0C2]">0</span>
        </div>
        <div className=" w-full ">
          <button className="btn btn-primary  w-full ">設定</button>
        </div>
      </div>
    </div>
  );
}
