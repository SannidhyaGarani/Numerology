import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Heart, Star, Headphones, CreditCard, Sparkles } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-secondary/20 transition-all duration-700 shadow-2xl backdrop-blur-3xl"
  >
    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-secondary mb-8 group-hover:scale-105 group-hover:bg-white group-hover:text-dark transition-all duration-700">
      <Icon size={28} strokeWidth={1} />
    </div>
    <h3 className="text-xl font-light mb-4 font-display text-white tracking-wide group-hover:text-secondary transition-colors duration-700">{title}</h3>
    <p className="text-white/30 text-sm leading-relaxed font-light tracking-wide">{desc}</p>
  </motion.div>
);

const CategorySection = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "100% Genuine Numbers",
      desc: "Directly sourced from verified telecom operators with official documentation."
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      desc: "Multi-layer encrypted transactions ensuring your financial data is always safe."
    },
    {
      icon: Zap,
      title: "Easy Activation",
      desc: "Our support team will assist you within 1 hour to complete the process."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-dark-surface">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border-white/5 text-secondary text-[10px] font-light uppercase tracking-[0.4em]">
            <Sparkles size={12} className="opacity-50" />
            Integrity & Precision
          </div>
          <h2 className="text-5xl md:text-6xl font-light font-display text-white tracking-tight leading-none">
            The <span className="text-gradient-gold block mt-2">PREMIUM STANDARD</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} index={index} {...feature} />
          ))}
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default CategorySection;
          