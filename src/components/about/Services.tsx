"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useWindowSize } from "@/hooks/useWindowSize";
import { services } from "@/constants";

const Services = () => {
  const { width } = useWindowSize();
  const clipSize = width < 400 ? 10 : 30;
  const clipSize2 = width < 400 ? 10 : 50;

  return (
    <section className="p-8 bg-[#0a0a0a]">
      <h1 className="font-future text-center text-white text-3xl py-6">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            style={{
              clipPath: `polygon(${clipSize}px 0, 100% 0, 100% calc(100% - ${clipSize}px), calc(100% - ${clipSize}px) 100%, 0 100%, 0 ${clipSize}px)`,
            }}
            className="bg-[#151515] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div
              className="relative w-full p-4 h-60 overflow-hidden"
              style={{
                clipPath: `polygon(${clipSize2}px 0, 100% 0, 100% calc(100% - ${clipSize2}px), calc(100% - ${clipSize2}px) 100%, 0 100%, 0 ${clipSize2}px)`,
              }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                style={{
                  objectFit: "cover",
                  clipPath: `polygon(${clipSize2}px 0, 100% 0, 100% calc(100% - ${clipSize2}px), calc(100% - ${clipSize2}px) 100%, 0 100%, 0 ${clipSize2}px)`,
                }}
                className="brightness-75 p-4 hover:brightness-90 transition-all duration-300"
              />
            </div>

            <div className="p-5">
              <h2 className="text-white font-future text-lg mb-2">
                {service.title}
              </h2>
              <p className="text-white/60 text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
