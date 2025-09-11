"use client";

import {
  Facebook,
  Instagram,
  X,
  Linkedin,
  SendHorizonal,
  ChevronRight,
} from "lucide-react";
import footerlogo from "../assets/footerlogo.png";
import bgimageend from "../assets/bgimageend.png";
import { Button } from "react-day-picker";
export default function Footer() {
  return (
    <>
      <section
        className="w-full bg-[#f9f5ef] py-8 px-6 rounded-2xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgimageend.src})`,
        }}
      >
        <div className="bg-[#EEE5D8] p-5 rounded-md grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          {/* Left Column - Text */}
          <div>
            <h1 className="text-lg" style={{fontSize:"30px"}}>
              Ready to Expand Globally with Confidence?
            </h1>

            <p className="py-4">Lets turn complexity into your competitive advantage.</p>
          </div>

          {/* Right Column - Button */}
          <div className="flex md:justify-end">
            <button className="bg-[#1f263a] text-white flex items-center gap-2 rounded p-3">
            Contact Us <ChevronRight />
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-[#0E1832] text-white pt-16 pb-10 px-6">
        {/* Section Heading */}
        <div className="m-5  p-2 rounded-md py-5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo & Address */}
            <div>
              <img src={footerlogo.src} alt="" />
              <p className="text-sm opacity-80 mb-4">
                1234, Restaurant St, South City, <br />
                Newyork 0124
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-4">
                <a href="#" className="hover:text-yellow-400">
                  <Facebook size={18} />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <Instagram size={18} />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <X size={18} />
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white">Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Meet our team</a>
                </li>
                <li>
                  <a href="#">Case stories</a>
                </li>
                <li>
                  <a href="#">Latest news</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            {/* Other Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white">
                Other Links
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Creative Agency</a>
                </li>
                <li>
                  <a href="#">Digital agency</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Digital service</a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white">
                Newsletter
              </h4>
              <p className="text-sm text-gray-300 mb-4">
                Subscribe Us & Receive Our Offers and <br />
                Updates in Your Inbox Directly.
              </p>
              <form className="flex bg-white rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="Email address"
                  className="px-4 py-2 text-sm text-gray-800 w-full focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 px-3 flex items-center justify-center"
                >
                  <SendHorizonal className="text-white w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
            <p>Copyrights © 2025 EMBER GROUP. All Rights Reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Terms of use
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
