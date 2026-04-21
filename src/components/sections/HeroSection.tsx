"use client";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="w-full h-[100vh] flex flex-col items-center justify-center text-center px-6" id="overview">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <span className="text-[#00D6FF] tracking-[0.25em] text-[10px] uppercase font-bold mb-4 bg-[#00D6FF]/10 px-3 py-1 rounded-full border border-[#00D6FF]/20">
          Model: WH-1000XM6
        </span>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
          Sony WH-1000XM6
        </h1>
        <p className="text-2xl md:text-4xl text-white/90 font-medium mb-4 tracking-tight">
          Silence, perfected.
        </p>
        <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto font-light leading-relaxed">
          Flagship wireless noise cancelling, meticulously re-engineered for a world that never stops moving.
        </p>
      </motion.div>
    </section>
  );
}
