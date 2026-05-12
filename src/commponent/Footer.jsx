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
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

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
            grid grid-cols-1 md:grid-cols-2
            md:grid-cols-[20%_80%]

           pb-10 pl-4
            border-b border-white
           
          "
        >

          {/* LOGO */}
          <div>
            <img src="/logochomp.white.png"   className="w-24 md:w-36 object-contain cursor-pointer"/>
          </div>
              
              <div> <h1 className=" text-3xl font-bold">Our food is prepared and delivered with ❤︎ in Bhopal</h1></div>
          
          {/* TIMING */}
   

          {/* EMAIL */}
       

        </div>

        {/* MIDDLE SECTION */}
        <div 
          className="
            grid grid-cols-1 md:grid-cols-3
            gap-50
            pt-14
          "
        >

          {/* LEFT TEXT */}
          <div >

            <h2 className="text-3xl font-bold leading-tight">
            Bhopal's first  <br />
               fresh food kitchen<br />
              for pets
            </h2>
  
     
   
              {/* <p className="text-gray-300 mt-5 leading-relaxed">
              We’ll help you find healthy fresh food that is right for your pet.
              Freshly cooked meals made with real ingredients and zero compromise.
            </p> */}

         

          </div>

          {/* PRODUCTS */}
          <div>

           
            <ul className="space-y-3 text-white cursor-pointer">
              <li className=" font-bold text-lg mb-5">
              Quick Links

</li>

              <li><a href="/shop#egg">
              Menu

</a></li>




              <li><a href="/shop#soya">
              How it works

</a></li>
              <li><a href="/shop#paneer">
              Contact us

</a></li>
<li className=" text-black">
<a
  href="/Chomp_PrivacyPolicy.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  Privacy Policy
</a>

</li>
<li className=" text-black">
<a
    href="/Chomp_TermsofUse.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    Terms & Use
  </a>
  </li>

             
            </ul>

          </div>

          {/* COMMUNITY */}
          {/* <div>

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

          </div> */}

          {/* GET IN TOUCH */}
          <div>

            <h3 className="font-bold text-lg mb-5">
               Get In Touch
            </h3>

            <ul className="space-y-3 text-white">
            
            

            {/* <li>
  <div className="flex items-center gap-3">

    <FaPhoneAlt className="text-white text-[18px]" />

    <p  className=" pl-2">
    +91 91091 17355
    </p>

  </div>
</li> */}

              <li>
                  <div className="flex items-start gap-3">

<FaEnvelope className="text-white mt-1 text-[18px]" />

<div>
 


  <p className="text-sm text-white pl-2">
  connect@getchomp.in
  </p>
</div>

</div>

</li>
          
<li>
  <div className="flex items-center gap-3">
  <IoLogoWhatsapp   className="text-white text-[23px]" />
  

    <p  className=" pl-2">
    +91 91091 17355
    </p>

  </div>
</li>


              <li> <div className="flex items-start gap-3">

<FaMapMarkerAlt className="text-white mt-1 text-[28px]" />

<div>
  <p className=" pl-2">
  Kitchen: B/136, Mahakali Society, Trilanga, Bhopal 462039



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
            pr-27
          "
        >

          <p className="text-white  text-sm">
          Copyright @ 2026 Juniper Collective Pvt. Ltd. All rights reserved.

          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            
          <a
  href="mailto:connect@getchomp.in"
  className="w-10 h-10 rounded-full  flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer"
>
  <MdEmail size={18} />
</a>
            <div className="w-10 h-10 rounded-full   flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
              <FaFacebookF size={16} />
            </div>

           
         

              <a
  href="https://instagram.com/lets.chomp"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full  flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer"
>
  <FaInstagram size={16} />
</a>
         

     

         

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;