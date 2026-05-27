import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Zap, Book, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#03030A] text-white pt-36 pb-24 overflow-hidden relative select-none">
      {/* Background Sacred Geometry Grid Overlays */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none bg-center bg-no-repeat bg-cover" 
        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/sacred-geometry.png')` }} 
      />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-950/5 rounded-full blur-[120px] translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10 w-full">
        
        {/* HERO SECTION BANNER CONTAINER */}
        <div className="relative rounded-2xl overflow-hidden mb-20 border border-gray-800/80 bg-[#0B061A]/90 shadow-2xl group">
          <img
            src="img/to_banner_bg.png"
            alt="The Ancient Science of Numerology"
            className="w-full h-[460px] md:h-[520px] object-cover opacity-20 transition-transform duration-[10s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03030A] via-[#03030A]/80 to-transparent" />

          <div className="absolute inset-0 flex items-center px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl space-y-5"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-950/50 text-purple-300 border border-purple-900/50">
                <Sparkles size={10} className="text-[#F4C95D]" />
                The Ancient Science
              </div>
              
              <h1 className="text-4xl md:text-6xl font-medium leading-tight text-white tracking-normal font-sans">
                Decoding Your <br />
                <span className="text-[#F4C95D] uppercase tracking-wide">DESTINY</span> <br />
                Through Numbers
              </h1>
              
              <p className="text-base text-gray-400 leading-relaxed font-normal max-w-xl">
                Numerology reveals the mystical relationship between numerical frequencies and coinciding life events. It is the study of cosmic vibrations that shape our prosperity, alignment, and spiritual pathways.
              </p>
            </motion.div>
          </div>
        </div>

        {/* KNOWLEDGE STRUCTURAL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: <Star size={22} />,
              title: "Sacred Geometry",
              desc: "Explore the mathematical frameworks and symmetrical patterns that govern structural design and influence daily configurations."
            },
            {
              icon: <Zap size={22} />,
              title: "Energy Vibrations",
              desc: "Understand how unique premium number frequencies seamlessly resonate with your personal energy profile and corporate legacy."
            },
            {
              icon: <Book size={22} />,
              title: "Life Path Analysis",
              desc: "Gain crisp data-driven clarity into internal alignment frameworks, core strengths, and long-term milestones using numerical metrics."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-gray-800 bg-[#0B061A]/90 backdrop-blur-xl space-y-4 hover:border-purple-900/60 transition-all duration-300 group text-center md:text-left flex flex-col items-center md:items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-[#120C24] border border-gray-800 flex items-center justify-center text-[#F4C95D] group-hover:border-purple-500 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-medium text-white tracking-wide">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-normal">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* REFINED PHILOSOPHY ACCENT BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-purple-900/20 bg-[#0B061A]/40 backdrop-blur-md p-8 md:p-16 text-center space-y-6 max-w-4xl mx-auto shadow-xl"
        >
          <div className="relative z-10 space-y-4">
            <span className="text-[#F4C95D] text-xs font-bold uppercase tracking-widest block">Our Philosophy</span>
            
            <h2 className="text-xl md:text-3xl font-medium leading-relaxed text-white font-sans max-w-2xl mx-auto italic">
              "Numbers are the universal language offered by the cosmos to humans as confirmation of absolute balance and truth."
            </h2>
            
            <div className="flex items-center justify-center gap-3 pt-6">
              <div className="w-8 h-8 rounded-full bg-purple-950/40 border border-purple-900/50 flex items-center justify-center text-[#F4C95D]">
                <ShieldCheck size={14} />
              </div>
              <div className="text-left">
                <p className="font-bold text-xs text-white uppercase tracking-wider">Ancient Wisdom</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Modern Implementation</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;