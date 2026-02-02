"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqs } from "@/constants";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="p-8 bg-[#0a0a0a]">
      <h1 className="font-future text-center text-white text-3xl py-6">FAQs</h1>

      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-[#151515] rounded-xl p-4 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-white text-md font-medium">
                  {faq.question}
                </h3>

                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white border border-[#6C0BDB] rounded-full p-2"
                >
                  {isOpen ? (
                    <FaMinus size={12} className="text-[#6C0BDB]" />
                  ) : (
                    <FaPlus size={12} className="text-[#6C0BDB]" />
                  )}
                </motion.div>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-2"
                  >
                    <p className="text-white/60 text-sm">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
