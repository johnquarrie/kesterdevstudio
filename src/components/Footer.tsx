"use client";

import images from "@/public/images";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { socials } from "@/constants";

const footerLinks = [
  {
    label: "Home",
    value: "/",
  },
  {
    label: "About",
    value: "/about",
  },
  {
    label: "Contact",
    value: "/#contactUs",
  },
  {
    label: "Portfolio",
    value: "/portfolio",
  },
  {
    label: "FAQs",
    value: "/about/#faqs",
  },
  {
    label: "Testimonials",
    value: "#testimonials",
  },
];

const Footer = () => {
  return (
    <div className=" w-full h-full  ">
      <div className=" container w-full grid grid-cols-1 lg:grid-cols-2 max-xs:gap-8 max-lg:gap-10 py-8 sm:py-12 lg:py-16 border-b border-[#393939]">
        <div className="flex flex-col gap-2">
          <Image
            alt="logo"
            className="w-24 2xs:w-28 xs:w-32"
            src={images.logo}
          />
          <p className="text-sm 2xs:text-base text-[#C6C6C6]">
            Your all-in-one studio for everything digital
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-5">
          {footerLinks.map((footer, index) => (
            <Link
              className="text-sm 2xs:text-base font-medium text-[#C6C6C6] transition-transform duration-200 hover:scale-105"
              key={index}
              href={footer.value}
            >
              {footer.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="container w-full py-8 sm:py-12 lg:py-16 flex max-md:flex-col max-md:gap-6 justify-between ">
        <div className="flex max-2xs:flex-col max-2xs:gap-4 2xs:items-center 2xs:divide-x divide-[#393939] text-xs text-[#C6C6C6]">
          <p className="2xs:pr-2 sm:pr-4">
            All Rights Reserved © Kester Dev Studios
          </p>
          <p className="2xs:pl-2 sm:pl-4">Terms and Conditions</p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social, index) => (
            <social.icon
              key={index}
              onClick={() => {
                window.open(social.url, "_blank");
              }}
              className="text-[#E7E9EF] text-xl cursor-pointer hover:text-primary"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
