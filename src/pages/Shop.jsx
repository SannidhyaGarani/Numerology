import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, Heart, ShoppingBag, Star, Sparkles, Smartphone } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Triple 9',
  'Double Digit',
  'Mirror Numbers',
  'Sequential',
  'Angel Numbers',
  'Business Numbers'
];

const NUMBERS_DATA = [
  { id: 1, number: '98765 99999', category: 'Triple 9', price: 15999, originalPrice: 29999, badge: 'Hot' },
  { id: 2, number: '98765 22222', category: 'Double Digit', price: 12999, originalPrice: 24999, badge: 'Popular' },
  { id: 3, number: '98765 78678', category: '786 Series', price: 8999, originalPrice: 15999, badge: 'Divine' },
  { id: 4, number: '98765 11111', category: 'Quad 1', price: 8999, originalPrice: 15999, badge: 'Power' },
  { id: 5, number: '98765 12345', category: 'Sequence', price: 7999, originalPrice: 12999, badge: 'Elite' },
  { id: 6, number: '98765 55555', category: 'Triple 5', price: 14999, originalPrice: 27999, badge: 'Rare' },
  { id: 7, number: '98765 00000', category: 'Triple 9', price: 19999, originalPrice: 34999, badge: 'Premium' },
  { id: 8, number: '98765 12121', category: 'Mirror Numbers', price: 6999, originalPrice: 11999, badge: 'Classic' },
];

const NumberCard = ({ item }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -8 }}
    className="group relative bg-[#130A2C] p-6 rounded-[2rem] border border-white/5 hover:border-accent/40 transition-all duration-500 overflow-hidden shadow-xl"
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10 space-y-4">
      <div className="flex justify-between items-start">
        <span className="px-2.5 py-1 rounded-full bg-accent/10 text-secondary text-[9px] font-black uppercase tracking-widest border border-accent/20">
          {item.badge}
        </span>
        <button className="text-[#CAC0A9]/20 hover:text-primary transition-colors">
          <Heart size={18} />
        </button>
      </div>

      <div className="space-y-1 text-center">
        <p className="text-[#CAC0A9]/40 text-[9px] font-black uppercase tracking-[0.2em] font-body">{item.category}</p>
        <h3 className="text-2xl font-bold tracking-tighter text-white font-number group-hover:text-gradient-gold transition-all duration-300">
          {item.number}
        </h3>
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="space-y-0.5">
          <p className="text-xl font-bold text-white font-display">₹{item.price.toLocaleString()}</p>
          <p className="text-[10px] text-[#CAC0A9]/30 line-through font-body">₹{item.originalPrice.toLocaleString()}</p>
        </div>
        <button className="bg-white/5 hover:btn-purple p-3 rounded-xl transition-all duration-300 group-hover:scale-105">
          <ShoppingBag size={18} />
        </button>
      </div>

      <button className="w-full py-3.5 rounded-xl bg-white/5 group-hover:btn-purple text-[10px] font-black uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-2 shadow-inner">
        Reserve Now
        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
      </button>
    </div>
  </motion.div>
);

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNumbers = NUMBERS_DATA.filter(item => {
    const matchesSearch = item.number.includes(searchTerm);
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#050614] pt-28 pb-20 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -ml-32 -mb-32" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header - More Compact */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-secondary">
              <Sparkles size={14} fill="currentColor" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] font-display">Elite Collection</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              EXPLORE <span className="text-gradient-gold">VIP NUMBERS</span>
            </h1>
          </div>
          <p className="text-[#CAC0A9]/30 font-black text-[10px] uppercase tracking-[0.3em] pb-1">
            {filteredNumbers.length} Patterns Found
          </p>
        </div>

        {/* Search & Filters - Refined */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <div className="lg:col-span-3">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-2xl blur-sm opacity-10 group-focus-within:opacity-30 transition duration-500"></div>
              <div className="relative flex items-center bg-[#130A2C]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-1.5 shadow-2xl">
                <div className="pl-5 text-[#CAC0A9]/30">
                  <Search size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Search pattern (e.g. 000, 786, 1234)..."
                  className="w-full bg-transparent border-none focus:ring-0 text-white px-4 py-3.5 text-base placeholder:text-[#CAC0A9]/20 font-body"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/5 text-white font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">
              <Filter size={18} />
              Advanced
            </button>
          </div>
        </div>

        {/* Category Tabs - Compact */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 border ${
                selectedCategory === cat 
                ? 'bg-accent text-white shadow-lg shadow-accent/20 border-accent' 
                : 'bg-white/5 text-[#CAC0A9]/50 hover:bg-white/10 hover:text-white border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Numbers Grid - Compact spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredNumbers.map((item) => (
              <NumberCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State - Dark Theme */}
        {filteredNumbers.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 bg-[#130A2C]/40 rounded-[3rem] border border-white/5 shadow-2xl"
          >
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-secondary/20 mx-auto mb-6">
              <Smartphone size={40} />
            </div>
            <h3 className="text-2xl font-black text-white mb-3 font-display">No matches found</h3>
            <p className="text-[#CAC0A9]/40 max-w-sm mx-auto mb-8 font-body text-sm leading-relaxed">
              We couldn't find any numbers matching your search. Our VIP scouts can find a custom number for you.
            </p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] hover:underline"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Shop;