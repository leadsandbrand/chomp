import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [fixedNav, setFixedNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      // Fix navbar after scroll
      if (currentScroll > 100) setFixedNav(true);
      else setFixedNav(false);

      // Show navbar when scrolling up
      if (currentScroll < lastScroll) setShow(true);

      // Close mobile menu on scroll
      setMenuOpen(false);

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`z-50 flex items-center gap-24 md:gap-[285px] px-30 md:px-16 lg:px-[80px] h-[70px] md:h-[80px] font-oswald text-black w-full transition-all duration-500 bg-white ${
        fixedNav ? "fixed top-0 left-0 shadow-md" : "absolute top-0 left-0"
      } ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Logo */}
      <img
        src="/logochomp.png"
        alt="Logo"
        className="w-24 md:w-32 object-contain cursor-pointer  ml-8"
      />

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 text-sm font-semibold">
        <Link to="/" className="hover:text-[#d97063] transition">
          HOME 
        </Link>
        <Link to="/shop" className="hover:text-[#d97063] transition">
          MENU 
        </Link>
        <Link to="/work" className="hover:text-[#d97063] transition">
          HOW IT WORKS 
        </Link>
        <Link to="/contact" className="hover:text-[#d97063] transition">
          ORDER NOW 
        </Link>
      </nav>

      {/* Right Side (Desktop) */}
      <div className="hidden md:flex gap-6 text-sm font-semibold items-center mr-8">
      
       
      </div>

      {/* Hamburger (Mobile) */}
      <button
        className="md:hidden flex flex-col gap-1 "
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="w-6 h-[2px] bg-black"></span>
        <span className="w-6 h-[2px] bg-black"></span>
        <span className="w-6 h-[2px] bg-black"></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-4 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>
            MENU
          </Link>
          <Link to="/work" onClick={() => setMenuOpen(false)}>
            HOW IT WORKS
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            ORDER NOW
          </Link>

        
       
         
        </div>
      )}
    </header>
  );
} 