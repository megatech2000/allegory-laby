"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="section-width padding-top">
      <div>
        <div className="text-center">
          <motion.h2
            className="mb-0"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Features
          </motion.h2>
          <div className="flex items-center justify-center">
            <motion.p
              className="w-[600px] py-10 "
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Discover a world of possibilities with Glossy's exceptional
              features tailored to enhance your coding journey.
            </motion.p>
          </div>
        </div>
        <div className="md:flex gap-5">
          <div className="h-full w-full rounded-xl border border-[#313131] texture-hover">
            <div>
              <Image
                className="rounded-t-xl"
                src="/images/feature-img-1.jpg"
                alt="feature images"
                width={1000}
                height={1000}
              />
            </div>
            <div className="bg-[#131416] rounded-b-xl relative">
              <div className="w-full h-[60px] bg-gradient-to-t from-[#131416] to-transparent absolute top-[-50px]"></div>
              <motion.div
                className="p-10"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>Unified Task Management</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Molestie lorem arcu
                  egestas varius donec.
                </p>
              </motion.div>
            </div>
          </div>
          <div className=" h-full w-full mt-5 md:mt-0">
            <div className="h-full w-full rounded-xl border border-[#313131] texture-hover">
              <div>
                <Image
                  className="rounded-t-xl"
                  src="/images/feature-img-2.jpg"
                  alt="feature images"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="bg-[#131416] rounded-b-xl relative ">
                <div className="w-full h-[60px] bg-gradient-to-t from-[#131416] to-transparent absolute top-[-50px]"></div>
                <motion.div
                  className="p-10 "
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3>Real-time Collaboration</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Molestie lorem arcu
                    egestas varius donec.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 rounded-xl  texture-hover border border-[#313131] relative">
          <div className="w-full">
            <Image
              className="w-full rounded-t-xl md:rounded-xl"
              src="/images/feature-img-3.jpg"
              alt="feature image"
              width={1000}
              height={1000}
            />
          </div>
          <div className=" bg-[#131416]  lg:bg-transparent lg:absolute lg:top-[50%] xl:top-[60%] relative">
            <div className="xl:hidden w-full h-[60px] bg-gradient-to-t from-[#131416] to-transparent absolute top-[-50px]"></div>
            <motion.div
              className="p-10"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Customizable Reporting</h3>
              <p className="md:w-[450px]">
                Lorem ipsum dolor sit amet consectetur. Molestie lorem arcu
                egestas varius donec.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
