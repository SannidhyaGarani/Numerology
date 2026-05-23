import React, { useState, useEffect } from 'react';

const PremiumPreloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLifting, setIsLifting] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Show logo shortly after mounting
    const logoTimer = setTimeout(() => setShowLogo(true), 300);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Smooth, non-linear progression
        const increment = Math.random() * (prev > 80 ? 2 : 15);
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => {
      clearInterval(timer);
      clearTimeout(logoTimer);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsLifting(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1200);
      }, 800);
    }
  }, [progress, onComplete]);

  return (
    <div className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#050614] overflow-hidden transition-transform duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
      isLifting ? '-translate-y-full' : 'translate-y-0'
    }`}>
      
      {/* Background Layer: Sacred Geometry Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')] animate-slow-pan" />
      </div>

      <div className="relative flex flex-col items-center">
        
        {/* The "Aura" - A deep purple glow */}
        <div className={`absolute w-80 h-80 bg-accent/20 rounded-full blur-[120px] transition-all duration-1000 ${
          showLogo ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`} />

        {/* Brand Identity Section */}
        <div className="relative overflow-hidden mb-12 py-2 px-4">
          <div className={`transition-all duration-1000 ease-out flex flex-col items-center ${
            showLogo ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-secondary/40 mb-4">
              Premium Marketplace
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter">
              VIP <span className="text-gradient-gold uppercase">NUMBERS</span>
            </h1>
          </div>
        </div>

        {/* Minimalist Progress Container */}
        <div className="relative w-48 h-[1px] bg-white/5 overflow-hidden rounded-full">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-secondary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Numerical Counter - Floating & Subtle */}
        <div className="mt-8 overflow-hidden h-6 text-center">
          <p className={`text-[9px] font-black uppercase tracking-[0.4em] text-[#CAC0A9]/40 transition-transform duration-500 ${
            progress === 100 ? '-translate-y-full' : 'translate-y-0'
          }`}>
            Calculating Vibrations... {Math.floor(progress)}%
          </p>
          <p className={`text-[9px] font-black uppercase tracking-[0.4em] text-secondary transition-transform duration-500 ${
            progress === 100 ? '-translate-y-full' : 'translate-y-0'
          }`}>
            Destiny Aligned
          </p>
        </div>

      </div>

      {/* Aesthetic Border - Frame Effect */}
      <div className={`absolute inset-10 border border-white/5 pointer-events-none transition-opacity duration-700 ${
        showLogo ? 'opacity-100' : 'opacity-0'
      }`} />

      <style jsx>{`
        @keyframes slow-pan {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-2%, -2%); }
          100% { transform: translate(0, 0); }
        }
        .animate-slow-pan {
          animation: slow-pan 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PremiumPreloader;