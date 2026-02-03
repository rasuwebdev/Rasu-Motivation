
import React, { useState, useEffect } from 'react';
import { View, User, VideoItem, GalleryItem, SiteConfig } from './types';
import { INITIAL_VIDEOS, INITIAL_GALLERY, INITIAL_SITE_CONFIG } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import QuoteSection from './components/QuoteSection';
import Odometer from './components/Odometer';
import VideoFeed from './components/VideoFeed';
import AuthForm from './components/AuthForm';
import AdminPanel from './components/AdminPanel';
import Profile from './components/Profile';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [user, setUser] = useState<User | null>(null);
  const [videos, setVideos] = useState<VideoItem[]>(INITIAL_VIDEOS);
  const [gallery, setGallery] = useState<GalleryItem[]>(INITIAL_GALLERY);
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(INITIAL_SITE_CONFIG);

  useEffect(() => {
    const savedUser = localStorage.getItem('rm_user');
    if (savedUser) setUser(JSON.parse(savedUser));
    
    const savedConfig = localStorage.getItem('rm_config');
    if (savedConfig) setSiteConfig(JSON.parse(savedConfig));
  }, []);

  useEffect(() => {
    localStorage.setItem('rm_config', JSON.stringify(siteConfig));
  }, [siteConfig]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rm_user');
    setView('home');
  };

  const pageVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 }
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return (
          <motion.div key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
            <QuoteSection />
            <Hero />
            <div className="bg-slate-50 py-24 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Odometer target={siteConfig.subscriberCount} label="Elite Subscribers" />
                <p className="mt-8 text-slate-500 font-bold uppercase tracking-[0.2em] text-sm">Join our growing ecosystem of excellence</p>
              </div>
            </div>
            <VideoFeed videos={videos} />
            <section className="bg-blue-700 py-32 px-4 text-center overflow-hidden relative">
               <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative z-10"
               >
                 <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter">READY TO TRANSCEND?</h2>
                 <p className="text-blue-100 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">Join the community where discipline meets ambition. Your transformation starts now.</p>
                 <button 
                  onClick={() => setView('register')}
                  className="px-14 py-5 bg-white text-blue-700 font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all active:scale-95 uppercase tracking-widest"
                 >
                   CLAIM YOUR FUTURE
                 </button>
               </motion.div>
               <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] -mr-48 -mt-48 opacity-50" />
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900 rounded-full blur-[120px] -ml-48 -mb-48 opacity-50" />
            </section>
          </motion.div>
        );
      case 'gallery':
        return (
          <motion.section key="gallery" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="py-24 px-4 min-h-[80vh] bg-slate-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-5xl font-black text-blue-900 mb-6 uppercase tracking-tight">LEGACY GALLERY</h2>
                <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-8" />
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">A visual journey through the triumphs of our elite community.</p>
              </div>
              <div className="masonry-grid gap-6">
                {gallery.map((item, idx) => (
                  <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (idx % 4) * 0.1 }}
                    className={`masonry-item ${idx % 3 === 0 ? 'large' : ''} group relative overflow-hidden rounded-[2.5rem] shadow-2xl bg-white border-4 border-white`}
                  >
                    <img src={item.imageUrl} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                      <span className="text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-2">Achievement</span>
                      <p className="text-white font-black text-xl leading-tight">{item.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        );
      case 'about':
        return (
          <motion.section key="about" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="py-24 px-4 min-h-[80vh] bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h2 className="text-6xl font-black text-blue-900 mb-8 uppercase tracking-tighter">OUR PHILOSOPHY</h2>
                <div className="w-32 h-3 bg-blue-600 rounded-full" />
              </div>
              <div className="prose prose-2xl text-slate-600 space-y-10 leading-relaxed font-light">
                <p className="text-2xl md:text-3xl text-slate-800 font-medium italic border-l-8 border-blue-600 pl-8">
                  "{siteConfig.aboutText}"
                </p>
                <p>
                  We believe that motivation is the spark, but discipline is the fuel. Our platform provides the ecosystem required for sustainable personal growth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
                   <motion.div whileHover={{ y: -5 }} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                      <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <h4 className="text-blue-900 font-black text-2xl mb-4 uppercase tracking-tight">Absolute Integrity</h4>
                      <p className="text-base text-slate-500 font-medium leading-relaxed">We deliver authentic wisdom and actionable strategies without the fluff.</p>
                   </motion.div>
                   <motion.div whileHover={{ y: -5 }} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                      <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <h4 className="text-blue-900 font-black text-2xl mb-4 uppercase tracking-tight">Peak Performance</h4>
                      <p className="text-base text-slate-500 font-medium leading-relaxed">Our content is engineered to trigger the mental state of excellence.</p>
                   </motion.div>
                </div>
              </div>
            </div>
          </motion.section>
        );
      case 'contact':
        return (
          <motion.section key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="py-24 px-4 bg-slate-50 min-h-[80vh]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h2 className="text-6xl font-black text-blue-900 mb-8 uppercase tracking-tighter">LET'S CONNECT</h2>
                <p className="text-2xl text-slate-500 mb-16 leading-relaxed font-light">Join the vanguard. Reach out for collaborations, inquiries, or mentorship requests.</p>
                
                <div className="space-y-12">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-blue-600 mr-8 shadow-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-black text-blue-900 text-xs uppercase tracking-[0.3em] mb-1">Direct Email</h4>
                      <p className="text-xl font-bold text-slate-700">{siteConfig.contactEmail}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-blue-600 mr-8 shadow-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-black text-blue-900 text-xs uppercase tracking-[0.3em] mb-1">Direct Line</h4>
                      <p className="text-xl font-bold text-slate-700">{siteConfig.contactPhone}</p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-12 rounded-[3rem] shadow-2xl border border-blue-50">
                <form className="space-y-8">
                  <div>
                    <label className="block text-[11px] font-black text-blue-900 mb-3 uppercase tracking-widest ml-1">Your Full Name</label>
                    <input type="text" className="w-full px-6 py-4.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-medium text-slate-800" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-blue-900 mb-3 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" className="w-full px-6 py-4.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-medium text-slate-800" placeholder="john@domain.com" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-blue-900 mb-3 uppercase tracking-widest ml-1">Your Inquiry</label>
                    <textarea rows={4} className="w-full px-6 py-4.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-medium text-slate-800" placeholder="How can we empower you?"></textarea>
                  </div>
                  <button className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 active:scale-95 transition-all shadow-xl shadow-blue-200 uppercase tracking-widest text-sm">
                    DISPATCH MESSAGE
                  </button>
                </form>
              </motion.div>
            </div>
          </motion.section>
        );
      case 'login':
        return <AuthForm type="login" setView={setView} onAuthSuccess={setUser} />;
      case 'register':
        return <AuthForm type="register" setView={setView} onAuthSuccess={setUser} />;
      case 'profile':
        return user ? <Profile user={user} videos={videos} /> : null;
      case 'admin':
        return (
          <AdminPanel 
            videos={videos} 
            setVideos={setVideos} 
            gallery={gallery} 
            setGallery={setGallery} 
            siteConfig={siteConfig}
            setSiteConfig={setSiteConfig}
            setView={setView} 
          />
        );
      default:
        return <div>404 - View Not Found</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Navbar currentView={view} setView={setView} user={user} logout={logout} siteConfig={siteConfig} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderView()}
        </AnimatePresence>
      </main>
      <Footer siteConfig={siteConfig} />
      
      <div className="fixed bottom-4 right-4 opacity-5 hover:opacity-100 transition-opacity z-[100]">
        <button onClick={() => setView('admin')} className="p-2 text-[10px] text-slate-400 uppercase tracking-[0.4em] font-black">SysAdmin</button>
      </div>
    </div>
  );
};

export default App;
