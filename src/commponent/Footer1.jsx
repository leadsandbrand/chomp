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
    <footer className="relative overflow-hidden bg-[#d9766a] text-white mt-33">

   
    

  
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
    pb-10
    pl-0 md:pl-25
    border-b border-white
    text-center md:text-left
    place-items-center md:place-items-start
  "
>
  {/* LOGO */}
  <div>
    <img
      src="/logochomp.white.png"
      className="w-30 md:w-36 object-contain cursor-pointer pb-10 md:pb-0"
    />
  </div>

  {/* TEXT */}
  <div>
    <h1 className="text-3xl font-bold">
      Our food is prepared and delivered with ❤︎ in Bhopal
    </h1>
  </div>
</div>

        {/* MIDDLE SECTION */}
        <div
  className="
    grid grid-cols-1 md:grid-cols-3
    md:gap-50 gap-10
    pt-14
    text-center md:text-left
    place-items-center md:place-items-start
  "
>
  {/* LEFT TEXT */}
  <div>
    <h2 className="text-3xl font-bold leading-tight ml-0 md:ml-5">
      Bhopal's first <br />
      fresh food kitchen
      <br />
      for pets
    </h2>
  </div>

  {/* PRODUCTS */}
  <div>
    <ul className="space-y-3 text-white cursor-pointer flex flex-col items-center md:items-start">
      <li className="font-bold md:text-lg mb-5 text-2xl">
        Quick Links
      </li>

      <li>
        <a href="/shop">Menu</a>
      </li>

      <li>
        <a href="/work">How it works</a>
      </li>

      <li>
        <a href="/contact">Contact us</a>
      </li>

      <li>
        <a
          href="/Chomp_PrivacyPolicy.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </li>

      <li>
        <a
          href="/Chomp_TermsofUse.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Use
        </a>
      </li>
    </ul>
  </div>

  {/* GET IN TOUCH */}
  <div className="flex flex-col items-center text-center md:items-start md:text-left">
  <h3 className="font-bold md:text-lg text-2xl mb-5">
    Get In Touch
  </h3>

  <ul className="space-y-5 text-white ml-0">
    <li>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
        <FaEnvelope className="text-white text-[18px]" />

        <p>connect@getchomp.in</p>
      </div>
    </li>

    <li>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
        <IoLogoWhatsapp className="text-white text-[23px]" />

        <p>+91 91091 17355</p>
      </div>
    </li>

    <li>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
        <FaMapMarkerAlt className="text-white text-[28px]" />

        <p>
          Kitchen: B/136, Mahakali Society,
          Trilanga, Bhopal 462039
        </p>
      </div>
    </li>
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
    md:pl-5 md:pr-10
    px-5
    pt-5
    text-center md:text-left
  "
>
  <p className="text-white text-sm">
    Copyright @ 2026 Juniper Collective Pvt. Ltd.
    All rights reserved.
  </p>

  {/* SOCIAL ICONS */}
  <div className="flex items-center justify-center gap-4 mr-0">
    <a
      href="mailto:connect@getchomp.in"
      className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer"
    >
      <MdEmail size={18} />
    </a>

    <a
      href="https://www.facebook.com/profile.php?id=61572035913039"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer"
    >
      <FaFacebookF size={16} />
    </a>

    <a
      href="https://instagram.com/lets.chomp"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer"
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