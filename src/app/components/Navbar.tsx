import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="max-w-7xl mx-auto p-5 flex items-center justify-between">
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
      <div className="flex items-center space-x-4 md:space-x-8">
        <Link
          href="/projects"
          className="text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base"
        >
          Projects
        </Link>
        <Link
          href="/blogs"
          className="text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base"
        >
          Blogs
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
