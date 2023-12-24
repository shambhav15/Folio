"use client";

import Image from "next/image";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import { useState, useEffect } from "react";
import Carousel from "./components/carousel";
import NavbarToggle from "./components/ToggleFull";

export default function Home() {
  const gradientStops = [
    "rgba(162, 74, 214, 1) 0%",
    "rgba(162, 74, 214, 0.4) 0%",
    "rgba(162, 74, 214, 0.2) 60%",
    "rgba(162, 74, 214, 0.1) 70%",
    "rgba(162, 74, 214, 0) 100%",
  ]; // Define gradient stops

  const [hoveredGithub, setHoveredGithub] = useState(false);
  const [hoveredLinkedIn, setHoveredLinkedIn] = useState(false);
  const [hoveredTwitter, setHoveredTwitter] = useState(false);


  const links = [
    { text: "Github", url: "https://github.com/shambhav15" },
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/shambhav-shandilya-a201431ba/",
    },
    { text: "Twitter", url: "https://twitter.com/shambhav_15" },
  ];
  const gradient = gradientStops.join(", ");

  return (
    <div className="flex text-white">
      <div className="hidden lg:block xl:block w-1/5 h-screen fixed top-0 left-0 bg-[#161616] gap-20 py-10">
        <div className="h-1/4 flex items-center mx-10">
          <Link
            href={"/"}
            className="font-semibold  md:block lg:text-3xl p-10 text-gray-400"
          >
            Shambhav
            <div className="text-xs text-right">A Developer</div>
          </Link>
        </div>
        <div className="flex flex-col text-lg tracking-tighter  font-medium mx-10">
          <Link
            className="flex items-center px-10 py-8  text-gray-500"
            href={"/"}
          >
            <i className="ri-cup-line pr-2"></i>
            <h1 className="hover:text-gray-100  transition-all duration-700">
              Home
            </h1>
          </Link>
          <Link
            className="flex items-center  px-10 py-8 text-gray-500"
            href={"/Projects"}
          >
            <i className="ri-instance-line pr-2"></i>
            <h1 className="hover:text-gray-100  transition-all duration-700">
              Projects
            </h1>
          </Link>
          <Link
            className="flex items-center px-10 py-8 text-gray-500"
            href={"/AndroidDev"}
          >
            <i className="ri-android-line pr-2"></i>
            <h1 className="hover:text-gray-100  transition-all duration-700">
              Android Dev
            </h1>
          </Link>
          <Link
            className="flex items-center  px-10 py-8  text-gray-500"
            href={"/About"}
          >
            <i className="ri-at-line pr-2"></i>
            <h1 className="hover:text-gray-100  transition-all duration-700">
              About
            </h1>
          </Link>
          <Link
            className="flex items-center px-10 py-8 text-gray-500"
            href={"/Contacts"}
          >
            <i className="ri-contacts-line pr-2"></i>
            <h1 className="hover:text-gray-100  transition-all duration-700">
              Contacts
            </h1>
          </Link>
          {/* Add similar links for other sections */}
        </div>
      </div>
      
      <div className="w-full lg:w-4/5 xl:w-4/5 ml-auto overflow-y-auto bg-[#161616] h-screen">
        <div className="pt-10 h-full ">
          <div className="p-10 font-normal  text-4xl text-wrap w-2/4 z-0">
            Web and Android Devlopment
          </div>
          <div className="top-0 right-0 absolute p-10">
          <NavbarToggle />
          </div>

          <div className="relative w-full h-screen">
            <div
              style={{
                background: `radial-gradient(circle at center, ${gradient})`,
              }}
              className="absolute inset-0 "
            >
              <div className="grid grid-col-1 md:grid-cols-2 gap-4 p-4 ">
                <div class="grid grid-cols-2 gap-5 h-full">
                  <div class="flex items-center justify-center bg-[#161616] rounded-2xl">
                    <div className="text-lg">
                      <h1 className="text-5xl text-center">20+</h1>
                      <h1 className="text-slate-500">Completed Projects</h1>
                    </div>
                  </div>
                  <div class="p-2 flex items-center justify-center bg-[#161616] rounded-2xl">
                    <div className="text-lg">
                      <h1 className="text-4xl text-center">Webflow Expert</h1>
                    </div>
                  </div>
                  <div class="p-2 flex items-center justify-center bg-[#161616] rounded-2xl">
                    <div className="text-lg">
                      <h1 className="text-5xl text-center">5+</h1>
                      <h1 className="text-slate-500">Satisfied Clients</h1>
                    </div>
                  </div>
                  <div class="p-2 flex items-center justify-center bg-[#161616] rounded-2xl">
                    <div className="text-lg ">
                      <h1 className="text-5xl text-center">2+</h1>
                      <h1 className="text-slate-500">Years Experience</h1>
                    </div>
                  </div>
                </div>
                <div class=" h-full bg-[#161616] flex justify-center items-center rounded-2xl">
                  <div className="w-full h-full p-6 ">
                    <h1 className="item-center p-1 text-3xl">
                      Tech stack Used
                    </h1>
                    <div className="p-2 text-lg text-gray-500 ">
                      <div className="flex gap-2 ">
                        <h1 className="border text-sm rounded-lg p-1.5 border-slate-600">
                          React.js
                        </h1>
                        <h1 className="border text-sm rounded-lg p-1.5 border-slate-600">
                          Next.js
                        </h1>
                        <h1 className="border text-sm rounded-lg p-1.5 border-slate-600">
                          JavaScript
                        </h1>
                        <h1 className="border text-sm rounded-lg p-1.5 border-slate-600">
                          TypeScript
                        </h1>
                        
                      </div>
                    </div>
                    <div className="p-2 text-lg text-gray-500 ">
                      <div className="flex gap-2 ">
                        
                        <h1 className="border text-sm rounded-lg p-1.5 border-slate-600">
                          Express.js
                        </h1>
                        <h1 className="border text-sm rounded-lg p-1.5 border-slate-600">
                          Node.js
                        </h1>
                        <h1 className="border text-sm rounded-lg p-1.5 border-slate-600">
                          FastApi
                        </h1>
                      </div>
                    </div>
                    <div className="p-2 text-lg text-gray-500 ">
                      <div className="flex gap-2 ">
                        
                        <h1 className="border text-sm rounded-lg p-1.5 border-slate-600">
                          MongoDB
                        </h1>
                        <h1 className="border text-sm rounded-lg p-1.5 border-slate-600">
                          MySQL
                        </h1>
                        <h1 className="border text-sm rounded-lg p-1.5 border-slate-600">
                          PostGreSQL
                        </h1>
                      </div>
                    </div>
                    <div className="p-2 text-lg text-gray-500 ">
                      <div className="flex gap-2 ">
                        
                        <h1 className="border text-sm rounded-lg p-1.5 border-slate-600">
                          Android
                        </h1>
                        <h1 className="border text-sm rounded-lg p-1.5 border-slate-600">
                          Kotlin
                        </h1>
                        <h1 className="border text-sm rounded-lg p-1.5 border-slate-600">
                          Python
                        </h1>
                        <h1 className="border text-sm rounded-lg p-1.5 border-slate-600">
                          C++
                        </h1>
                        <h1 className="border text-sm rounded-lg p-1.5 border-slate-600">
                          Go
                        </h1>
                      </div>
                    </div>
                    <div className="p-2 text-lg text-gray-500 ">
                      <div className="flex gap-2 ">
                        
                        <h1 className="border text-sm rounded-lg p-1.5 border-slate-600">
                          Docker
                        </h1>
                      
                      </div>
                    </div>
                  </div>
                </div>
                <div class=" h-full bg-[#161616] justify-center items-center rounded-2xl">
                  <div className="w-full">
                    <h1 className="flex justify-center w-full text-3xl pt-2">
                      Featured Projects
                    </h1>
                    <Link
                      href={"/Projects"}
                      className="w-full flex justify-center pt-1 text-sky-600"
                    >
                      View all
                    </Link>
                  </div>
                  <div className="m-8 rounded-2xl ">
                    <Carousel />
                  </div>
                </div>
                <div class=" h-full bg-[#161616] flex justify-center items-center rounded-2xl">
                  <div className="w-full h-full p-10 ">
                    <h1 className="item-center pt-7 p-2 text-3xl">
                    Your ultimate webflow partner
                    </h1>
                    <p className="p-2 text-lg text-gray-500">
                      "Passionate web developer creating captivating, functional
                      sites. Committed to mastering web trends for seamless
                      experiences. Balancing aesthetics and user value in every
                      project. Join the digital adventure with me!"
                    </p>
                    <Link
                      href={"/Contacts"}
                      className="p-2 text-sky-500 hover:text-sky-600 text-xl"
                    >
                      Get in touch
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-8  gap-20  flex w-full justify-center">
                <Link
                  className="relative inline-flex cursor-pointer"
                  onMouseEnter={() => setHoveredGithub(true)}
                  onMouseLeave={() => setHoveredGithub(false)}
                  href={"https://github.com/shambhav15"}
                >
                  Github
                  {hoveredGithub && (
                    <span className="absolute h-0.5 w-full bg-white bottom-0 left-0 animate-slide-out" />
                  )}
                </Link>
                <Link
                  className="relative inline-flex cursor-pointer"
                  onMouseEnter={() => setHoveredLinkedIn(true)}
                  onMouseLeave={() => setHoveredLinkedIn(false)}
                  href={
                    "https://www.linkedin.com/in/shambhav-shandilya-a201431ba/"
                  }
                >
                  Linked
                  {hoveredLinkedIn && (
                    <span className="absolute h-0.5 w-full bg-white bottom-0 left-0 animate-slide-out" />
                  )}
                </Link>
                <Link
                  className="relative inline-flex cursor-pointer"
                  onMouseEnter={() => setHoveredTwitter(true)}
                  onMouseLeave={() => setHoveredTwitter(false)}
                  href={"https://twitter.com/Shambhav_15"}
                >
                  Twitter
                  {hoveredTwitter && (
                    <span className="absolute h-0.5 w-full bg-white  bottom-0 left-0 animate-slide-out " />
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



