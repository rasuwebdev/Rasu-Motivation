
import React, { useState } from 'react';
import { View, User } from '../types';
// Fixed: ADMIN_CREDENTIALS is exported from constants.tsx, not types.ts
import { ADMIN_CREDENTIALS } from '../constants';
import { motion } from 'framer-motion';

interface AuthFormProps {
  type: 'login' | 'register';
  setView: (view: View) => void;
  onAuthSuccess: (user: User) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, setView, onAuthSuccess }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Logic for Auth and Admin detection
      setTimeout(() => {
        const isAdmin = formData.phone === ADMIN_CREDENTIALS.user && formData.password === ADMIN_CREDENTIALS.pass;
        
        const mockUser: User = { 
          name: isAdmin ? 'Admin' : (formData.name || 'Student'), 
          phone: formData.phone,
          isAdmin
        };
        
        onAuthSuccess(mockUser);
        localStorage.setItem('rm_user', JSON.stringify(mockUser));
        setLoading(false);
        setView('home');
      }, 1500);
      
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl border border-blue-100 p-10 md:p-12"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white text-3xl font-black shadow-lg">
            {type === 'login' ? 'L' : 'R'}
          </div>
          <h2 className="text-3xl font-black text-blue-900 uppercase tracking-tight">
            {type === 'login' ? 'Welcome Back' : 'Join the Elite'}
          </h2>
          <p className="text-slate-500 mt-3 font-medium">
            {type === 'login' ? 'Sign in to access your dashboard' : 'Your journey to success starts here'}
          </p>
        </div>

        {error && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-50 border border-red-100 text-red-600 px-5 py-4 rounded-2xl mb-8 text-sm font-bold">
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {type === 'register' && (
            <div>
              <label className="block text-[11px] font-black text-blue-900 mb-2 uppercase tracking-[0.2em] ml-1">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full px-6 py-4.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-400" 
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
          )}
          <div>
            <label className="block text-[11px] font-black text-blue-900 mb-2 uppercase tracking-[0.2em] ml-1">Identity (Phone/User)</label>
            <input 
              required
              type="text" 
              className="w-full px-6 py-4.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-400" 
              placeholder="07x xxx xxxx"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-[11px] font-black text-blue-900 mb-2 uppercase tracking-[0.2em] ml-1">Password</label>
            <input 
              required
              type="password" 
              className="w-full px-6 py-4.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-400" 
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>
          
          <button 
            disabled={loading}
            className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 active:scale-95 transition-all shadow-xl shadow-blue-200 flex items-center justify-center uppercase tracking-widest text-sm"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              type === 'login' ? 'AUTHENTICATE' : 'CREATE ACCOUNT'
            )}
          </button>
        </form>

        <div className="mt-10 pt-10 border-t border-slate-100 text-center">
          {type === 'login' ? (
            <p className="text-slate-500 font-medium">New student? <button onClick={() => setView('register')} className="text-blue-600 font-black hover:underline ml-1">Register</button></p>
          ) : (
            <p className="text-slate-500 font-medium">Have an account? <button onClick={() => setView('login')} className="text-blue-600 font-black hover:underline ml-1">Login</button></p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AuthForm;
