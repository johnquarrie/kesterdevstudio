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
import { useWindowSize } from "@/hooks/useWindowSize";
import { navLinks } from "@/constants";
import Menu from "./Menu";
import useNavigate from "@/hooks/useNavigate";

const DummyAudioVisualizer = ({ isActive = true }: { isActive?: boolean }) => {
  const [bars, setBars] = useState<number[]>([]);
  useEffect(() => {
    setBars([2, 4, 3, 6, 5, 2, 1, 4, 2, 5, 6, 8, 6, 2, 4]); // set only on client
  }, []);

  const { width } = useWindowSize();

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setBars((prev) => prev.map(() => Math.random() * 12 + 2));
    }, 150);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div
      style={{
        background: "#6D0BDB",
        borderRadius: "10px 4px 12px 4px",
        padding: width < 400 ? "8px 12px" : "8px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        minWidth: width < 400 ? 40 : 60,
        position: "relative",
        boxSizing: "border-box",
        gap: width < 400 ? "1px" : "2px",
        clipPath: "polygon(16px 0, 100% 0, 100% 100%, 0 100%, 0 16px)",
      }}
    >
      {/* Animated waveform bars */}
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

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isAudioOn, setIsAudioOn] = useState<boolean>(false);
  const prevScrollPosRef = useRef<number>(0);

  useEffect(() => {
    // Set initial scroll position when component mounts
    prevScrollPosRef.current = window.scrollY;

    // Function to handle scroll events
    const handleScroll = (): void => {
      const currentScrollPos: number = window.scrollY;
      const isScrollingUp: boolean =
        prevScrollPosRef.current > currentScrollPos;

      // Always show navbar when scrolling up, hide when scrolling down
      // Regardless of position on the page
      if (currentScrollPos < 10) {
        setVisible(true); // Always show navbar at the very top of the page
      } else {
        setVisible(isScrollingUp);
      }

      // Separate logic for backdrop blur - apply when not at the very top
      setIsScrolled(currentScrollPos > 0);

      // Update previous scroll position using ref
      prevScrollPosRef.current = currentScrollPos;
    };

    // Throttle the scroll event to improve performance
    let scrollTimeout: NodeJS.Timeout | null = null;
    const throttledScrollHandler = (): void => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 10); // Small timeout for performance
      }
    };

    window.addEventListener("scroll", throttledScrollHandler);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []); // Empty dependency array, using ref instead

  const toggleMobileNav = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleAudio = () => {
    setIsAudioOn((prev) => !prev);
  };

  const isActive = (href: string) => {
    return pathname.toString() === href.toString();
  };

  return (
    <>
      <motion.div
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ease-in-out ${
          isScrolled ? "backdrop-blur-lg" : "bg-transparent"
        }`}
        initial={{ translateY: 0 }}
        animate={{ translateY: visible ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="w-full container bg-transparent flex items-center justify-between py-6">
          <div className="flex items-center gap-4 2xs:gap-5">
            <Image
              alt="logo"
              className="w-24 2xs:w-28 xs:w-32"
              src={images.logo}
            />
            <hr className="w-0.5 h-5 bg-white rounded-full" />
            <div className="flex items-center gap-2">
              <div onClick={toggleAudio} style={{ cursor: "pointer" }}>
                <DummyAudioVisualizer isActive={isAudioOn} />
              </div>
              <p className="text-white text-sm">{isAudioOn ? "ON" : "OFF"}</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-7 xl:absolute xl:left-1/2 transform xl:-translate-x-1/2 ">
            {navLinks.map((link) => (
              <Link
                className={classNames(
                  "text-base hover:scale-120 transition-all duration-300",
                  {
                    "text-[#8E8E93]": isActive(link.href),
                    "text-white": !isActive(link.href),
                  }
                )}
                key={link.label}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <AnimatedButton
            onClick={() => {
              navigate("/#contactUs");
            }}
            clipSize={14}
            className="py-3 px-10 hidden lg:flex"
          >
            Hire us
          </AnimatedButton>

          <TbMenu3
            onClick={toggleMobileNav}
            className="lg:hidden text-white text-3xl 2xs:text-4xl cursor-pointer"
          />
        </div>
      </motion.div>
      <Menu isOpen={isOpen} toggleMenu={toggleMobileNav} />
    </>
  );
};

export default Navbar;
