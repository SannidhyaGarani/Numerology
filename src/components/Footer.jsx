import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, Sparkles, ShieldCheck, Zap, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <footer className="bg-[#03030A] text-white pt-24 pb-12 overflow-hidden relative border-t border-gray-900 select-none">
      {/* Background Sacred Geometric Texture Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/sacred-geometry.png')` }} />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-purple-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10 w-full">
        
        {/* REDESIGNED PREMIUM NEWSLETTER BANNER */}
        <div className="mb-20 p-8 md:p-12 rounded-2xl border border-purple-900/30 bg-[#0B061A]/80 backdrop-blur-md shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-950/50 text-purple-300 border border-purple-900/50">
                <Sparkles size={10} className="text-[#F4C95D]" />
                Stay In Sync
              </div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-normal text-white">
                Get notified when <span className="text-[#F4C95D] italic">New Frequencies</span> arrive.
              </h3>
            </div>

            <div className="lg:col-span-5 w-full">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2.5 w-full">
                <input
                  type="email"
                  placeholder="Enter secure email address"
                  className="w-full bg-[#120C24] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:border-purple-500 outline-none transition-colors placeholder:text-gray-500 font-medium"
                />
                <button 
                  type="submit" 
                  className="bg-[#6B2DFF] hover:bg-purple-700 active:scale-[0.99] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap"
                >
                  Join Inner Circle
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* MAIN NAVIGATION LINKS TRACK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Presentation Metadata */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center bg-[#120C24] border border-purple-900/60 rounded-xl transition-colors group-hover:border-purple-500">
                <span className="text-[#F4C95D] font-bold text-xl font-mono">V</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-wide uppercase leading-none">
                  VIP<span className="text-[#F4C95D] font-normal lowercase italic">numbers</span>
                </span>
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">Celestial Assets</span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed font-normal max-w-xs">
              Curating prestigious digital identity configurations. We bridge numerical precision with personal legacy.
            </p>

            {/* Social Channels Container */}
            <div className="flex items-center gap-2.5">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl border border-gray-800 bg-[#0B061A] flex items-center justify-center hover:border-purple-500 hover:text-[#F4C95D] text-gray-400 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Explicit Linked Grid Blocks */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="space-y-4">
                <h4 className="text-xs font-bold text-[#F4C95D] uppercase tracking-wider">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path} 
                        className="text-gray-400 hover:text-white transition-colors text-sm font-normal tracking-wide block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* CONTACT ROW DATA PANEL */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 py-5 border-y border-gray-900 mb-10 text-gray-400 text-xs font-medium">
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={14} className="text-[#F4C95D] opacity-80" />
            <span className="tracking-wide">concierge@vipnumbers.com</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={14} className="text-[#F4C95D] opacity-80" />
            <span className="tracking-wide">+91 98765 43210</span>
          </div>
        </div>

        {/* TRUST ACCREDITATION ICONS */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-10 text-[10px] font-bold tracking-wider text-gray-500">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-purple-500/70" />
            SECURE ACQUISITION
          </div>
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-purple-500/70" />
            INSTANT SYNC
          </div>
          <div className="flex items-center gap-2">
            <Smartphone size={14} className="text-purple-500/70" />
            ELITE NETWORK
          </div>
        </div>

        {/* BASE COPYRIGHT INFO PANEL */}
        <div className="pt-2 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-wider text-gray-600 uppercase">
          <p>© {currentYear} VIP NUMBERS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;