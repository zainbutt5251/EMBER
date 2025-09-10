'use client';

import React, { useState } from "react";
import { ArrowRight, Landmark, Flag, Crown, Globe2 } from "lucide-react";

const locations = [
  {
    title: "Abu Dhabi",
    description: "Middle East & Africa Hub",
    icon: Landmark,
  },
  {
    title: "San Diego & Boston",
    description: "North America",
    icon: Flag,
  },
  {
    title: "London",
    description: "European Gateway",
    icon: Crown,
  },
  {
    title: "Pakistan",
    description: "South Asian Expertise",
    icon: Globe2,
  },
];

const Global = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div className="flex-1">
          <p className="text-xs tracking-widest text-gray-500 font-medium mb-3">
          »  PRESENCE
          </p>
          <h2 className="text-3xl font-bold text-slate-900 leading-snug mb-4">
            Global <span className="text-yellow-600">Presence</span>
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Strategic locations across four continents
          </p>

          <button className="bg-slate-900 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-slate-800 transition">
            Become a Partner <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Section - Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 rounded-xl overflow-hidden shadow-md">
            {locations.map((loc, i) => {
              const isAlwaysActive = i === 0;
              const isHovered = hoveredIndex === i;
              const Icon = loc.icon;

              // Determine dynamic styles
              const baseClasses =
                "p-8 flex flex-col justify-center items-center transition-all duration-300";

              const activeClasses =
                "bg-slate-900 text-white";
              const inactiveClasses =
                "bg-white text-slate-900 hover:bg-slate-100";

              const appliedClasses =
                isAlwaysActive || isHovered ? activeClasses : inactiveClasses;

              const iconColor =
                isAlwaysActive || isHovered ? "text-white" : "text-slate-900";
              const descColor =
                isAlwaysActive || isHovered ? "text-white opacity-80" : "text-gray-600";

              return (
                <div
                  key={i}
                  className={`${baseClasses} ${appliedClasses}`}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Icon size={28} className={`mb-3 ${iconColor}`} />
                  <h3 className={`font-semibold text-lg`}>{loc.title}</h3>
                  <p className={`text-sm mt-1 ${descColor}`}>{loc.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Global;
