"use client";

import dynamic from "next/dynamic";

const Banner = dynamic(() => import("../components/home/Banner"));
const Companies = dynamic(() => import("../components/home/Companies"));
const Features = dynamic(() => import("../components/home/Features"));
const Discover = dynamic(() => import("../components/home/Discover"));
const Power = dynamic(() => import("../components/home/Power"));
const Investing = dynamic(() => import("../components/home/Investing"));
const Testimonials = dynamic(() => import("../components/home/Testimonials"));
const Blog = dynamic(() => import("../components/home/Blog"));
const FAQs = dynamic(() => import("../components/home/FAQs"));
const GetStarted = dynamic(() => import("../components/home/GetStarted"));
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <main>
      <div>
        <Banner />
        <Companies />
        <Features />
        <Discover />
        <Power />
        <Investing />
        <Testimonials />
        <Blog />
        <FAQs />
        <GetStarted />
      </div>
    </main>
  );
}
