"use client";
import { motion } from "framer-motion";

export function SoundSection() {
  return (
    <section className="w-full h-[100vh] flex justify-start items-center px-6 md:px-24 text-left" id="specs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl pointer-events-auto relative"
      >
        <div className="absolute -inset-10 bg-[#0050FF]/20 blur-[80px] rounded-full mix-blend-screen" />
        <div className="relative z-10 bg-[#0A0A0C]/80 backdrop-blur-3xl p-10 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#00D6FF]" />
            <span className="text-white/50 text-xs font-semibold tracking-widest uppercase">High-Res Audio</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Immersive, lifelike sound.
          </h2>
          
          <div className="space-y-6 mb-8">
            <p className="text-white/80 text-lg leading-relaxed font-light">
              High-performance drivers unlock uncompromised detail, deep resonant bass, and precise texture in every track.
            </p>
            <p className="text-white/60 text-base leading-relaxed font-light">
              <strong>DSEE Extreme™</strong> utilizes AI-enhanced upscaling to restore high-frequency clarity to compressed audio, so every single note feels undeniably alive.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mt-8">
            <div className="flex flex-col">
              <span className="text-[#00D6FF] font-bold text-lg">LDAC</span>
              <span className="text-white/50 text-[10px] uppercase font-semibold mt-1">Codec Support</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#00D6FF] font-bold text-lg">360</span>
              <span className="text-white/50 text-[10px] uppercase font-semibold mt-1">Reality Audio</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#00D6FF] font-bold text-lg">Edge-AI</span>
              <span className="text-white/50 text-[10px] uppercase font-semibold mt-1">Real-time rest.</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
