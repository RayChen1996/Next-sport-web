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
    <div className=" h-full px-5 md:flex md:justify-around container  ">
      <div className="     ">
        <BreadCrumb />
        <DisplayProfile />
        <h1 className="text-black font-bold text-2xl">
          登山：2022最後一天挑戰台中大坑9號
        </h1>
        <span className=" inline-block my-2">2022-12-31 20:14</span>
        <ul className=" flex gap-2 mt-3 mb-8">
          <li className=" text-[#575F9E] border-2 border-[#575F9E] p-1 rounded-md  ">
            15名
          </li>
          <li className=" text-[#575F9E] border-2 border-[#575F9E] p-1 rounded-md ">
            免費
          </li>
          <li className=" text-[#575F9E] border-2 border-[#575F9E] p-1 rounded-md ">
            適新手
          </li>
        </ul>

        <Image src={Active01} alt="" height={170} width={500} />

        <div className=" flex my-3 items-center gap-2">
          <button className="   btn btn-primary ">立即報名</button>
          <label className=" flex justify-center items-center gap-2">
            <Image alt="" src={people} />
            12名報名成功
          </label>
        </div>

        <ul className=" flex my-3  items-center h-10 justify-between ">
          <li className=" flex">
            <Image alt="" src={people} />
            12
          </li>
          <li className=" flex">
            <Image alt="" src={message} />
            12
          </li>
          <li className=" flex">
            <Image alt="" src={good} />
            12
          </li>
        </ul>
        <ChatBoard />
        <FeedBack />
        <PostContent />
      </div>

      <div className="  h-full ">
        <h1 className=" text-black font-bold mb-2">瀏覽紀錄</h1>
        <div className="flex gap-2 border border-[#BDC0C2] p-3 rounded-md">
          <div>
            <Image className=" rounded-md" width={70} alt="" src={Active05} />
          </div>
          <div>
            <div className=" text-[#8A8A8Bii]">2022-12-31 20:14</div>
            <div className="text-[#1E1E1E] text-lg font-bold">
              登山：2022最後一天挑戰
            </div>
            <div>
              <ul className=" flex gap-2">
                <li className=" text-[#575F9E] border-2 border-[#575F9E] p-1 rounded-md  ">
                  15名
                </li>

                <li className=" text-[#575F9E] border-2 border-[#575F9E] p-1 rounded-md ">
                  適新手
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatBoard() {
  return (
    <div className="">
      <div className="flex w-full justify-between">
        <div className=" flex gap-2 items-center">
          <Image className="rounded-full" src={avator} width={30} alt="" />
          <span className=" text-black">Hank</span>
        </div>
        <div>2022-12-31 20:14</div>
      </div>
      <div className=" mt-2">
        <p>
          上個月斷食方式加上，勤走公園，以前穿不下的牛仔褲，都穿得下了耶！！
        </p>
      </div>
      <span className=" inline-block h-[0.9px]  w-full bg-[#DFE4EB] "></span>
    </div>
  );
}

function FeedBack() {
  return (
    <div>
      <h3 className=" text-black font-bold mb-3">留言與評價</h3>
      <div className="rating mb-5">
        <input
          type="radio"
          name="rating-2"
          checked
          className="mask mask-star-2  "
        />
        <input type="radio" name="rating-2" className="mask mask-star-2  " />
        <input type="radio" name="rating-2" className="mask mask-star-2 " />
        <input type="radio" name="rating-2" className="mask mask-star-2 " />
        <input type="radio" name="rating-2" className="mask mask-star-2 " />
      </div>
    </div>
  );
}

function PostContent() {
  return (
    <div>
      <div>
        <textarea
          placeholder="請輸入內容"
          className="textarea bg-white textarea-bordered textarea-lg w-full max-w-xs"
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
      <span className=" text-black">Hank</span>

      <div className="badge  bg-[#C7EFF9] text-black font-bold border-none rounded-md">
        lv:2
      </div>
      <div className=" text-sm">台中人 45歲</div>
    </h2>
  );
}

function BreadCrumb() {
  return (
    <div className="text-sm breadcrumbs mb-5">
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
