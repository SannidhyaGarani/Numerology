import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Sparkles, ArrowRight } from 'lucide-react';

const BlueprintReport = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-dark">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
          {/* Background Image with Parallax Effect */}
          <motion.div 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="img/bg2.png" 
              alt="Numerology Blueprint" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050614] via-transparent to-[#050614] opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050614] via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Content Overlay */}
          <div className="relative z-10 px-8 py-20 md:px-16 md:py-24 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border-white/5 text-secondary text-[10px] font-light uppercase tracking-[0.4em] mb-10"
            >
              <Sparkles size={12} className="opacity-50" />
              <span>Celestial Blueprinting</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-none max-w-5xl tracking-tight"
            >
              Decode Your <br />
              <span className="text-gradient-gold block mt-2">DESTINY ARCHIVE</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/30 text-lg max-w-2xl mb-16 font-light leading-relaxed tracking-wide"
            >
              A meticulous 40-page analysis of your existence. Uncover the fundamental frequencies that architecture your timeline.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-8"
            >
              <button className="bg-white text-dark px-10 py-5 rounded-2xl font-light uppercase tracking-[0.3em] text-[10px] shadow-2xl transition-all duration-700 hover:bg-secondary hover:text-dark flex items-center justify-center gap-3">
                <FileText size={16} strokeWidth={1} />
                Generate Archive
                <ArrowRight size={14} strokeWidth={1} />
              </button>
              
              <div className="flex items-center gap-5 px-8 py-5 rounded-2xl glass border-white/5 transition-all duration-700 hover:border-white/20">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary">
                  <Download size={18} strokeWidth={1} />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-light uppercase tracking-[0.4em] text-white/20">Preview Instance</p>
                  <p className="text-xs font-light text-white tracking-widest">Sample Data</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements for Premium Feel */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-[80px] animate-pulse" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-[80px] animate-pulse delay-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueprintReport;
