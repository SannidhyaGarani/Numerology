import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  ChevronLeft, 
  Smartphone, 
  CreditCard, 
  Building, 
  User, 
  Mail, 
  Phone,
  CheckCircle2,
  AlertCircle,
  Zap
} from 'lucide-react';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(location.state?.product || null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'UPI'
  });

  useEffect(() => {
    // If no product in state, check if we can fetch or redirect
    if (!product) {
      // For demo purposes, we might want to redirect back to shop
      // navigate('/shop');
    }
  }, [product, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (!product && !isSuccess) {
    return (
      <div className="min-h-screen bg-[#03030A] flex flex-col items-center justify-center text-white px-6">
        <AlertCircle size={48} className="text-red-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">No Number Selected</h2>
        <p className="text-gray-400 mb-6">Please select a VIP number from our catalog to proceed.</p>
        <Link to="/shop" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-bold transition-all">
          Browse Catalog
        </Link>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#03030A] flex flex-col items-center justify-center text-white px-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center space-y-6 max-w-md"
        >
          <div className="w-20 h-20 bg-green-500/20 border border-green-500/50 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={40} className="text-green-500" />
          </div>
          <h2 className="text-3xl font-bold">Reservation Successful!</h2>
          <p className="text-gray-400">
            Our concierge will contact you shortly to complete the KYC and activation process for your new VIP number <span className="text-[#F4C95D] font-mono font-bold">{product?.number}</span>.
          </p>
          <div className="pt-6">
            <Link to="/" className="text-[#F4C95D] font-bold uppercase tracking-widest border-b border-[#F4C95D]/30 pb-1 hover:border-[#F4C95D] transition-colors">
              Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Format and highlight VIP number like other components
  const renderFormattedNumber = (numStr) => {
    if (!numStr) return "";
    const cleanNum = numStr.replace(/\s+/g, '');
    if (cleanNum.length <= 5) return <span className="text-[#F4C95D]">{cleanNum}</span>;
    const firstPart = cleanNum.slice(0, cleanNum.length - 5);
    const lastPart = cleanNum.slice(cleanNum.length - 5);
    return (
      <>
        <span className="text-gray-500">{firstPart}</span>
        <span className="text-[#F4C95D]">{lastPart}</span>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#03030A] text-white pt-24 pb-16 relative overflow-hidden select-none">
      {/* Background Sacred Geometric Radial Overlays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-950/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        
        {/* Navigation / Header */}
        <div className="flex items-center gap-4 mb-10">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full border border-gray-800 bg-[#0B061A]/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Secure Checkout</h1>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Transaction Terminal v2.0</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: PRODUCT REVIEW & SUMMARY */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6 order-2 lg:order-1"
          >
            <div className="rounded-2xl border border-gray-800/80 bg-[#0B061A]/90 backdrop-blur-xl p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12">
                <Smartphone size={120} />
              </div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2 text-[#F4C95D] text-[10px] font-bold uppercase tracking-widest">
                  <span className="w-5 h-px bg-[#F4C95D]/30" />
                  Your Selected Asset
                </div>

                <div className="space-y-1">
                  <div className="text-4xl md:text-5xl font-black font-mono tracking-tighter">
                    {renderFormattedNumber(product.number)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-purple-950/50 text-purple-300 border border-purple-900/50">
                      {product.badge || product.category}
                    </span>
                    <span className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">Priority Activation Eligible</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-800 space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-gray-500 text-xs uppercase tracking-widest font-bold">Asset Value</span>
                    <div className="text-right">
                      {product.mrp > product.price && (
                        <div className="text-xs text-gray-600 line-through mb-1">₹{Number(product.mrp).toLocaleString()}</div>
                      )}
                      <div className="text-2xl font-bold text-white tracking-wide">₹{Number(product.price).toLocaleString()}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 bg-purple-950/20 rounded-xl px-4 border border-purple-900/30">
                    <div className="flex items-center gap-2 text-purple-300">
                      <ShieldCheck size={16} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Reservation Fee</span>
                    </div>
                    <span className="text-[#F4C95D] font-bold text-sm">Included</span>
                  </div>

                  <div className="pt-2">
                    <p className="text-[9px] text-gray-500 leading-relaxed uppercase tracking-wider">
                      * Price includes 18% GST and basic documentation support. Final activation depends on KYC validation by the operator.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TRUST INDICATORS */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-800/50 bg-[#0B061A]/40 p-4 flex items-center gap-3">
                <Lock size={18} className="text-purple-500 opacity-60" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">256-bit SSL encrypted</span>
              </div>
              <div className="rounded-xl border border-gray-800/50 bg-[#0B061A]/40 p-4 flex items-center gap-3">
                <Building size={18} className="text-purple-500 opacity-60" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">Direct operator sync</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CHECKOUT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-800/80 bg-[#0B061A]/90 backdrop-blur-xl p-8 md:p-12 shadow-2xl space-y-8">
              
              <div className="space-y-6">
                <h2 className="text-xl font-bold border-l-4 border-purple-600 pl-4">Delivery & KYC Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4C95D]">Recipient Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                      <input 
                        required
                        type="text" 
                        placeholder="Legal name for KYC"
                        className="w-full bg-[#120C24] border border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white focus:border-purple-600 outline-none transition-all placeholder:text-gray-700"
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4C95D]">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                      <input 
                        required
                        type="email" 
                        placeholder="For transaction receipt"
                        className="w-full bg-[#120C24] border border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white focus:border-purple-600 outline-none transition-all placeholder:text-gray-700"
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4C95D]">Primary Contact</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                      <input 
                        required
                        type="tel" 
                        placeholder="+91-XXXXX-XXXXX"
                        className="w-full bg-[#120C24] border border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white focus:border-purple-600 outline-none transition-all placeholder:text-gray-700"
                        value={form.phone}
                        onChange={(e) => setForm({...form, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4C95D]">City / State</label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                      <input 
                        required
                        type="text" 
                        placeholder="Current residence"
                        className="w-full bg-[#120C24] border border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white focus:border-purple-600 outline-none transition-all placeholder:text-gray-700"
                        value={form.address}
                        onChange={(e) => setForm({...form, address: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <h2 className="text-xl font-bold border-l-4 border-purple-600 pl-4">Payment Method</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'UPI', label: 'UPI / QR', icon: <Zap size={16} /> },
                    { id: 'CARD', label: 'Card / EMI', icon: <CreditCard size={16} /> },
                    { id: 'NET', label: 'Net Banking', icon: <Building size={16} /> }
                  ].map(method => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setForm({...form, paymentMethod: method.id})}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${form.paymentMethod === method.id 
                        ? 'border-purple-600 bg-purple-600/10 text-white' 
                        : 'border-gray-800 bg-[#120C24]/50 text-gray-500 hover:border-gray-700'}`}
                    >
                      <div className={`mb-2 ${form.paymentMethod === method.id ? 'text-purple-400' : 'text-gray-600'}`}>
                        {method.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest">{method.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 hover:brightness-110 active:scale-[0.98] text-white font-bold text-xs uppercase tracking-[0.3em] transition-all shadow-[0_10px_40px_rgba(107,45,255,0.3)] disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3 group"
              >
                {isSubmitting ? (
                  <>Processing Frequency... <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /></>
                ) : (
                  <>
                    Complete Secure Reservation
                    <Lock size={14} className="group-hover:scale-110 transition-transform" />
                  </>
                )}
              </button>

              <div className="text-center">
                <p className="inline-flex items-center gap-2 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                  <ShieldCheck size={12} className="text-green-500/50" />
                  No extra charges at delivery
                </p>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
