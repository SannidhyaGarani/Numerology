import React from 'react';
import { Search, Smartphone, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const BrandTrust = () => {
  return (
    <section className="py-16 bg-[#03030A] text-white select-none">
      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* HEADER SECTION WITH DESIGNER LINES */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div className="hidden sm:block h-[1px] flex-1 bg-gradient-to-r from-transparent via-gray-600 to-gray-400 max-w-[200px]" />
          
          <div className="border border-[#D4AF37] px-6 py-2 bg-black/40 rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.1)]">
            <h2 className="text-white font-bold text-sm tracking-wider uppercase">
              How it Works
            </h2>
          </div>
          
          <div className="hidden sm:block h-[1px] flex-1 bg-gradient-to-l from-transparent via-gray-600 to-gray-400 max-w-[200px]" />
        </motion.div>

        {/* 3 STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-11 items-center max-w-6xl mx-auto gap-12 md:gap-2 mb-16">
          
          {/* STEP 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left"
          >
            <div className="relative p-2.5 rounded-full border-2 border-dashed border-[#6B2DFF]/30 group">
              <div className="absolute inset-0 rounded-full border-2 border-[#6B2DFF] animate-[spin_10s_linear_infinite]" />
              <div className="w-20 h-20 rounded-full bg-[#12071F] flex items-center justify-center text-[#6B2DFF] shadow-[0_0_20px_rgba(107,45,255,0.2)]">
                <Search size={32} />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start max-w-[240px] md:max-w-[200px]">
              <span className="text-3xl font-black text-gray-800/50 leading-none mb-1 font-mono">01</span>
              <h3 className="text-[#F4C95D] font-bold text-lg tracking-wide mb-1">Search Number</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Search your Favourite Number using Digits or patterns
              </p>
            </div>
          </motion.div>

          {/* ARROW 1 */}
          <div className="md:col-span-1 flex justify-center text-gray-500">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transform rotate-90 md:rotate-0">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>

          {/* STEP 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3 flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left"
          >
            <div className="relative p-2.5 rounded-full border-2 border-dashed border-[#E11D48]/30 group">
              <div className="absolute inset-0 rounded-full border-2 border-[#E11D48] animate-[spin_10s_linear_infinite]" />
              <div className="w-20 h-20 rounded-full bg-[#1F070C] flex items-center justify-center text-[#E11D48] shadow-[0_0_20px_rgba(225,29,72,0.2)]">
                <Smartphone size={32} />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start max-w-[240px] md:max-w-[200px]">
              <span className="text-3xl font-black text-gray-800/50 leading-none mb-1 font-mono">02</span>
              <h3 className="text-[#F4C95D] font-bold text-lg tracking-wide mb-1">Reserve Number</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Reserve You Desired Number By Paying Advance
              </p>
            </div>
          </motion.div>

          {/* ARROW 2 */}
          <div className="md:col-span-1 flex justify-center text-gray-500">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transform rotate-90 md:rotate-0">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>

          {/* STEP 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-3 flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-right md:justify-end"
          >
            <div className="relative p-2.5 rounded-full border-2 border-dashed border-[#16A34A]/30 group order-1 md:order-2">
              <div className="absolute inset-0 rounded-full border-2 border-[#16A34A] animate-[spin_10s_linear_infinite]" />
              <div className="w-20 h-20 rounded-full bg-[#071F11] flex items-center justify-center text-[#16A34A] shadow-[0_0_20px_rgba(22,163,74,0.2)]">
                <CheckCircle size={32} />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end max-w-[240px] md:max-w-[200px] order-2 md:order-1">
              <span className="text-3xl font-black text-gray-800/50 leading-none mb-1 font-mono">03</span>
              <h3 className="text-[#F4C95D] font-bold text-lg tracking-wide mb-1">Get Activated</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Complete KYC and get your VIP Number Activated
              </p>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM VALUE HIGHLIGHTS BAR */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[1100px] mx-auto rounded-xl border border-white/5 bg-black/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Guarantee 1 */}
            <div className="flex items-center gap-4 justify-start md:justify-start py-6 md:py-4 px-8 overflow-hidden">
              <div className="w-10 h-10 flex-shrink-0 border border-[#6B2DFF]/40 rounded bg-gradient-to-b from-[#12071F] to-black flex items-center justify-center text-[#6B2DFF]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="3" width="14" height="18" rx="2" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
              <div className="text-left min-w-0">
                <h4 className="text-[#F4C95D] font-bold text-sm tracking-wide">100% Genuine Numbers</h4>
                <p className="text-gray-400 text-[10px] mt-0.5 tracking-wider font-medium">Direct From Telecom Operators</p>
              </div>
            </div>

            {/* Guarantee 2 */}
            <div className="flex items-center gap-4 justify-start md:justify-center py-6 md:py-4 px-8 overflow-hidden">
              <div className="w-10 h-10 flex-shrink-0 border border-[#16A34A]/40 rounded bg-gradient-to-b from-[#071F11] to-black flex items-center justify-center text-[#16A34A]">
                <ShieldCheck size={20} />
              </div>
              <div className="text-left min-w-0">
                <h4 className="text-[#F4C95D] font-bold text-sm tracking-wide">Secure Payment</h4>
                <p className="text-gray-400 text-[10px] mt-0.5 tracking-wider font-medium">100% Secure and Safe Transactions</p>
              </div>
            </div>

            {/* Guarantee 3 */}
            <div className="flex items-center gap-4 justify-start md:justify-end py-6 md:py-4 px-8 overflow-hidden">
              <div className="w-10 h-10 flex-shrink-0 border border-[#F4C95D]/40 rounded bg-gradient-to-b from-[#1F1907] to-black flex items-center justify-center text-[#F4C95D]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
              </div>
              <div className="text-left min-w-0">
                <h4 className="text-[#F4C95D] font-bold text-sm tracking-wide">Easy Activation</h4>
                <p className="text-gray-400 text-[10px] mt-0.5 tracking-wider font-medium">Number activated within 1 hour of KYC</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BrandTrust;