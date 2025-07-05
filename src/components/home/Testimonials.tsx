import images from "@/public/images";
import Image from "next/image";
import React from "react";

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
    <div className="w-full py-40">
      <div className="container flex flex-col gap-5">
        <h1 className="font-future text-5xl text-white">testimonials</h1>

        <div className="grid grid-cols-3 gsp-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 bg-[#151515] border border-[#151515] rounded-lg"
            >
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center gap-3">
                  <div className="relative rounded-full w-12 h-12">
                    <Image
                      alt={testimonial.name}
                      src={testimonial.profile}
                      fill
                      style={{ objectFit: "cover" }}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
