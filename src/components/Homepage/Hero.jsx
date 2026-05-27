import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24 bg-[#03030A] text-white select-none">
      {/* Background Sacred Geometry Grid Overlays */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url("/img/to_banner_bg.png")' }}
      />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN: TYPOGRAPHY AND INTERACTIVE ACTIONS */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-normal leading-tight font-sans">
              <span className="text-[#F4C95D] block mb-1">Find Your Lucky</span>
              <span className="text-white block uppercase">MOBILE NUMBER</span>
            </h1>

            <p className="text-xl sm:text-2xl font-normal text-white/90 tracking-wide font-sans">
              Premium Lucky Powerful
            </p>

            <p className="text-[#F4C95D] text-sm md:text-base font-medium max-w-xl">
              Choose from our exclusive collection of VIP, Fancy & Lucky Mobile Numbers
            </p>

            {/* Action Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-xl w-full pt-2">
              <div className="flex items-center bg-white rounded-full overflow-hidden p-1 shadow-2xl">
                <input
                  type="text"
                  placeholder="Enter digits to search (e.g. 999, 786, 2222)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-gray-900 px-6 py-3 text-sm md:text-base outline-none focus:ring-0 placeholder:text-gray-400 font-medium"
                />
                <button
                  type="submit"
                  className="bg-[#6B2DFF] hover:bg-purple-700 active:scale-[0.98] text-white px-8 py-3 rounded-full font-bold text-sm tracking-wider transition-all uppercase flex items-center gap-2"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Popular Searches */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 text-xs">
              <span className="text-gray-400 font-bold mr-2">Popular Searches</span>
              {["786", "999", "1111", "1234", "3333"].map((tag) => (
                <button
                  type="button"
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className="bg-purple-950/40 border border-purple-900/60 hover:border-purple-500 text-purple-300 px-3 py-1 rounded-md font-medium tracking-wide transition-all"
                >
                  {tag}
                </button>
              ))}
              <button
                type="button"
                onClick={() => navigate("/shop")}
                className="bg-purple-950/40 border border-purple-900/60 text-purple-300 px-3 py-1 rounded-md font-medium tracking-wide hover:border-purple-500 transition-all"
              >
                More
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: HALF-HEIGHT EMBEDDED PHONE DEVICE INTERFACE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-start self-start"
          >
            <div className="relative w-full max-w-[340px] h-[380px] bg-gradient-to-b from-[#19103A] to-[#0E0824] border-t-4 border-x-4 border-gray-800 rounded-t-[2.5rem] p-4 shadow-[0_-10px_50px_rgba(107,45,255,0.15)] overflow-hidden flex flex-col justify-start items-center text-center">

              {/* Speaker Ear Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/60 rounded-full z-20 flex items-center justify-center">
                <div className="w-8 h-1 bg-gray-800 rounded-full" />
              </div>

              {/* Background Circular Aura Elements */}
              <div className="absolute top-20 w-64 h-64 border border-purple-500/10 rounded-full pointer-events-none flex items-center justify-center">
                <div className="w-48 h-48 border border-dashed border-purple-500/5 rounded-full animate-[spin_40s_linear_infinite]" />
              </div>

              {/* Header Context Title Panel */}
              <div className="relative z-10 w-full pt-8 flex flex-col items-center">
                <div className="flex items-center gap-1.5 text-[#F4C95D] text-xs font-extrabold uppercase tracking-wider mb-6">
                  <span className="text-sm">👑</span> Premium Number
                </div>

                {/* Core Number String Segment */}
                <div className="text-[2rem] font-black tracking-wide text-white select-all font-mono mb-6 leading-none">
                  98999 <span className="text-[#F4C95D]">35999</span>
                </div>
              </div>

              {/* Tag Category Badge Wrapper */}
              <div className="relative z-10 w-full flex justify-center mb-6">
                <span className="px-4 py-1 bg-white text-[#03030A] font-black text-[11px] tracking-widest rounded uppercase shadow-md">
                  Triple 9 Power
                </span>
              </div>

              {/* Pricing Context Details Frame */}
              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="border border-white/80 rounded px-8 py-2.5 bg-black/40 mb-3 min-w-[210px]">
                  <span className="text-[#F4C95D] text-2xl font-black tracking-wide font-sans">
                    ₹ 15,999/-
                  </span>
                </div>
                <div className="text-gray-400 font-mono text-base line-through tracking-wider decoration-white decoration-2">
                  ₹ 29,999
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;