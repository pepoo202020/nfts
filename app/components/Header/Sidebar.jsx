"use client";
import { Work_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./Sidebar.css";

const workSans = Work_Sans({ subsets: ["latin"], weight: ["400", "700"] });

const list = [
  { name: "Marketplace", link: "/marketplace" },
  { name: "Rankings", link: "/rankings" },
  { name: "Connect a wallet", link: "/wallet" },
];

export default function Sidebar({ closeSidebarHandler }) {
  const navigate = useRouter();

  const signuoBtnHandler = () => {
    navigate.push("/register");
  };
  return (
    <div className="absolute top-0 right-0 flex justify-end w-screen h-screen z-30 bg-black/40">
      <div
        className={`${workSans.className} w-1/3 bg-white text-black px-5 py-10 flex flex-col items-center justify-center gap-10`}
      >
        {list.map((listItem, index) => (
          <Link href={listItem.link} key={index}>
            {listItem.name}
          </Link>
        ))}
        <button
          onClick={signuoBtnHandler}
          className="font-semibold callToAction w-full px-[30px] py-[19px] text-white rounded-[20px] flex justify-center items-center gap-[12px] base"
        >
          <Image src="/icons/User.png" alt="icon" width={20} height={20} />
          <div>Sign Up</div>
        </button>
        <div
          onClick={() => closeSidebarHandler()}
          className="cursor-pointer transition exit"
        >
          <div className="w-[18px] ex01 absolute top-5 right-5 bg-black h-[1.5px] rotate-45"></div>
          <div className="w-[18px] ex02 absolute top-5 right-5 bg-black h-[1.5px] -rotate-45"></div>
        </div>
      </div>
    </div>
  );
}
