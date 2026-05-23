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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-8"
            >
              <Sparkles size={14} fill="currentColor" />
              <span>Personalized Destiny Guide</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight max-w-4xl"
            >
              Unlock Your Complete <br />
              <span className="text-gradient-gold uppercase">Numerology Report</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#CAC0A9]/70 text-base md:text-lg max-w-2xl mb-12 font-body leading-relaxed"
            >
              Get a comprehensive 40-page analysis of your life path, soul urge, and destiny numbers. Discover the hidden vibrations that shape your future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <button className="btn-purple px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 shadow-2xl shadow-accent/40 group/btn">
                <FileText size={18} />
                Generate My Report
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl glass border-white/5">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Download size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#CAC0A9]/60">PDF Sample</p>
                  <p className="text-xs font-bold text-white">View Sample Report</p>
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
