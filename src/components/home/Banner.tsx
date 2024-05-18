"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-5">
      <div className="h-full px-5 xl:px-80">
        <div
          className="w-full h-full rounded-full bg-black p-10  md:p-20 bg-texture border border-[#2b2a2a]"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <div
            className="w-full h-full  rounded-full p-10 md:p-20 bg-texture border border-[#2b2a2a]"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div
              className="w-full h-full rounded-full bg-texture border border-[#2b2a2a] flex items-center justify-center"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <Image
                className="md:w-96"
                src="/images/banner-card.png"
                alt="banner card images"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
        <div className="text-center" data-aos="fade-up" data-aos-duration="500">
          <h1 className="mb-0 pt-5">
            Where Banking Meets Simplicity and Security
          </h1>
          <p className="py-7 md:py-10">
            Empower your creativity with Glossy, a cutting-edge coding tool
            inspired by simplicity and efficiency unleash the full potential of
            your projects.
          </p>
          <div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
