"use client";

import images from "@/public/images";
import Image from "next/image";
import React from "react";
import { AnimatedButton } from "../button";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const AboutHeader = () => {
  return (
    <header className="relative w-full min-h-screen h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={images.aboutHeader}
        alt="Hero"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Top Right Haze */}
      <div className="absolute top-40 left-0 w-80 h-80 rotate-180 z-0 pointer-events-none">
        <Image
          src={images.haze}
          alt="Haze Top Right"
          fill
          style={{ objectFit: "contain" }}
          className="opacity-100"
          priority
        />
      </div>

      {/* Bottom Left Haze */}
      <div className="absolute bottom-20 right-0 w-80 h-80 z-0 pointer-events-none">
        <Image
          src={images.haze}
          alt="Haze Bottom Left"
          fill
          style={{ objectFit: "contain" }}
          className="opacity-100"
          priority
        />
      </div>

      {/* Text & Button */}
      <div className="flex flex-col justify-center text-center items-center gap-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] z-10">
        <motion.div
          variants={textVariant(0.05)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-2"
        >
          <h1 className="text-[1.6rem] max-2xs:leading-[1.2] 2xs:text-3xl xs:text-4xl 2xl:text-5xl font-future text-white">
            We are a freelance creative technology studio
          </h1>
          <p className="text-sm 2xs:text-base text-white/50 w-[90%] mt-4 lg:w-[80%] xl:w-[70%]">
            Building immersive digital experiences through design, code, and
            storytelling.
          </p>
          <AnimatedButton clipSize={14} className="w-fit px-8 py-3.5 mt-4">
            get started
          </AnimatedButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="z-40 absolute bottom-16 xl:bottom-24 w-full flex justify-center items-center">
        <a
          href="#animation"
          className="cursor-pointer inline-block p-4 hover:scale-110 transition-transform duration-200"
        >
          <motion.div
            initial={{ y: 0, opacity: 0.7 }}
            animate={{
              y: [0, 8, 0, 4, 0],
              opacity: [0.7, 1, 0.7, 1, 0.7],
              scale: [1, 1.08, 1, 1.04, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <HiOutlineChevronDoubleDown className="text-white text-4xl" />
          </motion.div>
        </a>
      </div>
    </header>
  );
};

export default AboutHeader;
