"use client";

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { fadeIn, scaleVariants, textVariant } from "@/utils/motion";
import { AnimatedButton } from "../button";
import Link from "next/link";

const categories = [
  "All",
  "UI/UX",
  "Blockchain Development",
  "Web Development",
  "2D/3D design",
  "Game Development",
  "App Development",
];

interface Upload {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  images: string[];
}

const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [projects, setProjects] = useState<Upload[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState(4);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get<{ data: Upload[] }>(
          "https://kesterwebsiteupload-production.up.railway.app/uploads"
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

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((item) => item.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

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
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(6);
              }}
              className={`uppercase flex text-center px-3 2xl:px-3.5 py-2.5 border text-[10px] xl:text-xs corner-border transition-all duration-300 ${
                activeCategory === category
                  ? "border-purple-700 bg-purple-700 text-white"
                  : "border-white/8 text-white hover:bg-white/20 bg-white/9"
              }`}
              variants={fadeIn("up", "spring", index * 0.08, 0.7)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        {loading ? (
          <p className="text-center text-gray-400 mt-10">Loading projects...</p>
        ) : error ? (
          <p className="text-center text-red-400 mt-10">{error}</p>
        ) : filteredProjects.length === 0 ? (
          <p className="text-center text-gray-400 mt-10">No projects found.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 mt-6">
              {visibleProjects.map((item, index) => (
                <Link
                  key={item._id}
                  href={`/portfolio/${item._id}`}
                  className="flex flex-col gap-3"
                >
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
                </Link>
              ))}
            </div>

            <Link
              href="/portfolio"
              className="w-fit px-8 py-3 cursor-pointer flex self-center mt-8"
            >
              <AnimatedButton clipSize={14}>view all portfolio </AnimatedButton>
            </Link>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
