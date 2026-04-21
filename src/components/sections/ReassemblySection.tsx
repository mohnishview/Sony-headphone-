"use client";
import { motion } from "framer-motion";

export function ReassemblySection() {
  return (
    <section className="w-full h-[100vh] flex flex-col items-center justify-end pb-24 md:pb-32 text-center px-6" id="buy">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-2xl w-full pointer-events-auto bg-[#050505]/80 backdrop-blur-2xl p-10 md:p-14 rounded-[2.5rem] border border-white/5 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D6FF]/50 to-transparent" />
        
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tighter relative z-10">
          Hear everything.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 to-white/20">Feel nothing else.</span>
        </h2>
        
        <p className="text-white/60 text-lg md:text-xl mb-12 relative z-10 font-light max-w-lg mx-auto">
          WH-1000XM6. Designed for pure ultimate focus, crafted for absolute comfort.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 relative z-10">
          <button className="relative group overflow-hidden rounded-full p-[1px] w-full sm:w-auto">
            <span className="absolute inset-0 bg-gradient-to-r from-[#0050FF] to-[#00D6FF] rounded-full transition-all duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            <div className="relative bg-[#050505] px-10 py-4 w-full rounded-full text-sm font-semibold tracking-wider uppercase text-white transition-all duration-300 group-hover:bg-transparent">
              Pre-Order Now
            </div>
          </button>
          <button className="text-white/60 hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs font-bold border-b border-white/20 hover:border-white pb-1 group">
            Compare <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
          <div>
            <p className="text-white text-sm font-semibold">40 Hrs</p>
            <p className="text-white/40 text-[10px] uppercase font-bold mt-1">Battery Life</p>
          </div>
          <div>
            <p className="text-white text-sm font-semibold">3 Min</p>
            <p className="text-white/40 text-[10px] uppercase font-bold mt-1">Quick Charge</p>
          </div>
          <div>
            <p className="text-white text-sm font-semibold">250g</p>
            <p className="text-white/40 text-[10px] uppercase font-bold mt-1">Ultra-Light</p>
          </div>
          <div>
            <p className="text-white text-sm font-semibold">Multipoint</p>
            <p className="text-white/40 text-[10px] uppercase font-bold mt-1">Connection</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
