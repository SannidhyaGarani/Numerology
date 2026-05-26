import React from 'react';
import { Sparkles, Send, User, Calendar, Clock, Smartphone } from 'lucide-react';

const CustomNumberForm = () => {
    return (
        <section className="mt-32 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 rounded-[4rem] blur-3xl -z-10" />
            
            <div className="glass rounded-[4rem] p-10 md:p-20 border border-white/5 relative overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-medium uppercase tracking-[0.4em]">
                            <Sparkles size={14} />
                            Bespoke Frequencies
                        </div>
                        <h2 className="text-4xl md:text-6xl font-light font-display tracking-tight leading-tight uppercase">
                            Request Your <br />
                            <span className="text-gradient-gold">CUSTOMIZED NUMBER</span>
                        </h2>
                        <p className="text-base text-white/40 font-light leading-relaxed max-w-md tracking-widest">
                            Can't find your perfect match? Share your cosmic details, and our numerology experts will curate a selection tailored specifically to your vibrational frequency.
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 ml-2">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                                    <input 
                                        type="text" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-5 text-[12px] font-light text-white outline-none focus:bg-white/10 focus:border-secondary/30 transition-all placeholder:text-white/10 tracking-widest" 
                                        placeholder="Your Identity" 
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 ml-2">Date of Birth</label>
                                <div className="relative">
                                    <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                                    <input 
                                        type="date" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-5 text-[12px] font-light text-white outline-none focus:bg-white/10 focus:border-secondary/30 transition-all placeholder:text-white/10 tracking-widest" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 ml-2">Birth Time</label>
                                <div className="relative">
                                    <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                                    <input 
                                        type="time" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-5 text-[12px] font-light text-white outline-none focus:bg-white/10 focus:border-secondary/30 transition-all placeholder:text-white/10 tracking-widest" 
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 ml-2">Preferred Digits / Pattern *</label>
                                <div className="relative">
                                    <Smartphone className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                                    <input 
                                        required 
                                        type="text" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-5 text-[12px] font-light text-white outline-none focus:bg-white/10 focus:border-secondary/30 transition-all placeholder:text-white/10 tracking-widest" 
                                        placeholder="e.g. 786, 9999, 007" 
                                    />
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-6 rounded-2xl bg-white text-dark font-bold text-[10px] uppercase tracking-[0.5em] shadow-2xl hover:bg-secondary transition-all duration-700 flex items-center justify-center gap-4 group">
                            Submit Request
                            <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CustomNumberForm;
