import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, Heart, ShoppingBag, Star, Sparkles, Smartphone, Loader2 } from 'lucide-react';
import { db } from '../components/Firebase';
import CustomNumberForm from '../components/Homepage/CustomNumberForm';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const CATEGORIES = [
  'All',
  'Triple 9',
  'Double Digit',
  '786 Series',
  'Quad 1',
  'Sequence',
  'Mirror Numbers',
  'Angel Numbers',
  'Business Numbers',
];

const NumberCard = ({ item }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    whileHover={{ y: -8, scale: 1.01 }}
    className="group relative bg-[#130A2C]/20 backdrop-blur-3xl p-7 rounded-[2.5rem] border border-white/5 hover:border-secondary/40 transition-all duration-700 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between min-h-[380px]"
  >
    {/* Animated Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    
    {/* Glass Reflection Pattern */}
    <div className="absolute -top-[100%] -left-[100%] w-[400%] h-[400%] bg-gradient-to-br from-white/[0.03] via-transparent to-transparent rotate-45 pointer-events-none transition-transform duration-[1500ms] group-hover:translate-x-1/2 group-hover:translate-y-1/2" />

    <div className="relative z-10 space-y-8">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[8px] font-light uppercase tracking-[0.4em] border border-secondary/20">
            {item.badge || item.category}
          </span>
          {item.operator && (
            <span className="text-[7px] text-white/30 uppercase tracking-[0.2em] px-3 font-light">{item.operator}</span>
          )}
        </div>
        <button className="text-white/10 hover:text-secondary transition-all duration-500 hover:scale-125">
          <Heart size={16} strokeWidth={1} />
        </button>
      </div>

      <div className="space-y-3 text-center">
        <p className="text-white/20 text-[9px] font-light uppercase tracking-[0.5em] font-display">{item.category}</p>
        <div className="relative inline-block">
          <h3 className="text-3xl md:text-4xl font-light tracking-tighter text-white font-number group-hover:text-gradient-gold transition-all duration-700 leading-none">
            {item.number}
          </h3>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent group-hover:w-full transition-all duration-1000" />
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-2xl font-light text-white font-display tracking-tight leading-none">₹{Number(item.price).toLocaleString()}</p>
          {item.mrp > item.price && (
            <p className="text-[11px] text-white/20 line-through font-body tracking-wider">₹{Number(item.mrp).toLocaleString()}</p>
          )}
        </div>
        <button className="bg-white/5 hover:bg-white hover:text-dark p-4 rounded-2xl transition-all duration-700 group-hover:rotate-[360deg] shadow-inner">
          <ShoppingBag size={18} strokeWidth={1} />
        </button>
      </div>
    </div>

    <button className="relative z-10 w-full py-4.5 mt-8 rounded-2xl bg-white/[0.03] hover:bg-white hover:text-dark text-[10px] font-light uppercase tracking-[0.4em] transition-all duration-700 flex items-center justify-center gap-3 border border-white/5 hover:border-white group/btn overflow-hidden">
      <span className="relative z-10">Commission Acquisition</span>
      <ArrowRight size={14} strokeWidth={1} className="relative z-10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-700" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />
    </button>
  </motion.div>
);

