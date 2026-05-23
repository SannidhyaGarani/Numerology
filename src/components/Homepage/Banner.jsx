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
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-[0.3em]">
                <Sparkles size={16} fill="currentColor" />
                Custom VIP Requests
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold leading-tight font-display text-[#F9F8FA]">
                Didn’t Find Your <br />
                <span className="text-gradient-gold uppercase tracking-tighter">PERFECT NUMBER?</span>
              </h2>
              
              <p className="text-xl text-[#CAC0A9]/60 leading-relaxed max-w-lg font-body">
                DON’T WORRY we will find a custom VIP number for you. Just tell us your preferences and our experts will handle the rest.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <button className="btn-purple px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl flex items-center gap-3 group/btn active:scale-95">
                  Request Custom Number
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
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
                    