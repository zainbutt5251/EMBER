"use client";

import React, { useState } from "react";
import { PlayCircle, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import methodology from "../assets/methodology.png";

const Methodology = () => {
  const steps = [
    { id: "01", title: "Discover", sub: "Discover" },
    { id: "02", title: "Decode", sub: "Decode local dynamics" },
    { id: "03", title: "Design", sub: "Customize expansion strategies" },
    { id: "04", title: "Deliver", sub: "Execute with agility and precision" },
    { id: "05", title: "Transfer", sub: "Handover systems and operations" },
  ];

  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (id) => {
    setOpenStep((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-gray-50" id="methodology">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div className="flex-1">
          <p className="text-xs tracking-widest text-gray-500 font-medium mb-3">
            » METHODOLOGY
          </p>
          <h2 className="text-3xl font-bold text-slate-900 leading-snug mb-4">
            Methodology:{" "}
            <span className="text-yellow-600">East–West Bridge</span>
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Our proven 5-step process for successful global expansion
          </p>

          <div className="relative rounded-lg overflow-hidden shadow-md">
            <img
              src={methodology.src}
              alt="Video Preview"
              className="w-full object-cover"
            />
            <button className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
              <PlayCircle size={32} />
              <span className="text-sm font-medium">Watch Video</span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col justify-center">
          {steps.map((step) => {
            const isOpen = openStep === step.id;
            return (
              <div
                key={step.id}
                className="flex items-start gap-4 mb-10 last:mb-0"
              >
                {/* Circle Step Number */}
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full border font-semibold text-sm shrink-0 ${
                    isOpen
                      ? "bg-slate-900 text-white border-slate-900"
                      : "border-gray-300 text-gray-500"
                  }`}
                >
                  {step.id}
                </div>

                {/* Step Content */}
                <div className="flex-1 border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between">
                    <h4
                      className={`font-semibold ${
                        isOpen ? "text-slate-900" : "text-gray-800"
                      }`}
                    >
                      {step.title}
                    </h4>

                    {/* Toggle Button */}
                    {step.sub && (
                      <button
                        onClick={() => toggleStep(step.id)}
                        className="text-gray-700 hover:text-gray-900 transition"
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Sub Description */}
                  <AnimatePresence>
                    {isOpen && step.sub && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-500 text-sm mt-2 overflow-hidden"
                      >
                        {step.sub}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
