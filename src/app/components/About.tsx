import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="max-w-7xl h-screen mx-auto p-5 flex flex-col items-center justify-center space-y-24">
      <h1 className="text-2xl uppercase tracking-[20px] text-violet-500">
        about
      </h1>
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between w-full">
        <div className="w-full md:w-[70%]">
          <div className="p-4 text-center md:text-left font-semibold text-sm">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="w-[200px] md:w-auto">
          <div className="flex items-center justify-center shadow-lg shadow-gray-400 rounded-lg bg-white h-[250px] p-2 w-full my-12 hover:scale-105 duration-300">
            <Image
              src="/first.png"
              className="rounded-lg w-full h-full object-cover"
              width={150}
              height={150}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
