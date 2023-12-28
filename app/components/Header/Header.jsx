"use client";
import Image from "next/image";
import HeaderContainer from "./HeaderContainer";
import Link from "next/link";
import { useState } from "react";
import "./Header.css";
import Sidebar from "./Sidebar";
import { usePathname, useRouter } from "next/navigation";

const burgerItemStyle = "h-[1.5px] bg-white ";

const list = [
  { name: "Marketplace", link: "/marketplace" },
  { name: "Rankings", link: "/rankings" },
  { name: "Connect a wallet", link: "/wallet" },
];

const Header = () => {
  const [sidebarShow, setSidebarShow] = useState(false);
  const navigate = useRouter();
  const routePath = usePathname();

  const openSidebar = () => {
    setSidebarShow(true);
  };
  const closeSidebar = () => {
    setSidebarShow(false);
  };
  const signuoBtnHandler = () => {
    navigate.push("/register");
  };
  console.log(routePath);
  return (
    <HeaderContainer>
      <div className="flex items-center justify-between">
        {/*LEFT SIDE*/}
        <Link href={"/"}>
          <div className="flex hover:scale-105 transition items-center gap-[12px]">
            {/*LOGO IMAGE*/}
            <Image src="/Storefront.png" alt="logo" width={32} height={32} />
            {/*LOOG TEXT*/}
            <div className="font-bold text-xl">NFT Marketplace</div>
          </div>
        </Link>
        {/*RIGHT SIDE WEBISTE*/}
        <div className={` base hidden lg:flex items-center gap-[10px]`}>
          {list.map((listItem, index) => (
            <Link
              key={index}
              href={listItem.link}
              className={`px-[15px] py-[12px] ${
                routePath === listItem.link ? "text-purple-500" : ""
              }`}
            >
              {listItem.name}
            </Link>
          ))}
          <button
            onClick={signuoBtnHandler}
            className="font-semibold callToAction w-36 h-14 hover:bg-transparent hover:border-2 hover:border-purple-500  text-white rounded-[20px] flex justify-center items-center gap-[12px] base"
          >
            <Image src="/icons/User.png" alt="icon" width={20} height={20} />
            <div>Sign Up</div>
          </button>
        </div>
        {/*RIGHT SIDE MOBILE*/}
        <div
          onClick={openSidebar}
          className="burger px-[3px] py-[5.5px] transition cursor-pointer lg:hidden flex flex-col gap-[4.5px]"
        >
          <div className={`${burgerItemStyle} bur01 w-[12.75px]`}></div>
          <div className={`${burgerItemStyle} bur02 w-[18px]`}></div>
          <div className={`${burgerItemStyle} bur03 w-[12.75px]`}></div>
        </div>
        {sidebarShow && <Sidebar closeSidebarHandler={closeSidebar} />}
      </div>
    </HeaderContainer>
  );
};

export default Header;
