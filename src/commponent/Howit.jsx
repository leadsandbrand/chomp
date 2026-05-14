import React from 'react'
import { Link } from "react-router-dom";
const Howit = () => {
  return (
    <>
    <div className='flex  flex-col  lg:flex-row items- gap-3  pt-20  md:px-15  pr-10 '>
    
    
    <div className=' w-[full] lg:w-[47%]  pl-17    mt-5'>
    <h1 className="text-4xl md:text-5xl font-oswald font-bold  text-[#d97164]">
         How it works
</h1>
<p className="text-gray-700 mb-4 pt-6"> 
We offer multiple subscription plans for your convenience. 
<p> If you’re still deciding, you can also choose our trial packs and </p>

<p>  and see how your dog responds. </p>
<p className='mt-2'> 
Please  note  we cook fresh each day.
  </p>
<p>We do request that you give us at least 24 hours’ notice for your order!
</p>
</p>



<div className="mt-8 flex flex-col items-center md:items-start mr-10  pb-4 md:pb-0 md:mr-0">

<Link
  to="/work"
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
    inline-block
  "
>
  Click here to know more!
</Link>
</div>
    </div>


<div className="w-full lg:w-[50%] flex justify-center   lg:justify-center   justify-center overflow-hidden">

<img
src="/Rottweiler1-Photoroom.png"
className="
  w-[320px]
   w-[220px]
          sm:w-[280px]
          md:w-[360px]
          lg:w-[350px]
          xl:w-[500px]
  object-contain
  pb-15
"
/>
<div className="flex justify-center pb-6 ">
  <div className="w-[90%] md:w-[83%] h-[1px] bg-[#d97063]"></div>
</div>
</div>


</div>
<div className="flex justify-center pb-6   ">
<div className="w-[83%] md:w-[83%] h-[1px] bg-[#d97063]"></div>
</div>

</>
  )
}

export default Howit