"use client";
import React, { useState } from "react";
import Link from "next/link";

const NavbarToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full justify-center items-center ">
      <header className={` items-center rounded-md ${isOpen ? "" : ""}`}>
        <button className=" font-bold p-2 lg:hidden" onClick={toggleNavbar}>
          <i class="ri-menu-4-fill"></i>
        </button>
      </header>
      <div
        className={`fixed top-0 right-0 h-screen w-2/4 bg-[#161616] shadow-lg transform duration-500 ease-in-out z-10 ${
          isOpen
            ? "border-l-2 border-gray-500 translate-x-0 backdrop-blur-sm"
            : "translate-x-full"
        }`}
      >
        <div className="flex flex-col text-right p-10 space-y-5 text-xl font-semibold ">
          <button className="fixed top-5 right-10 " onClick={toggleNavbar}>
            <i class="ri-xrp-line"></i>
          </button>
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
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed  top-5 right-5 h-full z-10 "
          onClick={toggleNavbar}
        ></div>
      )}
    </div>
  );
};

export default NavbarToggle;
