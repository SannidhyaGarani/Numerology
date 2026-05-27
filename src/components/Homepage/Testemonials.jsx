import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';

const TestimonialCard = ({ name, role, content, rating, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-white/[0.02] p-12 rounded-[4rem] border border-white/5 hover:border-secondary/20 transition-all duration-700 shadow-2xl backdrop-blur-3xl"
  >
    <div className="absolute top-8 right-8 text-white/[0.02] group-hover:text-secondary/[0.05] transition-colors duration-700">
      <Quote size={80} strokeWidth={0.5} />
    </div>

    <div className="relative z-10 space-y-8">
      <div className="flex gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity duration-700">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={12} className="text-secondary" fill="currentColor" strokeWidth={0} />
        ))}
      </div>

      <p className="text-xl text-white group-hover:text-white/80 transition-colors duration-700 leading-relaxed font-light font-body tracking-wide italic">
        "{content}"
      </p>

      <div className="pt-8 border-t border-white/5 flex items-center gap-5">
        <div className="w-14 h-14 rounded-full bg-white/[0.05] border border-white/5 flex items-center justify-center font-light text-white font-display shadow-2xl group-hover:bg-white group-hover:text-dark transition-all duration-700 tracking-widest">
          {name[0]}
        </div>
        <div>
          <h4 className="font-light text-white font-display tracking-widest text-sm mb-1">{name}</h4>
          <p className="text-[9px] text-secondary/50 font-light uppercase tracking-[0.4em] font-body">{role}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Rajesh Khanna",
      role: "Business Owner",
      content: "Since I switched to my lucky 9999 series number, my business connections have improved significantly. The numerology analysis was spot on!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Digital Creator",
      content: "The VIP number I got from here is so easy to remember and looks so professional on my branding. The activation was truly instant.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Tech Entrepreneur",
      content: "Luxury experience from start to finish. The premium dashboard and the secure process gave me total peace of mind. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-12 relative overflow-hidden bg-dark-surface">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border-white/5 text-secondary text-[10px] font-light uppercase tracking-[0.4em]">
            <Sparkles size={12} className="opacity-50" />
            Vocal Perspectives
          </div>
          <h2 className="text-5xl md:text-6xl font-light font-display text-white tracking-tight leading-none">
            Trusted by the <br />
            <span className="text-gradient-gold block mt-2">SOVEREIGN</span>
          </h2>
          <p className="text-white text-lg font-light tracking-wide">
            Narratives from our most distinguished acquisitions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} index={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
