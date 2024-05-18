"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Features = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="section-width padding-top">
      <div>
        <div className="text-center" data-aos="fade-up" data-aos-duration="500">
          <h2 className="mb-0">Our Features</h2>
          <div className="flex items-center justify-center">
            <p className="w-[600px] py-10 ">
              Discover a world of possibilities with Glossy's exceptional
              features tailored to enhance your coding journey.
            </p>
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
              <div className="p-10" data-aos="fade-up" data-aos-duration="500">
                <h3>Unified Task Management</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Molestie lorem arcu
                  egestas varius donec.
                </p>
              </div>
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
                <div
                  className="p-10 "
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <h3>Real-time Collaboration</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Molestie lorem arcu
                    egestas varius donec.
                  </p>
                </div>
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
            <div className="p-10" data-aos="fade-up" data-aos-duration="500">
              <h3>Customizable Reporting</h3>
              <p className="md:w-[450px]">
                Lorem ipsum dolor sit amet consectetur. Molestie lorem arcu
                egestas varius donec.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
