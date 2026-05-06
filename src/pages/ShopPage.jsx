import React from 'react'
import Navbar from '../commponent/Navbar'

const DetailProduct = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
   <Navbar/>
<section className="h-screen snap-start bg-[#7fa857] overflow-hidden flex items-center font-oswald" id='soya'>

<div className="w-full px-6 md:px-12 lg:px-[100px] flex flex-col lg:flex-row items-center justify-between">

  {/* LEFT CONTENT */}
  <div className="max-w-xl text-white text-center lg:text-left">

    <h1 className="text-4xl md:text-6xl font-bold mb-6">
     Chomp Soya+ 
    </h1>
   <p className='text-[#d9766a]'>Gentle & Golden</p>
    <p className="text-lg leading-relaxed mb-6">
    Textured soya protein with mixed vegetables and wholegrains. Designed for vegetarian households who don't want to compromise on protein or taste.
    </p>

    <button className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#7fa857] transition cursor-pointer">
      SHOP NOW
    </button>

  </div>

  {/* RIGHT IMAGE */}
{/* RIGHT IMAGE */}
<div className="mt-0 relative flex justify-center lg:justify-start w-full lg:w-auto">

  {/* BACK IMAGE */}
  <img
    src="/Chomp-Soya-ingredients.final.png"
    alt="product back"
    className="
      absolute
      w-[140px] sm:w-[180px] md:w-[250px] lg:w-[350px]
      left-2 sm:left-4 md:left-6 lg:left-5
      top-2 sm:top-4 md:top-6 lg:top-0
      opacity-80 z-0
      float-animation
    "
  />

  {/* FRONT IMAGE */}
  <img
    src="/chomp-soya-cooked-final.png"
    alt="product front"
    className="
      relative
      w-[180px] sm:w-[220px] md:w-[280px] lg:w-[350px]
      ml-6 sm:ml-10 md:ml-14 lg:ml-[-80px]
      mt-6 sm:mt-10 md:mt-14 lg:mt-0   lg:top-25
      z-10
      float-animation
      drop-shadow-2xl
    "
  />

</div>

</div>

</section>
    
<section    id='chicken' className="h-screen snap-start bg-[#d9766a] overflow-hidden flex items-center font-oswald">

<div className="w-full px-6 md:px-12 lg:px-[100px] flex flex-col lg:flex-row items-center justify-between">

  {/* LEFT CONTENT */}
  <div className="max-w-xl text-white text-center lg:text-left">

    <h1 className="text-4xl md:text-6xl font-bold mb-6">
    Chomp Chicken+
    </h1>
   <p className=' text-white'>The Classic</p>
    <p className="text-lg leading-relaxed mb-6">
    Whole chicken cooked with seasonal vegetables and rice. High in protein, easy to digest, and absolutely irresistible to most dogs. The one that started it all.
    </p>

    <button className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#7fa857] transition cursor-pointer">
      SHOP NOW
    </button>

  </div>

  {/* RIGHT IMAGE */}
{/* RIGHT IMAGE */}
<div className="mt-0 relative flex justify-center lg:justify-start w-full lg:w-auto">

  {/* BACK IMAGE */}
  <img
    src="/Chomp-Chicken-ingredients.final.png"
    alt="product back"
    className="
      absolute
      w-[140px] sm:w-[180px] md:w-[250px] lg:w-[350px]
      left-2 sm:left-4 md:left-6 lg:left-5
      top-2 sm:top-4 md:top-6 lg:top-0
      opacity-80 z-0
      float-animation
    "
  />

  {/* FRONT IMAGE */}
  <img
    src="/Chomp-Chicken-cooked.final.png"
    alt="product front"
    className="
      relative
      w-[180px] sm:w-[220px] md:w-[280px] lg:w-[350px]
      ml-6 sm:ml-10 md:ml-14 lg:ml-[-80px]
      mt-6 sm:mt-10 md:mt-14 lg:mt-0   lg:top-25
      z-10
      float-animation
      drop-shadow-2xl
    "
  />

