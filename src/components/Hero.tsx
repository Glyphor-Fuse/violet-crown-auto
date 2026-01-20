import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505] flex items-center pt-20">
      {/* Background Text Overlay - Kinetic Sculpture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.03] flex justify-center overflow-hidden">
        <h2 className="text-[25vw] font-black leading-none tracking-tighter text-white whitespace-nowrap">
          KINETIC SCULPTURE
        </h2>
      </div>

      {/* Ultraviolet Light Leak Effect */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-violet-900/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-violet-500"></span>
              <span className="text-violet-500 font-mono tracking-widest text-sm uppercase">
                Technical Mastery // Austin, TX
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] mb-8">
              The Art of <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-violet-400">
                Unseen Detail
              </span>
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
              We treat the automobile as a kinetic sculpture. Merging high-tech innovation with the relentless pursuit of tactile perfection.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-violet-500 hover:text-white transition-all duration-300 group flex items-center gap-3">
                Experience Mastery
                <div className="w-2 h-2 bg-black group-hover:bg-white transition-colors" />
              </button>
              <button className="px-10 py-4 border border-zinc-800 text-white font-bold uppercase tracking-widest hover:border-violet-500 transition-all duration-300">
                Our Philosophy
              </button>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Macro Image Representation */}
            <div className="aspect-[4/5] bg-zinc-900 relative border border-zinc-800 p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200" 
                alt="Automotive detail" 
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
              />
              {/* Technical Overlay Graphics */}
              <div className="absolute top-8 right-8 z-20 font-mono text-[10px] text-violet-400/60 flex flex-col items-end">
                <span>COORD: 30.2672° N, 97.7431° W</span>
                <span>REF: VCA_SPEC_001</span>
                <span>LUMEN_STRENGTH: HIGH</span>
              </div>
              <div className="absolute bottom-8 left-8 z-20">
                 <div className="w-32 h-[1px] bg-white/20 mb-2"></div>
                 <span className="font-mono text-[10px] text-zinc-500">SURFACE_SCAN_ACTIVE</span>
              </div>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-violet-500/30 flex items-center justify-center backdrop-blur-sm bg-black/20">
               <div className="w-12 h-[1px] bg-violet-500 rotate-45 absolute"></div>
               <div className="w-12 h-[1px] bg-violet-500 -rotate-45 absolute"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-violet-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
