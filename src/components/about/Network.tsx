"use client";

import React from "react";
import Image from "next/image";
import { network_images } from "@/constants";

const Network = () => {
  return (
    <section className="p-8">
      <h1 className="font-future text-center text-[#6C0BDB] text-2xl py-6">
        Our Network
      </h1>
      <div className="flex gap-6 overflow-x-scroll justify-evenly items-center scrollbar-hide">
        {network_images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={100}
            height={100}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default Network;
