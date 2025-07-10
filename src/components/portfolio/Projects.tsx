"use client";

import { fadeIn, scaleVariants, textVariant } from "@/utils/motion";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { portfolio } from "@/constants/index";

const categories = [
  "All",
  "UI/UX Design",
  "App Development",
  "Game Development",
  "Blockchain Development",
  "3D Design",
];

const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  const filteredPortfolio =
    activeCategory === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === activeCategory);

  return (
    <motion.div
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      initial="hidden"
      className="w-full py-10"
    >
      <div className="container flex flex-col gap-5">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-3.5">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`uppercase flex text-center px-3 2xl:px-3.5 py-2.5 border text-[10px] xl:text-xs corner-border transition-all duration-300 ${
                activeCategory === category
                  ? "border-purple-700 bg-purple-700 text-white"
                  : "border-white/8 text-white hover:bg-white/20 bg-white/9"
              }`}
              variants={fadeIn("up", "spring", index * 0.08, 0.7)}
              initial="hidden"
              animate="show"
            >
              {category}
              {activeCategory !== category && (
                <>
                  <span className="corner-tl"></span>
                  <span className="corner-bl"></span>
                </>
              )}
            </motion.button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 mt-6">
          {filteredPortfolio.map((item, index) => (
            <Link href={`/portfolio/${item.id}`} key={index}>
              <div key={index} className="flex flex-col gap-3">
                <motion.div
                  variants={scaleVariants}
                  whileInView={scaleVariants.whileInView}
                  className="cursor-pointer relative w-full h-60 md:h-96 overflow-hidden shadow-lg"
                  onHoverStart={() => setHovered(index)}
                  onHoverEnd={() => setHovered(null)}
                >
                  <div
                    className={`absolute inset-0 bg-black ${
                      hovered === index ? "opacity-80" : "opacity-0"
                    } z-10 transition-opacity duration-300 backdrop-blur-sm`}
                  ></div>

                  <Image
                    src={item.image}
                    alt={`${item.id} image`}
                    fill
                    objectFit="cover"
                    className="z-0"
                    quality={100}
                  />

                  {hovered === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute z-20 top-3 px-4 flex flex-col items-center justify-center w-full h-full"
                    >
                      <p className="text-white text-base text-center">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </motion.div>

                <motion.div
                  variants={textVariant(0.1)}
                  className="flex flex-col items-start justify-start gap-1"
                >
                  <p className="text-xs text-white">{item.tag}</p>
                  <div className="flex items-center gap-1">
                    <h2 className="text-[#FCFCFD] text-2xl">{item.name}</h2>
                    <GoArrowUpRight className="text-2xl text-primary" />
                  </div>
                </motion.div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPortfolio.length === 0 && (
          <p className="text-gray-500 text-center mt-8">No projects found.</p>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
