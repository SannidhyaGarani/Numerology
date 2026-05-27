import React from 'react';
import { Sparkles, Send, User, Calendar, Clock, Smartphone } from 'lucide-react';

const CustomNumberForm = () => {
  return (
    <section className="mt-24 relative select-none">
      {/* Subtle Premium Blur Backdrops */}
      <div className="absolute inset-0 bg-purple-950/5 rounded-3xl blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="rounded-2xl border border-gray-800/80 bg-[#0B061A]/90 backdrop-blur-xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
        {/* Background Sacred Geometric Texture Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-center bg-no-repeat bg-cover" 
          style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/sacred-geometry.png')` }} 
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Narrative Context */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-950/50 text-purple-300 border border-purple-900/50 w-fit">
              <Sparkles size={10} className="text-[#F4C95D]" />
              Bespoke Frequencies
            </div>
            
            <h2 className="text-3xl md:text-5xl font-medium tracking-normal text-white leading-tight font-sans">
              Request Your <br />
              <span className="text-[#F4C95D] uppercase tracking-wide">Customized Number</span>
            </h2>
            
            <p className="text-sm text-gray-400 leading-relaxed font-normal max-w-sm">
              Can't find your perfect asset combination within our live logs? Share your core dimensional coordinates, and our desk will manually curate a sequence aligned to your corporate profile.
            </p>
          </div>

          {/* Right Block: Transmission Input Grid */}
          <form className="lg:col-span-7 space-y-5 w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Full Name Input */}
              <div className="space-y-1.5">
                <label className="block text-[#F4C95D] text-xs font-bold tracking-wide">Full Name / Entity</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                  <input
                    type="text"
                    className="w-full bg-[#120C24] border border-gray-800 rounded-lg pl-11 pr-4 py-2.5 text-sm text-white focus:border-purple-500 outline-none transition-colors placeholder:text-gray-600 font-medium"
                    placeholder="Your Identity"
                  />
                </div>
              </div>

              {/* Date of Birth Input */}
              <div className="space-y-1.5">
                <label className="block text-[#F4C95D] text-xs font-bold tracking-wide">Date of Birth</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                  <input
                    type="date"
                    className="w-full bg-[#120C24] border border-gray-800 rounded-lg pl-11 pr-4 py-2.5 text-sm text-white focus:border-purple-500 outline-none transition-colors text-gray-400 font-medium [color-scheme:dark]"
                  />
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Birth Time Input */}
              <div className="space-y-1.5">
                <label className="block text-[#F4C95D] text-xs font-bold tracking-wide">Time of Origin</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                  <input
                    type="time"
                    className="w-full bg-[#120C24] border border-gray-800 rounded-lg pl-11 pr-4 py-2.5 text-sm text-white focus:border-purple-500 outline-none transition-colors text-gray-400 font-medium [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Preferred Digits Input */}
              <div className="space-y-1.5">
                <label className="block text-[#F4C95D] text-xs font-bold tracking-wide">Preferred Matrix Pattern *</label>
                <div className="relative">
                  <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                  <input
                    required
                    type="text"
                    className="w-full bg-[#120C24] border border-gray-800 rounded-lg pl-11 pr-4 py-2.5 text-sm text-white focus:border-purple-500 outline-none transition-colors placeholder:text-gray-600 font-medium"
                    placeholder="e.g., 786, 9999, 007"
                  />
                </div>
              </div>

            </div>

            {/* Submit Action Block */}
            <button 
              type="submit" 
              className="w-full py-3.5 bg-gradient-to-r from-purple-700 to-purple-600 hover:brightness-110 active:scale-[0.99] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Submit Configuration Request</span>
              <Send size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomNumberForm;