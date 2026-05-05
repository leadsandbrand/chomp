import React from "react";

export default function FeaturedProducts() {
  return (
    <div className="w-screen text-white overflow-hidden relative h-[650px] pb-11">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/chomp.homepagebanner.2.jpg.jpeg"
          className="w-full h-full object-cover object-[30%_center]"
        />
      </div>

      {/* Section */}
      <section className="relative z-30 grid md:grid-cols-2 items-start 
        w-full max-w-none
        px-6 md:px-16 lg:px-24
         pb-12">

        {/* RIGHT SIDE CONTENT */}
        <div className="flex flex-col items-start md:col-start-2 text-left ">

          {/* FIXED WRAPPER */}
          <div className="max-w-[900px] w-full">

            {/* HEADING */}
            <h1 className="text-2xl md:text-3xl font-oswald font-bold text-black">
              THE MENU
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-4 md:mt-6 text-sm md:text-lg font-reyes text-[#d97063] font-bold leading-relaxed">
              Wholesome, freshly cooked meals of proteins, carbohydrates
              <br />
              fibre, essential fats and micronutrients.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 ">

{/* CARD 1 */}
<div className="flex flex-col items-start  mt-2 w-fit pr-8">
  <img
    src="/chomp.chicken.png"
    className="h-[120px] w-[120px] md:h-[160px] md:w-[160px] object-contain"
  />

  <div className=" text-sm text-gray-700 font-semibold space-y-1">
    <p>Lean protein, Whole-food </p>
   <p> calcium, Naturally high fibre</p>
  </div>
</div>

{/* CARD 2 */}
<div className="flex flex-col items-start        ">
  <img
    src="/chop.egg.png"
    className="h-[120px] w-[120px] md:h-[160px] md:w-[160px] object-contain"
  />

  <div className=" text-sm text-gray-700 font-semibold space-y-1">
    <p>Highest bioavailability, Oat 

</p>
    <p> fibre, Whole-food minerals</p>
    
  </div>
</div>

{/* CARD 3 */}
<div className="flex flex-col items-start  300 w-fit pr-8">
  <img
    src="/chop.soya.png"
    className="h-[120px] w-[120px] md:h-[160px] md:w-[160px] object-contain"
  />

  <div className=" text-sm text-gray-700 font-semibold space-y-1">
    <p>Plant-complete protein


</p>
    <p> Highest fibre, 100% vegan</p>
    
  </div>
</div>

{/* CARD 4 */}
<div className="flex flex-col items-start ">
  <img
    src="/chomp.paneer.png"
    className="h-[120px] w-[120px] md:h-[160px] md:w-[160px] object-contain"
  />

  <div className="text-sm text-gray-700 font-semibold space-y-1">
    <p> Dairy casein
Naturally, highest  

</p>
    
    <p>calcium, 100% vegetarian</p>
  </div>
</div>

</div>

          </div>
        </div>

      </section>
    </div>
  );
}