import React from "react";
import Image from "next/image";
import avator from "@/../../public/person.png";
import people from "@/../../public/people.svg";
import message from "@/../../public/message.svg";
import good from "@/../../public/good.svg";

import Active01 from "@/../../public/最新活動01.png";
import Active02 from "@/../../public/最新活動02.png";
import Active03 from "@/../../public/最新活動03.png";
import Active04 from "@/../../public/最新活動04.png";
import Active05 from "@/../../public/最新活動05.png";
import Link from "next/link";

export default function TrainingCard() {
  return (
    <div className="card   rounded-md border-2">
      <figure className=" relative ">
        <Image src={Active01} alt="" height={170} width={500} />
        <Link href={"/Activities/123456789"}>
          <button className=" absolute bottom-6 w-11/12 btn btn-primary ">
            立即參與
          </button>
        </Link>
      </figure>
      <div className=" w-full   ">
        <div className=" px-2 my-2 flex justify-between items-center">
          <h2 className="card-title">
            <Image className="rounded-full" src={avator} width={30} alt="" />
            <span className=" text-black">Hank</span>

            <div className="badge  bg-[#C7EFF9] text-black font-bold border-none rounded-md">
              lv:2
            </div>
          </h2>
          <span>2022-12-31 20:14</span>
        </div>

        <header className=" p-2">
          <p className=" pb-2 text-2xl text-black font-bold">
            登山：2022最後一天挑戰
          </p>

          <p className=" text-[#575F9E]"># 爬山 # 健康 # 交友</p>
        </header>

        <div className=" w-full h-[0.9] bg-black    "></div>

        <div className=" border-t-2  ">
          <ul className=" flex justify-between items-center h-10  mx-2   ">
            <li className=" cursor-pointer flex">
              <Image alt="" src={people} />
              12
            </li>
            <li className="cursor-pointer flex">
              <Image alt="" src={message} />
              12
            </li>
            <li className="cursor-pointer flex">
              <Image alt="" src={good} />
              12
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
