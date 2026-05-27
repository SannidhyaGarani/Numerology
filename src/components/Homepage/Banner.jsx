import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, X, User, Calendar, Clock, Smartphone, Send } from 'lucide-react';

const PromoBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden w-full">
        <div className="w-full">
          <div className="relative p-8 md:p-16 overflow-hidden group">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="img/bg3.png" 
                alt="VIP Premium Experience" 
                className="hidden md:block w-full h-full object-cover transition-transform duration-[5s]"
              />
            </div>
            
            <div className="relative z-10 grid  gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space mt-15"
              >
                <h2 className="text-4xl md:text-5xl font-light leading-none font-display text-white tracking-tight">
                  Didn't Find Your Perfect Number
                </h2>
                
                <p className="text-lg text-white/30 leading-relaxed max-w-lg font-light tracking-wide my-5">
                  DON'T WORRY, we will find a custom vip number for you (as per availability)
                </p>

                <div className="flex flex-wrap gap-8 pt-6">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-dark px-10 py-5 rounded-2xl font-light uppercase tracking-[0.3em] text-[10px] shadow-2xl transition-all duration-700 hover:bg-secondary hover:text-dark flex items-center justify-center gap-3"
                  >
                    check availability
                    <ArrowRight size={14} strokeWidth={1} />
                  </button>
                </div>
              </motion.div>

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

      {/* Availability Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#130A2C] border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-6">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <X size={24} strokeWidth={1} />
                </button>
              </div>

              <div className="relative space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[9px] font-medium uppercase tracking-[0.3em]">
                  <Sparkles size={12} />
                  Check Availability
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-light text-white font-display tracking-tight uppercase">
                    Custom <span className="text-gradient-gold">Request</span>
                  </h3>
                  <p className="text-xs text-white/50 font-light tracking-wider">
                    Share your cosmic details for a personalized selection.
                  </p>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={14} />
                        <input
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-4 text-[11px] font-light text-white outline-none focus:border-secondary/30 transition-all placeholder:text-white/10"
                          placeholder="Your identity"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">Date of Birth</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={14} />
                        <input
                          type="date"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-4 text-[11px] font-light text-white outline-none focus:border-secondary/30 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">Birth Time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={14} />
                        <input
                          type="time"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-4 text-[11px] font-light text-white outline-none focus:border-secondary/30 transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">Preferred Pattern *</label>
                      <div className="relative">
                        <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={14} />
                        <input
                          required
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-4 text-[11px] font-light text-white outline-none focus:border-secondary/30 transition-all placeholder:text-white/10"
                          placeholder="e.g. 786, 9999"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-5 mt-4 rounded-xl bg-white text-dark font-bold text-[9px] uppercase tracking-[0.4em] hover:bg-secondary transition-all duration-700 flex items-center justify-center gap-3 group">
                    Submit Request
                    <Send size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PromoBanner;
                    