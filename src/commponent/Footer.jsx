import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#d9766a] text-white mt-12">

   
    

  
      {/* MAIN CONTENT */}
      <div
        className="
          relative z-20
          px-6 sm:px-10 md:px-16 lg:px-24
       pt-10
          pb-10
        "
      >

        {/* TOP CONTACT ROW */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-4
            gap-8
           pb-10 pl-4
            border-b border-white
           
          "
        >

          {/* LOGO */}
          <div>
            <img src="/logochomp.white.png"   className="w-24 md:w-32 object-contain cursor-pointer"/>
          </div>

          {/* ADDRESS */}
     
          {/* TIMING */}
   

          {/* EMAIL */}
       

        </div>

        {/* MIDDLE SECTION */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-4
            gap-12
            pt-14
          "
        >

          {/* LEFT TEXT */}
          <div>

            <h2 className="text-3xl font-bold leading-tight">
            BHOPAL'S FIRST <br />
              FRESH FOOD KITCHEN <br />
              FOR PETS.
            </h2>

            {/* <p className="text-gray-300 mt-5 leading-relaxed">
              We’ll help you find healthy fresh food that is right for your pet.
              Freshly cooked meals made with real ingredients and zero compromise.
            </p> */}

         

          </div>

          {/* PRODUCTS */}
          <div>

            <h3 className="font-bold text-lg mb-5">
              OUR PRODUCTS
            </h3>

            <ul className="space-y-3 text-white cursor-pointer">
              <li><a href="/shop#chicken">
     Chicken Meals
</a></li>

              <li><a href="/shop#egg">
        Egg Meals
</a></li>




              <li><a href="/shop#soya">
     Soya Meals
</a></li>
              <li><a href="/shop#paneer">
      Paneer Meals
</a></li>
             
            </ul>

          </div>

          {/* COMMUNITY */}
          <div>

            <h3 className="font-bold text-lg mb-5">
              COMMUNITY
            </h3>

            <ul className="space-y-3 text-white">
              <li>News & Stories</li>
              <li>Recipes</li>
              <li>Our Story</li>
              <li>Pet Wellness</li>
              <li>Blogs</li>
            </ul>

          </div>

          {/* GET IN TOUCH */}
          <div>

            <h3 className="font-bold text-lg mb-5">
              GET IN TOUCH
            </h3>

            <ul className="space-y-3 text-white">
              <li>  <div className="flex items-start gap-3">

<FaEnvelope className="text-white mt-1 text-[18px]" />

<div>
 
<p className="font-semibold">
                Email Us
              </p>

  <p className="text-sm text-white">
  connect@getchomp.in
  </p>
</div>

</div></li>
              <li> <div className="flex items-start gap-3">

<FaMapMarkerAlt className="text-white mt-1 text-[20px]" />

<div>
  <p className="font-semibold">
    Bhopal, Madhya Pradesh
  </p>

  <p className="text-sm text-white">
    Fresh meals delivered daily
  </p>
</div>

</div>
</li>
              <li>      <div className="flex items-start gap-3">

<FaClock className="text-white
 mt-1 text-[18px]" />

<div>
  <p className="font-semibold">
    Mon To Sun
  </p>

  <p className="text-sm text-white">
    10:00 AM to 8:00 PM
  </p>
</div>

</div>
</li>
              {/* <li>Privacy Policy</li>
              <li>Terms & Conditions</li> */}
            </ul>

          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            flex flex-col md:flex-row
            justify-between
            items-center
            gap-6
            pt-14
          "
        >

          <p className="text-white text-sm">
            Copyright © 2025 Chomp. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">

            <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
              <FaFacebookF size={16} />
            </div>

            <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
              <FaTwitter size={16} />
            </div>

            <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
              <FaInstagram size={16} />
            </div>

            <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
              <FaDribbble size={16} />
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;