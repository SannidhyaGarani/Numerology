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
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 border-b ${isScrolled
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
              <span className="text-[9px] uppercase tracking-[0.4em] font-medium text-white">
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
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full text-white/60 hover:text-secondary hover:bg-white/5 transition-all outline-none"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>

              <Link to="/account" className="p-2 rounded-full text-white/60 hover:text-secondary hover:bg-white/5 transition-all">
                <User size={20} strokeWidth={1.5} />
              </Link>
            </div>

            <div className="hidden lg:block w-[1px] h-6 bg-white/10" />

            <button 
              onClick={() => navigate('/shop')}
              className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-[11px] uppercase tracking-widest transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
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
        className={`fixed inset-0 bg-dark z-[100] transition-all duration-500 lg:hidden flex flex-col pt-32 pb-10 px-8 space-y-8 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />

        {/* Mobile Close Button */}
        <button
          className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-white/5 text-white flex items-center justify-center border border-white/10"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={28} />
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-light uppercase tracking-[0.3em] text-white hover:text-secondary transition-all"
          >
            {link.name}
          </Link>
        ))}

        <div className="pt-8 space-y-6">
          <button 
            onClick={() => { navigate('/shop'); setIsMobileMenuOpen(false); }}
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold uppercase tracking-widest shadow-xl"
          >
            Find Lucky Number
          </button>
          <div className="flex gap-4">
            <Link to="/account" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 rounded-xl glass border-white/5 text-center text-white/60 font-bold text-sm">Account</Link>
          </div>
        </div>
      </div>
      {/* --- SEARCH OVERLAY --- */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl flex items-start justify-center px-4 pt-24"
          >
            {/* Glow */}
            <div className="absolute top-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

            {/* Compact Search Box */}
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute -top-14 right-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center"
              >
                <X size={18} />
              </button>

              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

                {/* Header */}
                <div className="px-6 pt-6 pb-4 text-center">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-secondary font-semibold mb-2">
                    Aura Search
                  </p>

                  <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">
                    Discover Your{" "}
                    <span className="text-gradient-gold">Frequency</span>
                  </h2>
                </div>

                {/* Search */}
                <form
                  onSubmit={handleSearchSubmit}
                  className="px-5 pb-5"
                >
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 focus-within:border-secondary/50 transition-all">

                    <Search
                      className="text-white"
                      size={20}
                      strokeWidth={1.5}
                    />

                    <input
                      autoFocus
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search numbers..."
                      className="flex-1 bg-transparent text-white placeholder:text-white/25 outline-none text-base md:text-lg tracking-wide"
                    />

                    <button
                      type="submit"
                      className="px-5 py-3 rounded-xl bg-white text-black text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-secondary transition-all"
                    >
                      Search
                    </button>
                  </div>
                </form>

                {/* Trending */}
                <div className="px-6 pb-6 flex flex-wrap items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white">
                    Trending
                  </span>

                  {["786", "9999", "0007", "1111"].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setSearchQuery(tag);
                        navigate(`/shop?search=${tag}`);
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm hover:bg-secondary hover:text-black transition-all"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
