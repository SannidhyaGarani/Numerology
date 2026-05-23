import React from 'react';
import { motion } from 'framer-motion';
import { Search, Smartphone, CreditCard, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const StepCard = ({ icon: Icon, step, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="relative flex flex-col items-center text-center space-y-4 group"
  >
    <div className="relative">
      <div className="w-24 h-24 rounded-[2rem] bg-[#130A2C] border border-[#6720C5]/30 flex items-center justify-center text-accent group-hover:scale-110 transition-transform relative z-10 shadow-2xl">
        <Icon size={40} />
      </div>
      <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-secondary text-dark text-sm font-black flex items-center justify-center z-20 border-4 border-dark font-display">
        {step}
      </div>
      <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    
    <div className="space-y-2 max-w-[280px]">
      <h3 className="text-xl font-bold font-display text-[#F9F8FA] group-hover:text-secondary transition-colors">{title}</h3>
      <p className="text-[#CAC0A9]/60 text-sm leading-relaxed font-body">{desc}</p>
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

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            <Sparkles size={12} fill="currentColor" />
            Simple 3-Step Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-[#F9F8FA]">
            How It <span className="text-gradient-gold uppercase tracking-tighter">WORKS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={index} index={index} {...step} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-3 text-[#CAC0A9]/60 hover:text-secondary transition-all font-black uppercase tracking-widest text-xs group">
            Still have questions? Chat with our Numerology Expert
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandTrust;
