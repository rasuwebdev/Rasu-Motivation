
import React from 'react';
import { SiteConfig } from '../types';

interface FooterProps {
  siteConfig: SiteConfig;
}

const Footer: React.FC<FooterProps> = ({ siteConfig }) => {
  const logoParts = siteConfig.logoText.split(' ');
  const firstPart = logoParts[0];
  const restPart = logoParts.slice(1).join(' ');

  return (
    <footer className="bg-blue-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center mb-6">
            {siteConfig.logoUrl ? (
              <div className="w-12 h-12 rounded-xl overflow-hidden mr-3 shadow-lg border border-white/10">
                <img src={siteConfig.logoUrl} alt="Logo" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
                {firstPart ? firstPart[0] : 'R'}
              </div>
            )}
            <span className="text-2xl font-black tracking-tight uppercase">
              {firstPart} <span className="text-blue-400">{restPart}</span>
            </span>
          </div>
          <p className="text-blue-200 mb-8 max-w-md leading-relaxed">
            The leading motivational platform dedicated to empowering students and individuals to achieve their greatest potential.
          </p>
          <div className="flex space-x-4">
            {['youtube', 'facebook', 'instagram', 'twitter'].map((social) => (
              <a 
                key={social} 
                href={social === 'youtube' ? siteConfig.youtubeLink : '#'} 
                className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                target={social === 'youtube' ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                 <span className="sr-only">{social}</span>
                 <div className="w-4 h-4 bg-white/30 rounded-full" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-blue-400 uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="space-y-4 text-blue-200 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Home Feed</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Legacy Gallery</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Our Philosophy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Connect</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-blue-400 uppercase tracking-widest text-xs">Direct Contact</h4>
          <ul className="space-y-4 text-blue-200 font-medium">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {siteConfig.contactEmail}
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.contactPhone}
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-blue-900 text-center text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">
        &copy; {new Date().getFullYear()} {siteConfig.logoText}. EMPOWERING THE VANGUARD.
      </div>
    </footer>
  );
};

export default Footer;
