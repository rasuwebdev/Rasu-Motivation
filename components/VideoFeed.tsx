
import React from 'react';
import { VideoItem } from '../types';

interface VideoFeedProps {
  videos: VideoItem[];
}

const VideoFeed: React.FC<VideoFeedProps> = ({ videos }) => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 text-center">FEATURED MOTIVATION</h2>
          <div className="w-20 h-2 bg-blue-600 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-50">
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-blue-50">
                <h3 className="text-xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors">{video.title}</h3>
                <p className="text-slate-500 text-sm mt-2">By Rasu Motivation • 2 weeks ago</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.youtube.com/@Rasu_Motivation/featured" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-blue-900 text-white rounded-full font-bold hover:bg-blue-800 transition-colors"
          >
            Visit YouTube Channel
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoFeed;
