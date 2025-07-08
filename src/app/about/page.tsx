import Faq from "@/components/about/FAQS";
import AboutHeader from "@/components/about/Header";
import Network from "@/components/about/Network";
import Services from "@/components/about/Services";
import Team from "@/components/about/Team";
import Testimonials from "@/components/about/Testimonials";
import WhyUs from "@/components/about/WhyUs";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <AboutHeader />
        <Network />
        <Services />
        <Testimonials />
        <Team />
        <WhyUs />
        <Faq />
      </div>
    </>
  );
};

export default page;
