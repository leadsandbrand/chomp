import React from "react";
import Navbar from "./Navbar";

export default function HeroPage() {
  return (
    <div className="w-screen min-h-screen bg-[#fff] overflow-hidden relative">

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <section
        className="
          relative z-30
          grid grid-cols-1 md:grid-cols-2
          items-center
          min-h-screen
          px-6 sm:px-10 md:px-16 lg:px-28
          pt-28 md:pt-14
       
          gap-10 md:gap-4
        "
      >

        {/* LEFT CONTENT */}
        <div className="flex justify-center md:justify-start order-2 md:order-1">

          <div className="max-w-lg text-center md:text-left">

            {/* HEADING */}
            <h1
              className="
                text-[28px]
                sm:text-[36px]
                md:text-[42px]
                lg:text-[48px]
                leading-tight
                font-oswald
                font-bold
                text-black
              "
            >
              BHOPAL'S FIRST <br />
              FRESH FOOD KITCHEN <br />
              FOR PETS.
            </h1>

            {/* SUBTEXT */}
            <p
              className="
                mt-4
                text-sm
                sm:text-base
                md:text-[15px]
                font-bold
                text-black
                leading-relaxed
              "
            >
              <span className="block">
                <span className="text-[#d97063]">REAL FOOD</span> |
                <span className="text-[#d97063]"> NO PRESERVATIVES</span> |
                <span className="text-[#d97063]"> NO FILLERS</span> |
                <span className="text-[#d97063]"> NO COMPROMISE</span>
              </span>

              <span className="block mt-2">
                DELIVERED TO YOUR DOOR
              </span>
            </p>

            {/* BUTTON */}
            <div className="mt-8 flex flex-col items-center md:items-start">

              <button
                className="
                  bg-[#d97063]
                  text-white
                  font-bold
                  px-6 py-3
                  rounded-full
                  shadow-lg
                  hover:scale-105
                  transition
                  duration-300
                  cursor-pointer
                "
              >
                Order Now
              </button>

              <p className="text-xs text-gray-500 mt-3">
                Monthly & fortnightly plans available
              </p>

            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            flex
            justify-center md:justify-end
            items-center
            order-1 md:order-2
          "
        >

          <img
            src="/home-photo.png"
            alt="Dog Food"
            className="
              w-[240px]
              sm:w-[300px]
              md:w-[360px]
              lg:w-screen
              xl:w-[420px]
              object-contain
              drop-shadow-2xl
              pr-4
            "
          />

        </div>

      </section>
      {/* Bottom Line */}
      <div className="flex justify-center pb-6">
  <div className="w-[90%] md:w-[83%] h-[1px] bg-black"></div>
</div>
    </div>
  );
}