"use client";

import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Preload, useGLTF, useHelper } from "@react-three/drei";

import CanvasLoader from "../Loading";

const Building = ({ isMobile }: { isMobile: boolean }) => {
  const building = useGLTF("/other-models/building/building_glb.glb");
  // const lightRef = useRef();
  // const lightRefx = useRef();

  // useHelper(lightRef, THREE.DirectionalLightHelper, 5, "yellow");
  // useHelper(lightRefx, THREE.PointLightHelper, 0.5, "cyan");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="grey" />
      <spotLight
        position={[-80, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={1024}
      />
      <directionalLight
        position={[10, 15, 10]}
        // ref={lightRef}
        intensity={1.2}
        castShadow
      />
      <pointLight intensity={10} position={[0, 0, -5]}/>
      <pointLight intensity={10} position={[0, 0, 5]} />
      <pointLight intensity={10} position={[-5, 0, 2]} 
      // ref={lightRefx}
       />
      {/* <pointLight intensity={20} /> */}
      {/* <pointLight intensity={20} /> */}
      <pointLight intensity={10} />
      <primitive
        object={building.scene}
        scale={isMobile ? 0.04 : 0.05}
        position={isMobile ? [0, -2, 0] : [0, -1.5, 0]}
        rotation={[0, 1.2, 0]}
      />
    </mesh>
  );
};

const Buildings = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [10, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Building isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default Buildings;
