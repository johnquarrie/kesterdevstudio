"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { AnimatedButton } from "./button";
import useNavigate from "@/hooks/useNavigate";
import { motion, AnimatePresence } from "framer-motion";

const Menu = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.25 }}
          className="lg:hidden z-50 pt-10 2xs:pt-12 px-5 xs:px-6 sm:px-8 md:px-10 fixed top-0 right-0 h-full bg-black w-full flex flex-col"
        >
          {/* Close button */}
          <div
            onClick={toggleMenu}
            className="text-white flex items-center justify-end gap-2 sm:gap-2.5 mb-8 cursor-pointer"
          >
            <p className="text-lg 2xs:text-xl sm:text-2xl font-medium">Close</p>
            <TfiClose className="text-lg 2xs:text-xl sm:text-2xl" />
          </div>

          {/* Nav Links */}
          <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
            {navLinks.map((link, index) =>
              link.children ? (
                <div key={index}>
                  {/* Parent Link */}
                  <button
                    onClick={() =>
                      setOpenDropdown(prev =>
                        prev === link.label ? null : link.label
                      )
                    }
                    className="text-lg 2xs:text-xl sm:text-2xl text-white flex justify-between w-full"
                  >
                    <span>{link.label}</span>
                    <span>{openDropdown === link.label ? "−" : "+"}</span>
                  </button>

                  {/* Children Dropdown */}
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="pl-4 mt-2 flex flex-col gap-3 overflow-hidden"
                      >
                        {link.children.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={toggleMenu}
                            className="text-lg 2xs:text-xl sm:text-2xl text-white/80 hover:text-white transition"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-lg 2xs:text-xl sm:text-2xl text-white hover:text-white/80 transition"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Hire us button */}
          <div className="w-full mb-16 2xs:mb-20">
            <AnimatedButton
              onClick={() => {
                navigate("/#contactUs");
              }}
              clipSize={14}
              className="py-3 w-full"
            >
              Hire us
            </AnimatedButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
