
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          src="https://yt3.ggpht.com/WY79RmpOrOFl3eE3ImKoDiqRvzBKCC4--ImSz21AAY8qg_y0l5ZnpoltHRZGFGdDa6hOcsik-_8G=s800-rw-nd-v1" 
          className="w-full h-full object-cover" 
          alt="Motivational background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-indigo-900/60 mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] md:leading-[1] tracking-tighter drop-shadow-2xl uppercase">
            IGNITE YOUR <span className="text-blue-400 block sm:inline">LIMITLESS</span> POTENTIAL
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed tracking-wide opacity-90">
            The definitive ecosystem for self-actualization, mental toughness, and elite achievement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button className="px-10 py-4 bg-white text-blue-900 font-black text-base md:text-lg rounded-2xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl uppercase tracking-widest">
              Explore Content
            </button>
            <button className="px-10 py-4 bg-blue-600 text-white font-black text-base md:text-lg rounded-2xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-2xl uppercase tracking-widest border border-blue-400/30">
              Join Community
            </button>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-30"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
