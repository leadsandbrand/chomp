import React from "react";

export default function FeaturedProducts() {
  return (
    <div className="w-screen bg-[#fff] overflow-hidden relative">

      {/* SECTION */}
      <section
        className="
          relative z-30
          grid grid-cols-1 md:grid-cols-2
          items-center
          w-full
          px-6 sm:px-10 md:px-16 lg:px-24
           
          gap-10 md:gap-8
        "
      >

        {/* LEFT IMAGE */}
        <div
          className="
            flex
            justify-center md:justify-start
            order-1
          "
        >

          <img
            src="/pngtree-hungry-dog-food-bowl-pet-png-image_11285042.png"
            alt="Dog"
            className="
              w-[220px]
              sm:w-[280px]
              md:w-[360px]
              lg:w-[350px]
              xl:w-[400px]
              object-contain
              
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
            <h1 className="text-2xl md:text-3xl font-oswald font-bold text-black">
              THE MENU
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 md:mt-6 text-sm md:text-lg font-reyes text-[#d97063] font-bold leading-relaxed">
              Wholesome, freshly cooked meals of proteins, carbohydrates
              <br className="hidden md:block" />
              fibre, essential fats and micronutrients.
            </p>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 mt-4">

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

                <div className="text-sm text-gray-700 font-semibold space-y-1">
                  <p>Lean protein, Whole-food</p>
                  <p>calcium, Naturally high fibre</p>
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

                <div className="text-sm text-gray-700 font-semibold space-y-1">
                  <p>Highest bioavailability, Oat</p>
                  <p>fibre, Whole-food minerals</p>
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

                <div className="text-sm text-gray-700 font-semibold space-y-1">
                  <p>Plant-complete protein</p>
                  <p>Highest fibre, 100% vegan</p>
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

                <div className="text-sm text-gray-700 font-semibold space-y-1">
                  <p>Dairy casein Naturally, highest</p>
                  <p>calcium, 100% vegetarian</p>
                </div>

              </div>

            </div>

          </div>
        </div>

      </section>
      <div className="flex justify-center pb-6  py-31 ">
  <div className="w-[83%] md:w-[83%] h-[1px] bg-black"></div>
</div>
    </div>
  );
}