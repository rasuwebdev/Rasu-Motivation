
import { VideoItem, GalleryItem, SiteConfig } from './types';

export const INITIAL_VIDEOS: VideoItem[] = [
  { id: '1', title: 'පොතක් අතට ගත්ත ගමන් ඔයාට නින්ද යනවනම් මෙන්න විසඳුම | Chemistry | Amila Dasanayake', youtubeId: 'lw70SFWb6tg' },
  { id: '2', title: '2025 O/L වීභාගයට තව මාසයයි. තාමත් වැඩ කරන්නෙ නැති ළමයි මේක බලන්න. #motivation #2026ol #2025ol', youtubeId: 'zJWkEOEf61U' },
  { id: '3', title: '"ඔයාගේ මැරුණු වීරයාට ආය පණ දෙන්නයි මේ කියන්නෙ" ❤️⚡  @AmilaDasanayake  FFF to AAA | Chemistry', youtubeId: 'w-i94OKHC2A' },
  { id: '4', title: 'පස්සෙ පසු තැවෙන්න තියන්න එපා  ✨️❤️⚡ @AnuradhaPerera   | FFF to AAA', youtubeId: 'euuDUN90Tz8' }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  { id: '1', imageUrl: 'https://share.google/dicHDGwOOvyyRWDqY', caption: '18000 Subscribers' },
  { id: '2', imageUrl: 'https://share.google/9zDJ4LCcUwqmuaG7U', caption: 'Annual Motivation Seminar' },
  { id: '3', imageUrl: 'https://yt3.ggpht.com/jxNtGpwbStBqiWdlhWa4AGS8XM_oDA_in58MahnSsUEqFYq69c-oTrcP2KN9oTgOP3_GRV5uMGoAPQ=s800-rw-nd-v1', caption: 'Excellence Awards' },
  { id: '4', imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', caption: 'Community Growth' }
];

export const INITIAL_SITE_CONFIG: SiteConfig = {
  subscriberCount: 18000,
  contactEmail: 'rasumotivation.contact@gmail.com',
  contactPhone: '0729745505',
  aboutText: 'Rasu Motivation was founded with a single purpose: to provide the highest quality motivational content in the local language, helping students overcome barriers and reach their academic and personal goals.',
  logoText: 'RASU MOTIVATION',
  youtubeLink: 'https://www.youtube.com/@Rasu_Motivation/featured',
  logoUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_mC_5vR8V7iG0z2v8q4_p9w-8F_K_X_G_W_P_G_w=s176-c-k-c0x00ffffff-no-rj'
};

export const ADMIN_CREDENTIALS = {
  user: 'Parami@0605',
  pass: '200365711525'
};

export const MOTIVATIONAL_QUOTES = [
  "Believe you can and you're halfway there.",
  "Your only limit is your mind.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Don't watch the clock; do what it does. Keep going.",
  "The secret of getting ahead is getting started."
];
