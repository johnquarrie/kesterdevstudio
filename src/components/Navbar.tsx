"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import images from "@/public/images";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { AnimatedButton } from "./button";
import { TbMenu3 } from "react-icons/tb";
import { navLinks } from "@/constants";
import Menu from "./Menu";
import useNavigate from "@/hooks/useNavigate";

/* ----------------------------------
   Dummy Audio Visualizer (FIXED)
-----------------------------------*/
const DummyAudioVisualizer = ({ isActive = false }: { isActive?: boolean }) => {
  const [mounted, setMounted] = useState(false);
  const [bars, setBars] = useState<number[]>([]);

  // Client-only mount
  useEffect(() => {
    setMounted(true);
    setBars([2, 4, 3, 6, 5, 2, 1, 4, 2, 5, 6, 8, 6, 2, 4]);
  }, []);

  // Animate only after mount
  useEffect(() => {
    if (!mounted || !isActive) return;

    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.random() * 12 + 2));
    }, 150);

    return () => clearInterval(interval);
  }, [mounted, isActive]);

  // Prevent SSR mismatch
  if (!mounted) return null;

  return (
    <div
      style={{
        backgroundColor: "#6D0BDB",
        borderRadius: "10px 4px 12px 4px",
        padding: "8px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "30px",
        minWidth: "60px",
        position: "relative",
        boxSizing: "border-box",
        gap: "2px",
        clipPath: "polygon(16px 0px, 100% 0px, 100% 100%, 0px 100%, 0px 16px)",
      }}
    >
      {bars.map((height, index) => (
        <div
          key={index}
          style={{
            width: "2px",
            height: `${height}px`,
            backgroundColor: "#fff",
            borderRadius: "1px",
            transition: "height 0.15s ease-in-out",
          }}
        />
      ))}
    </div>
  );
};

/* ----------------------------------
   Navbar
-----------------------------------*/
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [openService, setOpenService] = useState(false);

  const prevScrollPosRef = useRef(0);

  // Scroll behavior (client-only)
  useEffect(() => {
    prevScrollPosRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPosRef.current > currentScrollPos;

      setVisible(currentScrollPos < 10 || isScrollingUp);
      setIsScrolled(currentScrollPos > 0);

      prevScrollPosRef.current = currentScrollPos;
    };

    let timeout: NodeJS.Timeout | null = null;
    const throttled = () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          handleScroll();
          timeout = null;
        }, 10);
      }
    };

    window.addEventListener("scroll", throttled);
    return () => {
      window.removeEventListener("scroll", throttled);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <motion.div
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "backdrop-blur-lg" : "bg-transparent"
        }`}
        initial={{ translateY: 0 }}
        animate={{ translateY: visible ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container flex items-center justify-between py-6">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <Image alt="logo" src={images.logo} className="w-28" />
            <hr className="w-0.5 h-5 bg-white rounded-full" />
            <div className="flex items-center gap-2">
              <div
                onClick={() => setIsAudioOn(prev => !prev)}
                className="cursor-pointer"
              >
                <DummyAudioVisualizer isActive={isAudioOn} />
              </div>
              <p className="text-white text-sm">{isAudioOn ? "ON" : "OFF"}</p>
            </div>
          </div>

          {/* CENTER */}
          <div className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {navLinks.map(link =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onClick={() => setOpenService(prev => !prev)}
                  onBlur={() => setOpenService(false)}
                >
                  <span
                    className={classNames(
                      "cursor-pointer transition",
                      isActive(link.href)
                        ? "text-[#8E8E93]"
                        : "text-white"
                    )}
                  >
                    {link.label}
                  </span>

                  {openService && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72
                                 bg-black/80 backdrop-blur-xl rounded-xl border border-white/10 p-3"
                    >
                      {link.children.map(child => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-white
                                     hover:bg-white/10 rounded-lg transition"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={classNames(
                    "transition",
                    isActive(link.href)
                      ? "text-[#8E8E93]"
                      : "text-white"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* RIGHT */}
          <AnimatedButton
            onClick={() => navigate("/#contactUs")}
            clipSize={14}
            className="hidden lg:flex py-3 px-10"
          >
            Hire us
          </AnimatedButton>

          <TbMenu3
            onClick={() => setIsOpen(prev => !prev)}
            className="lg:hidden text-white text-3xl cursor-pointer"
          />
        </div>
      </motion.div>

      <Menu isOpen={isOpen} toggleMenu={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
