"use client";

import { SectionWrapper } from "@/utils/hoc";
// import { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Center, OrbitControls } from "@react-three/drei";
// import CanvasLoader from "../Loading";
// import DemoComputer from "../canvas/DemoComputer";
import ComputersCanvas from "../canvas/Computer";
// import EarthCanvas from "../canvas/Earth";
// import Developer from "../canvas/Developer";

// const animationNames = ["idle", "salute", "clapping", "victory"] as const;

const Animation = () => {
  //   const [animationName, setAnimationName] = useState<
  //     (typeof animationNames)[number]
  //   >(animationNames[0]);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setAnimationName(
  //         animationNames[Math.floor(Math.random() * animationNames.length)]
  //       );
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div
      id="animation"
      className="container w-full h-full flex gap-8 items-center justify-center"
    >
      {/* <div className="border border-black-300 bg-black-200 rounded-lg w-full h-full">
        <Canvas>
          <ambientLight intensity={Math.PI} />
          <directionalLight position={[10, 10, 5]} />
          <Center>
            <Suspense fallback={<CanvasLoader />}>
              <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                <DemoComputer />
              </group>
            </Suspense>
          </Center>
          <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
        </Canvas>
      </div> */}

      <div className="border border-black-300 bg-black-200 rounded-lg w-full h-[15rem] 2xs:h-[20rem] xs:h-[25rem] sm:h-[30rem] md:h-[40rem] lg:h-[50rem] xl:h-[60rem] -mt-[5rem] xs:-mt-[10rem] md:-mt-[15rem] lg:-mt-[20rem]">
        <ComputersCanvas />
      </div>
      {/* <div className="border border-black-300 bg-black-200 rounded-lg w-full h-full">
        <EarthCanvas />
      </div> */}
      {/* <div className="border border-black-300 bg-black-200 rounded-lg w-[40%] h-full">
        <Canvas>
          <ambientLight intensity={7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

          <Suspense fallback={<CanvasLoader />}>
            <Developer
              position-y={-3}
              scale={3}
              animationName={animationName}
            />
          </Suspense>
        </Canvas>
      </div> */}
    </div>
  );
};

export default SectionWrapper(Animation, "animation");
