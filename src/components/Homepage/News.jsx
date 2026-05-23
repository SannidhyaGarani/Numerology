import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-dark">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-[#130A2C] p-10 md:p-12 rounded-[3rem] border border-[#6720C5]/30 text-center space-y-6 relative overflow-hidden shadow-2xl">
          {/* Decorative sacred geometry pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-5 pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest">
              <Sparkles size={16} fill="currentColor" />
              Elite Insider Circle
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight font-display text-[#F9F8FA]">
              Get Notified for <br />
              <span className="text-gradient-gold uppercase tracking-tighter">NEW VIP NUMBERS</span>
            </h2>
            
            <p className="text-[#CAC0A9]/60 text-lg max-w-2xl mx-auto leading-relaxed font-body">
              Join our exclusive list to get early access to newly released VIP numbers, special discounts, and numerology insights.
            </p>

            <form className="max-w-md mx-auto relative group mt-10" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative flex items-center bg-dark border border-white/10 rounded-2xl p-1 shadow-inner">
                <div className="pl-5 text-[#CAC0A9]/40">
                  <Mail size={22} />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-none focus:ring-0 text-[#F9F8FA] px-4 py-3 placeholder:text-[#CAC0A9]/20 font-body text-sm"
                />
                <button className="btn-purple p-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg active:scale-95">
                  <Send size={18} />
                </button>
              </div>
            </form>
            
            <p className="text-[#CAC0A9]/20 text-[10px] uppercase tracking-widest font-black">
              No Spam. Only Premium Updates. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;