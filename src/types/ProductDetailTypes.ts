export interface ColorOption {
  color: string;
  price: string;
  url: string;
}

export interface Offer {
  vendor: string;
  logoUrl: string;
  price: string;
  productUrl: string;
  tagline?: string;
  rating?: string;
}

export interface PriceHistory {
  date: string;
  price: string;
}

export interface ProductVariation {
  id: number;
  color: string;
  capacity: string;
  price: string;
}

export interface ProductDetailResponse {
  id: number;
  name: string;
  imageUrl: string;
  capacities: string[];
  colorOptions: ColorOption[];
  cheapestOffer: Offer;
  allOffers: Offer[];
  priceHistory: PriceHistory[];
  top3Offers: Offer[];
  offersCount: number;
  variations: ProductVariation[]; // ✅ varyasyon eklendi
}
