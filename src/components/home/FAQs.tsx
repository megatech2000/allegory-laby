"use client";

import { FaPlus, FaTimes } from "react-icons/fa";
import { faqData } from "./data";
import { motion } from "framer-motion";
import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section-width padding-top">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <motion.h2
            className="mb-0"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Your Queries Answered: FAQs
          </motion.h2>
          <motion.p
            className="py-5"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Find answers to commonly asked questions about Labyrinth and banking
            in general.
          </motion.p>
        </div>
      </div>
      <div>
        <div className="xl:px-60">
          {faqData.map((item, i) => (
            <motion.div
              className="p-5 rounded-lg border border-[#333232] mt-5 hover:bg-[#181818] card-hover cursor-pointer"
              key={i}
              onClick={() => toggleAccordion(i)}
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between gap-1">
                <h6 className="font-light">{item.title}</h6>
                <div className="text-[#ab5138] p-1 rounded-full border border-[#ab5138]">
                  {activeIndex === i ? <FaTimes /> : <FaPlus />}
                </div>
              </div>
              <div
                className="overflow-hidden"
                style={{
                  maxHeight: activeIndex === i ? "500px" : "0",
                  opacity: activeIndex === i ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease", // Smooth transition effect
                }}
              >
                <p className="text-sm pt-5">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
