"use client";
import images from "@/public/images";
import { SectionWrapper } from "@/utils/hoc";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import { AnimatedButton } from "./button";
import { textVariant } from "@/utils/motion";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useRouter } from "next/navigation";

const Cta = () => {
  const { width } = useWindowSize();
  const clipSize = width > 640 ? 40 : 20;
  const router = useRouter();

  const handleClick = () => {
    sessionStorage.setItem("scrollToContactUs", "true");
    router.push("/#contactUs");
  };
  return (
    <div className=" w-full h-full py-5 2xs:py-10 sm:py-20">
      <div
        style={{
          clipPath: `polygon(${clipSize}px 0, 100% 0, 100% calc(100% - ${clipSize}px), calc(100% - ${clipSize}px) 100%, 0 100%, 0 ${clipSize}px)`,
        }}
        className="relative container w-full bg-black/20 border border-black/20 py-20 px-4 sm:px-8 flex justify-center items-center"
      >
        <Image
          src={images.ctaBg}
          alt="Hero"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="z-0"
          priority
        />

        <div className="relative flex flex-col justify-center items-center gap-4 w-full 2xs:w-[85%] xs:w-[75%] sm:w-[65%] md:w-[55%] lg:w-[40%] 2xl:w-[30%]">
          <motion.div
            variants={textVariant(0.05)}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-2 justify-center items-center text-center text-white "
          >
            <h1 className="text-3xl xs:text-4xl font-future ">
              Have an idea? Let’s help!{" "}
            </h1>
            <p className="text-sm 2xs:text-base">
              Reach out to us, Let’s start working together.
            </p>
          </motion.div>
          <AnimatedButton
            clipSize={14}
            className="w-fit px-8 py-3 cursor-pointer mt-3"
            onClick={handleClick}
          >
            work with us
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Cta, "cta");
