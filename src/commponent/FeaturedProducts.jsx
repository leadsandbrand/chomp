import React from "react";

export default function FeaturedProducts() {
  return (
   <>
    <div className="w-screen bg-[#fff] overflow-hidden relative md:pt-12 md:pt-15">

{/* SECTION */}
<section
  className="
    relative z-30
    grid grid-cols-1 md:grid-cols-2
    items-start
    w-full
    px-6 sm:px-10 md:px-16 lg:px-24
     
    gap-10 md:gap-8
  "
>

  {/* LEFT IMAGE */}
{/* LEFT IMAGE */}
<div
  className="
    flex flex-col
    items-center md:items-start
    justify-center md:justify-start
    order-1
    text-center md:text-left
  "
>

  {/* MOBILE HEADING */}
  <div className="md:hidden mb-6  mt-10">

    <h1 className="text-4xl font-oswald font-bold text-[#d97164]">
      The Menu
    </h1>

    <p className="mt-4 text-lg leading-relaxed px-4">
      Wholesome, freshly cooked meals of proteins,
      carbohydrates, fibre, essential fats and
      micronutrients.
    </p>

  </div>

  {/* IMAGE */}
  <img
    src="/final.3.png"
    alt="Dog"
    className="
      w-[220px]
      sm:w-[280px]
      md:w-[360px]
      lg:w-[500px]
      xl:w-[300px]
      object-contain
      mt-5 md:mt-17
      ml-0 md:ml-15
    "
  />

</div>

  {/* RIGHT SIDE CONTENT */}
  <div
    className="
      flex flex-col
      items-center md:items-start
      text-center md:text-left
      order-2
    "
  >

    {/* FIXED WRAPPER */}
    <div className="max-w-[900px] w-full">

      {/* HEADING */}
      <h1 className="hidden md:block text-4xl md:text-5xl font-oswald font-bold text-[#d97164]">
  The Menu
</h1>
      {/* DESCRIPTION */}
      <p className="mt-4 text-lg leading-relaxed px-4">
  Wholesome, freshly cooked meals of proteins, carbohydrates
  <br className="hidden md:block" />
  fibre, essential fats and micronutrients.
</p>
      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 mt-4 ">

        {/* CARD 1 */}
        <div className="flex flex-col items-center md:items-start">

          <img
            src="/chomp.chicken.png"
            className="
              h-[120px] w-[120px]
              md:h-[160px] md:w-[160px]
              object-contain
            "
          />

          <div className="text-sm text-700 font-semibold space-y-1 pl-3">
            <p>Lean protein</p> 
            <p>Whole-food calcium</p>
            <p> Naturally high fibre</p>
          </div>

        </div>

        {/* CARD 2 */}
        <div className="flex flex-col items-center md:items-start">

          <img
            src="/chop.egg.png"
            className="
              h-[120px] w-[120px]
              md:h-[160px] md:w-[160px]
              object-contain
            "
          />

          <div className="text-sm text-700 font-semibold space-y-1 pl-2">
            <p>Highest bioavailability</p>
            <p>Oat fibre</p>
            <p> Whole-food minerals</p>
          </div>

        </div>

        {/* CARD 3 */}
        <div className="flex flex-col items-center md:items-start">

          <img
            src="/chop.soya.png"
            className="
              h-[120px] w-[120px]
              md:h-[160px] md:w-[160px]
              object-contain
            "
          />

          <div className="text-sm text-700 font-semibold space-y-1 pl-2">
            <p>Plant-complete protein</p>
            <p>Digestible carbs</p>

              
            <p>     100% vegan</p>
          </div>

        </div>

        {/* CARD 4 */}
        <div className="flex flex-col items-center md:items-start">

          <img
            src="/chomp.paneer.png"
            className="
              h-[120px] w-[120px]
              md:h-[160px] md:w-[160px]
              object-contain
            "
          />

          <div className="text-sm text-700 font-semibold space-y-1 pl-2">
            <p>Dairy casein</p>
            <p>   High calcium</p>
            <p> 100% vegetarian</p>
          </div>

        </div>

      </div>

    </div>
  </div>

</section>
<div className="flex justify-center pb-6  py-20 ">
<div className="w-[83%] md:w-[83%] h-[1px] bg-[#d97063]"></div>
</div>
</div>
</>
  );
}