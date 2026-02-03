
import React, { useState, useEffect } from 'react';
import { MOTIVATIONAL_QUOTES } from '../constants';

const QuoteSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % MOTIVATIONAL_QUOTES.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-blue-50 py-6 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className={`text-xl md:text-2xl italic font-serif-heading text-blue-800 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          "{MOTIVATIONAL_QUOTES[index]}"
        </p>
        <div className="mt-2 h-1 w-24 bg-blue-200 mx-auto rounded-full" />
      </div>
    </div>
  );
};

export default QuoteSection;
