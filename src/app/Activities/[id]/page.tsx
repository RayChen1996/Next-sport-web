import Image from "next/image";
import React from "react";
import avator from "@/../../public/person.png";
import people from "@/../../public/people.svg";
import message from "@/../../public/message.svg";
import good from "@/../../public/good.svg";
import Active01 from "@/../../public/最新活動01.png";
import Active05 from "@/../../public/最新活動05.png";

export default function Page() {
  return (
    <div className="container h-full px-5 md:flex md:justify-around">
      <div>
        <BreadCrumb />
        <DisplayProfile />
        <h1 className="text-2xl font-bold text-black">
          登山：2022最後一天挑戰台中大坑9號
        </h1>
        <span className="my-2 inline-block">2022-12-31 20:14</span>
        <ul className="mb-8 mt-3 flex gap-2">
          <li className="rounded-md border-2 border-[#575F9E] p-1 text-[#575F9E]">
            15名
          </li>
          <li className="rounded-md border-2 border-[#575F9E] p-1 text-[#575F9E]">
            免費
          </li>
          <li className="rounded-md border-2 border-[#575F9E] p-1 text-[#575F9E]">
            適新手
          </li>
        </ul>

        <Image src={Active01} alt="" height={170} width={500} />

        <div className="my-3 flex items-center gap-2">
          <button className="btn btn-primary">立即報名</button>
          <label className="flex items-center justify-center gap-2">
            <Image alt="" src={people} />
            12名報名成功
          </label>
        </div>

        <ul className="my-3 flex h-10 items-center justify-between">
          <li className="flex">
            <Image alt="" src={people} />
            12
          </li>
          <li className="flex">
            <Image alt="" src={message} />
            12
          </li>
          <li className="flex">
            <Image alt="" src={good} />
            12
          </li>
        </ul>
        <ChatBoard />
        <ChatBoard />
        <ChatBoard />
        <FeedBack />
        <PostContent />
      </div>

      <div className="h-full">
        <h1 className="mb-2 mt-5 font-bold text-black">瀏覽紀錄</h1>
        <RecordItem />
        <RecordItem />
        <RecordItem />
      </div>
    </div>
  );
}

function RecordItem() {
  return (
    <div className="mb-3 flex gap-2 rounded-md border border-[#BDC0C2] p-3">
      <div>
        <Image className="rounded-md" width={70} alt="" src={Active05} />
      </div>
      <div>
        <div className="text-[#8A8A8Bii]">2022-12-31 20:14</div>
        <div className="text-lg font-bold text-[#1E1E1E]">
          登山：2022最後一天挑戰
        </div>
        <div>
          <ul className="flex gap-2">
            <li className="rounded-md border-2 border-[#575F9E] p-1 text-[#575F9E]">
              15名
            </li>

            <li className="rounded-md border-2 border-[#575F9E] p-1 text-[#575F9E]">
              適新手
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ChatBoard() {
  return (
    <div className="w-full bg-[#FAFAFA] p-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Image className="rounded-full" src={avator} width={30} alt="" />
          <span className="text-black">Ray</span>
        </div>
        <div>2022-12-31 20:14</div>
      </div>
      <div className="mt-2">
        <p>
          上個月斷食方式加上，勤走公園，以前穿不下的牛仔褲，都穿得下了耶！！
        </p>
      </div>
      <span className="inline-block h-[0.9px] w-full bg-[#DFE4EB]"></span>
    </div>
  );
}

function FeedBack() {
  return (
    <div>
      <h3 className="mb-3 font-bold text-black">留言與評價</h3>
      <div className="rating mb-5">
        <input
          type="radio"
          name="rating-2"
          checked
          className="mask mask-star-2"
        />
        <input type="radio" name="rating-2" className="mask mask-star-2" />
        <input type="radio" name="rating-2" className="mask mask-star-2" />
        <input type="radio" name="rating-2" className="mask mask-star-2" />
        <input type="radio" name="rating-2" className="mask mask-star-2" />
      </div>
    </div>
  );
}

function PostContent() {
  return (
    <div className="w-full">
      <div className="w-full">
        <textarea
          placeholder="請輸入內容"
          className="textarea textarea-bordered textarea-lg w-full bg-[#FAFAFA]"
        ></textarea>
      </div>

      <button type="button" className="btn btn-outline">
        發佈
      </button>
    </div>
  );
}

function DisplayProfile() {
  return (
    <h2 className="card-title mb-5">
      <Image className="rounded-full" src={avator} width={30} alt="" />
      <span className="text-black">Ray</span>

      <div className="badge rounded-md border-none bg-[#C7EFF9] font-bold text-black">
        lv:2
      </div>
      <div className="text-sm">台中人 45歲</div>
    </h2>
  );
}

function BreadCrumb() {
  return (
    <div className="breadcrumbs mb-5 text-sm">
      <ul>
        <li>
          <a>首頁</a>
        </li>
        <li>
          <a>最新活動</a>
        </li>
        <li>登山：2022最後一天挑戰台中大坑9號</li>
      </ul>
    </div>
  );
}
