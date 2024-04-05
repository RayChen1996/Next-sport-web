import React from "react";
import Image from "next/image";
import LogoPng from "@/../../public/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-4 bg-white text-base-content">
        <Image alt="" src={LogoPng} width={150} height={50} />
      </footer>
      <footer className="footer footer-center p-4 bg-white text-base-content">
        <aside>
          <p>Copyright 2022 六角學院 Vue 直播班 SideProject</p>
        </aside>
      </footer>
    </>
  );
}
