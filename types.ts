
export interface User {
  name: string;
  phone: string;
  isAdmin?: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string;
}

export interface SiteConfig {
  subscriberCount: number;
  contactEmail: string;
  contactPhone: string;
  aboutText: string;
  logoText: string;
  youtubeLink: string;
  logoUrl?: string;
}

export type View = 'home' | 'gallery' | 'contact' | 'about' | 'login' | 'register' | 'admin' | 'profile';

export interface AppState {
  view: View;
  user: User | null;
  videos: VideoItem[];
  gallery: GalleryItem[];
  siteConfig: SiteConfig;
}
