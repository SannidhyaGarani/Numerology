import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, ShoppingBag, Heart, Filter, ArrowRight, Star, Loader2 } from 'lucide-react';
import { db } from '../../components/Firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

const CATEGORIES = [
  'All Numbers',
  'Triple 9',
  'Double Digit',
  '786 Series',
  'Quad 1',
  'Sequence',
];

const NumberCard = ({ item }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white/[0.02] backdrop-blur-3xl p-6 rounded-[2.5rem] border border-white/5 hover:border-secondary/30 transition-all duration-700 overflow-hidden shadow-2xl flex flex-col justify-between min-h-[340px]"
    >
      <div className="absolute -inset-1 bg-gradient-to-br from-secondary/10 via-transparent to-accent/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="relative z-10 space-y-6">
        <div className="flex justify-between items-start">
          <span className="px-3 py-1 rounded-full bg-white/5 text-secondary text-[8px] font-light uppercase tracking-[0.3em] border border-white/5">
            {item.badge || item.category}
          </span>
          <button className="text-white/10 hover:text-secondary transition-colors duration-500">
            <Heart size={14} strokeWidth={1} />
          </button>
        </div>

        <div className="space-y-2 text-center">
          <p className="text-white/20 text-[8px] font-light uppercase tracking-[0.4em] font-body">{item.category}</p>
          <h3 className="text-2xl md:text-3xl font-light tracking-tighter text-white font-number group-hover:text-gradient-gold transition-all duration-700 leading-none">
            {item.number}
          </h3>
        </div>

        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="text-xl font-light text-white font-display tracking-tight leading-none">₹{Number(item.price).toLocaleString()}</p>
            {item.mrp > item.price && (
              <p className="text-[10px] text-white/20 line-through font-body tracking-wider">₹{Number(item.mrp).toLocaleString()}</p>
            )}
          </div>
          <button className="bg-white/5 hover:bg-white hover:text-dark p-3.5 rounded-xl transition-all duration-700 group-hover:scale-105">
            <ShoppingBag size={14} strokeWidth={1} />
          </button>
        </div>
      </div>

      <button className="relative z-10 w-full py-4 mt-6 rounded-xl bg-white/[0.03] hover:bg-white hover:text-dark text-[10px] font-light uppercase tracking-[0.3em] transition-all duration-700 flex items-center justify-center gap-3 border border-white/5 hover:border-white">
        Acquire Now
        <ArrowRight size={12} strokeWidth={1} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-700" />
      </button>
    </motion.div>
  );
};

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All Numbers');
  const [numbers, setNumbers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    startsWith: '',
    endsWith: '',
    includes: '',
    vibration: 'All Frequencies',
    sortBy: 'Default'
  });

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const q = query(collection(db, "vipNumbers"), orderBy("createdAt", "desc"), limit(8));
        const snap = await getDocs(q);
        const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setNumbers(data);
      } catch (err) {
        console.log("Error fetching numbers:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNumbers();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredNumbers = numbers
    .filter(item => {
      if ((item.status || "Available") !== "Available") return false;
      const num = item.number.replace(/\s+/g, '');
      const catMatch = activeCategory === 'All Numbers' || item.category === activeCategory;
      const startsMatch = !filters.startsWith || num.startsWith(filters.startsWith);
      const endsMatch = !filters.endsWith || num.endsWith(filters.endsWith);
      const includesMatch = !filters.includes || num.includes(filters.includes);
      const vibrationMatch = filters.vibration === 'All Frequencies' || 
                           (item.badge || '').toLowerCase().includes(filters.vibration.toLowerCase()) ||
                           (item.category || '').toLowerCase().includes(filters.vibration.toLowerCase());
      return catMatch && startsMatch && endsMatch && includesMatch && vibrationMatch;
    })
    .sort((a, b) => {
      if (filters.sortBy === 'Price: Low to High') return a.price - b.price;
      if (filters.sortBy === 'Price: High to Low') return b.price - a.price;
      return 0;
    });

  return (
    <section className="py-24 relative overflow-hidden bg-dark">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-secondary/70">
              <Star size={14} strokeWidth={1} />
              <span className="text-[10px] font-light uppercase tracking-[0.5em] font-display">Archival VIP Collection</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light font-display tracking-tight leading-none">
              Exclusive <span className="text-gradient-gold block mt-2">ACQUISITION</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-[8px] font-light uppercase tracking-[0.2em] transition-all duration-500 border ${
                  activeCategory === cat 
                  ? 'bg-white text-dark border-white shadow-lg' 
                  : 'bg-white/5 text-white/40 border-white/5 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Premium Compact Filter Bar */}
        <div className="mb-12 p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20"><Search size={12} /></div>
              <input type="text" name="startsWith" placeholder="Starts With..." value={filters.startsWith} onChange={handleFilterChange}
                className="w-full bg-white/5 border border-white/5 rounded-xl pl-8 pr-3 py-3 text-[10px] text-white focus:bg-white/10 outline-none transition-all placeholder:text-white/10 font-light tracking-wider" />
            </div>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20"><Search size={12} /></div>
              <input type="text" name="endsWith" placeholder="Ends With..." value={filters.endsWith} onChange={handleFilterChange}
                className="w-full bg-white/5 border border-white/5 rounded-xl pl-8 pr-3 py-3 text-[10px] text-white focus:bg-white/10 outline-none transition-all placeholder:text-white/10 font-light tracking-wider" />
            </div>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20"><Search size={12} /></div>
              <input type="text" name="includes" placeholder="Includes..." value={filters.includes} onChange={handleFilterChange}
                className="w-full bg-white/5 border border-white/5 rounded-xl pl-8 pr-3 py-3 text-[10px] text-white focus:bg-white/10 outline-none transition-all placeholder:text-white/10 font-light tracking-wider" />
            </div>
            <select name="vibration" value={filters.vibration} onChange={handleFilterChange}
              className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-[10px] text-white focus:bg-white/10 outline-none transition-all font-light tracking-wider appearance-none">
              <option className="bg-[#050614]">All Frequencies</option>
              <option className="bg-[#050614]">Triple</option>
              <option className="bg-[#050614]">Double</option>
              <option className="bg-[#050614]">Quad</option>
              <option className="bg-[#050614]">Sequence</option>
            </select>
            <select name="sortBy" value={filters.sortBy} onChange={handleFilterChange}
              className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-[10px] text-white focus:bg-white/10 outline-none transition-all font-light tracking-wider appearance-none">
              <option className="bg-[#050614]">Sort: Default</option>
              <option className="bg-[#050614]">Price: Low to High</option>
              <option className="bg-[#050614]">Price: High to Low</option>
            </select>
            <button onClick={() => setFilters({ startsWith: '', endsWith: '', includes: '', vibration: 'All Frequencies', sortBy: 'Default' })}
              className="w-full bg-white text-dark rounded-xl px-4 py-3 text-[9px] font-light uppercase tracking-[0.2em] transition-all duration-500 hover:bg-secondary flex items-center justify-center gap-2 shadow-xl">
              <Filter size={12} strokeWidth={1} /> Reset
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="py-20 flex flex-col items-center gap-4">
            <Loader2 size={32} className="animate-spin text-secondary/40" strokeWidth={1} />
            <p className="text-white/20 font-light tracking-[0.3em] uppercase text-xs">Loading Collection...</p>
          </div>
        )}

        {/* Grid */}
        {!loading && (
          <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredNumbers.map((item) => (
                <NumberCard key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {!loading && filteredNumbers.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <p className="text-white/20 font-light tracking-[0.3em] uppercase text-xs">No numbers match your criteria</p>
            <button onClick={() => { setFilters({ startsWith: '', endsWith: '', includes: '', vibration: 'All Frequencies', sortBy: 'Default' }); setActiveCategory('All Numbers'); }}
              className="text-secondary text-[10px] uppercase tracking-widest border-b border-secondary/20 pb-1">
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;