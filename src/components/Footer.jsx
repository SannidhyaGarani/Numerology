import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone, ArrowRight, Sparkles, Smartphone, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Marketplace': [
      { name: 'All VIP Numbers', path: '/shop' },
      { name: 'Triple Series', path: '/shop' },
      { name: 'Lucky Numbers', path: '/shop' },
      { name: 'Business Series', path: '/shop' }
    ],
    'Knowledge': [
      { name: 'Numerology Guide', path: '/about' },
      { name: 'Lucky Calculator', path: '/about' },
      { name: 'Success Stories', path: '/about' },
      { name: 'Consultation', path: '/contact' }
    ],
    'Support': [
      { name: 'Help Center', path: '/contact' },
      { name: 'How It Works', path: '/' },
      { name: 'Verify Number', path: '/shop' },
      { name: 'Contact Us', path: '/contact' }
    ]
  };

  return (
    <footer className="bg-[#050614] text-white pt-32 pb-12 overflow-hidden relative border-t border-white/5">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] translate-y-1/2" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-[0.015]" />
      </div>
      
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        {/* Newsletter / CTA Section */}
        <div className="mb-24 p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-medium uppercase tracking-[0.3em]">
                <Sparkles size={12} />
                Stay in Sync
              </div>
              <h3 className="text-3xl md:text-4xl font-light font-display tracking-tight leading-tight">
                Get notified when <br />
                <span className="text-gradient-gold">New Frequencies</span> arrive.
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Secure Email Address" 
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm font-light tracking-wider outline-none focus:bg-white/10 focus:border-secondary/30 transition-all placeholder:text-white/20"
              />
              <button className="bg-white text-dark px-10 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-500 hover:bg-secondary hover:text-dark shadow-2xl hover:shadow-secondary/20">
                Join Inner Circle
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-10">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-primary to-accent rounded-2xl transform transition-all duration-700 group-hover:rotate-[360deg] shadow-lg shadow-primary/20">
                <span className="text-white font-black text-2xl">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tighter uppercase leading-none">VIP<span className="text-secondary font-light">NUMBERS</span></span>
                <span className="text-[10px] font-medium text-white/30 uppercase tracking-[0.4em] mt-1">Celestial Artifacts</span>
              </div>
            </Link>
            
            <p className="text-base text-white/40 leading-relaxed font-light tracking-wide max-w-sm">
              Curating the most prestigious digital identity assets. We bridge the gap between numerical frequency and personal destiny through elite VIP mobile numbers.
            </p>

            <div className="flex items-center gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon size={20} className="text-white/40 group-hover:text-dark transition-all duration-500 relative z-10" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 pr-12">
             {Object.entries(footerLinks).map(([title, links]) => (
               <div key={title} className="space-y-8">
                 <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.5em] relative inline-block">
                   {title}
                   <div className="absolute -bottom-2 left-0 w-8 h-[1px] bg-secondary/50" />
                 </h4>
                 <ul className="space-y-4">
                   {links.map((link) => (
                     <li key={link.name}>
                       <Link to={link.path} className="text-white/30 hover:text-white transition-all duration-500 text-[13px] font-light tracking-wider flex items-center gap-3 group">
                         <div className="w-1.5 h-[1px] bg-secondary/30 group-hover:w-4 transition-all duration-500" />
                         {link.name}
                       </Link>
                     </li>
                   ))}
                 </ul>
               </div>
             ))}
          </div>
        </div>

        {/* Contact Info Strip */}
        <div className="flex flex-wrap justify-center gap-12 py-8 border-y border-white/5 mb-12">
          <div className="flex items-center gap-3 text-white/30 hover:text-white transition-colors duration-500 group">
            <Mail size={14} strokeWidth={1} />
            <span className="text-[10px] font-light uppercase tracking-[0.2em]">concierge@vipnumbers.com</span>
          </div>
          <div className="flex items-center gap-3 text-white/30 hover:text-white transition-colors duration-500 group">
            <Phone size={14} strokeWidth={1} />
            <span className="text-[10px] font-light uppercase tracking-[0.2em]">+91 98765 43210</span>
          </div>
        </div>

        {/* Core Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-12 mb-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
          <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] font-light">
            <ShieldCheck size={14} className="text-secondary" />
            SECURE ACQUISITION
          </div>
          <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] font-light">
            <Zap size={14} className="text-secondary" />
            INSTANT SYNC
          </div>
          <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] font-light">
            <Smartphone size={14} className="text-secondary" />
            ELITE NETWORK
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-medium uppercase tracking-[0.3em] text-white/20">
          <p>© {currentYear} VIP NUMBERS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-all duration-500">Privacy</a>
            <a href="#" className="hover:text-white transition-all duration-500">Terms</a>
            <a href="#" className="hover:text-white transition-all duration-500">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
