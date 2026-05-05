import React from "react";
import { MapPin, Mail, Phone} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#d97063] text-white font-oswald">

      <div className="px-4 md:px-12 lg:px-[80px] py-16">

        {/* TOP TEXT */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl font-semibold">
            Our food is prepared and delivered with ❤️ in Bhopal.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get in touch</h3>

            <div className="space-y-3 text-sm md:text-base">

              <div className="flex gap-3 items-start">
                <MapPin size={18} />
                <p>
                  B/136, Mahakali Society, Trilanga,<br />
                  Bhopal 462039
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <Phone size={18} />
                <p>+91 91091 17355</p>
              </div>

              <div className="flex gap-3 items-center">
                <Mail size={18} />
                <p>connect@getchomp.in</p>
              </div>

            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-sm md:text-base">
              <li className="hover:underline cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:underline cursor-pointer">
                Terms of Use
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow us</h3>

            <a
              href="https://instagram.com/lets.chomp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline"
            >
              {/* <Instagram size={18} /> */}
              @lets.chomp
            </a>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-white/30 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Chomp. All rights reserved.
        </div>

      </div>
    </footer>
  );
}