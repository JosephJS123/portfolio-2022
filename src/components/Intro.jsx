import React from "react";
import Marquee from "react-fast-marquee";
import imgIntro from "../img/intro.svg";
import { Arrow } from "./common/Arrow";

const Intro = () => {
  return (
    <header className="overflow-hidden">
      <Marquee
        className="mt-10 md:mt-5"
        gradient={false}
        speed={100}
        style={{ width: "130%" }}
      >
        <span className="border-b-[20px] md:border-b-[30px] lg:border-b-[30px] border-[#3b82f6]">
          <div
            className="text-center text-7xl md:text-8xl mt-12 font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-green-500 via-blue-500 to-purple-500
            animate-text"
          >
            <h1>WEB DEVELOPER</h1>
          </div>
        </span>
      </Marquee>

      <main className="flex flex-col md:flex-row gap-16 justify-evenly items-center mt-8 md:mt-32">
        <div className="flex flex-col text-5xl md:text-7xl">
          <span>HELLO..</span>
          <span>I'M</span>
          <span>JOSEPH</span>
          <span>GUERRERO</span>
        </div>

        <div>
          <img
            className="relative w-full max-w-lg overflow-hidden"
            src={imgIntro}
            alt="img intro"
          />
        </div>
      </main>
      <div className="flex justify-center my-10">
        <Arrow />
      </div>
    </header>
  );
};

export default Intro;
