import React from "react";
import { cn } from "@/lib/utils";
import { useWindowSize } from "@/hooks/useWindowSize";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  className?: string;
  clipSize?: number;
}

export const AnimatedButton: React.FC<ButtonProps> = ({
  children,
  className,
  clipSize: clipSizeProp,
  ...rest
}) => {
  const { width } = useWindowSize();
  const clipSize = clipSizeProp || (width < 400 ? 10 : 20);
  return (
    <button
      style={{
        clipPath: `polygon(${clipSize}px 0, 100% 0, 100% calc(100% - ${clipSize}px), calc(100% - ${clipSize}px) 100%, 0 100%, 0 ${clipSize}px)`,
      }}
      className={cn(
        "bg-primary font-medium text-white text-sm 2xs:text-base px-6 2xs:px-8 py-2.5 2xs:py-3 uppercase cursor-pointer transition-all duration-300 hover:border hover:border-white hover:bg-transparent ",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
