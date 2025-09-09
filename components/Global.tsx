import React from "react";
import { ArrowRight, Landmark, Flag, Crown, Globe2 } from "lucide-react";

const Global = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div className="flex-1">
          <p className="text-xs tracking-widest text-gray-500 font-medium mb-3">
            PRESENCE
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
            {/* Abu Dhabi */}
            <div className="bg-slate-900 text-white p-8 flex flex-col justify-center items-center">
              <Landmark size={28} className="mb-3" />
              <h3 className="font-semibold text-lg">Abu Dhabi</h3>
              <p className="text-sm opacity-80 mt-1">
                Middle East &amp; Africa Hub
              </p>
            </div>

            {/* San Diego & Boston */}
            <div className="bg-white p-8 flex flex-col justify-center items-center">
              <Flag size={28} className="text-slate-900 mb-3" />
              <h3 className="font-semibold text-lg text-slate-900">
                San Diego &amp; Boston
              </h3>
              <p className="text-sm text-gray-600 mt-1">North America</p>
            </div>

            {/* London */}
            <div className="bg-white p-8 flex flex-col justify-center items-center">
              <Crown size={28} className="text-slate-900 mb-3" />
              <h3 className="font-semibold text-lg text-slate-900">London</h3>
              <p className="text-sm text-gray-600 mt-1">European Gateway</p>
            </div>

            {/* Pakistan */}
            <div className="bg-white p-8 flex flex-col justify-center items-center">
              <Globe2 size={28} className="text-slate-900 mb-3" />
              <h3 className="font-semibold text-lg text-slate-900">Pakistan</h3>
              <p className="text-sm text-gray-600 mt-1">
                South Asian Expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Global;
