import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Heart, Star, Headphones, CreditCard, Sparkles } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group p-8 rounded-[2.5rem] bg-[#130A2C] border border-[#6720C5]/20 hover:border-secondary/50 transition-all duration-500 shadow-xl"
  >
    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-dark transition-all duration-500">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold mb-3 font-display text-[#F9F8FA] group-hover:text-secondary transition-colors">{title}</h3>
    <p className="text-[#CAC0A9]/60 text-sm leading-relaxed font-body">{desc}</p>
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
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            <Sparkles size={12} fill="currentColor" />
            Trust & Security
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-[#F9F8FA]">
            Our <span className="text-gradient-gold uppercase tracking-tighter">PREMIUM SERVICE</span> Guarantees
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
          