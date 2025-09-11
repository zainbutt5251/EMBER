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
{ name: "Solutions", href: "#solution", icon: <ChevronDown /> },
  { name: "Methodology", href: "#methodology", icon: <ChevronDown /> },
  { name: "Pillars", href: "#pillars", icon: <ChevronDown /> },
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

     
      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50 bg-white"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 space-y-4 bg-white">
              {/* Close button */}
              <div className="flex justify-between items-center">
                <img src={logo.src} alt="Company Logo" className="h-8 w-auto" />
                <button
                  type="button"
                  className="p-2 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation links */}
              <div className="space-y-2">
                {navigation.map((item) =>
                  item.submenu ? (
                    <div key={item.name}>
                      <button
                        className="flex w-full justify-between items-center px-3 py-2 rounded-lg text-gray-900 hover:bg-gray-100"
                        onClick={() => toggleSubMenu(item.name)}
                      >
                        {item.name}
                        {activeSubMenu === item.name ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </button>

                      <AnimatePresence>
                        {activeSubMenu === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 space-y-1"
                          >
                            {item.submenu.map((sub) => (
                              <a
                                key={sub.name}
                                href={sub.href}
                                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {sub.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-lg text-gray-900 hover:bg-gray-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>

              {/* CTA */}
              <div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
 
 

    </header>
  );
}
