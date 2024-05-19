import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const Investing = () => {
  return (
    <section className="section-width padding-top">
      <div className="lg:flex">
        <div className=" h-full w-full lg:pr-28">
          <div className="bg-invest h-full rounded-xl p-10">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                className="w-full"
                src="/images/invest-img.webp"
                alt="power image"
                width={1000}
                height={1000}
              />
            </motion.div>
          </div>
        </div>
        <div className=" flex  items-center justify-center pt-10 lg:pt-0 ">
          <div>
            <h2 className="w-[400px] font-light">Investing just got easier</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              massa massa id arcu blandit dignissim contum volutpat dolor
              fermentum, justo tempor
            </p>
            <div className="flex items-center gap-3 py-10">
              <a href="">
                <p className="text-white">Get started with Investing</p>
              </a>
              <FaArrowRightLong className="text-white" />
            </div>
            <hr className="border-[#313131]" />
            <div className="lg:flex gap-5 py-10">
              <div className="w-full h-full">
                <motion.div
                  className="flex gap-5 items-start"
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Image
                    className="w-10"
                    src="/images/invest-icon-1.svg"
                    alt=""
                    width={600}
                    height={600}
                  />
                  <p className="text-sm">
                    Automated Payroll Tax Registrations. Set up with holdings
                    and tax accounts in 5 mins.
                  </p>
                </motion.div>
              </div>
              <div className="w-full h-full pt-10 lg:pt-0">
                <motion.div
                  className="flex gap-5 items-start"
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Image
                    className="w-10"
                    src="/images/invest-icon-2.svg"
                    alt=""
                    width={600}
                    height={600}
                  />
                  <p className="text-sm">
                    Ongoing Monitoring. Let Warp help you stay on top of all
                    payroll related compliance year-round.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investing;
