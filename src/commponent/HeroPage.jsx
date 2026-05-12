import React from "react";
import Navbar from "./Navbar";

export default function HeroPage() {
  return (
    <div className="w-screen  bg-[#fff] overflow-hidden relative">

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
        
          px-2 sm:px-10 md:px-6 lg:px-6
          pt-28 md:pt-10
          mt-8
           md:gap-4
        "
      >

        {/* LEFT CONTENT */}
        <div className="flex justify-start   mt-3 order-2 md:order-1  pl-2 md:pl-21 ">
      
          <div className="max-w-lg text-center md:text-left">

            {/* HEADING */}
            <h1
              className="
                text-4xl md:text-5xl font-bold 
                leading-tight
                font-oswald
                font-bold
               text-[#d97063]
              "
            >
               Bhopal's first  <br />
               fresh food kitchen<br />
              for pets
            </h1>

            {/* SUBTEXT */}
            <p
              className="
                mt-4
                text-sm
                sm:text-base
                md:text-[15px]
                font-bold
                
                leading-relaxed
              "
            >
              <span className="block italic">
                <span> Real food </span> |
                <span >  No preservatives</span> |
                <span > No fillers</span> |
                <span >  No compromise</span>
              </span>

              <span className="block mt-1 italic">
               Delivered to your door 
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

              <p className="text-sm text-black mt-3">
              Trial packs, monthly & fortnightly subscription plans available

              </p>

            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            flex
            justify-center md:justify-start
            items-center
            order-1 md:order-2
          "
        >

          <img
            src="/homefinal.png"
            alt="Dog Food"
            className="
              w-[240px]
              sm:w-[300px]
              md:w-[360px]
              lg:w-screen
              xl:w-[500px]
              object-contain
              drop-shadow-2xl
              pr- 
            "
          />

        </div>

      </section>
      {/* Bottom Line */}
      <div className="flex justify-center ">
  <div className="w-[90%] md:w-[83%] h-[1px] bg-[#d97063]"></div>
</div>
    </div>
  );
}