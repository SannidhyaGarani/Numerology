import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone, ArrowRight, Sparkles } from 'lucide-react';
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
    <footer className="bg-dark text-white pt-20 pb-10 overflow-hidden relative border-t border-white/5">
      {/* Abstract Background Decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-primary to-accent rounded-xl transform transition-transform group-hover:rotate-12">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tighter uppercase leading-none">VIP<span className="text-secondary">NUMBERS</span></span>
                <span className="text-[8px] font-bold text-white/40 uppercase tracking-[0.3em]">Premium Marketplace</span>
              </div>
            </Link>
            
            <p className="text-base text-white/60 leading-relaxed max-w-xs">
              The world's most exclusive marketplace for VIP mobile numbers and personalized numerology insights.
            </p>

            <div className="flex items-center gap-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                >
                  <Icon size={18} className="text-white/60 group-hover:text-white group-hover:scale-110 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
             {Object.entries(footerLinks).map(([title, links]) => (
               <div key={title} className="space-y-6">
                 <h4 className="text-sm font-bold text-white uppercase tracking-widest">{title}</h4>
                 <ul className="space-y-3">
                   {links.map((link) => (
                     <li key={link.name}>
                       <Link to={link.path} className="text-white/40 hover:text-secondary transition-colors text-sm font-medium flex items-center gap-2 group">
                         <div className="w-1 h-1 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                         {link.name}
                       </Link>
                     </li>
                   ))}
                 </ul>
               </div>
             ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] font-bold uppercase tracking-widest">
          <p>© {currentYear} VIP Numbers Marketplace. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
