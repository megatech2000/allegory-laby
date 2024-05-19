"use client";
import Image from "next/image";
import { discoverData } from "./data";
import { motion } from "framer-motion";

const Discover = () => {
  return (
    <section className="section-width padding-top">
      <div className="flex items-center justify-center">
        <div className=" text-center w-[600px]">
          <motion.h2
            className="mb-0"
            initial={{ y: 100, scale: 0 }}
            whileInView={{ y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Discover the Labyrinth
            <br /> Advantage
          </motion.h2>
          <motion.p
            className="py-5"
            initial={{ y: 100, scale: 0 }}
            whileInView={{ y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Discover a world of possibilities with Labyrinth's exceptional
            features tailored to enhance your coding journey.
          </motion.p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
        {discoverData.map((item, i) => (
          <motion.div
            className="flex flex-col items-center justify-center  border border-[#232222] rounded-xl p-5"
            key={i}
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#883723] bg-opacity-5 p-3 rounded-full border border-[#452117] hover:border-[#d27257]">
              <Image
                className="w-5"
                src={item.img}
                alt="discover image"
                width={600}
                height={600}
              />
            </div>
            <div className="text-center h-full">
              <h6 className="mb-0 py-3">{item.title}</h6>
              <p className="text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Discover;
