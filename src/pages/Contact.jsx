import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook, Sparkles, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#03030A] text-white pt-36 md:pt-40 pb-24 overflow-hidden relative select-none">
      {/* Background Sacred Geometric Pattern Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none bg-center bg-no-repeat bg-cover" 
        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/sacred-geometry.png')` }} 
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-950/10 rounded-full blur-[140px] -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[120px] -ml-24 -mb-24 pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Frame: Identity & Meta Channels */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-950/50 text-purple-300 border border-purple-900/50">
                <MessageSquare size={10} className="text-[#F4C95D]" />
                Get in Touch
              </div>
              <h1 className="text-3xl md:text-5xl font-medium tracking-normal text-white leading-tight">
                Let's Start a <br />
                <span className="text-[#D4AF37] italic">Conversation</span>
              </h1>
              <p className="text-sm text-gray-400 leading-relaxed font-normal max-w-sm">
                Have questions about a specific premium VIP profile configuration or require an elite digital acquisition? Our desk is standing by.
              </p>
            </div>

            {/* Structured Communication Points */}
            <div className="space-y-4">
              {[
                { icon: <Mail size={16} />, label: "Email Channels", val: "concierge@vipnumbers.com" },
                { icon: <Phone size={16} />, label: "Direct Vault Wire", val: "+91 98765 43210" },
                { icon: <MapPin size={16} />, label: "Corporate Office", val: "Premium Plaza, Mumbai, India" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center p-4 rounded-xl border border-gray-800/60 bg-[#0B061A]/90 backdrop-blur-xl transition-colors hover:border-purple-900/40 group">
                  <div className="w-10 h-10 rounded-lg bg-[#120C24] border border-gray-800 flex items-center justify-center text-[#F4C95D] group-hover:border-purple-500 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-white tracking-wide font-mono select-all">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Matrix Routers */}
            <div className="pt-6 border-t border-gray-900">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-4">Secure Social Matrix</p>
              <div className="flex gap-2.5">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <button key={i} type="button" className="w-9 h-9 rounded-xl border border-gray-800 bg-[#0B061A] flex items-center justify-center text-gray-400 hover:border-purple-500 hover:text-[#F4C95D] transition-colors">
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Frame: Transmission Console Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#0A0A12]/90 backdrop-blur-md p-6 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-950/10 rounded-full blur-3xl pointer-events-none" />

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[#F4C95D] text-xs font-bold tracking-wide">Your Designation</label>
                    <input type="text" className="w-full bg-[#120C24] border border-gray-800 rounded-lg px-3 py-2.5 text-sm text-white focus:border-purple-500 outline-none transition-colors placeholder:text-gray-600 font-medium" placeholder="Identity Name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[#F4C95D] text-xs font-bold tracking-wide">Secure Email Routing</label>
                    <input type="email" className="w-full bg-[#120C24] border border-gray-800 rounded-lg px-3 py-2.5 text-sm text-white focus:border-purple-500 outline-none transition-colors placeholder:text-gray-600 font-medium" placeholder="name@domain.com" />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="block text-[#F4C95D] text-xs font-bold tracking-wide">Transmission Parameter</label>
                  <div className="relative">
                    <select className="w-full bg-[#120C24] border border-gray-800 rounded-lg px-3 py-2.5 text-sm text-white focus:border-purple-500 outline-none transition-colors appearance-none font-medium">
                      <option className="bg-[#050614]">VIP Portfolio Configuration Inquiry</option>
                      <option className="bg-[#050614]">Numerology Structural Sync Consultation</option>
                      <option className="bg-[#050614]">Custom Serial Key Request</option>
                      <option className="bg-[#050614]">Other Channels</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[#F4C95D] text-xs font-bold tracking-wide">Detailed Query Specifications</label>
                  <textarea rows="4" className="w-full bg-[#120C24] border border-gray-800 rounded-lg px-3 py-2.5 text-sm text-white focus:border-purple-500 outline-none transition-colors placeholder:text-gray-600 resize-none font-medium" placeholder="Outline clear dimensional parameters..."></textarea>
                </div>

                <button type="submit" className="w-full py-3 bg-gradient-to-r from-purple-700 to-purple-600 hover:brightness-110 active:scale-[0.99] text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2">
                  <Send size={14} />
                  <span>Transmit Query</span>
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