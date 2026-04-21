"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-700",
        isScrolled
          ? "bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold tracking-wide text-lg">
          WH-1000XM6
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-10">
          {["Overview", "Technology", "Noise Cancelling", "Specs", "Buy"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-white/60 hover:text-white/100 text-xs uppercase tracking-widest transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button className="relative group overflow-hidden rounded-full p-[1px] hidden sm:block">
          <span className="absolute inset-0 bg-gradient-to-r from-[#0050FF] to-[#00D6FF] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-[#050505]/90 backdrop-blur-md px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white transition-all group-hover:bg-[#050505]/60">
            Experience WH-1000XM6
          </div>
        </button>
      </div>
    </motion.nav>
  );
}
