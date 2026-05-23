import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook, Sparkles, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-dark pt-28 pb-16 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary text-sm font-bold uppercase tracking-widest">
                <MessageSquare size={16} />
                Get in Touch
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Let's Start a <br />
                <span className="text-gradient-gold">CONVERSATION</span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed max-w-md">
                Have questions about a specific VIP number or need a personalized numerology consultation? Our experts are ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail size={20} />, label: "Email Us", val: "concierge@vipnumbers.com" },
                { icon: <Phone size={20} />, label: "Call Us", val: "+91 98765 43210" },
                { icon: <MapPin size={20} />, label: "Visit Office", val: "Premium Plaza, Mumbai, India" }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group items-center">
                  <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-dark transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-0.5">{item.label}</p>
                    <p className="text-lg font-bold text-white">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-white/5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6">Connect with us</p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-white/60 hover:text-secondary hover:border-secondary/50 transition-all">
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass rounded-[3rem] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">Your Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
                    <option className="bg-dark">VIP Number Inquiry</option>
                    <option className="bg-dark">Numerology Consultation</option>
                    <option className="bg-dark">Custom Request</option>
                    <option className="bg-dark">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">Message</label>
                  <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="How can we help you reach your goals?"></textarea>
                </div>
                <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;