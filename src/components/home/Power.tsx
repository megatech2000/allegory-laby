"use client";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Power = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init();
    });
  }, []);

  return (
    <section className="section-width padding-top">
      <div className="flex items-center justify-center text-center">
        <div className="w-[700px]" data-aos="fade-up" data-aos-duration="500">
          <h2 className="mb-0">Labyrinth's Power Features</h2>
          <p className="py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            massa massa id arcu blandit dignissim contum volutpat dolor
            fermentum, justo tempor
          </p>
        </div>
      </div>
      <div className="lg:flex md mt-10 md:mt-20 ">
        <div className=" lg:hidden w-full lg:pl-28 pt-10 lg:pt-0">
          <div className="bg-power h-full rounded-xl p-10">
            <Image
              className="w-full"
              data-aos="fade-left"
              data-aos-duration="500"
              src="/images/power-img-1.webp"
              alt="power image"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className=" h-full w-full mt-10 lg:mt-0 pt-0 lg:pt-5 ">
          <div>
            <h2 className="mb-0 w-[400px] font-light">
              Transactions made easier and faster
            </h2>
            <p className="py-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              massa massa id arcu blandit dignissim contum volutpat dolor
              fermentum, justo tempor
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a href="">
              <p className="text-white">Meet our customers</p>
            </a>
            <FaArrowRightLong className="text-white" />
          </div>
          <div className="lg:flex gap-5 pt-10 lg:pt-20">
            <div
              className="bg-[#883723] bg-opacity-20 border border-[#ab5138]  w-full  p-5 rounded-xl"
              data-aos="fade-up"
              data-aos-duration="550"
            >
              <h3 className="text-[#f5b24c]">€91.28K</h3>
              <p>Saved in printing costs and productivity hours in the past.</p>
            </div>
            <div
              className="bg-[#883723] bg-opacity-20 border border-[#ab5138] w-full p-5 rounded-xl mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <h3 className="text-[#f5b24c]">500+</h3>
              <p>Team members using the Confetti app every month.</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-full lg:pl-28 pt-10 lg:pt-0">
          <div className="bg-power h-full rounded-xl p-10">
            <Image
              className="w-full"
              data-aos="fade-left"
              data-aos-duration="500"
              src="/images/power-img-1.webp"
              alt="power image"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Power;