const Shop = () => {
  const [numbers, setNumbers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);
  const [filters, setFilters] = useState({
    startsWith: '',
    endsWith: '',
    includes: '',
    vibration: 'All Frequencies',
    sortBy: 'Default',
  });

  const location = useLocation();

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const q = query(collection(db, "vipNumbers"), orderBy("createdAt", "desc"));
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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('search');
    if (searchQuery) {
      setFilters(prev => ({ ...prev, includes: searchQuery }));
    } else {
      setFilters(prev => ({ ...prev, includes: '' }));
    }
  }, [location.search]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    setVisibleCount(12); // Reset view count on filter
  };

  const resetFilters = () => {
    setFilters({ startsWith: '', endsWith: '', includes: '', vibration: 'All Frequencies', sortBy: 'Default' });
    setSelectedCategory('All');
    setVisibleCount(12);
  };

  const filteredNumbers = numbers
    .filter(item => {
      if ((item.status || "Available") !== "Available") return false;
      const num = item.number.replace(/\s+/g, '');
      const catMatch = selectedCategory === 'All' || item.category === selectedCategory;
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

  const displayedNumbers = filteredNumbers.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-[#050614] pt-28 pb-32 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -ml-32 -mb-32" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-secondary/70">
              <Star size={14} strokeWidth={1} />
              <span className="text-[10px] font-light uppercase tracking-[0.5em] font-display">Archives Full Access</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-light text-white tracking-tight leading-none">
              Curated <span className="text-gradient-gold block mt-2">SELECTIONS</span>
            </h1>
          </div>
          <div className="text-right">
            <p className="text-white/20 font-light text-[10px] uppercase tracking-[0.4em] mb-2 leading-none">
              Displaying {Math.min(visibleCount, filteredNumbers.length)} of {filteredNumbers.length}
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-white/10 ml-auto" />
          </div>
        </div>

        {/* Premium Filter Bar */}
        <div className="mb-12 p-3.5 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.6)] overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"><Search size={14} strokeWidth={1} /></div>
              <input type="text" name="startsWith" placeholder="Prefix Search..." value={filters.startsWith} onChange={handleFilterChange}
                className="w-full bg-white/5 border border-white/5 rounded-2xl pl-10 pr-4 py-4 text-[10px] text-white focus:bg-white/10 outline-none transition-all placeholder:text-white/10 font-light tracking-widest" />
            </div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"><Search size={14} strokeWidth={1} /></div>
              <input type="text" name="endsWith" placeholder="Suffix Search..." value={filters.endsWith} onChange={handleFilterChange}
                className="w-full bg-white/5 border border-white/5 rounded-2xl pl-10 pr-4 py-4 text-[10px] text-white focus:bg-white/10 outline-none transition-all placeholder:text-white/10 font-light tracking-widest" />
            </div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"><Search size={14} strokeWidth={1} /></div>
              <input type="text" name="includes" placeholder="Internal Search..." value={filters.includes} onChange={handleFilterChange}
                className="w-full bg-white/5 border border-white/5 rounded-2xl pl-10 pr-4 py-4 text-[10px] text-white focus:bg-white/10 outline-none transition-all placeholder:text-white/10 font-light tracking-widest" />
            </div>
            <select name="vibration" value={filters.vibration} onChange={handleFilterChange}
              className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-[10px] text-white focus:bg-white/10 outline-none transition-all font-light tracking-widest appearance-none">
              <option className="bg-[#050614]">Vibration Frequency</option>
              {['Triple', 'Double', 'Quad', 'Sequence', 'Mirror', 'Angel'].map(v => (
                <option key={v} className="bg-[#050614]">{v}</option>
              ))}
            </select>
            <select name="sortBy" value={filters.sortBy} onChange={handleFilterChange}
              className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-[10px] text-white focus:bg-white/10 outline-none transition-all font-light tracking-widest appearance-none">
              <option className="bg-[#050614]">Premium Sorting</option>
              <option className="bg-[#050614]">Price: Low to High</option>
              <option className="bg-[#050614]">Price: High to Low</option>
            </select>
            <button onClick={resetFilters}
              className="w-full bg-white text-dark rounded-2xl px-5 py-4 text-[9px] font-light uppercase tracking-[0.3em] transition-all duration-700 hover:bg-secondary flex items-center justify-center gap-2 shadow-2xl">
              <Filter size={14} strokeWidth={1} /> Reset
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-12 scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setVisibleCount(12); }}
              className={`px-6 py-3 rounded-2xl text-[9px] font-light uppercase tracking-[0.3em] whitespace-nowrap transition-all duration-700 border ${
                selectedCategory === cat 
                ? 'bg-white text-dark border-white shadow-[0_10px_30px_rgba(255,255,255,0.1)]' 
                : 'bg-white/5 text-white/30 hover:text-white/60 border-white/5 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-32 flex flex-col items-center gap-6">
            <Loader2 size={40} className="animate-spin text-secondary/30" strokeWidth={1} />
            <p className="text-white/10 font-light tracking-[0.4em] uppercase text-[10px]">Accessing Secure Database</p>
          </div>
        )}

        {/* Numbers Grid */}
        {!loading && (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatePresence mode="popLayout">
                {displayedNumbers.map((item) => (
                  <NumberCard key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </div>

            {/* Show More Button */}
            {filteredNumbers.length > visibleCount && (
              <div className="mt-20 flex flex-col items-center gap-6">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <button 
                  onClick={() => setVisibleCount(prev => prev + 12)}
                  className="px-12 py-5 rounded-3xl bg-[#130A2C]/40 border border-white/5 text-white/40 hover:text-white hover:border-white/20 hover:bg-white/5 text-[10px] font-light uppercase tracking-[0.4em] transition-all duration-700 group flex items-center gap-4"
                >
                  Expediting Catalog
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                </button>
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!loading && filteredNumbers.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 bg-white/[0.01] rounded-[4rem] border border-white/5 shadow-2xl backdrop-blur-3xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent opacity-30" />
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-secondary/10 mx-auto mb-8 border border-white/5">
                <Smartphone size={40} strokeWidth={1} />
              </div>
              <h3 className="text-3xl font-light text-white mb-4 font-display tracking-widest uppercase">No Archives Found</h3>
              <p className="text-white/20 max-w-sm mx-auto mb-10 font-light text-sm leading-relaxed tracking-widest">
                Our celestial scouts are searching the network. Adjust your parameters to reveal hidden frequencies.
              </p>
              <button 
                onClick={resetFilters}
                className="text-white/40 font-light uppercase tracking-[0.5em] text-[10px] border-b border-white/10 pb-2 hover:text-white hover:border-secondary transition-all duration-500"
              >
                Reset System Parameters
              </button>
            </div>
          </motion.div>
        )}

        {/* Custom Number Request Form */}
        <CustomNumberForm />
      </div>
    </div>
  );
};

export default Shop;