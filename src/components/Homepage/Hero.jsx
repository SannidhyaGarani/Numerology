import React from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, Smartphone, ShieldCheck, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-[0.03] pointer-events-none" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left z-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#130A2C] border border-accent/30 text-secondary text-[10px] font-black uppercase tracking-[0.3em] mx-auto lg:mx-0 shadow-lg shadow-accent/5">
              <Sparkles size={14} fill="currentColor" />
              <span>Premium Lucky Powerful</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black leading-[1.1] font-display text-white">
              Find Your Lucky <br />
              <span className="text-gradient-gold uppercase">MOBILE NUMBER</span>
            </h1>

            <p className="text-base md:text-lg text-[#CAC0A9]/80 max-w-lg leading-relaxed font-body mx-auto lg:mx-0">
              Discover our exclusive collection of VIP & Lucky Numbers. Elevate your identity with a frequency that resonates with your destiny.
            </p>

            {/* Premium Search Bar */}
            <div className="relative max-w-lg group mx-auto lg:mx-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative flex items-center bg-[#050614]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 shadow-2xl">
                <div className="pl-4 text-[#CAC0A9]/40">
                  <Search size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Enter digits (e.g. 999, 786)"
                  className="w-full bg-transparent border-none focus:ring-0 text-[#F9F8FA] px-3 py-3 placeholder:text-[#CAC0A9]/30 font-body text-sm"
                />
                <button className="btn-purple px-8 py-3.5 rounded-xl font-black uppercase tracking-widest text-[11px] shadow-xl shadow-accent/20 active:scale-95 whitespace-nowrap">
                  Search
                </button>
              </div>
            </div>

            {/* Popular Searches */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[11px] font-body">
              <span className="text-[#CAC0A9]/40 font-bold uppercase tracking-[0.2em]">Trending:</span>
              {["786", "999", "1111", "1234"].map((tag) => (
                <button key={tag} className="px-3 py-1 rounded-lg glass border-white/5 hover:border-accent/50 transition-all text-[#CAC0A9]/60 hover:text-white font-bold tracking-widest">
                  {tag}
                </button>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="flex items-center gap-2 text-[#CAC0A9]/40 text-[10px] font-black uppercase tracking-[0.3em]">
                <ShieldCheck size={16} className="text-secondary" />
                <span>100% Genuine</span>
              </div>
              <div className="flex items-center gap-2 text-[#CAC0A9]/40 text-[10px] font-black uppercase tracking-[0.3em]">
                <Zap size={16} className="text-secondary" />
                <span>Instant Activation</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - VIP Number Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative flex items-center justify-center w-full lg:w-auto h-[450px] md:h-[550px] lg:h-[650px] mt-12 lg:mt-0"
          >
            {/* Image Container with strict width control to prevent overlap */}
            <div className="relative h-full aspect-[4/5] flex items-center justify-center lg:justify-end w-full">
              <div className="relative h-full flex items-center justify-center">
                <img
                  src="img/img2.png"
                  alt="Premium VIP Number Showcase"
                  className="h-full w-auto object-contain drop-shadow-[0_0_80px_rgba(103,32,197,0.2)] animate-float pointer-events-none"
                />

                {/* Dynamic Overlay Text on the phone screen - Aligned for img2.png proportions */}
                {/* <div className="absolute top-[32%] left-1/2 -translate-x-1/2 w-full text-center space-y-1 pointer-events-none scale-75 md:scale-90 lg:scale-100">
                  <p className="text-[10px] text-secondary font-black uppercase tracking-[0.3em]">Premium Number</p>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tighter font-number text-[#F9F8FA]">98999 35999</h2>
                </div>

                <div className="absolute top-[48%] left-1/2 -translate-x-1/2 w-[160px] md:w-[200px] p-3 glass-premium rounded-2xl border-accent/20 glow-purple text-center pointer-events-none scale-75 md:scale-90 lg:scale-100">
                  <p className="text-[10px] text-secondary font-black uppercase tracking-[0.25em] mb-1">TRIPLE 9 POWER</p>
                  <div className="h-0.5 w-10 bg-secondary/50 mx-auto rounded-full" />
                </div>

                <div className="absolute top-[65%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none scale-75 md:scale-90 lg:scale-100">
                  <div className="text-2xl md:text-3xl font-bold text-gradient-gold font-display">₹ 15,999/-</div>
                  <div className="text-[#CAC0A9]/40 line-through text-[10px] md:text-xs font-body tracking-widest">₹ 29,999</div>
                </div> */}
              </div>

              {/* Floating Info Cards - Positioning relative to the image container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 glass-premium p-4 rounded-2xl border-secondary/20 shadow-2xl glow-gold hidden md:flex items-center gap-3 z-30"
              >
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Smartphone size={16} />
                </div>
                <div>
                  <p className="text-[8px] font-black uppercase tracking-widest text-[#CAC0A9]/60">Identity</p>
                  <p className="text-[11px] font-bold font-display text-[#F9F8FA]">VIP Status</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 left-0 glass-premium p-4 rounded-2xl border-accent/20 shadow-2xl glow-purple hidden lg:flex items-center gap-3 z-30"
              >
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Sparkles size={16} />
                </div>
                <div>
                  <p className="text-[8px] font-black uppercase tracking-widest text-[#CAC0A9]/60">Numerology</p>
                  <p className="text-[11px] font-bold font-display text-[#F9F8FA]">9.8 Score</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
