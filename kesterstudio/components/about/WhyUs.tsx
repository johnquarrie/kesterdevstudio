"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { reasons } from "@/constants";

const WhyUs = () => {
  return (
    <section className="p-8 bg-[#0a0a0a]">
      <h1 className="font-future text-center text-white text-3xl py-6">
        Why Us?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-[#151515] p-6 shadow-lg text-white flex flex-col items-start gap-4 transition-transform duration-300 cursor-pointer"
          >
            <Image
              src={reason.icon}
              alt={reason.title}
              width={50}
              height={60}
              className="object-cover"
            />
            <h3 className="text-xl font-semibold">{reason.title}</h3>
            <p className="text-white/60 text-sm">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
