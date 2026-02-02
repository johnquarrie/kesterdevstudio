import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  className?: string;
  clipSize?: number;
}

export const AnimatedButton: React.FC<ButtonProps> = ({
  children,
  className,
  clipSize = 20,
  ...rest
}) => {
  const clipPath = `polygon(${clipSize}px 0, 100% 0, 100% calc(100% - ${clipSize}px), calc(100% - ${clipSize}px) 100%, 0 100%, 0 ${clipSize}px)`;

  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    }
  }, []);

  const svgPoints =
    dimensions.width > 0
      ? `${clipSize},0 ${dimensions.width},0 ${dimensions.width},${
          dimensions.height - clipSize
        } ${dimensions.width - clipSize},${dimensions.height} 0,${
          dimensions.height
        } 0,${clipSize}`
      : `${clipSize},0 100,0 100,80 80,100 0,100 0,${clipSize}`;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .border-button {
            position: relative;
            display: inline-block;
          }
          
          .svg-border {
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
            pointer-events: none;
          }
          
          .border-button:hover .svg-border {
            opacity: 1;
          }
          
          .actual-button {
            clip-path: ${clipPath};
            position: relative;
            z-index: 1;
            transition: all 0.3s ease;
          }
          
          .border-button:hover .actual-button {
            background: transparent !important;
            color: white;
          }
        `,
        }}
      />

      <div className="border-button">
        <svg
          className="svg-border"
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <polygon
            points={svgPoints}
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="miter"
            strokeLinecap="square"
          />
        </svg>
        <button
          ref={buttonRef}
          className={cn(
            "actual-button bg-primary font-medium text-white text-center text-base px-8 py-3 uppercase cursor-pointer transition-all duration-300",
            className
          )}
          {...rest}
        >
          {children}
        </button>
      </div>
    </>
  );
};
