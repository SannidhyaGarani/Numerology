import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';

const TestimonialCard = ({ name, role, content, rating, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-[#130A2C] p-10 rounded-[3rem] border border-[#6720C5]/20 hover:border-secondary/50 transition-all duration-500 shadow-2xl"
  >
    <div className="absolute top-8 right-8 text-accent/10 group-hover:text-secondary/10 transition-colors">
      <Quote size={60} fill="currentColor" />
    </div>
    
    <div className="relative z-10 space-y-6">
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="text-secondary" fill="currentColor" />
        ))}
      </div>
      
      <p className="text-lg text-[#CAC0A9] leading-relaxed italic font-light font-body">
        "{content}"
      </p>
      
      <div className="pt-6 border-t border-white/5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center font-bold text-[#F9F8FA] font-display shadow-lg">
          {name[0]}
        </div>
        <div>
          <h4 className="font-bold text-[#F9F8FA] font-display">{name}</h4>
          <p className="text-[10px] text-secondary font-black uppercase tracking-widest font-body">{role}</p>
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
    <section className="py-20 relative overflow-hidden bg-dark-surface">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            <Sparkles size={12} fill="currentColor" />
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-[#F9F8FA]">
            Trusted by <span className="text-gradient-gold uppercase tracking-tighter">ELITE INDIVIDUALS</span>
          </h2>
          <p className="text-[#CAC0A9]/60 text-lg font-body">
            Hear from our prestigious clients who have transformed their personal branding.
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
