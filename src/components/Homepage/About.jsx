import React from 'react';
import { motion } from 'framer-motion';
import { Search, Smartphone, CreditCard, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const StepCard = ({ icon: Icon, step, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="relative flex flex-col items-center text-center space-y-6 group"
  >
    <div className="relative">
      <div className="w-28 h-28 rounded-[2.5rem] bg-white/[0.03] border border-white/5 flex items-center justify-center text-secondary group-hover:scale-105 transition-all duration-700 relative z-10 shadow-2xl backdrop-blur-3xl">
        <Icon size={32} strokeWidth={1} />
      </div>
      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white text-dark text-[10px] font-light flex items-center justify-center z-20 border border-white/5 font-display tracking-widest">
        {step}
      </div>
      <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </div>
    
    <div className="space-y-3 max-w-[280px]">
      <h3 className="text-xl font-light font-display text-white tracking-wide group-hover:text-secondary transition-colors duration-700">{title}</h3>
      <p className="text-white/30 text-xs leading-relaxed font-light tracking-wide">{desc}</p>
    </div>

    {index < 3 && (
      <div className="hidden lg:block absolute top-12 left-[120%] w-full h-[2px] bg-gradient-to-r from-accent/50 to-transparent" />
    )}
  </motion.div>
);

const BrandTrust = () => {
  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Search Number",
      desc: "Search your favourite number using digital platform or digits or patterns."
    },
    {
      icon: Smartphone,
      step: "02",
      title: "Reserve Number",
      desc: "Reserve your desired number by paying advance through our secure gateway."
    },
    {
      icon: CheckCircle,
      step: "03",
      title: "Get Activated",
      desc: "Complete KYC and get your VIP number activated within 1 hour process."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-dark">
      {/* Background Decorative Line */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent hidden lg:block" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border-white/5 text-secondary text-[10px] font-light uppercase tracking-[0.4em]">
            <Sparkles size={12} className="opacity-50" />
            Seamless Orchestration
          </div>
          <h2 className="text-5xl md:text-6xl font-light font-display text-white tracking-tight leading-none">
            The Process <span className="text-gradient-gold block mt-2">DYNAMICS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={index} index={index} {...step} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <button className="inline-flex items-center gap-4 text-white/20 hover:text-white transition-all duration-700 font-light uppercase tracking-[0.3em] text-[10px] group border-b border-white/5 pb-2">
            Inquire for Consultation
            <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandTrust;
