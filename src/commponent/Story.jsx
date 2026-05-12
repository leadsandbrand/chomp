import React from 'react'

const Story = () => {
  return (  
    <section>
  <div className="flex flex-col lg:flex-row items-center justify-between gap-3  py-19 mb-8">

{/* IMAGE */}
{/* IMAGE */}
<div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start overflow-hidden">

  <img
    src="/withjia.png"
    className="
      w-[320px]
      sm:w-[420px]
      md:w-[520px]
      lg:w-[650px]
      xl:w-[720px]
      object-contain
    "
  />

  <p className="mt-7   text-lg md:text-xl ml-40 font-semibold text-black">
  Meet Jiya, Head of Quality Control

  </p>

</div>

{/* TEXT */}
<div className="w-full lg:w-[52%] max-w-2xl pr-27 mt-5  ">

  <h2 className="text-4xl md:text-5xl font-bold text-[#6687d8]">
    How Chomp got started
  </h2>

  {/* <div className=" flex  justify-start items-center mt-2"> 
        <img src="/chompicons.png" className="  h-10 w-10" />
        </div> */}
<br></br>
  <p className="text-gray-700 mb-4 italic font-bold">
    From one pet parent to another,
  </p>

  <p className="text-gray-700 mb-4">
    <p className='mb-2'>  I’ve had pets for over 20 years with a deep interest in animal welfare and conservation. You'd think I had canine nutrition figured out. </p>

 
   
  <p className='mb-2'> Then I sat down to read the back of my dog’s kibble packet. I couldn't pronounce half the ingredients. I didn't know what the other half even was. That’s when my deep dive began!</p>
 
  I started cooking for her - fresh chicken, eggs, a bit of paneer. She went absolutely mad for it. Her coat looks better. She has more energy. And honestly? She just seems happier.
Chomp was born out of that simple moment: the realisation that the biggest impact I could make for our best friends was right in my own kitchen. 

<p className='mt-2'>
That’s how Chomp started - in a kitchen in Bhopal, with one very happy puppy as our taste tester. Now, after a lot of research and consultations with experts in the field, we cook fresh meals every single day and deliver to dogs right to your door. 

We're a local kitchen with one mission: Simple food. Happy, healthy dogs. That's it.</p>

  </p>

 
</div>
 </div>

<div className="flex justify-center  ">
  <div className="w-[90%] md:w-[83%] h-[1px] bg-[#d97063]"></div>
</div>


</section>

  )
}

export default Story