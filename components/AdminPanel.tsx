
import React, { useState } from 'react';
import { View, VideoItem, GalleryItem, SiteConfig } from '../types';
import { ADMIN_CREDENTIALS } from '../constants';
import { motion } from 'framer-motion';

interface AdminPanelProps {
  videos: VideoItem[];
  setVideos: (videos: VideoItem[]) => void;
  gallery: GalleryItem[];
  setGallery: (gallery: GalleryItem[]) => void;
  siteConfig: SiteConfig;
  setSiteConfig: (config: SiteConfig) => void;
  setView: (view: View) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ videos, setVideos, gallery, setGallery, siteConfig, setSiteConfig, setView }) => {
  const [activeTab, setActiveTab] = useState<'videos' | 'gallery' | 'settings'>('settings');
  const [newVideo, setNewVideo] = useState({ title: '', youtubeId: '' });
  const [newGallery, setNewGallery] = useState({ imageUrl: '', caption: '' });
  const [tempConfig, setTempConfig] = useState<SiteConfig>({ ...siteConfig });

  const handleSaveConfig = () => {
    setSiteConfig(tempConfig);
    alert('Site configuration updated successfully!');
  };

  const addVideo = (e: React.FormEvent) => {
    e.preventDefault();
    const item: VideoItem = { id: Date.now().toString(), ...newVideo };
    setVideos([item, ...videos]);
    setNewVideo({ title: '', youtubeId: '' });
  };

  const deleteVideo = (id: string) => {
    setVideos(videos.filter(v => v.id !== id));
  };

  const addGallery = (e: React.FormEvent) => {
    e.preventDefault();
    const item: GalleryItem = { id: Date.now().toString(), ...newGallery };
    setGallery([item, ...gallery]);
    setNewGallery({ imageUrl: '', caption: '' });
  };

  const deleteGallery = (id: string) => {
    setGallery(gallery.filter(g => g.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="bg-blue-900 py-16 px-4 mb-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl font-black text-white uppercase tracking-tight">System Administration</h2>
            <p className="text-blue-300 mt-2 font-medium">Manage your content and platform settings</p>
          </div>
          <div className="flex bg-blue-800/50 p-1.5 rounded-2xl border border-blue-700/50 backdrop-blur-sm">
            <button 
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'settings' ? 'bg-white text-blue-900 shadow-xl' : 'text-blue-100 hover:text-white'}`}
            >
              SITE CONFIG
            </button>
            <button 
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'videos' ? 'bg-white text-blue-900 shadow-xl' : 'text-blue-100 hover:text-white'}`}
            >
              VIDEOS
            </button>
            <button 
              onClick={() => setActiveTab('gallery')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'gallery' ? 'bg-white text-blue-900 shadow-xl' : 'text-blue-100 hover:text-white'}`}
            >
              GALLERY
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {activeTab === 'settings' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-blue-50">
            <h3 className="text-2xl font-black text-blue-900 mb-8 uppercase tracking-tight border-b pb-6">General Site Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2">Web Logo Text</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3 bg-slate-50 border rounded-xl font-bold text-blue-900" 
                    value={tempConfig.logoText}
                    onChange={e => setTempConfig({...tempConfig, logoText: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2">Logo Image URL</label>
                  <input 
                    type="text" 
                    placeholder="Enter image URL (e.g. Imgur, YouTube logo link)"
                    className="w-full px-5 py-3 bg-slate-50 border rounded-xl font-bold text-blue-900" 
                    value={tempConfig.logoUrl || ''}
                    onChange={e => setTempConfig({...tempConfig, logoUrl: e.target.value})}
                  />
                  <p className="text-[10px] text-slate-400 mt-1">If provided, this image will replace the text icon.</p>
                </div>
                <div>
                  <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2">Subscriber Count</label>
                  <input 
                    type="number" 
                    className="w-full px-5 py-3 bg-slate-50 border rounded-xl font-bold text-blue-900" 
                    value={tempConfig.subscriberCount}
                    onChange={e => setTempConfig({...tempConfig, subscriberCount: parseInt(e.target.value)})}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2">YouTube Channel Link</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3 bg-slate-50 border rounded-xl font-bold text-blue-900" 
                    value={tempConfig.youtubeLink}
                    onChange={e => setTempConfig({...tempConfig, youtubeLink: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2">Contact Email</label>
                  <input 
                    type="email" 
                    className="w-full px-5 py-3 bg-slate-50 border rounded-xl font-bold text-blue-900" 
                    value={tempConfig.contactEmail}
                    onChange={e => setTempConfig({...tempConfig, contactEmail: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2">Contact Phone</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3 bg-slate-50 border rounded-xl font-bold text-blue-900" 
                    value={tempConfig.contactPhone}
                    onChange={e => setTempConfig({...tempConfig, contactPhone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2">About Us Text</label>
                  <textarea 
                    rows={4}
                    className="w-full px-5 py-3 bg-slate-50 border rounded-xl font-medium text-slate-700" 
                    value={tempConfig.aboutText}
                    onChange={e => setTempConfig({...tempConfig, aboutText: e.target.value})}
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-end">
              <button 
                onClick={handleSaveConfig}
                className="px-12 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all active:scale-95"
              >
                SAVE CHANGES
              </button>
            </div>
          </motion.div>
        )}

        {activeTab === 'videos' && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-blue-50">
                <h3 className="text-xl font-black text-blue-900 mb-6 uppercase tracking-tight">Add New Video</h3>
                <form onSubmit={addVideo} className="space-y-5">
                  <input 
                    required 
                    type="text" 
                    placeholder="Video Title" 
                    className="w-full px-5 py-4 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    value={newVideo.title}
                    onChange={e => setNewVideo({...newVideo, title: e.target.value})}
                  />
                  <input 
                    required 
                    type="text" 
                    placeholder="YouTube ID (e.g. dQw4w9WgXcQ)" 
                    className="w-full px-5 py-4 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    value={newVideo.youtubeId}
                    onChange={e => setNewVideo({...newVideo, youtubeId: e.target.value})}
                  />
                  <button className="w-full py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-all shadow-lg">PUBLISH CONTENT</button>
                </form>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {videos.map(video => (
                <div key={video.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between hover:border-blue-200 transition-colors">
                  <div className="flex items-center gap-6">
                    <img src={`https://img.youtube.com/vi/${video.youtubeId}/default.jpg`} className="w-24 rounded-xl shadow-md" alt="thumb" />
                    <div>
                      <h4 className="font-bold text-blue-900 text-lg">{video.title}</h4>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">ID: {video.youtubeId}</p>
                    </div>
                  </div>
                  <button onClick={() => deleteVideo(video.id)} className="w-10 h-10 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'gallery' && (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-blue-50">
                <h3 className="text-xl font-black text-blue-900 mb-6 uppercase tracking-tight">Add Gallery Item</h3>
                <form onSubmit={addGallery} className="space-y-5">
                  <input 
                    required 
                    type="text" 
                    placeholder="Image URL" 
                    className="w-full px-5 py-4 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    value={newGallery.imageUrl}
                    onChange={e => setNewGallery({...newGallery, imageUrl: e.target.value})}
                  />
                  <input 
                    required 
                    type="text" 
                    placeholder="Caption" 
                    className="w-full px-5 py-4 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    value={newGallery.caption}
                    onChange={e => setNewGallery({...newGallery, caption: e.target.value})}
                  />
                  <button className="w-full py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-all shadow-lg">UPLOAD IMAGE</button>
                </form>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
              {gallery.map(item => (
                <div key={item.id} className="relative group overflow-hidden rounded-[2rem] aspect-square shadow-lg">
                  <img src={item.imageUrl} className="w-full h-full object-cover" alt="gallery" />
                  <div className="absolute inset-0 bg-red-600/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all backdrop-blur-sm">
                    <button onClick={() => deleteGallery(item.id)} className="bg-white text-red-600 px-6 py-2.5 rounded-xl font-black shadow-xl">DELETE</button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
