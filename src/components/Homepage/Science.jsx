import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Star, ArrowRight, Compass } from 'lucide-react';

const AnalysisCard = ({ title, value, desc, index, isVisible }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={isVisible ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="group relative rounded-2xl border border-gray-800/60 bg-[#0A0A12]/80 backdrop-blur-xl p-5 md:p-6 transition-all duration-300 hover:border-purple-900/60 shadow-lg"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
    <div className="relative z-10 flex items-start gap-4">
      {/* Icon Frame */}
      <div className="w-10 h-10 rounded-xl border border-purple-900/40 bg-[#12071F]/80 flex items-center justify-center text-[#F4C95D] group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
        <Star size={16} />
      </div>
      {/* Content Strings */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h4 className="text-base font-bold tracking-wide text-white/90 truncate">{title}</h4>
          <span className="text-[#F4C95D] font-mono text-sm font-bold tracking-wider flex-shrink-0 bg-[#1F1907]/60 px-2.5 py-0.5 rounded border border-[#D4AF37]/20">
            {value}
          </span>
        </div>
        <p className="text-gray-400 text-xs leading-relaxed tracking-wide font-medium">{desc}</p>
      </div>
    </div>
  </motion.div>
);

const ScienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const analysisData = [
    { title: "Destiny Number", value: "9", desc: "Your life path resonates with humanitarian leadership and spiritual growth." },
    { title: "Soul Urge", value: "7", desc: "A deep inner desire for wisdom, truth, and understanding the mysteries of life." },
    { title: "Lucky Frequency", value: "888Hz", desc: "Aligned with abundance and infinite success in the material world." }
  ];

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden bg-[#030308] text-white">
      {/* Background Sacred Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-purple-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Sacred Geometry Visuals */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -15 }}
              animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full max-w-[360px] aspect-square flex items-center justify-center"
            >
              {/* Spinning Sacred Geometry Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-purple-900/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 border border-gray-800/40 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12 border-dashed border border-[#D4AF37]/20 rounded-full"
              />

              {/* Central Glowing Compass Disc */}
              <div className="relative z-10 w-44 h-44 rounded-full border border-purple-900/40 bg-[#0B061A]/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(107,45,255,0.15)]">
                <Compass size={52} className="text-[#F4C95D] animate-pulse" />
                <div className="absolute inset-0 bg-purple-500/5 animate-ping rounded-full pointer-events-none" />
              </div>

              {/* Floating Numerology Nodes */}
              {[1, 3, 7, 9].map((num, i) => (
                <motion.div
                  key={num}
                  animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute w-10 h-10 border border-gray-800 bg-[#0A0A12]/90 backdrop-blur-md rounded-xl flex items-center justify-center text-sm font-black text-[#F4C95D] shadow-md
                    ${i === 0 ? 'top-2 left-2' : i === 1 ? 'top-6 right-2' : i === 2 ? 'bottom-8 left-4' : 'bottom-4 right-6'}`}
                >
                  {num}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Content & Analysis Cards */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/20 bg-[#1F1907]/40 text-[#F4C95D] text-[10px] font-bold uppercase tracking-[0.2em]">
                <Sparkles size={11} className="opacity-80" />
                Celestial Resonance Analysis
              </div>

              {/* Header Title */}
              <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-wide">
                Your Cosmic <span className="text-[#D4AF37] italic block sm:inline">Vibrations</span>
              </h2>

              {/* Description body */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[620px] font-medium">
                Our master numerologists decode the celestial frequencies woven into your existence. A precision-crafted map of your blueprint energy signature.
              </p>
            </motion.div>

            {/* Render Cards Grid Layout */}
            <div className="grid grid-cols-1 gap-4 max-w-[620px]">
              {analysisData.map((item, i) => (
                <AnalysisCard key={i} index={i} isVisible={isVisible} {...item} />
              ))}
            </div>

            {/* Bottom Interaction Controls Block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 sm:gap-10 pt-4"
            >
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-700 to-purple-600 hover:brightness-110 active:scale-[0.99] text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-lg flex items-center gap-2"
              >
                Reveal Blueprint
                <ArrowRight size={14} />
              </button>
              
              <div className="flex flex-col">
                <span className="text-[#F4C95D] text-2xl font-bold font-sans tracking-wide leading-none">₹499</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-wider font-semibold mt-1">Starting From</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScienceSection;