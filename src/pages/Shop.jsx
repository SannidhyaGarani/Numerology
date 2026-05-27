import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Heart, Lock, Star, Sparkles, Smartphone, Loader2 } from 'lucide-react';
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

const NumberCard = ({ item }) => {
  const navigate = useNavigate();
  // Split number if there's a space to highlight the second part in gold like the reference image
  const parts = item.number.split(' ');
  const displayNumber = parts.length > 1 ? (
    <>
      {parts[0]} <span className="text-[#F4C95D]">{parts[1]}</span>
    </>
  ) : (
    item.number
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl border border-gray-800/80 bg-[#0B061A]/90 backdrop-blur-xl p-6 transition-all duration-300 hover:border-purple-900/60 shadow-xl flex flex-col justify-between text-center min-h-[280px]"
    >
      {/* Decorative Card Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
      
      {/* Top action row */}
      <div className="absolute top-4 right-4 z-20">
        <button className="text-gray-600 hover:text-[#F4C95D] transition-colors p-1 rounded-full hover:bg-white/5">
          <Heart size={16} />
        </button>
      </div>

      {/* Main Number String Output */}
      <div className="space-y-3 pt-4">
        <h3 className="text-2xl md:text-3xl font-bold font-mono tracking-wide text-white select-all">
          {displayNumber}
        </h3>
        
        {/* Centered Badge Category Pill */}
        <div className="flex justify-center">
          <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-950/50 text-purple-300 border border-purple-900/50 group-hover:border-purple-500/40 transition-colors">
            {item.badge || item.category}
          </span>
        </div>
      </div>

      {/* Pricing Information Frame */}
      <div className="space-y-1 my-4">
        <div className="text-xl font-bold text-white tracking-wide">
          ₹ {Number(item.price).toLocaleString()}
        </div>
        {item.mrp > item.price && (
          <div className="text-xs text-gray-500 line-through tracking-wider">
            ₹ {Number(item.mrp).toLocaleString()}
          </div>
        )}
      </div>

      {/* Action Trigger Row */}
      <button 
        onClick={() => navigate('/checkout', { state: { product: item } })}
        className="w-full py-2.5 rounded-xl border border-purple-900/40 bg-[#12071F]/40 text-purple-300 group-hover:bg-purple-700 group-hover:text-white group-hover:border-transparent text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2"
      >
        <span>Reserve</span>
        <Lock size={12} className="opacity-60 group-hover:opacity-100" />
      </button>
    </motion.div>
  );
};

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
  const navigate = useNavigate();

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
    setVisibleCount(12);
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
    <div className="min-h-screen bg-[#03030A] text-white pt-36 md:pt-40 pb-24 overflow-hidden relative select-none">
      {/* Background Sacred Geometric Radial Overlays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-950/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full">
        
        {/* Title Section Blocks */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#F4C95D]">
              <Sparkles size={12} className="opacity-80" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Archives Alpha Collection</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-medium tracking-normal text-white">
              Curated <span className="text-[#D4AF37] italic">Selections</span>
            </h1>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 font-semibold text-xs uppercase tracking-wider">
              Displaying {Math.min(visibleCount, filteredNumbers.length)} of {filteredNumbers.length} Available Numbers
            </p>
          </div>
        </div>

        {/* REDESIGNED GOLD EMBED FILTER PANEL */}
        <div className="mb-10 p-5 rounded-xl border border-[#D4AF37]/30 bg-[#0A0A12]/90 backdrop-blur-md shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
            
            <div className="space-y-1.5">
              <label className="block text-[#F4C95D] text-xs font-bold tracking-wide">Starts With</label>
              <div className="relative">
                <input type="text" name="startsWith" placeholder="Any" value={filters.startsWith} onChange={handleFilterChange}
                  className="w-full bg-[#120C24] border border-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:border-purple-500 outline-none transition-colors font-mono" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[#F4C95D] text-xs font-bold tracking-wide">Ends With</label>
              <div className="relative">
                <input type="text" name="endsWith" placeholder="Any" value={filters.endsWith} onChange={handleFilterChange}
                  className="w-full bg-[#120C24] border border-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:border-purple-500 outline-none transition-colors font-mono" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[#F4C95D] text-xs font-bold tracking-wide">Contains</label>
              <div className="relative">
                <input type="text" name="includes" placeholder="Any" value={filters.includes} onChange={handleFilterChange}
                  className="w-full bg-[#120C24] border border-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:border-purple-500 outline-none transition-colors font-mono" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[#F4C95D] text-xs font-bold tracking-wide">Number Type</label>
              <select name="vibration" value={filters.vibration} onChange={handleFilterChange}
                className="w-full bg-[#120C24] border border-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:border-purple-500 outline-none transition-colors appearance-none">
                <option value="All Frequencies">All Types</option>
                {['Triple', 'Double', 'Quad', 'Sequence', 'Mirror', 'Angel'].map(v => (
                  <option key={v} value={v} className="bg-[#050614]">{v}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[#F4C95D] text-xs font-bold tracking-wide">Price Range</label>
              <select name="sortBy" value={filters.sortBy} onChange={handleFilterChange}
                className="w-full bg-[#120C24] border border-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:border-purple-500 outline-none transition-colors appearance-none">
                <option value="Default">Min - Max</option>
                <option value="Price: Low to High" className="bg-[#050614]">Price: Low to High</option>
                <option value="Price: High to Low" className="bg-[#050614]">Price: High to Low</option>
              </select>
            </div>

            <button type="button" onClick={resetFilters}
              className="w-full py-2 bg-gradient-to-r from-purple-700 to-purple-600 hover:brightness-110 active:scale-[0.99] text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2">
              <Filter size={14} /> Filter
            </button>

          </div>
        </div>

        {/* Category Horizontal Navigation Track */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              type="button"
              key={cat}
              onClick={() => { setSelectedCategory(cat); setVisibleCount(12); }}
              className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 border ${selectedCategory === cat
                ? 'bg-white text-[#03030A] border-white shadow-lg'
                : 'bg-purple-950/20 text-gray-300 border-gray-800 hover:border-purple-900 hover:bg-purple-950/40'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic State Layout Block */}
        {loading ? (
          <div className="py-24 flex flex-col items-center gap-4">
            <Loader2 size={36} className="animate-spin text-purple-500" strokeWidth={1.5} />
            <p className="text-gray-500 font-bold uppercase tracking-widest text-[11px]">Accessing Database Channels...</p>
          </div>
        ) : (
          <>
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {displayedNumbers.map((item) => (
                  <NumberCard key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination Controls */}
            {filteredNumbers.length > visibleCount && (
              <div className="mt-14 flex flex-col items-center gap-6">
                <div className="h-[1px] w-full bg-gray-900" />
                <button
                  type="button"
                  onClick={() => setVisibleCount(prev => prev + 12)}
                  className="px-8 py-3.5 rounded-xl border border-purple-900/50 bg-[#12071F]/40 text-purple-300 hover:bg-purple-700 hover:text-white hover:border-transparent text-xs font-bold uppercase tracking-widest transition-all shadow-md"
                >
                  Load More Frequencies
                </button>
              </div>
            )}
          </>
        )}

        {/* Empty Catalog Query Result Fallback */}
        {!loading && filteredNumbers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-[#0B061A]/40 rounded-2xl border border-gray-800 shadow-xl max-w-xl mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-[#F4C95D] mx-auto mb-6">
              <Smartphone size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Archive Entry Missing</h3>
            <p className="text-gray-400 max-w-sm mx-auto mb-6 text-sm font-medium leading-relaxed">
              No numbers matched your query parameters. Try adjusting your parameters to sync with available configurations.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="text-[#F4C95D] text-xs font-bold uppercase tracking-widest border-b border-[#F4C95D]/30 pb-1 hover:border-[#F4C95D] transition-colors"
            >
              Sync All Channels
            </button>
          </motion.div>
        )}

        {/* Embedded Submission Section */}
        <div className="mt-24">
          <CustomNumberForm />
        </div>
      </div>
    </div>
  );
};

export default Shop;