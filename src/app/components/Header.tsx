import Image from "next/image";
import React from "react";
import TypeWriter from "./TypeWriter";
import CursorComponent from "./CursorComponent";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <section className="relative z-0 h-[calc(100vh-65px)] w-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-md shadow-gray-400 hover:scale-105 duration-500">
          <Image
            src="/first.png"
            className="rounded-full"
            alt="img"
            width={150}
            height={150}
          />
        </div>
        <p className="font-bold">I build responsive full stack layouts</p>
        <div className="flex justify-center space-x-2 items-center">
          <TypeWriter />
          <CursorComponent />
        </div>
        <div className="flex items-center space-x-6">
          <SocialIcon
            style={{ width: 25, height: 25 }}
            bgColor="#793fef"
            className="hover:scale-125 duration-200"
            url="https://twitter.com"
          />
          <SocialIcon
            style={{ width: 25, height: 25 }}
            bgColor="#793fef"
            className="hover:scale-125 duration-200"
            url="https://twitter.com"
          />
          <SocialIcon
            style={{ width: 25, height: 25 }}
            bgColor="#793fef"
            className="hover:scale-125 duration-200"
            url="https://twitter.com"
          />
          <SocialIcon
            style={{ width: 25, height: 25 }}
            bgColor="#793fef"
            className="hover:scale-125 duration-200"
            url="https://twitter.com"
          />
        </div>
        <div className="h-[30%] -z-10 absolute w-[50%] md:w-[20%] opacity-50 fliter blur-3xl bg-gradient-to-r from-fuchsia-500 to-indigo-600" />
      </div>
    </section>
  );
};

export default Header;
