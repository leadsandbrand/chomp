import React from 'react'

const Howit = () => {
  return (
    <>
    <div className='flex  flex-col  lg:flex-row items- gap-3  pt-32  px-15 '>
    
    
    <div className=' w-[full] lg:w-[47%]  pl-17    mt-20 '>
    <h1 className="text-4xl md:text-5xl font-oswald font-bold  text-[#d97164]">
         How it works
</h1>
<p className="text-gray-700 mb-4 pt-6"> 
We offer multiple subscription plans for your convenience. 
<p> If you’re still deciding, you can also choose our trial packs and </p>

<p>  and see how your dog responds. </p>
<p className='mt-2'> 
Please  note  we cook fresh each day. We do request that you
  </p>
<p> give us at least 24 hour notice for your order!</p>
</p>
    </div>


<div className="w-full lg:w-[50%] flex justify-center   lg:justify-center   justify-center overflow-hidden">

<img
src="/howitworkdsimage.png"
className="
  w-[320px]
   w-[220px]
          sm:w-[280px]
          md:w-[360px]
          lg:w-[350px]
          xl:w-[450px]
  object-contain
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