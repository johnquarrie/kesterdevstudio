"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { fadeIn } from "@/utils/motion";
import { testimonials } from "@/constants";

const Testimonials = () => {
  return (
    <section className="p-8 bg-[#0a0a0a]">
      <h1 className="font-future text-center text-white text-3xl py-10">
        Testimonials
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-[#151515] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer text-white flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={64}
                height={64}
                className="rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold text-base">{testimonial.name}</h3>
                <p className="text-white/50 text-sm">{testimonial.position}</p>
              </div>
            </div>

            <p className="text-white/80 text-sm">{testimonial.statement}</p>

            <div className="flex gap-1 justify-start">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-[#6C0BDB] ${
                    i < testimonial.rating ? "opacity-100" : "opacity-20"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
