"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { TfiClose } from "react-icons/tfi";
import { AnimatedButton } from "./button";

const Menu = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <div
      className={`lg:hidden z-50 pt-10 2xs:pt-12 px-5 xs:px-6 sm:px-8 md:px-10 fixed top-0 right-0 h-full bg-black w-full transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } flex flex-col`}
    >
      <div
        onClick={toggleMenu}
        className="text-white flex items-center justify-end gap-2 sm:gap-2.5 mb-8 cursor-pointer"
      >
        <p className="text-lg 2xs:text-xl sm:text-2xl font-medium">Close</p>
        <TfiClose className="text-lg 2xs:text-xl sm:text-2xl" />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            onClick={toggleMenu}
            href={link.href}
            className="text-lg 2xs:text-xl sm:text-2xl  text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="w-full mb-16 2xs:mb-20">
        <AnimatedButton clipSize={14} className="py-3 w-full">
          Hire us
        </AnimatedButton>
      </div>
    </div>
  );
};

export default Menu;
