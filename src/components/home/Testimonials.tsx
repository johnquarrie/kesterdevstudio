"use client";
import images from "@/public/images";
import { SectionWrapper } from "@/utils/hoc";
import { textVariant, zoomIn } from "@/utils/motion";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi";

const Stars = ({ stars }: { stars: number }) => (
  <div className="flex items-center text-2xl">
    {[...Array(5)].map((_, i) =>
      i < stars ? (
        <HiStar key={i} className="text-[#6C0BDB]" />
      ) : (
        <HiOutlineStar key={i} className="text-[#A6A6A680]" />
      )
    )}
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      profile: images.testimonials.test1,
      title: "Business Owner, Clumps Kitchen",
      name: "Sarah Clumps",
      testimonial:
        "“Kester Dev Studios brought our vision to life better than we imagined. The design, the animations, the flow, everything was top-tier. Smooth process throughout.”",
      stars: 5,
    },
    {
      profile: images.testimonials.test2,
      title: "CEO, Fimex Group",
      name: "Samuel Dormandy",
      testimonial:
        "“They built our app, our website, and even custom 3D elements. The quality and attention to detail were incredible. Will definitely work with them again.”",
      stars: 5,
    },
    {
      profile: images.testimonials.test3,
      title: "Product Manager, Canty Co.",
      name: "Ashley West",
      testimonial:
        "“We needed a full-stack team that could handle both design and development, and Kester delivered. Creative, professional, and fast. Highly recommend.”",
      stars: 4,
    },
  ];
  return (
    <div className="w-full py-5 2xs:py-10 sm:py-20">
      <div className="container w-full lg:w-[90%] 2xl:w-[85%] flex flex-col justify-center items-center gap-6">
        <motion.div
          variants={textVariant(0.05)}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-2"
        >
          <h1 className="font-future text-3xl 2xs:text-4xl lg:text-5xl text-white text-center">
            testimonials
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={zoomIn(index * 0.15, 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-5 bg-[#151515] border border-[#151515] rounded-lg px-5 py-5"
            >
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center gap-3">
                  <div className="relative rounded-full w-12 h-12">
                    <Image
                      alt={testimonial.name}
                      src={testimonial.profile}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base font-semibold text-[#F2F2F2]">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-[#A6A6A6]">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="text-base italic text-[#A6A6A6]">
                  {testimonial.testimonial}
                </p>
              </div>

              <Stars stars={testimonial.stars} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Testimonials, "testimonial");
