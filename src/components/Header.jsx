import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Phone, User, Search, Heart, ArrowRight, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'VIP Numbers', to: '/shop' },
    { name: 'Numerology', to: '/about' },
    { name: 'Support', to: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-dark/90 backdrop-blur-xl py-4 border-white/5 shadow-2xl shadow-primary/10' 
            : 'bg-transparent py-6 lg:py-8 border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
          
          {/* --- LEFT: Logo --- */}
          <Link to="/" className="relative z-[110] flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-gradient-to-tr from-primary to-accent border border-white/10 flex items-center justify-center">
              <span className="text-white font-black text-xl relative z-10 transition-transform duration-500 group-hover:scale-110">N</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none text-white">
                VIP<span className="text-secondary">NUMBERS</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.4em] font-medium text-white/40">
                Premium Marketplace
              </span>
            </div>
          </Link>

          {/* --- CENTER: Desktop Nav --- */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-[11px] font-bold uppercase tracking-widest text-white/60 hover:text-secondary transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* --- RIGHT: Actions --- */}
          <div className="flex items-center gap-2 md:gap-6 relative z-[110]">
            <div className="flex items-center gap-1 md:gap-3">
              <div className="relative flex items-center">
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.form 
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 180, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      onSubmit={handleSearchSubmit}
                      className="absolute right-10 flex items-center bg-white/5 border border-white/10 rounded-full pr-1 overflow-hidden"
                    >
                      <input 
                        autoFocus
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search VIP Numbers..."
                        className="w-full bg-transparent border-none py-2 px-4 text-[10px] text-white outline-none focus:ring-0 font-light tracking-wider"
                      />
                      <button type="submit" className="bg-secondary/20 hover:bg-secondary/40 text-secondary p-1.5 rounded-full transition-all">
                        <ArrowRight size={12} strokeWidth={2} />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`p-2 rounded-full transition-all ${isSearchOpen ? 'text-secondary bg-white/5' : 'text-white/60 hover:text-secondary hover:bg-white/5'}`}
                >
                  {isSearchOpen ? <X size={20} strokeWidth={1.5} /> : <Search size={20} strokeWidth={1.5} />}
                </button>
              </div>
              <Link to="/account" className="p-2 rounded-full text-white/60 hover:text-secondary hover:bg-white/5 transition-all">
                <User size={20} strokeWidth={1.5} />
              </Link>
            </div>

            <div className="hidden lg:block w-[1px] h-6 bg-white/10" />

            <button className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-[11px] uppercase tracking-widest transition-all hover:scale-105 shadow-lg shadow-primary/20">
              <span>Find Lucky Number</span>
              <Sparkles size={14} />
            </button>

            <button 
              className="lg:hidden w-10 h-10 rounded-xl bg-white/5 text-white flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div 
        className={`fixed inset-0 bg-dark z-[100] transition-all duration-500 lg:hidden flex flex-col pt-32 pb-10 px-8 space-y-8 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-4xl font-bold text-white hover:text-secondary transition-colors"
          >
            {link.name}
          </Link>
        ))}
        
        <div className="pt-8 space-y-6">
          <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold uppercase tracking-widest shadow-xl">
            Find Lucky Number
          </button>
          <div className="flex gap-4">
            <Link to="/account" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 rounded-xl glass border-white/5 text-center text-white/60 font-bold text-sm">Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
