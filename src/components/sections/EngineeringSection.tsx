"use client";
import { motion } from "framer-motion";

export function EngineeringSection() {
  return (
    <section className="w-full h-[100vh] flex justify-start items-center px-6 md:px-24" id="technology">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl pointer-events-auto relative"
      >
        <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-[3rem]" />
        <div className="relative bg-[#050505]/40 backdrop-blur-2xl p-10 rounded-3xl border border-white/5 shadow-2xl overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Precision-engineered <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">for silence.</span>
          </h2>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-start transition-colors hover:bg-white/10">
              <span className="text-[#00D6FF] font-bold text-xl mb-1">30mm</span>
              <span className="text-white/60 text-xs font-medium uppercase tracking-wider">Precision Driver</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-start transition-colors hover:bg-white/10">
              <span className="text-[#00D6FF] font-bold text-xl mb-1">Carbon</span>
              <span className="text-white/60 text-xs font-medium uppercase tracking-wider">Fiber Dome</span>
            </div>
          </div>

          <p className="text-white/70 text-base mb-4 leading-relaxed font-light">
            Custom-developed drivers, sealed acoustic chambers, and structurally optimized airflow deliver uncompromised studio-grade clarity.
          </p>
          <p className="text-white/50 text-base leading-relaxed font-light">
            Every millimeter is tuned for perfect balance, raw power, and weightless comfort—hour after hour.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
