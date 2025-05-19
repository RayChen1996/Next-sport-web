import React from "react";
import Image from "next/image";
import LogoPng from "@/../../public/logo.png";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="container navbar z-10 w-full bg-white md:w-2/3">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" href={"/"}>
          <Image alt="" src={LogoPng} width={150} height={50} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>最新活動</a>
          </li>
          <li>
            <a>活動心得分享</a>
          </li>

          <li>
            <a>運動賽事</a>
          </li>

          <li className="z-50">
            <details>
              <summary>我的運動</summary>
              <ul className="w-40 bg-white p-2">
                <li>
                  <a>每月進度提醒</a>
                </li>
                <li>
                  <a>設定當月目標</a>
                </li>
                <li>
                  <a>分享訓練成果</a>
                </li>
                <li>
                  <a>運動行事曆</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end relative">
        <div className="hidden gap-2 md:flex">
          <a className="btn btn-primary">註冊</a>
          <a className="btn btn-outline">登入</a>
        </div>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm absolute right-2 z-[1] mt-3 w-52 rounded-box bg-white p-2"
          >
            <li>
              <a>最新活動</a>
            </li>
            <li>
              <a>活動心得分享</a>
            </li>

            <li>
              <a>運動賽事</a>
            </li>

            <li>
              <a>我的運動</a>
              <ul className="p-2">
                <li>
                  <a>每月進度提醒</a>
                </li>
                <li>
                  <a>設定當月目標</a>
                </li>

                <li>
                  <a>分享訓練成果</a>
                </li>

                <li>
                  <a>運動行事曆</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
