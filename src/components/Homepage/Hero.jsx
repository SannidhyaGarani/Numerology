import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles, Smartphone, ShieldCheck, Zap, ArrowRight } from "lucide-react";

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
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-[#050614]">
      {/* Background Elements - Responsive Blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/20 rounded-full blur-[100px] md:blur-[180px] animate-pulse pointer-events-none" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 rounded-full blur-[100px] md:blur-[180px] animate-pulse delay-1000 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050614]/40 to-[#050614]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10 md:space-y-14 text-center lg:text-left z-20 w-full"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/5 text-secondary text-[9px] md:text-[11px] font-medium uppercase tracking-[0.5em] mx-auto lg:mx-0 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              <Sparkles size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-700" />
              <span className="relative z-10">Celestial Archive Alpha</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>

            <h1 className="text-[2.8rem] md:text-6xl lg:text-7xl font-extralight leading-[0.9] font-display text-gradient-gold tracking-tighter">
              Find your lucky <br />
              <span className="block mt-2 font-light uppercase text-white drop-shadow-2xl">MOBILE NUMBER</span>
            </h1>

            <p className="text-sm md:text-xl text-white/40 max-w-lg leading-relaxed font-body mx-auto lg:mx-0 font-light tracking-widest uppercase italic">
              Synchronize your identity with the cosmic frequency. Discover a VIP asset curated for your aura.
            </p>

            {/* Premium Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-xl group mx-auto lg:mx-0 w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/40 to-primary/40 rounded-3xl blur-2xl opacity-0 group-focus-within:opacity-20 transition duration-1000" />
              <div className="relative flex items-center bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-2xl md:rounded-[2.5rem] p-2 shadow-[0_30px_70px_rgba(0,0,0,0.5)] transition-all duration-700 group-focus-within:border-white/20">
                <div className="pl-6 text-white/20">
                  <Search size={22} strokeWidth={1} />
                </div>
                <input
                  type="text"
                  placeholder="Scan frequency or pattern..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none focus:ring-0 text-white px-4 py-5 md:py-7 placeholder:text-white/5 font-display text-lg md:text-xl font-light tracking-widest"
                />
                <button type="submit" className="hidden md:flex bg-white text-dark px-10 py-5 rounded-2xl md:rounded-[1.8rem] font-bold uppercase tracking-[0.3em] text-[10px] transition-all duration-700 hover:bg-secondary hover:text-dark shadow-2xl hover:scale-105">
                  Launch Scan
                </button>
              </div>
              <button type="submit" className="md:hidden mt-4 w-full bg-white text-dark py-5 rounded-2xl font-bold uppercase tracking-[0.3em] text-[10px] shadow-2xl">
                Launch Scan
              </button>
            </form>

            {/* Popular Searches */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-[10px] font-body">
              <span className="text-white/20 font-light uppercase tracking-[0.4em]">Resonance:</span>
              {["786", "1111", "9999", "0007"].map((tag) => (
                <button 
                  key={tag} 
                  onClick={() => handleTagClick(tag)}
                  className="text-white/30 hover:text-secondary transition-all font-light tracking-[0.3em] uppercase border-b border-white/5 hover:border-secondary/40 pb-1"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10 md:gap-14 pt-10 border-t border-white/5">
              <div className="flex items-center gap-4 text-white/20 text-[10px] font-light uppercase tracking-[0.4em]">
                <ShieldCheck size={18} strokeWidth={1} className="text-secondary/40" />
                <span>Verified Archive</span>
              </div>
              <div className="flex items-center gap-4 text-white/20 text-[10px] font-light uppercase tracking-[0.4em]">
                <Zap size={18} strokeWidth={1} className="text-secondary/40" />
                <span>Instant Sync</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - VIP Number Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center w-full min-h-[350px] md:min-h-[500px]"
          >
            <div className="relative w-full max-w-[500px] aspect-square md:aspect-[4/5] flex items-center justify-center">
              {/* Rotating Sacred Circles */}
              <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <div className="w-[110%] h-[110%] border border-white/[0.03] rounded-full animate-[spin_80s_linear_infinite]" />
                <div className="absolute w-[90%] h-[90%] border border-white/[0.03] rounded-full animate-[spin_50s_linear_infinite_reverse]" />
                <div className="absolute w-[70%] h-[70%] border border-white/[0.05] rounded-full animate-[spin_30s_linear_infinite]" />
              </div>

              <div className="relative w-full h-full flex items-center justify-center p-8">
                <img
                  src="img/mobile_image.png"
                  alt="Premium VIP Number Showcase"
                  className="h-full w-auto object-contain drop-shadow-[0_0_120px_rgba(212,175,55,0.15)] animate-float pointer-events-none drop-shadow-2xl"
                />
              </div>

              {/* Floating Meta Cards */}
              <motion.div
                animate={{ y: [0, -25, 0], x: [0, 5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] -right-[5%] md:right-0 glass-premium p-4 md:p-7 rounded-2xl md:rounded-3xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex items-center gap-4 z-30 backdrop-blur-2xl"
              >
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shadow-inner border border-secondary/20">
                  <Smartphone size={20} strokeWidth={1} />
                </div>
                <div>
                  <p className="text-[7px] font-medium uppercase tracking-[0.3em] text-white/30">Protocol</p>
                  <p className="text-[11px] md:text-[13px] font-light font-display text-white tracking-widest uppercase italic">Elite Tier</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 25, 0], x: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[10%] -left-[5%] md:left-0 glass-premium p-4 md:p-7 rounded-2xl md:rounded-3xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex items-center gap-4 z-30 backdrop-blur-2xl"
              >
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shadow-inner border border-accent/20">
                  <Zap size={20} strokeWidth={1} />
                </div>
                <div>
                  <p className="text-[7px] font-medium uppercase tracking-[0.3em] text-white/30">Vibration</p>
                  <p className="text-[11px] md:text-[13px] font-light font-display text-white tracking-widest uppercase italic">Max Sync</p>
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
