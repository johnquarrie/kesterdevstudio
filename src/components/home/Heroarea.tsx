"use client";

import images from "@/public/images";
import Image from "next/image";
import React from "react";
import { AnimatedButton } from "../button";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/utils/hoc";
import { textVariant, fadeIn } from "@/utils/motion";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { tags } from "@/constants";

const Heroarea = () => {
  return (
    <div className="relative w-full min-h-screen h-full flex items-center lg:items-end">
      <Image
        src={images.heroBg}
        alt="Hero"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="z-0"
        priority
      />

      <div className="container relative lg:mb-24 z-30 w-full flex gap-24 xl:gap-28 2xl:gap-40 3xl:gap-48 items-end justify-between">
        <div className="relative flex flex-col gap-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
          <motion.div
            variants={textVariant(0.05)}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-2"
          >
            <h1 className="text-[1.6rem] max-2xs:leading-[1.2] 2xs:text-3xl xs:text-4xl 2xl:text-5xl font-future text-white">
              Your all-in-one studio for everything digital
            </h1>
            <p className="text-sm 2xs:text-base text-white/50 w-[90%] lg:w-[80%] xl:w-[70%]">
              From games to apps, web to blockchain, AI, 2D and 3D animation. We
              blend creativity and code to bring bold ideas to life. If
              it&apos;s digital, we build it.
            </p>
          </motion.div>
          <AnimatedButton
            clipSize={14}
            className="w-fit px-8 py-3 cursor-pointer"
          >
            get started
          </AnimatedButton>
        </div>

        <div className="w-[40%] xl:w-[50%] hidden lg:flex flex-col justify-end items-end gap-4 xl:pl-36 2xl:pl-40">
          <p className="text-white/88 text-base 2xl:text-lg">
            Through bold design, intelligent systems, and dimensional
            storytelling, we build interactive realities that connect, move, and
            inspire.
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            {tags.map((tag, index) => (
              <motion.div
                key={index}
                className="uppercase flex text-center px-3 2xl:px-3.5 py-2.5 2xl:py-3 bg-white/9 border border-white/8 text-white text-[10px] xl:text-xs corner-border"
                variants={fadeIn("up", "spring", index * 0.08, 0.7)}
                initial="hidden"
                animate="show"
              >
                {tag}
                <span className="corner-tl"></span>
                <span className="corner-bl"></span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="z-30 absolute bottom-16 xl:bottom-24 left-1/2 transform -translate-x-1/2 ">
        <a
          href="#animation"
          className="cursor-pointer inline-block p-4 hover:scale-110 transition-transform duration-200"
          style={{ cursor: "pointer" }}
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
    </div>
  );
};

export default SectionWrapper(Heroarea, "heroarea");
