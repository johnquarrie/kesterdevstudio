"use client";

import { SectionWrapper } from "@/utils/hoc";
import React, { useState, useEffect } from "react";
import EarthCanvas from "../canvas/Earth";
import { GoStack } from "react-icons/go";
import { CiGlobe, CiPen } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { SlEyeglass } from "react-icons/sl";
import { BsShieldLock } from "react-icons/bs";
import { AiOutlinePicture } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useWindowSize } from "@/hooks/useWindowSize";

const crafts = [
  {
    label: "App",
    position: {
      desktop: { bottom: "32%", left: "5%" },
      tab: { bottom: "30%", left: "12%" },
      miniTab: { bottom: "18%", left: "25%" },
      mobile: { bottom: "18%", left: "35%" },
    },
    icon: GoStack,
  },
  {
    label: "UI/UX",
    position: {
      desktop: { top: "35%", left: "5%" },
      tab: { bottom: "25%", left: "60%" },
      miniTab: { bottom: "20%", left: "65%" },
      mobile: { bottom: "20%", left: "70%" },
    },
    icon: CiPen,
  },
  {
    label: "Development",
    position: {
      desktop: { top: "12%", right: "20%" },
      tab: { top: "22%", right: "12%" },
      miniTab: { top: "16%", right: "5%" },
      mobile: { top: "16%", right: "3%" },
    },
    icon: VscSettings,
  },
  {
    label: "Game",
    position: {
      desktop: { top: "38%", left: "20%" },
      tab: { bottom: "40%", left: "8%" },
      miniTab: { bottom: "30%", left: "2%" },
      mobile: { bottom: "25%", left: "2%" },
    },
    icon: SlEyeglass,
  },
  {
    label: "web",
    position: {
      desktop: { top: "55%", right: "1%" },
      tab: { top: "30%", right: "2%" },
      miniTab: { top: "25%", right: "8%" },
      mobile: { top: "25%", right: "8%" },
    },
    icon: CiGlobe,
  },
  {
    label: "web3 & blockchain",
    position: {
      desktop: { bottom: "0%", left: "25%" },
      tab: { bottom: "-20%", left: "8%" },
      miniTab: { bottom: "-15%", left: "0%" },
      mobile: { bottom: "-16%", left: "-10%" },
    },
    icon: BsShieldLock,
  },
  {
    label: "2D/3D Animation",
    position: {
      desktop: { bottom: "40%", right: "2%" },
      tab: { bottom: "60%", right: "1%" },
      miniTab: { bottom: "60%", right: "1%" },
      mobile: { bottom: "60%", right: "1%" },
    },
    icon: AiOutlinePicture,
  },
];

const Crafts = () => {
  const { width } = useWindowSize();
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side before rendering positioned elements
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Helper function to get current breakpoint
  const getBreakpoint = (width: number) => {
    if (width > 1025) return "desktop";
    if (width > 576) return "tab";
    if (width > 480) return "miniTab";
    return "mobile";
  };

  // Don't render positioned elements until we're sure we're on client
  if (!isClient || !width) {
    return (
      <div className="w-full relative flex h-screen justify-center items-center overflow-hidden">
        {/* Background blur effects */}
        <div
          style={{
            position: "absolute",
            width: "285.38px",
            height: "285.38px",
            top: "-0.38px",
            left: "-124.88px",
            borderRadius: "50%",
            background: "#6C0BDB",
            opacity: 0.3,
            filter: "blur(107.09px)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "220.63px",
            height: "220.63px",
            top: "371.13px",
            right: "-5%",
            borderRadius: "50%",
            background: "#6C0BDB",
            opacity: 0.5,
            filter: "blur(100.85px)",
            zIndex: 0,
          }}
        />

        {/* Earth Canvas - centered */}
        <div className="absolute inset-0 flex justify-center items-center z-5">
          <EarthCanvas scale={2} />
        </div>

        {/* Centered text overlay */}
        <div className="text-white absolute w-full h-full flex flex-col justify-center items-center gap-3 xs:gap-5 text-center z-10">
          <h1 className="w-[95%] 2xs:w-[90%] md:w-[75%] lg:w-[70%] xl:w-[75%] 2xl:w-[60%] text-3xl 2xs:text-4xl xs:text-5xl xl:text-6xl font-future shadow-3xl">
            We Turn Imagination Into Interactive Reality
          </h1>
          <p className="text-center text-sm sm:text-base w-[80%] 2xs:w-[70%] xs:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[40%]">
            Bringing bold ideas to life through immersive digital experiences.
          </p>
        </div>
      </div>
    );
  }

  const currentBreakpoint = getBreakpoint(width);

  return (
    <div className="w-full relative flex h-screen justify-center items-center overflow-hidden">
      {/* Background blur effects */}
      <div
        style={{
          position: "absolute",
          width: "285.38px",
          height: "285.38px",
          top: "-0.38px",
          left: "-124.88px",
          borderRadius: "50%",
          background: "#6C0BDB",
          opacity: 0.3,
          filter: "blur(107.09px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "220.63px",
          height: "220.63px",
          top: "371.13px",
          right: "-5%",
          borderRadius: "50%",
          background: "#6C0BDB",
          opacity: 0.5,
          filter: "blur(100.85px)",
          zIndex: 0,
        }}
      />

      {/* Earth Canvas - centered */}
      <div className="absolute inset-0 flex justify-center items-center z-5">
        <EarthCanvas
          scale={
            width > 1025
              ? 2.5
              : width < 1025 && width > 640
              ? 2.25
              : width < 640 && width > 576
              ? 2
              : width < 576 && width > 480
              ? 1.75
              : 1.4
          }
        />
      </div>

      {/* Scattered craft tags */}
      {crafts.map((craft, index) => {
        const pos = craft.position[currentBreakpoint];

        return (
          <motion.div
            key={index}
            className="absolute uppercase flex items-center gap-1.5 justify-center px-3 2xl:px-3.5 py-2.5 2xl:py-3 bg-white/9 border border-white/8 text-white text-[8px] xs:text-[10px] xl:text-xs corner-border"
            variants={fadeIn("up", "spring", index * 0.08, 0.7)}
            initial="hidden"
            animate="show"
            style={{
              ...pos,
              background:
                "linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), linear-gradient(90deg, #6C0BDB 0%, rgba(108, 11, 219, 0.208) 20%, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0) 60%, rgba(108, 11, 219, 0.208) 80%, #6C0BDB 100%)",
              zIndex: 20,
            }}
          >
            <craft.icon className="text-white text-base 2xs:text-lg sm:text-xl" />
            {craft.label}
            <span className="corner-tl"></span>
            <span className="corner-bl"></span>
          </motion.div>
        );
      })}

      {/* Centered text overlay */}
      <div className="text-white absolute w-full h-full flex flex-col justify-center items-center gap-3 xs:gap-5 text-center z-10">
        <h1 className="w-[95%] 2xs:w-[90%] md:w-[75%] lg:w-[70%] xl:w-[75%] 2xl:w-[60%] text-3xl 2xs:text-4xl xs:text-5xl xl:text-6xl font-future shadow-3xl">
          We Turn Imagination Into Interactive Reality
        </h1>
        <p className="text-center text-sm sm:text-base w-[80%] 2xs:w-[70%] xs:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[40%]">
          Bringing bold ideas to life through immersive digital experiences.
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(Crafts, "crafts");
