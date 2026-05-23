import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, ShieldCheck, Zap, ArrowRight, Compass } from 'lucide-react';

const AnalysisCard = ({ title, value, desc, index, isVisible }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={isVisible ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className="group relative glass p-6 rounded-3xl border-white/5 hover:border-primary/30 transition-all duration-500"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10 flex items-start gap-4">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
        <Star size={20} fill="currentColor" />
      </div>
      <div>
        <div className="flex items-baseline gap-2 mb-1">
          <h4 className="text-lg font-bold">{title}</h4>
          <span className="text-secondary font-black text-xs">{value}</span>
        </div>
        <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-secondary/20 text-secondary text-sm font-bold uppercase tracking-widest">
                <Sparkles size={16} />
                Handcrafted Personal Analysis
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Handcrafted Personal <br />
                <span className="text-gradient-gold">NUMBER BLUEPRINT</span>
              </h2>
              
              <p className="text-lg text-white/60 leading-relaxed">
                Our expert numerologists manually analyze your vibrations to create a unique, personalized blueprint of your life’s energy. Discover the hidden power of your numbers.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {analysisData.map((item, i) => (
                <AnalysisCard key={i} index={i} isVisible={isVisible} {...item} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="flex items-center gap-6 pt-4"
            >
              <button className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-primary/20 flex items-center gap-2">
                Get Your Report Now
                <ArrowRight size={20} />
              </button>
              <div className="flex flex-col">
                <span className="text-secondary font-black text-xl">₹ 499</span>
                <span className="text-white/40 text-xs uppercase tracking-widest">Starting From</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScienceSection;