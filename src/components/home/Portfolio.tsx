"use client";
import { tags } from "@/constants";
import { SectionWrapper } from "@/utils/hoc";
import { fadeIn, scaleVariants, textVariant } from "@/utils/motion";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { AnimatedButton } from "../button";
import axios from "axios";
import Link from "next/link";

interface Upload {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  images: string[];
}

const Portfolio = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [projects, setProjects] = useState<Upload[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  const handleOutsideClick = () => {
    setHovered(null);
  };
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get<{ data: Upload[] }>(
          "https://file-uploads-server.onrender.com/uploads"
        );
        setProjects(res.data.data);
      } catch (err: unknown) {
        console.error(err);
        setError("Failed to load projects.");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <motion.div
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      initial="hidden"
      onClick={handleOutsideClick}
      className="w-full py-5 2xs:py-10 sm:py-20"
    >
      <div className="container  flex flex-col gap-5">
        <motion.div
          variants={textVariant(0.05)}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-2"
        >
          <h1 className="font-future text-3xl 2xs:text-4xl lg:text-5xl text-white">
            Portfolio{" "}
          </h1>
        </motion.div>

        <div className="flex flex-wrap items-center gap-3.5">
          {tags.map((tag, index) => (
            <motion.div
              key={index}
              className="uppercase flex text-center px-3 2xl:px-3.5 py-2.5  bg-white/9 border border-white/8 text-white text-[10px] xl:text-xs corner-border"
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

        {loading ? (
          <p className="text-center text-gray-400 mt-10">Loading projects...</p>
        ) : error ? (
          <p className="text-center text-red-400 mt-10">{error}</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-400 mt-10">No projects found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 mt-6">
            {projects.slice(0, 6).map((item, index) => (
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
                    src={item.images[0]}
                    alt={`${item.title} image`}
                    fill
                    objectFit="cover"
                    className="z-0"
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
                  className="flex flex-col items-start gap-1"
                >
                  <p className="text-xs text-white">{item.tags.join(", ")}</p>
                  <div className="flex items-center gap-1">
                    <h2 className="text-[#FCFCFD] text-2xl">{item.title}</h2>
                    <GoArrowUpRight className="text-2xl text-primary" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        )}

        <Link
          href="/portfolio"
          className="w-fit px-8 py-3 cursor-pointer flex self-center mt-8"
        >
          <AnimatedButton clipSize={14}>view all portfolio </AnimatedButton>
        </Link>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
