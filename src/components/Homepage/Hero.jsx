import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles, Smartphone, ShieldCheck, Zap } from "lucide-react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/shop");
    }
  };

  const handleTagClick = (tag) => {
    navigate(`/shop?search=${encodeURIComponent(tag)}`);
  };
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[160px] animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-[0.02] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050614]/50 to-[#050614]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12 text-center lg:text-left z-20"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-secondary text-[10px] font-light uppercase tracking-[0.4em] mx-auto lg:mx-0 backdrop-blur-sm">
              <Sparkles size={12} className="opacity-70" />
              <span>Celestial Geometry & Luck</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight leading-[0.95] font-display text-gradient-gold tracking-tight">
              Find your lucky <br />
              <span className=" block mt-2  font-light uppercase">MOBILE NUMBER</span>
            </h1>

            <p className="text-base md:text-lg text-white/50 max-w-lg leading-relaxed font-body mx-auto lg:mx-0 font-light tracking-wide">
              Unlock the vibrational power of your identity. Discover a VIP number curated for your cosmic frequency.
            </p>

            {/* Premium Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-lg group mx-auto lg:mx-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-primary/50 rounded-2xl blur-lg opacity-0 group-focus-within:opacity-30 transition duration-700"></div>
              <div className="relative flex items-center bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl p-2 shadow-2xl transition-all duration-500 group-focus-within:border-white/20">
                <div className="pl-4 text-white/20">
                  <Search size={18} strokeWidth={1.5} />
                </div>
                <input
                  type="text"
                  placeholder="Enter your lucky digits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none focus:ring-0 text-white px-3 py-4 placeholder:text-white/10 font-body text-sm font-light tracking-wider"
                />
                <button type="submit" className="bg-white text-dark px-10 py-4 rounded-xl font-light uppercase tracking-[0.2em] text-[10px] transition-all duration-500 hover:bg-secondary hover:text-dark shadow-xl hover:shadow-secondary/20">
                  Aura Search
                </button>
              </div>
            </form>

            {/* Popular Searches */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-[10px] font-body">
              <span className="text-white/20 font-light uppercase tracking-[0.3em]">Resonating:</span>
              {["786", "9999", "1111", "0007"].map((tag) => (
                <button 
                  key={tag} 
                  onClick={() => handleTagClick(tag)}
                  className="text-white/40 hover:text-secondary transition-all font-light tracking-[0.2em] border-b border-transparent hover:border-secondary/30 pb-0.5"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-12 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3 text-white/30 text-[9px] font-light uppercase tracking-[0.3em]">
                <ShieldCheck size={14} strokeWidth={1} className="text-secondary/50" />
                <span>Verified Assets</span>
              </div>
              <div className="flex items-center gap-3 text-white/30 text-[9px] font-light uppercase tracking-[0.3em]">
                <Zap size={14} strokeWidth={1} className="text-secondary/50" />
                <span>Cosmic Sync</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - VIP Number Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center w-full lg:w-auto h-[500px] md:h-[600px] lg:h-[700px]"
          >
            <div className="relative h-full aspect-[4/5] flex items-center justify-center w-full">
              {/* Decorative Circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] h-[80%] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-[60%] h-[60%] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              </div>

              <div className="relative h-full flex items-center justify-center">
                <img
                  src="img/img2.png"
                  alt="Premium VIP Number Showcase"
                  className="h-[90%] w-auto object-contain drop-shadow-[0_0_100px_rgba(103,32,197,0.15)] animate-float pointer-events-none"
                />
              </div>

              {/* Floating Info Cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 -right-4 glass p-6 rounded-2xl border-white/5 shadow-2xl hidden md:flex items-center gap-4 z-30"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary">
                  <Smartphone size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[8px] font-light uppercase tracking-[0.3em] text-white/40">Status</p>
                  <p className="text-[12px] font-light font-display text-white tracking-widest uppercase">Elite Access</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -left-4 glass p-6 rounded-2xl border-white/5 shadow-2xl hidden lg:flex items-center gap-4 z-30"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent">
                  <Sparkles size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[8px] font-light uppercase tracking-[0.3em] text-white/40">Vibration</p>
                  <p className="text-[12px] font-light font-display text-white tracking-widest uppercase">9.9 Intensity</p>
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
