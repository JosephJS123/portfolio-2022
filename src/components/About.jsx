import React from "react";
import joseph from "../img/joseph.jpg";
import { Arrow2 } from "./common/Arrow";

const About = () => {
  return (
    <section id="About" className="relative grid items-start h-auto grid-cols-1 gap-5 px-10 lg:my-0 md:grid-cols-2 place-items-center">
      <div className="grid gap-5 place-items-center">
        <h2 className="my-10 text-4xl font-bold uppercase border-b-8 border-solid border-[#3b82f6]">
          About me
        </h2>

        <p className="md:text-xl lg:text-2xl max-w-[50ch] font-bold">
          I'm Joseph, a passionate front-end developer* based in Lima, who
          loves to code everything he can. <br /> Always learning, my goal is to
          expand my knowlegde and grow as a developer. When I'm not coding I
          like to play volleyball.
        </p>

        <p className="font-bold">*I do what I can</p>

        <a href="poner cv" download>
          <button
            type="button"
            className="my-5 p-2 rounded-3xl text-2xl text-white uppercase bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-blue-500 hover:to-purple-500"
          >
            Download CV
          </button>
        </a>
      </div>
      <img
        className="rounded-full"
        src={joseph}
        alt="joseph"
        loading="lazy"
        width={400}
      />
      <Arrow2 />
    </section>
  );
};

export default About;
