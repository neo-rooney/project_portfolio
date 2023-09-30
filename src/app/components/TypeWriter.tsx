"use client";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
type Props = {};

const TypeWriter = (props: Props) => {
  const [text] = useTypewriter({
    words: ["Hi, I'm Rooney", "안녕하세요. Rooney입니다.", "Web Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <h1 className="text-3xl md:text-5xl font-extrabold text-center">{text}</h1>
  );
};

export default TypeWriter;
