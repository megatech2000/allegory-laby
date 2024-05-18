"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { testData } from "./data";

const Testimonials = () => {
  return (
    <section className=" padding-top">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="w-[600px]">
            Voices of Innovation,
            <br /> Testimonials
          </h2>
          <p className="w-[400px] md:w-[700px]">
            Discover what the coding community is saying about Glossy in our
            Testimonials section. Immerse yourself in firsthand experiences as
            developers share.
          </p>
        </div>
      </div>
      <div className="relative px-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          autoplay={{
            delay: 3000, // Increased the delay for better readability
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {testData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="mt-10 border p-5 bg-[#1c1c1c] border-[#4b4a4a] rounded-xl">
                <p>{item.desc}</p>
                <div className="flex gap-5 items-center mt-5">
                  <Image
                    className="w-12 rounded-full"
                    src={item.img}
                    alt="testimonial images"
                    width={600}
                    height={600}
                  />
                  <div>
                    <p className="text-white">{item.title}</p>
                    <p className="text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-10 items-center justify-center pt-10">
          <div className="button-prev-slide text-white cursor-pointer">
            <FaArrowLeftLong size={30} />
          </div>
          <div>
            <div className="button-next-slide text-white cursor-pointer">
              <FaArrowRightLong size={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
