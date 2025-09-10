"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  ChevronsRight,
  Circle,
  Play,
} from "lucide-react";
import banner from "../assets/bannerimg.png";
export default function Hero() {
  return (
    <section
     
      className="bg-[#18203a] relative px-6 pt-20 lg:px-8 min-h-screen flex items-center"
    >
      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
          {/* Left Column: Text Content */}
          <div className="bg-[#222d52] rounded-md flex-1 p-4 sm:p-8 text-center lg:text-left w-full max-w-full">
            <span className="flex justify-center lg:justify-start text-[#eee5d5] mb-2">
              <ChevronsRight /> Consultancy Agency
            </span>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-3 sm:py-5 font-bold tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              The Global Market <br />
              <span className="text-[#D2B68A]">Expansion Gateway</span>
            </motion.h1>

            <motion.p
              className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-full sm:max-w-3xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Enter and scale across the Middle East, North America, Europe, and
              South Asia with confidence.
            </motion.p>

            <motion.div
              className="mt-6 sm:mt-10 w-full flex flex-col gap-4 sm:flex-row items-center justify-center lg:justify-start flex-wrap gap-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex w-full flex-col sm:flex-row gap-4">
                <div className="flex items-center bg-white p-3 sm:p-4 rounded-md flex-1 mb-2 sm:mb-0">
                  <span className="text-2xl sm:text-3xl font-bold mr-4">95%</span>
                  <span className="text-sm sm:text-base opacity-80">
                    Approval <br /> Success
                  </span>
                </div>
                <div className="flex items-center bg-white p-3 sm:p-4 rounded-md flex-1">
                  <span className="text-2xl sm:text-3xl font-bold mr-4">85%</span>
                  <span className="text-sm sm:text-base opacity-80">
                    Fortune & Ex-Government
                    <br />
                    Leaders
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div>
              <div className="my-2">
                <p className="flex justify-center lg:justify-start text-[#eee5d5] py-2">
                  <Building2 /> Office in
                </p>
                <span className="text-[#eee5d5] block text-sm sm:text-base">
                  Abu Dhabi • San Diego • Boston • London • Pakistan
                </span>
              </div>
            </motion.div>
            <motion.div
              className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-6 gap-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="bg-[#D2B68A] text-[#eee5d5] w-full sm:w-auto mb-2 sm:mb-0">
                Book a discovery Call <ChevronRight />
              </Button>

              <div className="flex text-[#eee5d5] items-center">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base">Watch Our Story</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Placeholder for Image or Illustration */}
          <div className="flex-1 flex justify-center items-center">
            {/* Replace below div with your image or illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <img
                src={banner.src}
                alt="Company Logo"
                style={{ height: "100vh" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
