"use client";

import React from "react";
import { network_images } from "@/constants";
import InfiniteScroll from "./InfiniteScoll";

const Network = () => {
  return (
    <section className="lg:p-8">
      <h1 className="font-future text-center text-[#6C0BDB] text-2xl py-6">
        Our Network
      </h1>
      <InfiniteScroll network_images={network_images} />
    </section>
  );
};

export default Network;
