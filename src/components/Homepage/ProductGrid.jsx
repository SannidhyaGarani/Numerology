import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Filter, Loader2, Smartphone, ChevronDown, Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import { db } from '../../components/Firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

const NumberCard = ({ item }) => {
  const navigate = useNavigate();
  // Function to split phone numbers into a dim suffix and golden VIP target
  const renderFormattedNumber = (numStr) => {
    const cleanNum = numStr.replace(/\s+/g, '');
    if (cleanNum.length <= 5) return <span className="text-[#F4C95D]">{cleanNum}</span>;
    const firstPart = cleanNum.slice(0, cleanNum.length - 5);
    const lastPart = cleanNum.slice(cleanNum.length - 5);
    return (
      <>
        <span className="text-gray-400">{firstPart} </span>
        <span className="text-[#F4C95D] font-bold">{lastPart}</span>
      </>
    );
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-[#0D0D16] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-lg relative"
    >
      <div className="w-full space-y-4">
        {/* Number Box */}
        <div className="text-xl md:text-2xl tracking-wide font-mono py-2 text-center select-all">
          {renderFormattedNumber(item.number)}
        </div>

        {/* Badge Label */}
        <div className="flex justify-center">
          <span className="px-4 py-1 rounded-full border border-purple-900 bg-purple-950/30 text-purple-400 text-[10px] font-semibold uppercase tracking-wider">
            {item.badge || item.category}
          </span>
        </div>

        {/* Price Label */}
        <div className="text-white text-xl font-bold font-sans">
          ₹{Number(item.price).toLocaleString()}
        </div>
      </div>

      {/* Reserve CTA */}
      <button 
        onClick={() => navigate(`/checkout`, { state: { product: item } })}
        className="w-full mt-6 py-2.5 px-4 rounded-xl border border-purple-900/60 bg-gradient-to-r from-purple-950/20 to-transparent hover:from-purple-900/40 text-purple-400 hover:text-purple-300 text-xs font-medium uppercase tracking-widest flex items-center justify-between transition-all duration-300 group"
      >
        <span className="mx-auto pl-4 group-hover:scale-105 transition-transform">Reserve</span>
        <Lock size={12} className="text-gray-600" />
      </button>
    </motion.div>
  );
};

const ProductGrid = () => {
  const scrollRef = React.useRef(null);
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
        const q = query(collection(db, "vipNumbers"), orderBy("createdAt", "desc"));
        const snap = await getDocs(q);
        const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setNumbers(data);
      } catch (err) {
        console.error("Error fetching numbers:", err);
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

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const filteredNumbers = numbers
    .filter(item => {
      if ((item.status || "Available") !== "Available") return false;
      const num = item.number.replace(/\s+/g, '');
      const startsMatch = !filters.startsWith || num.startsWith(filters.startsWith);
      const endsMatch = !filters.endsWith || num.endsWith(filters.endsWith);
      const includesMatch = !filters.includes || num.includes(filters.includes);
      const vibrationMatch = filters.vibration === 'All Frequencies' || filters.vibration === 'Vibration' ||
        (item.badge || '').toLowerCase().includes(filters.vibration.toLowerCase()) ||
        (item.category || '').toLowerCase().includes(filters.vibration.toLowerCase());
      return startsMatch && endsMatch && includesMatch && vibrationMatch;
    })
    .sort((a, b) => {
      if (filters.sortBy === 'Price: Low to High') return a.price - b.price;
      if (filters.sortBy === 'Price: High to Low') return b.price - a.price;
      return 0;
    });

  return (
    <section className="py-12 bg-[#030308] text-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* ROW 1: HEADER ELEMENT */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="text-orange-500 text-xl">🔥</span>
            <h2 className="text-lg md:text-xl font-bold tracking-wide text-white">
              Popular VIP Numbers
            </h2>
          </div>
          <Link to="/shop" className="text-xs text-[#F4C95D] hover:underline flex items-center gap-1 transition-all">
            View All Numbers <span className="text-sm font-sans">➔</span>
          </Link>
        </div>

        {/* ROW 2: FILTER PANEL (TOP OF CARDS) */}
        <div className="mb-8 p-5 md:p-6 rounded-2xl border border-[#D4AF37]/40 bg-[#0A0A12] shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
            
            {/* Input 1 */}
            <div className="space-y-2">
              <label className="block text-[11px] text-[#F4C95D] uppercase tracking-wider font-semibold">Starts With</label>
              <div className="relative">
                <input 
                  type="text" name="startsWith" placeholder="Any" value={filters.startsWith} onChange={handleFilterChange}
                  className="w-full bg-[#05050A] border border-gray-800 rounded-xl px-4 py-3 text-xs text-white focus:border-purple-500 outline-none transition-all" 
                />
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Input 2 */}
            <div className="space-y-2">
              <label className="block text-[11px] text-[#F4C95D] uppercase tracking-wider font-semibold">Ends With</label>
              <div className="relative">
                <input 
                  type="text" name="endsWith" placeholder="Any" value={filters.endsWith} onChange={handleFilterChange}
                  className="w-full bg-[#05050A] border border-gray-800 rounded-xl px-4 py-3 text-xs text-white focus:border-purple-500 outline-none transition-all" 
                />
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Input 3 */}
            <div className="space-y-2">
              <label className="block text-[11px] text-[#F4C95D] uppercase tracking-wider font-semibold">Contains</label>
              <div className="relative">
                <input 
                  type="text" name="includes" placeholder="Any" value={filters.includes} onChange={handleFilterChange}
                  className="w-full bg-[#05050A] border border-gray-800 rounded-xl px-4 py-3 text-xs text-white focus:border-purple-500 outline-none transition-all" 
                />
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Select 1 */}
            <div className="space-y-2">
              <label className="block text-[11px] text-[#F4C95D] uppercase tracking-wider font-semibold">Number Type</label>
              <div className="relative">
                <select 
                  name="vibration" value={filters.vibration} onChange={handleFilterChange}
                  className="w-full bg-[#05050A] border border-gray-800 rounded-xl pl-4 pr-8 py-3 text-xs text-white focus:border-purple-500 outline-none transition-all appearance-none"
                >
                  <option value="All Frequencies">All Types</option>
                  <option value="Triple">Triple</option>
                  <option value="Double">Double</option>
                  <option value="Quad">Quad</option>
                  <option value="Sequence">Sequence</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Select 2 */}
            <div className="space-y-2">
              <label className="block text-[11px] text-[#F4C95D] uppercase tracking-wider font-semibold">Price Range</label>
              <div className="relative">
                <select 
                  name="sortBy" value={filters.sortBy} onChange={handleFilterChange}
                  className="w-full bg-[#05050A] border border-gray-800 rounded-xl pl-4 pr-8 py-3 text-xs text-white focus:border-purple-500 outline-none transition-all appearance-none"
                >
                  <option value="Default">Min - Max</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Reset/Action Button */}
            <div>
              <button 
                onClick={() => setFilters({ startsWith: '', endsWith: '', includes: '', vibration: 'All Frequencies', sortBy: 'Default' })}
                className="w-full bg-gradient-to-r from-purple-700 to-purple-600 hover:brightness-110 active:scale-[0.98] text-white rounded-xl py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                <Filter size={13} /> Filter
              </button>
            </div>

          </div>
        </div>

        {/* ROW 3: DATABOUND PRODUCT GRID */}
        {loading ? (
          <div className="py-24 flex flex-col items-center gap-4">
            <Loader2 size={36} className="animate-spin text-purple-500" />
            <p className="text-gray-500 text-xs tracking-widest uppercase">Loading Database Selections</p>
          </div>
        ) : (
          <>
            <div className="relative group">
              {/* Desktop Slider Controls */}
              <button 
                onClick={() => scroll('left')}
                className="hidden lg:flex absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border border-gray-800 bg-[#0A0A12] text-gray-400 cursor-pointer hover:text-white transition-all z-20 shadow-2xl"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#0A0A12] text-[#D4AF37] cursor-pointer hover:brightness-110 transition-all z-20 shadow-2xl"
              >
                <ChevronRight size={20} />
              </button>

              <div 
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4 px-1"
              >
                <AnimatePresence mode="popLayout">
                  {filteredNumbers.map((item) => (
                    <div 
                      key={item.id} 
                      className="min-w-[calc(50%-8px)] lg:min-w-[calc(20%-13px)] snap-start shrink-0"
                    >
                      <NumberCard item={item} />
                    </div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Empty State */}
            {filteredNumbers.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-gray-600 mx-auto mb-4">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-base font-medium text-gray-300 tracking-wider mb-4">No matching configuration found</h3>
                <button
                  onClick={() => setFilters({ startsWith: '', endsWith: '', includes: '', vibration: 'All Frequencies', sortBy: 'Default' })}
                  className="text-xs text-purple-400 border-b border-purple-900/60 pb-1 hover:text-purple-300 transition-colors"
                >
                  Clear filter configurations
                </button>
              </motion.div>
            )}
          </>
        )}

      </div>
    </section>
  );
};

export default ProductGrid;