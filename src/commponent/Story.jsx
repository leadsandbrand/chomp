import React from 'react'

const Story = () => {
  return (
<div className="flex flex-col lg:flex-row items-center justify-between gap-3  py-24 mb-10">

{/* IMAGE */}
<div className="w-full lg:w-[50%]  flex justify-start">
  <img
    src="/chomstory image-Photoroom.png"
    className="w-[500px] lg:w-[650px] -ml-14 lg:-ml-4 mt-15"
  />
</div>

{/* TEXT */}
<div className="w-full lg:w-[52%] max-w-2xl pr-20 mt-5">

  <h2 className="text-3xl md:text-5xl font-bold">
    How Chomp got started
  </h2>

  <div className="w-14 h-1 bg-[#d97063] mt-4 mb-6"></div>

  <p className="text-gray-700 mb-4">
    From one pet parent to another —
  </p>

  <p className="text-gray-700 mb-4">
  I’ve had pets for over 20 years with a deep interest in animal welfare and conservation. You'd think I had canine nutrition figured out. 
   <br></br>
   Then I sat down to read the back of my dog’s kibble packet. I couldn't pronounce half the ingredients. I didn't know what the other half even was. That’s when my deep dive began!
  <br></br>
  I started cooking for her — fresh chicken, eggs, a bit of paneer. She went absolutely mad for it. Her coat looks better. She has more energy. And honestly? She just seems happier.
Chomp was born out of that simple moment: the realisation that the biggest impact I could make for our best friends was right in my own kitchen. 
<br></br>
<br></br>
That's how Chomp started — in a kitchen in Bhopal, with one very excited dog as our first taste-tester.  Now, after a lot of research and consultations with experts in the field, we cook fresh meals every single day and deliver to dogs right to your door. 

We're a local kitchen with one mission: Simple food. Happy, healthy dogs. That's it.

  </p>

  <p className="font-semibold">
  How it Works
  </p>
  <p className="text-gray-700 mb-4"> 
  We offer multiple subscription plans for your convenience. If you’re still deciding, you can also choose our trial packs and see how your dog responds.
Please note – we cook fresh each day. We do request that you give us at least 24 hour notice for your order!

  </p>
</div>

</div>
  )
}

export default Story