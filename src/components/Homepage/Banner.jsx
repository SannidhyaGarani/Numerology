import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

const PromoBanner = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-dark">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="relative bg-[#130A2C] p-10 md:p-16 rounded-[3rem] border border-[#6720C5]/30 overflow-hidden group shadow-2xl">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="img/bg3.png" 
              alt="VIP Premium Experience" 
              className="w-full h-full object-cover opacity-90  transition-transform duration-[5s]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent" />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border-white/5 text-secondary text-[10px] font-light uppercase tracking-[0.4em]">
                <Sparkles size={12} className="opacity-50" />
                Bespoke Acquisitions
              </div>
              
              <h2 className="text-5xl md:text-7xl font-light leading-none font-display text-white tracking-tight">
                Beyond the <br />
                <span className="text-gradient-gold block mt-2">ORDINARY</span>
              </h2>
              
              <p className="text-lg text-white/30 leading-relaxed max-w-lg font-light tracking-wide">
                We specialize in sourcing elusive numerical sequences. Commission our experts to locate your singular vibration.
              </p>

              <div className="flex flex-wrap gap-8 pt-6">
                <button className="bg-white text-dark px-10 py-5 rounded-2xl font-light uppercase tracking-[0.3em] text-[10px] shadow-2xl transition-all duration-700 hover:bg-secondary hover:text-dark flex items-center justify-center gap-3">
                  Commence Inquiry
                  <ArrowRight size={14} strokeWidth={1} />
                </button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 border-[1px] border-dashed border-secondary/30 rounded-full"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
                    