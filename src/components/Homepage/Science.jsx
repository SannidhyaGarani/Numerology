import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, ShieldCheck, Zap, ArrowRight, Compass } from 'lucide-react';

const AnalysisCard = ({ title, value, desc, index, isVisible }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={isVisible ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className="group relative glass p-8 rounded-[2.5rem] border-white/5 hover:border-primary/20 transition-all duration-700"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
    <div className="relative z-10 flex items-start gap-6">
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-500">
        <Star size={20} strokeWidth={1} />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xl font-light tracking-wide text-white/90">{title}</h4>
          <span className="text-secondary font-light text-xs tracking-[0.2em]">{value}</span>
        </div>
        <p className="text-white/30 text-sm leading-relaxed font-light tracking-wide">{desc}</p>
      </div>
    </div>
  </motion.div>
);

const ScienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-dark">
      {/* Background Sacred Geometry */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Sacred Geometry Visuals */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
              animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative aspect-square flex items-center justify-center"
            >
              {/* Spinning Sacred Geometry Layers */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[1px] border-primary/20 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 border-[1px] border-secondary/20 rounded-full"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-20 border-dashed border-[1px] border-primary/30 rounded-full"
              />

              {/* Central Glowing Compass */}
              <div className="relative z-10 w-64 h-64 glass rounded-full flex items-center justify-center border-primary/30 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                <Compass size={80} className="text-secondary animate-pulse" />
                <div className="absolute inset-0 bg-primary/5 animate-ping rounded-full" />
              </div>

              {/* Floating Numerology Icons */}
              {[1, 3, 7, 9].map((num, i) => (
                <motion.div
                  key={num}
                  animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute p-4 glass rounded-2xl border-white/10 text-xl font-black text-secondary
                    ${i === 0 ? 'top-10 left-10' : i === 1 ? 'top-20 right-10' : i === 2 ? 'bottom-20 left-20' : 'bottom-10 right-20'}`}
                >
                  {num}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Content & Analysis Cards */}
          <div className="lg:col-span-6 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border-white/5 text-secondary text-[10px] font-light uppercase tracking-[0.4em]">
                <Sparkles size={12} className="opacity-50" />
                Celestial Resonance Analysis
              </div>
              
              <h2 className="text-5xl md:text-6xl font-light leading-none tracking-tight">
                Your Cosmic <br />
                <span className="text-gradient-gold block mt-2">VIBRATION</span>
              </h2>
              
              <p className="text-lg text-white/40 leading-relaxed font-light">
                Our master numerologists decode the celestial frequencies woven into your existence. A precision-crafted map of your energy signature.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {analysisData.map((item, i) => (
                <AnalysisCard key={i} index={i} isVisible={isVisible} {...item} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="flex items-center gap-10 pt-8"
            >
              <button className="bg-white text-dark px-10 py-5 rounded-2xl font-light uppercase tracking-[0.2em] text-[10px] transition-all duration-500 hover:bg-secondary hover:text-dark shadow-xl hover:shadow-secondary/10 flex items-center gap-3">
                Reveal Blueprint
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
              <div className="flex flex-col">
                <span className="text-secondary font-light text-2xl tracking-widest">₹ 499</span>
                <span className="text-white/20 text-[9px] uppercase tracking-[0.3em] mt-1">Starting From</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScienceSection;