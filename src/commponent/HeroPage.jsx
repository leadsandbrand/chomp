import React from "react";
import Navbar from "./Navbar";

export default function HeroPage() {
  return (
<div className="w-screen text-white overflow-hidden relative min-h-screen pb-2">

{/* Background */}

<div className="absolute inset-0 z-0"> 


    <img
    src="/chomp.homepagebanner.1.jpg.jpeg"
    alt="hero"
    className="w-full h-full object-cover "
  />
</div>

{/* Navbar */}
<div className="absolute top-0 left-0 w-full z-50">
  <Navbar />
</div>

{/* Hero Content */}
<section className="relative z-30 grid md:grid-cols-2 items-center 
  w-full max-w-none
  px-6 md:px-16 lg:px-24
  pt-28 md:pt-32 pb-12 md:pb-16 min-h-screen">

  {/* TEXT */}
  <div className="flex items-center justify-start text-center md:text-left">
    <div className="max-w-xl">

      <h1 className="text-2xl md:text-4xl lg:text-4xl font-oswald font-bold text-black leading-tight">
        BHOPAL'S FIRST <br />
        FRESH FOOD KITCHEN <br />
        FOR PETS.
      </h1>

      <p className="mt-4 md:mt-6 text-sm md:text-xl lg:text-[15px] font-reyes text-black font-bold">

        <span className="block leading-relaxed">
          <span className="text-[#d97063]">REAL FOOD</span> |
          <span className="text-[#d97063]"> NO PRESERVATIVES</span> |
          <span className="text-[#d97063]"> NO FILLERS</span> |
          <span className="text-[#d97063]"> NO COMPROMISE</span>
        </span>

        <span className="block mt-1">
    DELIVERED TO YOUR DOOR
  </span>
      </p>

      <div className="mt-6 flex flex-col items-center md:items-start">
        <button className="bg-[#d97063] text-white font-bold px-3 md:px-4 py-2 md:py-2 rounded-full shadow-lg hover:scale-105 transition  cursor-pointer">
          Order Now 
        </button>

        <span className="text-xs text-gray-500 mt-2 tracking-wide">
          Monthly & fortnightly plans available
        </span>
      </div>

    </div>
  </div>

</section>

</div>
  );
}