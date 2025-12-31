// import Header from "@/components/portfolio/Header";
import Image from "next/image";
// import Projects from "@/components/portfolio/Projects";
import React from "react";
import ServicesHeader from "./Header";
import Network from "@/components/about/Network";
import Buildings from "@/components/canvas/buildings";

const page = () => {
  return (
    <>
    {/* <div className="relative w-full  lg:p-8 p-6 flex flex-col justify-center mt-20">
        <h1 className="text-red-600">Services Hot</h1>
    </div> */}
    {/* <div className="relative flex items-center  mt-20
        justify-center h-screen overflow-hidden">
        <video src=
"https://drive.google.com/uc?export=download&id=1_hrDCXyZJOa5KFSP6IEwrHjH1UhzH2En"
            autoPlay loop muted
            className="absolute z-10 w-auto 
            min-w-full min-h-full max-w-none">
        </video>
    </div> */}
    <ServicesHeader />
    <Network />
    <h1 className="font-future text-center text-white text-3xl py-6">What We do</h1>
    <div className="text-center max-sm:grid-cols-1 max-sm:w-full md:max-w-6xl mx-auto grid grid-cols-2 max-md:px-3 ">
        <div className="flex flex-col items-start mr-5 ">
            {/* <h1 className="text-white 
                text-2xl font-bold py-2">
            What We do?
            </h1> */}
            {/* <p className="text-sm text-white/60 text-left mt-1 py-3">
                Stop selling blueprints. Start selling the lifestyle.</p> */}
<ul className="mt-3 gap-1.5 leading-6 text-sm text-white/60 text-left py-3">
<li> <b className="text-white">Cinematic 3D Walkthroughs:</b> Transport buyers into the home before it&apos;s even built. High-end, emotional tours that turn "browsers" into "bidders."</li>

<li> <b className="text-white">Hyper-Realistic Renders:</b> Magazine-quality interior and exterior shots designed to make your listings the most saved and shared on every platform.</li>

<li> <b className="text-white">Conversion-Ready Landing Pages:</b> We don&apos;t just give you video; we build the destination. Custom, high-speed pages built to capture and qualify leads 24/7.</li>

<li> <b className="text-white">Before & After "Magic":</b> The ultimate tool for renovations and off-plan sales. Visually bridge the gap between "what is" and "what could be."</li>

<li> <b className="text-white">Viral Social Clips (5-30s):</b> Ready-to-post Reels and TikToks designed to stop the scroll and dominate the local market feed.</li>
</ul>
        </div>
        <div>
            
        <Image
            src="/images/archi_4.webp"
            alt="Haze Bottom Left"
            width={1400}
            height={6000}
            className="opacity-100 "
            priority
        />
        </div>
        
    </div>

    <h1 className="font-future text-center text-white text-3xl py-6 mt-10">Rotate/Pan (Threejs Display)</h1>
    <p className="text-white/60 text-center">Display the building before it is built or already built ones with nice survey that is accessible by clients</p>
    <div className="h-150">
        <Buildings/>
    </div>
    
    
    
    
    </>
  );
};

export default page;