import React from "react";

export default function TodaySchedule() {
  return (
    <div className="container m-auto h-full w-2/3 bg-white p-5 md:flex md:w-4/5">
      <div className="w-full md:w-1/3">
        <ul className="flex h-full flex-row justify-between gap-2 md:flex-col md:justify-center">
          <li>每日任務</li>
          <li>訓練菜單</li>
          <li>配對組員</li>
        </ul>
      </div>
      <div className="flex w-full flex-col items-center justify-center bg-[#FAFAFA] md:w-4/5">
        <h1 className="py-2 text-2xl font-bold text-black">預計今日運動</h1>
        <span>Time to work！</span>
        <div className="flex w-1/2 items-center justify-center gap-2 py-2 font-bold text-black">
          <span className="rounded-md bg-[#BDC0C2] p-2">0</span>
          <span className="rounded-md bg-[#BDC0C2] p-2"> 5</span>
          <span>：</span>
          <span className="rounded-md bg-[#BDC0C2] p-2">0</span>
          <span className="rounded-md bg-[#BDC0C2] p-2">0</span>
        </div>
        <div className="w-full">
          <button className="btn btn-primary w-full">設定</button>
        </div>
      </div>
    </div>
  );
}
