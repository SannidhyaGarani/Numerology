import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Compass, ShieldCheck, Zap, ArrowRight, Book } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-dark pt-28 pb-16 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="relative rounded-[4rem] overflow-hidden mb-24 border border-accent/20 shadow-2xl group">
          <img 
            src="img/to_banner_bg.png" 
            alt="The Ancient Science of Numerology" 
            className="w-full h-[500px] object-cover opacity-50 transition-transform duration-[10s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/60 to-transparent" />
          
          <div className="absolute inset-0 flex items-center px-12 md:px-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium border-primary/20 text-primary text-sm font-bold uppercase tracking-widest">
                <Sparkles size={16} fill="currentColor" />
                The Ancient Science
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight font-display text-[#F9F8FA]">
                Decoding Your <br />
                <span className="text-gradient-gold uppercase">DESTINY</span> <br />
                Through Numbers
              </h1>
              <p className="text-lg text-[#CAC0A9]/60 leading-relaxed font-body">
                Numerology is the mystical relationship between a number and one or more coinciding events. It is the study of numerical frequencies that shape our success and spiritual path.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Knowledge Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {[
            {
              icon: <Star size={28} />,
              title: "Sacred Geometry",
              desc: "Explore the mathematical patterns that govern our universe and influence our daily lives."
            },
            {
              icon: <Zap size={28} />,
              title: "Energy Vibrations",
              desc: "Understand how different number frequencies resonate with your personal energy field."
            },
            {
              icon: <Book size={28} />,
              title: "Life Path Analysis",
              desc: "Get deep insights into your personality, strengths, and life purpose through your numbers."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] glass border-white/5 space-y-4 hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden p-10 md:p-20 text-center space-y-6"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-3 block">Our Philosophy</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              "Numbers are the universal language offered by the deity to humans as confirmation of the truth."
            </h2>
            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-secondary">
                <Sparkles size={18} />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm">Ancient Wisdom</p>
                <p className="text-[9px] text-white/40 uppercase tracking-widest">Modern Implementation</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;