"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const InfiniteScrollSlider = ({
  network_images,
}: {
  network_images: { src: string; alt: string }[];
}) => {
  const duplicatedImages = [
    ...network_images,
    ...network_images,
    ...network_images,
    ...network_images,
  ];

  const [duration, setDuration] = useState(40);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDuration(window.innerWidth < 768 ? 30 : 40);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-10 items-center"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration,
          ease: "linear",
        }}
      >
        {duplicatedImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={100}
            height={100}
            className="object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollSlider;
