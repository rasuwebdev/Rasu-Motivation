
import React, { useState, useEffect } from 'react';

interface OdometerProps {
  target: number;
  label: string;
}

const Odometer: React.FC<OdometerProps> = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    // Initial reset for each cycle
    setCount(0);
    
    let start = 0;
    const duration = 2000; // Animation takes 2 seconds
    const intervalTime = 16; // ~60fps
    const increment = target / (duration / intervalTime);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    // Set a timeout to trigger the next cycle (animation 2s + 6s pause = 8s total)
    const nextCycleTimer = setTimeout(() => {
      setCycle(prev => prev + 1);
    }, 8000);

    return () => {
      clearInterval(timer);
      clearTimeout(nextCycleTimer);
    };
  }, [target, cycle]);

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-blue-400/20 relative overflow-hidden group">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl pointer-events-none" />
      
      <div className="relative z-10 text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 mb-3 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] tracking-tighter">
        {count.toLocaleString()}+
      </div>
      <div className="relative z-10 text-blue-200 uppercase tracking-[0.4em] font-black text-xs md:text-sm opacity-80">
        {label}
      </div>
    </div>
  );
};

export default Odometer;
