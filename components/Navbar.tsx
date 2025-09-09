"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Flame,
  CircleFadingArrowUp,
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  LayoutDashboard,
} from "lucide-react";
import logo from "../assets/logo.png";
const navigation = [
  { name: "Solutions", href: "#home", icon: <ChevronDown /> },
  { name: "Methodology", href: "#services", icon: <ChevronDown /> },
  { name: "Pillars", href: "#testimonials", icon: <ChevronDown /> },
  { name: "Insights", href: "#contact", icon: <ChevronDown /> },
  { name: "About Us", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto"
        aria-label="Global navigation"
      >
        <div className="flex lg:flex-1">
          <motion.a
            href="#"
            className="-m-1.5 p-1.5 flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={logo.src} alt="Company Logo" className="h-8 w-auto" />
          </motion.a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-label="Open main menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <motion.div
          className="hidden lg:flex lg:gap-x-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navigation.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <span className="flex ">
                {" "}
                {item.name} {item.icon}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="hidden lg:flex lg:flex-1 lg:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button className="bg-[#1f263a] text-white">
            Book a Discover Call <ChevronRight />
          </Button>

          <div className="mt-2 ms-2">
            <LayoutDashboard />
          </div>
        </motion.div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="-m-1.5 p-1.5 flex items-center space-x-2"
                >
                  <img src={logo.src} alt="Company Logo" className="h-8 w-auto" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                    <div className="group relative">
                      <button
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full text-left"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Solutions
                      </button>
                      <div className="absolute left-4 mt-1 w-48 rounded-md bg-white shadow-lg py-1">
                        <a
                          href="#solutions"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Solutions
                        </a>
                        <a
                          href="#methodology"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Methodology
                        </a>
                        <a
                          href="#pillars"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Pillars
                        </a>
                        <a
                          href="#insights"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Insights
                        </a>
                      </div>
                    </div>
                    <a
                      href="#about-us"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </a>
                  </div>
                  <div className="py-6">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
