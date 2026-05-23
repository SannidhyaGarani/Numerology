import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, ShoppingBag, Heart, Eye, Filter, ArrowRight, Star } from 'lucide-react';

const CATEGORIES = [
  'All Numbers',
  'Triple 9',
  'Double Digit',
  '786 Series',
  'Quad 1',
  'Sequence',
  'Business Numbers'
];

const NUMBERS_DATA = [
  { id: 1, number: '98765 99999', category: 'Triple 9', price: 15999, originalPrice: 29999, badge: 'TRIPLE 9' },
  { id: 2, number: '98765 22222', category: 'Double Digit', price: 12999, originalPrice: 24999, badge: 'DOUBLE 2' },
  { id: 3, number: '98765 78678', category: '786 Series', price: 8999, originalPrice: 15999, badge: '786 SERIES' },
  { id: 4, number: '98765 11111', category: 'Quad 1', price: 8999, originalPrice: 15999, badge: 'QUAD 1' },
  { id: 5, number: '98765 12345', category: 'Sequence', price: 7999, originalPrice: 12999, badge: 'SEQUENCE' },
  { id: 6, number: '98765 55555', category: 'Triple 9', price: 14999, originalPrice: 27999, badge: 'TRIPLE 5' },
];

const NumberCard = ({ item }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="group relative bg-[#130A2C] p-8 rounded-[2.5rem] border border-[#6720C5]/20 hover:border-[#6720C5] transition-all duration-500 overflow-hidden shadow-lg"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 space-y-6">
        <div className="flex justify-between items-start">
          <span className="px-3 py-1 rounded-full bg-accent/10 text-secondary text-[10px] font-black uppercase tracking-widest border border-accent/20">
            {item.badge}
          </span>
          <button className="text-[#CAC0A9]/20 hover:text-primary transition-colors">
            <Heart size={20} />
          </button>
        </div>

        <div className="space-y-2 text-center">
          <p className="text-[#CAC0A9]/40 text-xs font-medium uppercase tracking-[0.2em] font-body">{item.category}</p>
          <h3 className="text-3xl font-bold tracking-tighter text-[#F9F8FA] font-number group-hover:text-gradient-gold transition-all duration-300">
            {item.number}
          </h3>
        </div>

        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-2xl font-bold text-[#F9F8FA] font-display">₹{item.price.toLocaleString()}</p>
            <p className="text-sm text-[#CAC0A9]/40 line-through font-body">₹{item.originalPrice.toLocaleString()}</p>
          </div>
          <button className="bg-white/5 hover:btn-purple p-4 rounded-2xl transition-all duration-300 group-hover:scale-110">
            <ShoppingBag size={20} />
          </button>
        </div>

        <button className="w-full py-4 rounded-2xl bg-white/5 group-hover:btn-purple text-sm font-black uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-2">
          Reserve Now
          <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
        </button>
      </div>
    </motion.div>
  );
};

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All Numbers');

  const filteredNumbers = activeCategory === 'All Numbers' 
    ? NUMBERS_DATA 
    : NUMBERS_DATA.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 relative overflow-hidden bg-dark">
      {/* Background Sacred Geometry */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-secondary">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-bold uppercase tracking-widest font-display">Popular VIP Numbers</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-display">
              Exclusive <span className="text-gradient-gold">MARKETPLACE</span>
            </h2>
          </div>
          
          <button className="flex items-center gap-2 text-accent hover:text-white transition-colors font-black uppercase tracking-widest text-sm group">
            View All Numbers
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border border-white/5 ${
                activeCategory === cat 
                ? 'bg-accent text-white shadow-lg shadow-accent/20 border-accent' 
                : 'bg-white/5 text-[#CAC0A9]/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredNumbers.map((item) => (
              <NumberCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Smart Filter Section */}
        <div className="mt-24 p-8 md:p-12 rounded-[3rem] bg-[#130A2C] border border-[#6720C5]/30 relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8 items-end">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#CAC0A9]/40 uppercase tracking-widest ml-1">Starts With</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent outline-none transition-all text-[#F9F8FA]">
                  <option className="bg-dark">Any</option>
                  <option className="bg-dark">9</option>
                  <option className="bg-dark">8</option>
                  <option className="bg-dark">7</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#CAC0A9]/40 uppercase tracking-widest ml-1">Ends With</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent outline-none transition-all text-[#F9F8FA]">
                  <option className="bg-dark">Any</option>
                  <option className="bg-dark">99</option>
                  <option className="bg-dark">00</option>
                  <option className="bg-dark">786</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#CAC0A9]/40 uppercase tracking-widest ml-1">Contains</label>
                <input type="text" placeholder="Digits..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent outline-none transition-all text-[#F9F8FA] placeholder:text-[#CAC0A9]/20" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#CAC0A9]/40 uppercase tracking-widest ml-1">Number Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent outline-none transition-all text-[#F9F8FA]">
                  <option className="bg-dark">All Types</option>
                  <option className="bg-dark">Triple</option>
                  <option className="bg-dark">Double</option>
                  <option className="bg-dark">Quad</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#CAC0A9]/40 uppercase tracking-widest ml-1">Price Range</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent outline-none transition-all text-[#F9F8FA]">
                  <option className="bg-dark">Min - Max</option>
                  <option className="bg-dark">Under 10k</option>
                  <option className="bg-dark">10k - 50k</option>
                  <option className="bg-dark">50k+</option>
                </select>
              </div>
            </div>
            
            <button className="w-full btn-purple py-4 rounded-xl font-black uppercase tracking-[0.2em] text-sm shadow-xl flex items-center justify-center gap-2">
              <Filter size={20} />
              Filter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
                