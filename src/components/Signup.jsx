import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./useAuth";
import { Mail, Lock, User, ArrowRight, Sparkles, AlertCircle, ShieldCheck } from "lucide-react";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signup(email, password, displayName);
      navigate("/");
    } catch {
      setError("We couldn't create your account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050614] flex items-center justify-center px-6 py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] opacity-[0.02]" />
      </div>

      <div className="w-full max-w-xl bg-[#050614]/80 backdrop-blur-2xl rounded-[48px] border border-white/5 shadow-2xl p-8 md:p-16 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#130A2C] rounded-2xl text-secondary mb-8 shadow-xl shadow-accent/20 border border-accent/20">
            <Sparkles size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            Begin Your <span className="text-gradient-gold">JOURNEY</span>
          </h2>
          <p className="text-[#CAC0A9]/60 font-medium font-body">Join the elite world of VIP numbers & numerology.</p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-400 text-sm font-bold">
            <AlertCircle size={18} />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-[#CAC0A9]/40 ml-4">Full Name</label>
            <div className="relative group">
              <User className="absolute left-6 top-1/2 -translate-y-1/2 text-[#CAC0A9]/20 group-focus-within:text-secondary transition-colors" size={20} />
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="John Doe"
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:bg-white/10 focus:border-secondary/30 outline-none transition-all font-bold text-white placeholder:text-[#CAC0A9]/20 shadow-sm"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-[#CAC0A9]/40 ml-4">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-[#CAC0A9]/20 group-focus-within:text-secondary transition-colors" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:bg-white/10 focus:border-secondary/30 outline-none transition-all font-bold text-white placeholder:text-[#CAC0A9]/20 shadow-sm"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-[#CAC0A9]/40 ml-4">Password</label>
            <div className="relative group">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-[#CAC0A9]/20 group-focus-within:text-secondary transition-colors" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a strong password"
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:bg-white/10 focus:border-secondary/30 outline-none transition-all font-bold text-white placeholder:text-[#CAC0A9]/20 shadow-sm"
                required
              />
            </div>
          </div>

          <div className="flex items-start gap-3 px-2 py-4">
            <ShieldCheck size={18} className="text-secondary flex-shrink-0 mt-0.5" />
            <p className="text-[10px] text-[#CAC0A9]/40 font-bold leading-relaxed font-body">
              By creating an account, you agree to our <span className="text-white">Terms of Service</span> and <span className="text-white">Privacy Policy</span>.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group w-full py-5 rounded-2xl btn-purple text-white font-black text-lg transform active:scale-[0.98] shadow-2xl shadow-accent/20 flex items-center justify-center gap-3"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Create Account
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#CAC0A9]/60 font-medium font-body">
            Already have an account?{" "}
            <Link to="/login" className="text-secondary font-black hover:underline ml-1 uppercase tracking-widest text-xs">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
