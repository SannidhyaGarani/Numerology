import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Sparkles, ShoppingBag, Heart, Filter, ArrowRight, Star, Loader2, Smartphone, Zap } from 'lucide-react';
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-[#130A2C]/20 backdrop-blur-3xl p-5 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-white/5 hover:border-secondary/40 transition-all duration-700 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between min-h-[320px] md:min-h-[420px]"
    >
      {/* Dynamic Glow */}
      <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-secondary/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      <div className="relative z-10 space-y-6 md:space-y-8">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[7px] md:text-[9px] font-medium uppercase tracking-[0.3em] border border-secondary/20">
              {item.badge || item.category}
            </span>
          </div>
          <button className="text-white/10 hover:text-secondary transition-all duration-500 hover:scale-125">
            <Heart size={16} strokeWidth={1} />
          </button>
        </div>

        <div className="space-y-2 md:space-y-4 text-center">
          <p className="text-white/20 text-[7px] md:text-[9px] font-light uppercase tracking-[0.5em] font-display">{item.category}</p>
          <div className="relative inline-block">
            <h3 className="text-2xl md:text-5xl font-light tracking-tighter text-white font-number group-hover:text-gradient-gold transition-all duration-700 leading-none">
              {item.number}
            </h3>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-secondary/40 group-hover:w-full transition-all duration-1000" />
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-white/5 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-lg md:text-3xl font-light text-white font-display tracking-tight leading-none">₹{Number(item.price).toLocaleString()}</p>
            {item.mrp > item.price && (
              <p className="text-[9px] md:text-[11px] text-white/20 line-through font-body tracking-widest">₹{Number(item.mrp).toLocaleString()}</p>
            )}
          </div>
          <button className="bg-white/5 hover:bg-white hover:text-dark p-3 md:p-5 rounded-xl md:rounded-2xl transition-all duration-700 group-hover:rotate-[360deg] shadow-inner border border-white/5">
            <ShoppingBag size={14} md:size={18} strokeWidth={1} />
          </button>
        </div>
      </div>

      <button className="relative z-10 w-full py-4 md:py-5 mt-6 md:mt-8 rounded-xl md:rounded-2xl bg-white/[0.03] hover:bg-white hover:text-dark text-[8px] md:text-[10px] font-light uppercase tracking-[0.4em] transition-all duration-700 flex items-center justify-center gap-3 border border-white/5 hover:border-white group/btn overflow-hidden">
        <span className="relative z-10">Acquire Frequency</span>
        <ArrowRight size={14} strokeWidth={1} className="relative z-10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-accent/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />
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
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#050614]">
      {/* Ambient background blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -ml-32 -mb-32 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16 md:mb-24">
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-secondary/70">
              <Sparkles size={14} className="animate-pulse" />
              <span className="text-[10px] md:text-[11px] font-light uppercase tracking-[0.5em] font-display">Archives Alpha</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light font-display tracking-tighter leading-[0.9]">
              Elite <span className="text-gradient-gold block mt-2">SELECTIONS</span>
            </h2>
          </div>
          
          {/* Mobile Category Slider */}
          <div className="flex items-center gap-3 overflow-x-auto pb-4 md:pb-0 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-light uppercase tracking-[0.3em] whitespace-nowrap transition-all duration-700 border ${
                  activeCategory === cat 
                  ? 'bg-white text-dark border-white shadow-[0_10px_30px_rgba(255,255,255,0.1)]' 
                  : 'bg-white/5 text-white/30 hover:text-white/60 border-white/5 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Premium Filter Bar */}
        <div className="mb-16 md:mb-20 p-4 md:p-6 rounded-3xl md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.6)] relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[2.5rem]" />
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"><Search size={14} /></div>
              <input type="text" name="startsWith" placeholder="Prefix..." value={filters.startsWith} onChange={handleFilterChange}
                className="w-full bg-white/5 border border-white/5 rounded-2xl pl-10 pr-4 py-4 md:py-5 text-[10px] text-white focus:bg-white/10 outline-none transition-all placeholder:text-white/10 font-light tracking-widest" />
            </div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"><Search size={14} /></div>
              <input type="text" name="endsWith" placeholder="Suffix..." value={filters.endsWith} onChange={handleFilterChange}
                className="w-full bg-white/5 border border-white/5 rounded-2xl pl-10 pr-4 py-4 md:py-5 text-[10px] text-white focus:bg-white/10 outline-none transition-all placeholder:text-white/10 font-light tracking-widest" />
            </div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"><Search size={14} /></div>
              <input type="text" name="includes" placeholder="Contains..." value={filters.includes} onChange={handleFilterChange}
                className="w-full bg-white/5 border border-white/5 rounded-2xl pl-10 pr-4 py-4 md:py-5 text-[10px] text-white focus:bg-white/10 outline-none transition-all placeholder:text-white/10 font-light tracking-widest" />
            </div>
            <select name="vibration" value={filters.vibration} onChange={handleFilterChange}
              className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 md:py-5 text-[10px] text-white focus:bg-white/10 outline-none transition-all font-light tracking-widest appearance-none">
              <option className="bg-[#050614]">Vibration</option>
              <option className="bg-[#050614]">Triple</option>
              <option className="bg-[#050614]">Double</option>
              <option className="bg-[#050614]">Quad</option>
              <option className="bg-[#050614]">Sequence</option>
            </select>
            <select name="sortBy" value={filters.sortBy} onChange={handleFilterChange}
              className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 md:py-5 text-[10px] text-white focus:bg-white/10 outline-none transition-all font-light tracking-widest appearance-none">
              <option className="bg-[#050614]">Sorting</option>
              <option className="bg-[#050614]">Price: Low to High</option>
              <option className="bg-[#050614]">Price: High to Low</option>
            </select>
            <button onClick={() => setFilters({ startsWith: '', endsWith: '', includes: '', vibration: 'All Frequencies', sortBy: 'Default' })}
              className="w-full bg-white text-dark rounded-2xl px-5 py-4 md:py-5 text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-700 hover:bg-secondary flex items-center justify-center gap-2 shadow-2xl">
              <Filter size={14} strokeWidth={1} /> Reset
            </button>
          </div>
        </div>

        {/* Grid Display */}
        {loading ? (
          <div className="py-32 flex flex-col items-center gap-6">
            <Loader2 size={42} className="animate-spin text-secondary/30" strokeWidth={1} />
            <p className="text-white/10 font-light tracking-[0.5em] uppercase text-[10px]">Accessing Database</p>
          </div>
        ) : (
          <>
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
              <AnimatePresence mode="popLayout">
                {filteredNumbers.map((item) => (
                  <NumberCard key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredNumbers.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-32 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-white/10 mx-auto mb-6 border border-white/5">
                  <Smartphone size={32} />
                </div>
                <h3 className="text-xl font-light text-white/40 tracking-[0.4em] uppercase mb-10">No Frequencies Found</h3>
                <button 
                  onClick={() => { setFilters({ startsWith: '', endsWith: '', includes: '', vibration: 'All Frequencies', sortBy: 'Default' }); setActiveCategory('All Numbers'); }}
                  className="text-secondary text-[10px] uppercase tracking-[0.5em] border-b border-secondary/30 pb-2 hover:text-white transition-all"
                >
                  Clear System Parameters
                </button>
              </motion.div>
            )}
          </>
        )}
        
        {/* Footer Link */}
        <div className="mt-20 flex justify-center">
          <Link to="/shop" className="group flex items-center gap-4 text-white/30 hover:text-white transition-all duration-500">
            <div className="h-[1px] w-12 bg-white/10 group-hover:w-20 transition-all duration-700" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-light">Explore Full Archive</span>
            <div className="h-[1px] w-12 bg-white/10 group-hover:w-20 transition-all duration-700" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;