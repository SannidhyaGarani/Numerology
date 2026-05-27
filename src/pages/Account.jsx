import React, { useState, useEffect } from "react";
import { useAuth } from "../components/useAuth";
import { db } from "../components/Firebase";
import { doc, getDoc, collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import {
  User,
  Package,
  Heart,
  LogOut,
  ChevronRight,
  Settings,
  ShoppingBag,
  CreditCard,
  MapPin,
  Bell,
  Award
} from "lucide-react";

const Account = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [recentOrders, setRecentOrders] = useState([]);
  const [stats, setStats] = useState({ cart: 0, wishlist: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        // Fetch User Profile
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data());
        }

        // Fetch Cart & Wishlist Counts
        const cartSnap = await getDocs(collection(db, "users", user.uid, "cart"));
        const wishlistSnap = await getDocs(collection(db, "users", user.uid, "wishlist"));

        // Fetch Recent Orders
        const ordersRef = collection(db, "users", user.uid, "orders");
        const ordersQuery = query(ordersRef, orderBy("createdAt", "desc"), limit(3));
        const ordersSnap = await getDocs(ordersQuery);

        setRecentOrders(ordersSnap.docs.map(d => ({ id: d.id, ...d.data() })));
        setStats({
          cart: cartSnap.size,
          wishlist: wishlistSnap.size
        });
      } catch (error) {
        console.error("Error fetching account data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#03030A] flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-[#F4C95D]/20 border-t-[#F4C95D]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#03030A] text-white pt-36 md:pt-44 pb-24 px-6 relative overflow-hidden select-none">
      {/* Background Sacred Geometric Matrix */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-center bg-no-repeat bg-cover" 
        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/sacred-geometry.png')` }} 
      />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-950/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto relative z-10 w-full">

        {/* PROFILE PROFILE HEADER CARD FRAME */}
        <div className="bg-[#0B061A]/90 backdrop-blur-xl rounded-2xl p-6 md:p-10 mb-8 relative overflow-hidden border border-gray-800/80 shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              
              {/* Avatar Frame Container */}
              <div className="relative shrink-0">
                <div className="w-24 h-24 rounded-xl bg-[#120C24] border border-gray-800 flex items-center justify-center text-white overflow-hidden shadow-xl">
                  {userData?.photoURL ? (
                    <img src={userData.photoURL} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User size={36} className="text-gray-500" />
                  )}
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 bg-[#120C24] rounded-lg flex items-center justify-center text-[#F4C95D] border border-gray-800 shadow-md">
                  <Award size={14} />
                </div>
              </div>

              {/* Identity Descriptions */}
              <div className="text-center md:text-left space-y-1.5">
                <h1 className="text-2xl md:text-3xl font-medium text-white tracking-wide font-sans">
                  {userData?.displayName || "VIP Profile Member"}
                </h1>
                <p className="text-gray-400 font-normal text-sm font-mono">{user?.email}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
                  <span className="px-3 py-0.5 rounded-full bg-purple-950/50 text-purple-300 text-[9px] font-bold uppercase tracking-wider border border-purple-900/40">
                    Elite Profile Tier
                  </span>
                  <span className="px-3 py-0.5 rounded-full bg-yellow-950/40 text-[#F4C95D] text-[9px] font-bold uppercase tracking-wider border border-[#F4C95D]/20">
                    2,450 Karma Metrics
                  </span>
                </div>
              </div>
            </div>

            {/* Account Revocation Action Button */}
            <button
              onClick={handleLogout}
              className="px-5 py-2.5 rounded-lg bg-red-950/20 text-red-400 font-medium text-xs uppercase tracking-wider hover:bg-red-900/30 transition-all border border-red-900/30 flex items-center gap-2 active:scale-[0.98]"
            >
              <LogOut size={13} />
              <span>Disconnect Session</span>
            </button>
          </div>
        </div>

        {/* METRICS & CONSOLE GRID DIVISION LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Block: Metric Profiles & Sub Navigation Console */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Stat Metric Links */}
            <div className="grid grid-cols-2 gap-4">
              <Link to="/cart" className="group bg-[#0B061A]/90 backdrop-blur-xl p-6 rounded-2xl border border-gray-800/80 shadow-xl hover:border-purple-900/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#120C24] border border-gray-800 flex items-center justify-center text-[#F4C95D] mb-4 group-hover:border-purple-500 transition-colors">
                  <ShoppingBag size={18} />
                </div>
                <p className="text-2xl font-medium text-white tracking-wide font-mono">{stats.cart}</p>
                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">Active Portfolio</p>
              </Link>

              <Link to="/wishlist" className="group bg-[#0B061A]/90 backdrop-blur-xl p-6 rounded-2xl border border-gray-800/80 shadow-xl hover:border-purple-900/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#120C24] border border-gray-800 flex items-center justify-center text-red-400 mb-4 group-hover:border-purple-500 transition-colors">
                  <Heart size={18} fill="currentColor" className="text-red-400/20" />
                </div>
                <p className="text-2xl font-medium text-white tracking-wide font-mono">{stats.wishlist}</p>
                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">Shortlisted Assets</p>
              </Link>
            </div>

            {/* Profile Route Navigation Hub Menu */}
            <div className="bg-[#0B061A]/90 backdrop-blur-xl rounded-2xl border border-gray-800/80 shadow-xl overflow-hidden p-2">
              <h3 className="px-4 py-2.5 text-[9px] font-bold text-gray-600 uppercase tracking-widest">Configuration Matrix</h3>
              <div className="space-y-0.5">
                {[
                  { icon: Settings, label: "Vibration Parameters" },
                  { icon: Package, label: "Acquisition History" },
                  { icon: CreditCard, label: "Payment Ledger Vault" },
                  { icon: MapPin, label: "Transmission Nodes" },
                  { icon: Bell, label: "VIP Metric Alerts" },
                ].map((item, idx) => (
                  <button key={idx} className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#120C24] transition-colors group text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-950/40 border border-purple-900/30 text-purple-300 flex items-center justify-center">
                        <item.icon size={14} />
                      </div>
                      <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">{item.label}</span>
                    </div>
                    <ChevronRight size={14} className="text-gray-700 group-hover:translate-x-0.5 transition-transform group-hover:text-[#F4C95D]" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block: Order Stream Logs & Marketing Milestones */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Live Acquisitions Register Logs */}
            <div className="bg-[#0B061A]/90 backdrop-blur-xl rounded-2xl border border-gray-800/80 shadow-xl p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-lg font-medium text-white tracking-wide">Recent Sequence Acquisitions</h3>
                  <p className="text-xs text-gray-500 font-normal mt-0.5">Audited log history of customized configuration profiles.</p>
                </div>
                <Link to="/orders" className="px-3 py-1.5 rounded-lg border border-gray-800 text-[10px] font-bold text-gray-300 uppercase tracking-wider hover:border-purple-500 hover:text-white transition-colors">
                  View Full Logs
                </Link>
              </div>

              {recentOrders.length > 0 ? (
                <div className="space-y-3">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="group flex flex-col sm:flex-row items-center justify-between p-4 rounded-xl border border-gray-900 bg-[#06030F]/40 hover:border-purple-900/40 transition-colors">
                      <div className="flex items-center gap-4 mb-3 sm:mb-0">
                        <div className="w-11 h-11 rounded-lg bg-[#120C24] flex items-center justify-center text-purple-300 border border-gray-800 shadow-inner group-hover:border-purple-500 transition-colors">
                          <Package size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white font-mono">Profile #{order.id.slice(0, 8).toUpperCase()}</p>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">
                            {order.createdAt?.toDate().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </p>
                        </div>
                      </div>
                      <div className="text-center sm:text-right space-y-1">
                        <p className="text-lg font-medium text-[#F4C95D] font-mono">₹{order.total}</p>
                        <span className="inline-flex px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-950/50 text-emerald-400 border border-emerald-900/40">
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 border border-dashed border-gray-900 rounded-xl">
                  <div className="w-16 h-16 rounded-xl bg-[#120C24] border border-gray-900 flex items-center justify-center text-gray-700 mx-auto mb-4">
                    <ShoppingBag size={24} />
                  </div>
                  <h4 className="text-sm font-medium text-white mb-1">No Profile Registrations Found</h4>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto mb-6 font-normal">Your custom dimensional legacy record starts empty.</p>
                  <Link to="/shop" className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-purple-700 to-purple-600 hover:brightness-110 text-white rounded-lg font-bold uppercase tracking-wider transition-all text-[10px] shadow-md">
                    <span>Explore Matrix Marketplace</span>
                    <ChevronRight size={12} />
                  </Link>
                </div>
              )}
            </div>

            {/* Elegant Framed Milestone Points Card */}
            <div className="relative rounded-2xl border border-[#F4C95D]/20 bg-[#0B061A]/40 backdrop-blur-md p-6 md:p-8 overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-950/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left space-y-1">
                  <h3 className="text-xs font-bold tracking-widest text-[#F4C95D] uppercase">VIP Milestone Rewards</h3>
                  <p className="text-sm font-medium text-white">Unlock Extended Profile Alignment</p>
                  <p className="text-xs text-gray-500 font-normal">You are exactly 550 karma index units clear of your next tier unlock bonus.</p>
                </div>
                <button className="px-4 py-2 bg-[#120C24] border border-gray-800 hover:border-[#F4C95D] text-[#F4C95D] rounded-lg font-bold text-[10px] uppercase tracking-wider transition-colors shrink-0">
                  Redeem Matrix Balance
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;