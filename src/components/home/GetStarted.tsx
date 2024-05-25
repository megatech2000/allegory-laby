import Image from "next/image";
import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <section className="section-width padding-top">
      <div className="relative  xl:py-14">
        <div className="bg-gradient-to-r from-[#101010] to-[#0d0d0d] border border-[#494848] xl:py-36 rounded-2xl xl:rounded-3xl xl:px-10 p-5 xl:p-0">
          <motion.h2
            className="mb-0 font-extralight"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get Started
            <br className="hidden xl:block" /> with Labyrinth
          </motion.h2>
          <motion.p
            className="py-5"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to experience the future of banking? Sign up for{" "}
            <br className="hidden xl:block" />
            Labyrinth today and unlock a world of convenience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form action="#">
              <input
                type="text"
                placeholder="Enter email here"
                className="w-full md:w-96 px-5 py-3 rounded-md md:rounded-l-md bg-[#1c1c1c] border border-[#3a3939] outline-none text-white"
              />
              <button className="w-full  md:w-36 rounded-md py-3 bg-[#e6a23c] md:ml-[-20px] text-white mt-2 md:mt-0">
                Get Started
              </button>
            </form>
          </motion.div>
          <motion.div
            className="xl:hidden mt-10"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              className="w-[80%]"
              src="/images/banner-card.png"
              alt=""
              width={1000}
              height={1000}
            />
          </motion.div>
        </div>
        <motion.div
          className="hidden xl:block absolute top-0 right-[-80px]"
          initial={{ opacity: 0, x: 500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            className="w-[80%]"
            src="/images/banner-card.png"
            alt=""
            width={800}
            height={800}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
