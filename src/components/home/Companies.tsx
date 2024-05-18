"use client";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React, { createContext } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import { companiesData } from "./data";

const Companies = () => {
  return (
    <section className="py-20">
      <div>
        <div className="text-center">
          <p>Join 4,000+ companies already growing</p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-10 pt-20">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper w-full"
            >
              {companiesData[0].content.map((item, i) => (
                <SwiperSlide key={i}>
                  <div>
                    <div className="flex items-center justify-center">
                      <Image
                        className="w-28"
                        src={item}
                        alt=""
                        width={600}
                        height={600}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
