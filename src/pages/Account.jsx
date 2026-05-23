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

        // Fetch Cart Count
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
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C6A664]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050614] pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Profile Header Card */}
        <div className="bg-[#130A2C] rounded-[48px] p-8 md:p-16 mb-12 relative overflow-hidden border border-white/5 shadow-2xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative group">
                <div className="w-32 h-32 rounded-[40px] bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white overflow-hidden shadow-2xl">
                  {userData?.photoURL ? (
                    <img src={userData.photoURL} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User size={56} className="text-white/20" />
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-secondary rounded-2xl flex items-center justify-center text-dark border-4 border-[#130A2C] shadow-lg">
                  <Award size={18} />
                </div>
              </div>
              
              <div className="text-center md:text-left space-y-2">
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter font-display">
                  {userData?.displayName || "VIP Member"}
                </h1>
                <p className="text-[#CAC0A9]/60 font-medium text-lg font-body">{user?.email}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                  <span className="px-4 py-1.5 rounded-full bg-accent/20 text-accent text-[10px] font-black uppercase tracking-widest border border-accent/20">
                    Elite Tier
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest border border-secondary/20">
                    2,450 Karma Points
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="px-8 py-4 rounded-2xl bg-white/5 text-white font-black hover:bg-red-500/10 hover:text-red-500 transition-all border border-white/5 flex items-center gap-3 active:scale-95"
            >
              <LogOut size={20} />
              Logout Account
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Stats & Menu */}
          <div className="lg:col-span-4 space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <Link to="/cart" className="group bg-[#130A2C]/60 backdrop-blur-xl p-8 rounded-[40px] border border-white/5 shadow-xl hover:border-accent/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingBag size={28} />
                </div>
                <p className="text-4xl font-black text-white tracking-tighter font-display">{stats.cart}</p>
                <p className="text-[10px] font-black text-[#CAC0A9]/40 uppercase tracking-[0.2em] mt-2">In Collection</p>
              </Link>
              
              <Link to="/wishlist" className="group bg-[#130A2C]/60 backdrop-blur-xl p-8 rounded-[40px] border border-white/5 shadow-xl hover:border-secondary/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                  <Heart size={28} fill="currentColor" />
                </div>
                <p className="text-4xl font-black text-white tracking-tighter font-display">{stats.wishlist}</p>
                <p className="text-[10px] font-black text-[#CAC0A9]/40 uppercase tracking-[0.2em] mt-2">Shortlisted</p>
              </Link>
            </div>

            {/* Navigation Menu */}
            <div className="bg-[#130A2C]/60 backdrop-blur-xl rounded-[48px] border border-white/5 shadow-xl overflow-hidden p-4">
              <h3 className="px-6 py-4 text-[10px] font-black text-[#CAC0A9]/20 uppercase tracking-[0.3em]">Management</h3>
              <div className="space-y-1">
                {[
                  { icon: Settings, label: "Vibration Settings", color: "text-accent", bg: "bg-accent/10" },
                  { icon: Package, label: "Order History", color: "text-accent", bg: "bg-accent/10" },
                  { icon: CreditCard, label: "Payment Vault", color: "text-accent", bg: "bg-accent/10" },
                  { icon: MapPin, label: "Delivery Points", color: "text-accent", bg: "bg-accent/10" },
                  { icon: Bell, label: "VIP Alerts", color: "text-accent", bg: "bg-accent/10" },
                ].map((item, idx) => (
                  <button key={idx} className="w-full flex items-center justify-between p-5 rounded-3xl hover:bg-white/5 transition-all group text-left">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                        <item.icon size={20} />
                      </div>
                      <span className="font-black text-white/80 group-hover:text-white transition-colors">{item.label}</span>
                    </div>
                    <ChevronRight size={18} className="text-white/10 group-hover:translate-x-1 transition-transform group-hover:text-secondary" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Recent Activity */}
          <div className="lg:col-span-8 space-y-12">
            <div className="bg-[#130A2C]/60 backdrop-blur-xl rounded-[56px] border border-white/5 shadow-xl p-10 md:p-14">
              <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6">
                <div>
                  <h3 className="text-3xl font-black text-white tracking-tighter font-display">Recent Acquisitions</h3>
                  <p className="text-[#CAC0A9]/40 font-medium mt-1 font-body">Tracking your latest premium digits.</p>
                </div>
                <Link to="/orders" className="px-6 py-3 rounded-2xl border border-white/10 text-[10px] font-black text-white uppercase tracking-widest hover:bg-white hover:text-dark transition-all">
                  View All
                </Link>
              </div>

              {recentOrders.length > 0 ? (
                <div className="space-y-6">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="group flex flex-col sm:flex-row items-center justify-between p-8 rounded-[40px] bg-white/5 border border-transparent hover:border-secondary/20 transition-all duration-500">
                      <div className="flex items-center gap-6 mb-4 sm:mb-0">
                        <div className="w-16 h-16 rounded-[24px] bg-[#050614] flex items-center justify-center text-secondary border border-white/5 shadow-sm group-hover:scale-110 transition-transform">
                          <Package size={28} />
                        </div>
                        <div>
                          <p className="text-lg font-black text-white font-display">Order #{order.id.slice(0, 8)}</p>
                          <p className="text-[10px] text-[#CAC0A9]/40 font-bold uppercase tracking-widest">{order.createdAt?.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                      </div>
                      <div className="text-center sm:text-right space-y-2">
                        <p className="text-3xl font-black text-white tracking-tighter font-display">₹{order.total}</p>
                        <span className="inline-flex px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 bg-white/5 rounded-[48px] border border-dashed border-white/10">
                  <div className="w-24 h-24 rounded-[32px] bg-[#050614] flex items-center justify-center text-white/5 mx-auto mb-8">
                    <ShoppingBag size={48} />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-2 font-display">No orders yet</h4>
                  <p className="text-[#CAC0A9]/40 font-medium mb-10 max-w-xs mx-auto font-body">Your digital legacy begins with your first selection.</p>
                  <Link to="/shop" className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-accent to-primary text-white rounded-[24px] font-black hover:shadow-2xl hover:shadow-accent/20 transition-all active:scale-95 uppercase tracking-widest text-xs">
                    Explore Marketplace
                    <ChevronRight size={20} />
                  </Link>
                </div>
              )}
            </div>

            {/* Loyalty Banner */}
            <div className="bg-gradient-to-r from-[#130A2C] to-accent rounded-[48px] p-10 md:p-14 text-white relative overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-black tracking-tighter mb-2 font-display uppercase">VIP REWARDS</h3>
                  <p className="text-white/70 font-medium font-body">You're only 550 karma points away from your next elite bonus.</p>
                </div>
                <button className="px-10 py-5 bg-white text-dark rounded-[24px] font-black hover:bg-secondary hover:text-dark transition-all shadow-xl active:scale-95 uppercase tracking-widest text-xs">
                  Redeem Points
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
