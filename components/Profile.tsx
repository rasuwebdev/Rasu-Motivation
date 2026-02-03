
import React, { useState, useEffect } from 'react';
import { User, VideoItem } from '../types';
// Fixed: MOTIVATIONAL_QUOTES is exported from constants.tsx, not types.ts
import { MOTIVATIONAL_QUOTES } from '../constants';
import { motion } from 'framer-motion';

interface ProfileProps {
  user: User;
  videos: VideoItem[];
}

const Profile: React.FC<ProfileProps> = ({ user, videos }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const quotes = [
      "Believe you can and you're halfway there.",
      "Your only limit is your mind.",
      "Success is not final, failure is not fatal.",
      "The secret of getting ahead is getting started.",
      "Stay focused, stay disciplined, stay hungry."
    ];
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-10 border border-blue-50"
        >
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center text-blue-700 text-5xl font-black shadow-2xl">
                {user.name ? user.name[0].toUpperCase() : 'U'}
              </div>
              <div className="text-center md:text-left text-white">
                <h2 className="text-4xl font-black mb-2 uppercase tracking-tight">Student Dashboard</h2>
                <p className="text-blue-100 text-lg">Welcome back, <span className="font-bold underline">{user.name}</span></p>
                <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="bg-blue-600/30 px-4 py-2 rounded-xl text-sm font-medium border border-blue-400/20">
                    {formatDate(currentTime)}
                  </div>
                  <div className="bg-blue-600/30 px-4 py-2 rounded-xl text-sm font-medium border border-blue-400/20">
                    {formatTime(currentTime)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="bg-blue-50 rounded-2xl p-6 mb-12 border border-blue-100">
              <h4 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-3">Daily Motivation</h4>
              <p className="text-2xl font-serif-heading text-blue-900 italic leading-relaxed">
                "{randomQuote}"
              </p>
            </div>

            <h3 className="text-2xl font-black text-blue-900 mb-8 uppercase tracking-tight">Recommended for You</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, idx) => (
                <motion.div 
                  key={video.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 group hover:shadow-lg transition-all"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                      alt={video.title} 
                    />
                    <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <a 
                        href={`https://youtube.com/watch?v=${video.youtubeId}`} 
                        target="_blank" 
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600"
                       >
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
                       </a>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-blue-900 line-clamp-1">{video.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">Recommended for your growth</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
