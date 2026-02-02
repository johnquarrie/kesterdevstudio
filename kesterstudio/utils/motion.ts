/* eslint-disable @typescript-eslint/no-explicit-any */

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: string,
  type: "spring" | "tween" | "inertia",
  delay: number,
  duration: number
) => {
  const transition: any = {
    type,
    delay,
    duration,
  };
  if (type === "tween") {
    transition.ease = "easeOut";
  }
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition,
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween" as const,
        duration: duration,
        delay: delay,
      },
    },
  };
};

export const slideIn = (
  direction: string,
  type: "spring" | "tween" | "inertia",
  delay: number,
  duration: number
) => {
  const transition: any = {
    type,
    delay,
    duration,
  };
  if (type === "tween") {
    transition.ease = "easeOut";
  }
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition,
    },
  };
};

export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut" as const,
    },
  },
};
