"use client";

import Animation from "@/components/home/Animation";
import ContactUs from "@/components/home/ContactUs";
import Crafts from "@/components/home/Crafts";
import Heroarea from "@/components/home/Heroarea";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("scrollToContactUs");

    if (shouldScroll === "true") {
      const interval = setInterval(() => {
        const target = document.getElementById("contactUs");
        if (target) {
          const offset = 50;
          const y =
            target.getBoundingClientRect().top + window.scrollY + offset;

          window.scrollTo({ top: y, behavior: "smooth" });
          sessionStorage.removeItem("scrollToContactUs");
          clearInterval(interval);
        }
      }, 100);

      setTimeout(() => clearInterval(interval), 5000);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <Heroarea />
      <Animation />
      <Crafts />
      <Testimonials />
      <Portfolio />
      <ContactUs />
    </div>
  );
}
