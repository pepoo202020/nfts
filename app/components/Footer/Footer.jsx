import Link from "next/link";
import MainContainer from "../MainContainer";
import Image from "next/image";
import { RxDiscordLogo } from "react-icons/rx";
import { FiYoutube, FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

const list = [
  { name: "Marketplace", link: "/marketplace" },
  { name: "Rankings", link: "/rankings" },
  { name: "Connect a wallet", link: "/wallet" },
];

export const Footer = () => {
  return (
    <MainContainer>
      {/*CONTENT*/}
      <div className="flex mb-7 flex-col lg:flex-row items-start gap-7 lg:gap-0 lg:justify-between">
        <div className="flex flex-col items-start gap-7">
          {/*LOGO*/}
          <Link href={"/"}>
            <div className="flex hover:scale-105 transition items-center gap-[12px]">
              {/*LOGO IMAGE*/}
              <Image src="/Storefront.png" alt="logo" width={32} height={32} />
              {/*LOOG TEXT*/}
              <div className="font-bold text-xl">NFT Marketplace</div>
            </div>
          </Link>
          <div className="w-full lg:w-60 text-stone-300 base font-normal leading-snug flex flex-col items-start gap-5">
            {/*DESCRIPTION*/}
            <div>NFT marketplace UI created with Anima for Figma.</div>
            {/*community*/}
            <div>Join our community</div>
            {/*SOCIAL LINKS*/}
            <div className="flex text-4xl  transition-all items-start justify-start gap-2.5">
              <Link href={"#"} className="hover:text-3xl hover:text-purple-500">
                <RxDiscordLogo />
              </Link>
              <Link href={"#"} className="hover:text-3xl hover:text-purple-500">
                <FiYoutube />
              </Link>
              <Link href={"#"} className="hover:text-3xl hover:text-purple-500">
                <FiTwitter />
              </Link>
              <Link href={"#"} className="hover:text-3xl hover:text-purple-500">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-60 flex flex-col  items-start gap-6">
          <div
            className={`${spaceMono.className} text-white text-xl font-bold  capitalize leading-9`}
          >
            Explore
          </div>
          <div className="flex-col justify-start items-start gap-5 flex text-stone-300 text-base font-normal leading-snug">
            {list.map((listItem, index) => (
              <Link key={index} href={listItem.link}>
                {listItem.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-96 flex-col justify-start items-start gap-6 flex">
          <div
            className={`text-white text-xl font-bold  capitalize leading-9 ${spaceMono.className}`}
          >
            Join our weekly digest
          </div>
          <div className="flex-col justify-start items-start gap-5 flex">
            <div className="w-full lg:w-80 text-stone-300 text-base font-normal  leading-snug">
              Get exclusive promotions & updates straight to your inbox.
            </div>
            <div className="w-full bg-white py-4 px-3 overflow-hidden rounded-2xl relative">
              <input
                placeholder="Enter your email here"
                className="w-full h-full border-none outline-none text-zinc-800 text-base font-normal"
              />
              <button className="callToAction  text-white text-base font-semibold  leading-snug absolute top-0 right-0 h-full flex items-center rounded-2xl px-5">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*LINE&&AT*/}
      <div className="w-full flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch h-px border border-zinc-500"></div>
        <div className="self-stretch text-stone-300 text-xs font-normal  leading-3">
          Ⓒ NFT Market. Use this template freely.
        </div>
      </div>
    </MainContainer>
  );
};
