"use client";
import React from "react";

import { SparklesCore } from "../subcomponents/sparkles";
import { Css, Rct, Html, Tail, Js, PowerBtn, Sql } from "./AllSvgs";
import PowerButton from "../subcomponents/PowerButton";
import SocialIcons from "../subcomponents/SocialIcons";
import { ThemeProvider } from "styled-components";
import { DarkTheme, lightTheme } from "./theme";
import { motion } from "framer-motion";
import space from "../assets/images/skills.png";
import { Vortex } from "../subcomponents/vortex";
import BigTitlte from "../subcomponents/BigTitle";

export default function Skills() {
  return (
    <ThemeProvider theme={lightTheme}>
      {/* <div className="h-screen  relative w-full bg-black flex  items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <PowerButton />
        </div>
        <motion.div
          className=" font-[Ubuntu] flex flex-col items-center  justify-evenly px-4  rounded-md  w-[70%] h-[70%] md:w-[60%]  md:h-[60%] lg:w-1/2 lg:h-1/2  z-20"
          initial={{ x: -1200, scale: 0, opacity: 0 }}
          animate={{ x: 0, scale: [0.5, 1], opacity: [0.5, 1] }}
          transition={{ type: "spring", duration: 5 }}
        >
          <span className="flex items-center text-[#FCF6F4] justify-center  gap-4 md:text-xl text-lg font-bold  lg:text-3xl">
            <Develope className="bg-[#FCF6F4]" width={40} height={40} />
            Skills
          </span>
          <p className="text-[#FCF6F4]  lg:text-lg sm:text-md lg:tracking-widest  leading-6 lg:leading-7">
            I possess a comprehensive set of skills essential for crafting
            exceptional web experiences. I am proficient in HTML5 for
            structuring content and CSS3 for creating visually appealing
            designs. JavaScript (ES6+) is my tool of choice for adding
            interactivity and dynamic functionality to web pages. Additionally,
            I specialize in responsive design, ensuring that websites adapt
            seamlessly across various devices. I am experienced in utilizing CSS
            frameworks such as Tailwind CSS for rapid prototyping. With
            knowledge of frontend frameworks like React I can build robust and
            scalable web applications. My skills also extend to API integration,
            that the web applications I develop are efficient, accessible, and
            user-friendly."
          </p>
        </motion.div>
        <motion.div
          className=" absolute top-10 right-10  animate-pulse w-[20vw]  "
          initial={{ x: -1200, opacity: 0 }}
          animate={{ x: 0, scale: [0.5, 0.5, 1], opacity: [0.5, 1] }}
          transition={{ type: "spring", duration: 4 }}
        >
          <img
            className=" w-full h-auto object-contain bg-yellow-500 rounded-full "
            src={space}
            alt="absolute"
          />
        </motion.div>
      </div> */}
      <div className="w-[calc(100%-rem)] mx-auto   h-screen overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col mx-auto justify-center px-2 md:px-10 py-4 max-w-lg h-full"
        >
          <PowerButton />
          <h2 className="text-[#FCF6F4] absolute top-20 lg:top-24 text-2xl md:text-6xl font-bold text-center">
            Skills
          </h2>
          <div className="grid grid-cols-3 gap-6 text-white lg:grid-cols-6 lg:gap-44">
            <div className="flex flex-col items-center">
              <Html className="h-28 w-28 " />
              <p>HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <Css className="h-28 w-28 " />
              <p>CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <Rct className="h-28 w-28 " />
              <p>React</p>
            </div>
            <div className="flex flex-col items-center">
              <Js className="h-28 w-28" />
              <p>Javascript</p>
            </div>
            <div className="flex flex-col items-center">
              <Tail className="h-28 w-28 " />
              <p>TailwindCSS</p>
            </div>
            <div className="flex flex-col items-center">
              <Sql className="h-28 w-28 " />
              <p>SQL</p>
            </div>
          </div>
        </Vortex>
      </div>
    </ThemeProvider>
  );
}
