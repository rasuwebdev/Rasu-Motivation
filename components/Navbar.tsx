
import React from 'react';
import { View, User, SiteConfig } from '../types';
import { motion } from 'framer-motion';

interface NavbarProps {
  currentView: View;
  setView: (view: View) => void;
  user: User | null;
  logout: () => void;
  siteConfig: SiteConfig;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, user, logout, siteConfig }) => {
  const navItems: { label: string; view: View }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Gallery', view: 'gallery' },
    { label: 'About Us', view: 'about' },
    { label: 'Contact', view: 'contact' },
  ];

  const logoParts = siteConfig.logoText.split(' ');
  const firstPart = logoParts[0];
  const restPart = logoParts.slice(1).join(' ');

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer group"
            onClick={() => setView('home')}
          >
            {siteConfig.logoUrl ? (
              <div className="w-12 h-12 rounded-xl overflow-hidden mr-3 shadow-md border-2 border-blue-50 group-hover:border-blue-200 transition-all">
                <img src={siteConfig.logoUrl} alt="Logo" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3 group-hover:bg-blue-700 transition-colors">
                {firstPart ? firstPart[0] : 'R'}
              </div>
            )}
            <span className="text-2xl font-black text-blue-900 tracking-tight uppercase">
              {firstPart} <span className="text-blue-600">{restPart}</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <motion.button
                key={item.view}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setView(item.view)}
                className={`text-sm font-semibold transition-all duration-200 hover:text-blue-600 relative py-2 ${
                  currentView === item.view ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {item.label}
                {currentView === item.view && (
                  <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </motion.button>
            ))}
            
            {user ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center space-x-6"
              >
                <button 
                  onClick={() => setView(user.isAdmin ? 'admin' : 'profile')}
                  className="group flex items-center space-x-3 bg-blue-50 hover:bg-blue-100 p-1 pr-4 rounded-full transition-all border border-blue-200"
                >
                  <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:bg-blue-700">
                    {user.isAdmin ? 'A' : (user.name ? user.name[0].toUpperCase() : 'U')}
                  </div>
                  <span className="text-sm font-bold text-blue-900">
                    {user.isAdmin ? 'Admin' : user.name}
                  </span>
                </button>
                <button
                  onClick={logout}
                  className="text-sm font-bold text-red-500 hover:text-red-700 transition-colors uppercase tracking-wider"
                >
                  Logout
                </button>
              </motion.div>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setView('login')}
                  className="px-6 py-2.5 text-sm font-bold text-blue-600 border-2 border-blue-100 rounded-full hover:bg-blue-50 transition-all"
                >
                  Login
                </button>
                <button
                  onClick={() => setView('register')}
                  className="px-6 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
                >
                  Register
                </button>
              </div>
            )}
          </div>

          <div className="md:hidden text-blue-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
