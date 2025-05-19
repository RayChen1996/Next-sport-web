"use client";
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
import { useRouter } from "next/navigation";

export default function TrainingCard() {
  const { push } = useRouter();
  return (
    <div className="card rounded-md border-2">
      <figure className="relative">
        <Image src={Active01} alt="" height={170} width={500} />

        <button
          type="button"
          onClick={() => {
            push("/Activities/123456789");
          }}
          className="btn btn-primary absolute bottom-6 w-11/12"
        >
          立即參與
        </button>
      </figure>
      <div className="w-full">
        <div className="my-2 flex items-center justify-between px-2">
          <h2 className="card-title">
            <Image className="rounded-full" src={avator} width={30} alt="" />
            <span className="text-black">Ray</span>

            <div className="badge rounded-md border-none bg-[#C7EFF9] font-bold text-black">
              lv:2
            </div>
          </h2>
          <span>2022-12-31 20:14</span>
        </div>

        <header className="p-2">
          <p className="pb-2 text-2xl font-bold text-black">
            登山：2022最後一天挑戰
          </p>

          <p className="text-[#575F9E]"># 爬山 # 健康 # 交友</p>
        </header>

        <div className="h-[0.9] w-full bg-black"></div>

        <div className="border-t-2">
          <ul className="mx-2 flex h-10 items-center justify-between">
            <li className="flex cursor-pointer">
              <Image alt="" src={people} />
              12
            </li>
            <li className="flex cursor-pointer">
              <Image alt="" src={message} />
              12
            </li>
            <li className="flex cursor-pointer">
              <Image alt="" src={good} />
              12
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
