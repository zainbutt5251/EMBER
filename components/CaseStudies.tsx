'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import case1 from "../assets/case1.png"
import case2 from "../assets/case2.png"
import case3 from "../assets/case3.png"
const categories = ['Business', 'Finance', 'Consulting', 'Planning', 'Corporate'];

const caseStudies = [
  {
    id: 1,
    title: 'Healthcare Device, GCC',
    description: 'Registration in 70 days, first revenue in 180.',
    category: 'Business',
    image: case1.src,
    link: '#',
  },
  {
    id: 2,
    title: 'B2B SaaS, UK-US',
    description: '',
    category: 'Consulting',
    image:case2.src,
    link: '#',
  },
  {
    id: 3,
    title: 'Industrial Supplier, US–Pakistan',
    description: '',
    category: 'Finance',
    image:case3.src,
    link: '#',
  },
  // Add more items here...
];

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState('Business');

  const filteredStudies = caseStudies.filter(
    (study) => study.category === activeCategory
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
          » Latest Case Studies
        </p>
        <h2 className="text-4xl font-bold text-slate-900 mb-2">
          Transforming Businesses
        </h2>
        <h3 className="text-2xl font-semibold text-yellow-600 mb-8">
          Success Stories
        </h3>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm px-4 py-1.5 rounded-full transition font-medium ${
                activeCategory === category
                  ? 'bg-slate-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="relative w-full max-w-sm rounded-xl h-80 overflow-hidden shadow-lg group"
            >
              {/* Background Image */}
              <Image
                src={study.image}
                alt={study.title}
                width={400}
                height={300}
                className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-4 flex flex-col justify-end text-left">
                <h4 className="text-white font-semibold text-lg">
                  {study.title}
                </h4>
                {study.description && (
                  <p className="text-sm text-white/80 mt-1">{study.description}</p>
                )}
                <a
                  href={study.link}
                  className="mt-3 inline-flex items-center text-sm text-yellow-400 hover:underline"
                >
                  View Details <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