</div>

</div>

</section>
    
<section  id='egg' className="h-screen snap-start bg-[#e7ac4e] overflow-hidden flex items-center font-oswald">
 
<div className="w-full px-6 md:px-12 lg:px-[100px] flex flex-col lg:flex-row items-center justify-between">

  {/* LEFT CONTENT */}
  <div className="max-w-xl text-white text-center lg:text-left">

    <h1 className="text-4xl md:text-6xl font-bold mb-6">
    Chomp Egg+ 
    </h1>
  <p  className='text-['>Plant Power</p>
    <p className="text-lg leading-relaxed mb-6">
    Textured soya protein with mixed vegetables and wholegrains. Designed for vegetarian households who don't want to compromise on protein or taste.
    </p>

    <button className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#7fa857] transition cursor-pointer">
      SHOP NOW
    </button>

  </div>

  {/* RIGHT IMAGE */}
{/* RIGHT IMAGE */}
<div className="mt-0 relative flex justify-center lg:justify-start w-full lg:w-auto">

  {/* BACK IMAGE */}
  <img
    src="/Chomp-Egg+ingredients.final.png"
    alt="product back"
    className="
      absolute
      w-[140px] sm:w-[180px] md:w-[250px] lg:w-[350px]
      left-2 sm:left-4 md:left-6 lg:left-5
      top-2 sm:top-4 md:top-6 lg:top-0
      opacity-80 z-0
      float-animation
    "
  />

  {/* FRONT IMAGE */}
  <img
    src="/Chomp-Egg+cooked.final.png"
    alt="product front"
    className="
      relative
      w-[180px] sm:w-[220px] md:w-[280px] lg:w-[350px]
      ml-6 sm:ml-10 md:ml-14 lg:ml-[-80px]
      mt-6 sm:mt-10 md:mt-14 lg:mt-0   lg:top-25
      z-10
      float-animation
      drop-shadow-2xl
    "
  />

</div>

</div>

</section>
    
<section  id="paneer" className="h-screen snap-start bg-[#9aa562] overflow-hidden flex items-center font-oswald">

<div className="w-full px-6 md:px-12 lg:px-[100px] flex flex-col lg:flex-row items-center justify-between">

  {/* LEFT CONTENT */}
  <div className="max-w-xl text-white text-center lg:text-left">

    <h1 className="text-4xl md:text-6xl font-bold mb-6">
    Chomp Paneer+ 
    </h1>
    <p className='text-[#d9766a]'>Creamy Goodness</p>

    <p className="text-lg leading-relaxed mb-6">
    Textured soya protein with mixed vegetables and wholegrains. Designed for vegetarian households who don't want to compromise on protein or taste.
    </p>

    <button className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#7fa857] transition cursor-pointer">
      SHOP NOW
    </button>

  </div>

  {/* RIGHT IMAGE */}
{/* RIGHT IMAGE */}
<div className="mt-0 relative flex justify-center lg:justify-start w-full lg:w-auto">

  {/* BACK IMAGE */}
  <img
    src="/Chomp-Paneer+Ingredients.final.png"
    alt="product back"
    className="
      absolute
      w-[140px] sm:w-[180px] md:w-[250px] lg:w-[350px]
      left-2 sm:left-4 md:left-6 lg:left-5
      top-2 sm:top-4 md:top-6 lg:top-0
      opacity-80 z-0
      float-animation
    "
  />

  {/* FRONT IMAGE */}
  <img
    src="/Chomp-Paneer+cooked.final.png"
    alt="product front"
    className="
      relative
      w-[180px] sm:w-[220px] md:w-[280px] lg:w-[350px]
      ml-6 sm:ml-10 md:ml-14 lg:ml-[-80px]
      mt-6 sm:mt-10 md:mt-14 lg:mt-0   lg:top-25
      z-10
      float-animation
      drop-shadow-2xl
    "
  />

</div>

</div>

</section>
    
    </div>
  )
}

export default DetailProduct