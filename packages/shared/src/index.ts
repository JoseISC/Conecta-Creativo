export type CreatorCategory =
  | 'artesania'
  | 'musica'
  | 'performance'
  | 'decoracion'
  | 'diseno'
  | 'gastronomia'
  | 'fotografia'
  | 'otro';

export interface Creator {
  id: string;
  name: string;
  email: string;
  category: CreatorCategory;
  bio: string;
  location: string;
  rating: number;
  verified: boolean;
  imageUrl?: string;
  createdAt: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string;
  available: boolean;
  creatorId: string;
  creator?: Creator;
  createdAt: string;
}

export interface Space {
  id: string;
  name: string;
  type: string;
  address: string;
  city: string;
  description: string;
  contactName?: string;
  contactEmail?: string;
}

export interface QrScanEvent {
  id: string;
  productId: string;
  location?: string;
  scannedAt: string;
}

export interface QrStats {
  productId: string;
  totalScans: number;
  recentScans: QrScanEvent[];
}
