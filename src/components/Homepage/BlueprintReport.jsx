import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BlueprintReport = () => {
  const navigate = useNavigate();
  return (
    <section className="py-12 bg-[#05050A]">
      <div className="max-w-[1500px] mx-auto px-4">

        {/* MAIN CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
        relative overflow-hidden rounded-[2px]
        shadow-[0_0_60px_rgba(107,45,255,0.25)]
      "
        >
          {/* FULL BACKGROUND IMAGE */}
          <img
            src="img/bg2.png"
            alt="Background"
            className="
          absolute inset-0
          w-full h-full
          object-cover
          object-center
        "
          />

          {/* BACKGROUND REMOVAL OF OVERLAY */}


          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] px-6 md:px-10 py-16 text-center">

            {/* CENTER CONTENT */}
            <div className="flex flex-col items-center max-w-xl">


              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/30 backdrop-blur-md text-[#F4C95D] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4">
                Premium Service
              </div>

              {/* Heading */}
              <h2 className="font-serif leading-[1.1] text-white text-3xl md:text-5xl">

                Handcrafted Personal
                <br />
                <span className="text-[#D4AF37] italic">
                  Number Blueprint
                </span>
              </h2>

              {/* Subtitle */}
              <p className="mt-4 text-[#D8C8F5] uppercase tracking-[0.18em] text-[10px] md:text-xs">
                Not Ai . Not Software . Handwritten Just For You
              </p>

              {/* Description */}
              <p className="mt-3 text-gray-300 text-xs md:text-[14px] leading-relaxed max-w-[420px]">
                Our Expert Numerologists manually analyze your details and
                create a unique handwritten numerology chart to recommend
                the best mobile number pairs and combinations for you.
              </p>

              {/* FEATURES */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-8 w-full">

                {[
                  '100% Handmade',
                  'No Automation',
                  'Private & Secure',
                  'Expert Crafted',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="
                  flex flex-col items-center gap-2

                  bg-black/20 backdrop-blur-sm
                  border border-white/10
                  rounded-2xl p-4
                "
                  >
                    <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 bg-[#12071F]/80 flex items-center justify-center text-[#D4AF37]">
                      ✦
                    </div>

                    <span className="text-[10px] uppercase tracking-wider text-gray-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              {/* CTA Button */}
              <button 
                onClick={() => navigate('/contact')}
                className="mt-8 px-10 py-3.5 rounded-xl bg-[#F4C95D] text-black font-bold uppercase tracking-widest text-xs hover:brightness-110 active:scale-[0.99] transition-all shadow-xl flex items-center gap-2"
              >
                Consult Now
                <ArrowRight size={14} />
              </button>
            </div>

            {/* RIGHT CARD */}


          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlueprintReport;