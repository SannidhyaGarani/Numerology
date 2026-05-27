import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-dark">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-[#130A2C] p-10 md:p-12 rounded-[3rem] border border-[#6720C5]/30 text-center space-y-6 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative sacred geometry pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border-white/5 text-secondary text-[10px] font-light uppercase tracking-[0.4em]">
              <Sparkles size={12} className="opacity-50" />
              Elite Vanguard Circle
            </div>

            <h2 className="text-5xl md:text-7xl font-light leading-none font-display text-white tracking-tight">
              Archival <br />
              <span className="text-gradient-gold block mt-2">RELEASES</span>
            </h2>

            <p className="text-white text-lg max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
              Secure priority access to newly recovered numerical assets and deep celestial periodicities.
            </p>

            <form className="max-w-md mx-auto relative group mt-12" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-primary/50 rounded-2xl blur-lg opacity-0 group-focus-within:opacity-20 transition duration-1000"></div>
              <div className="relative flex items-center bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-2xl p-2 shadow-2xl overflow-hidden transition-all duration-700">
                <div className="pl-4 text-white">
                  <Mail size={18} strokeWidth={1} />
                </div>
                <input
                  type="email"
                  placeholder="acquisition@insider.com"
                  className="w-full bg-transparent border-none focus:ring-0 text-white px-4 py-4 placeholder:text-white/10 font-light text-sm tracking-widest"
                />
                <button className="bg-white text-dark p-4 rounded-xl font-light transition-all duration-700 shadow-2xl hover:bg-secondary hover:text-dark">
                  <Send size={16} strokeWidth={1.5} />
                </button>
              </div>
            </form>

            <p className="text-white/10 text-[9px] uppercase tracking-[0.4em] font-light pt-4">
              Discrete Updates. Zero Noise. Eternal Privilege.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;