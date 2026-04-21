"use client";
import { motion } from "framer-motion";

export function NoiseCancellingSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className="w-full h-[100vh] flex justify-end items-center px-6 md:px-32 relative" id="noise-cancelling">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        className="max-w-lg bg-[#050505]/60 backdrop-blur-3xl p-10 md:p-12 rounded-3xl border border-white/5 pointer-events-auto shadow-2xl relative"
      >
        <motion.div variants={item} className="mb-2">
          <span className="text-[#00D6FF] tracking-[0.2em] text-[10px] uppercase font-bold bg-[#00D6FF]/10 px-3 py-1 rounded-full border border-[#00D6FF]/20">
            Processor V1 Integrated
          </span>
        </motion.div>
        
        <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight mt-6">
          Adaptive noise cancelling, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0050FF] to-[#00D6FF]">redefined.</span>
        </motion.h2>

        <ul className="space-y-6 text-white/70 text-lg font-light">
          {[
            "Multi-microphone array listens seamlessly in every direction.",
            "Real-time acoustic analysis adapts to your environment exactly.",
            "Your music stays absolutely pure—while planes, trains, and crowds fade away."
          ].map((text, i) => (
            <motion.li variants={item} key={i} className="flex items-start group">
              <span className="flex-shrink-0 text-[#00D6FF] mr-4 text-sm mt-1.5 opacity-70 group-hover:opacity-100 transition-opacity">✦</span>
              <span className="group-hover:text-white transition-colors">{text}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div variants={item} className="mt-10 pt-8 border-t border-white/10 flex justify-between items-center">
          <div className="flex flex-col">
             <span className="text-white text-sm font-semibold">8</span>
             <span className="text-white/40 text-[10px] uppercase tracking-wider">Microphones</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex flex-col">
             <span className="text-white text-sm font-semibold">Auto NC</span>
             <span className="text-white/40 text-[10px] uppercase tracking-wider">Optimizer</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex flex-col">
             <span className="text-white text-sm font-semibold">Dual Noise</span>
             <span className="text-white/40 text-[10px] uppercase tracking-wider">Sensor Tech</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
