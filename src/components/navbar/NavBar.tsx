"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMiniBars2 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Servies",
      path: "/servies",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] bg-opacity-90 fill-transparent w-full fixed top-0 z-[10000]">
      <div className="flex items-center justify-between lg:section-width p-3">
        <div>
          <Image
            className="w-24 md:w-36"
            src="/images/logo.png"
            alt="logo image"
            width={600}
            height={600}
          />
        </div>
        <div
          className={`text-white md:flex text-center md:text-left  lg:gap-6 bg-[#111111] md:p-3 px-16 md:px-5 rounded-b-lg  md:rounded-full border border-[#525151] absolute top-[50px] left-0 right-0  md:static
         ${isMenuOpen ? "" : "hidden"}`}
        >
          {links.map((item, i) => (
            <div className="pt-7 md:pt-0">
              <Link
                className="hover:bg-[#fff] hover:text-black px-4 py-2 rounded-full navbar-hover font-light text-[#8c8a8a]"
                href={item.path}
                key={i}
              >
                {item.title}
              </Link>
            </div>
          ))}
          <div className="md:hidden">
            <button className="w-56 py-2 bg-white text-black rounded-full btn-hover mb-5 mt-5">
              Sign In
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <button className="px-10 py-2 bg-white text-black rounded-full btn-hover">
            Sign In
          </button>
        </div>
        <div className="md:hidden text-white text-2xl">
          {!isMenuOpen && (
            <div onClick={toggleMenu}>
              <HiMiniBars2 />
            </div>
          )}
          {isMenuOpen && (
            <div onClick={toggleMenu}>
              <IoCloseOutline />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NavBar;
