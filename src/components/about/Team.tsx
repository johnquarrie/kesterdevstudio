"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { team } from "@/constants";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const Team = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [velocity, setVelocity] = useState(20);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;
      setVelocity(screenWidth < 768 ? 60 : 20);
    }
  }, []);

  useAnimationFrame((t, delta) => {
    if (!isPaused && containerRef.current) {
      const moveBy = (velocity * delta) / 1000;
      const prev = x.get();
      const containerWidth = containerRef.current!.scrollWidth / 2;
      const newX = prev - moveBy;
      x.set(Math.abs(newX) >= containerWidth ? 0 : newX);
    }
  });

  const duplicatedTeam = [...team, ...team];

  return (
    <section className="lg:p-8 flex flex-col items-center bg-[#0a0a0a] overflow-hidden">
      <h1 className="font-future text-center text-white text-3xl py-6">
        Our Team
      </h1>
      <p className="text-sm 2xs:text-base text-center text-white/50 w-[90%] mb-6 lg:w-[50%] xl:w-[50%]">
        We&apos;re a vibrant and versatile bunch here at Kester Dev Studio, a
        collective of creative minds passionate about bringing digital visions
        to life.
      </p>

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div className="flex gap-6 items-center" style={{ x }}>
          {duplicatedTeam.map((member, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer min-w-[250px] h-[400px] flex-shrink-0"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-700/80 via-purple-700/10 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-white/70 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
