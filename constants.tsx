
import { VideoItem, GalleryItem, SiteConfig } from './types';

export const INITIAL_VIDEOS: VideoItem[] = [
  { id: '1', title: 'Start Your Journey Today', youtubeId: 'dQw4w9WgXcQ' },
  { id: '2', title: 'The Power of Discipline', youtubeId: 'tgbNymZ7vqY' },
  { id: '3', title: 'Why You Should Never Give Up', youtubeId: '7X8mCDy7vH0' },
  { id: '4', title: 'Mindset for Success', youtubeId: '9bZkp7q19f0' }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  { id: '1', imageUrl: 'https://images.unsplash.com/photo-1523240715630-991f2e81230c?auto=format&fit=crop&q=80&w=800', caption: 'Student Achievement 2023' },
  { id: '2', imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', caption: 'Annual Motivation Seminar' },
  { id: '3', imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', caption: 'Excellence Awards' },
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
