// src/types/BrandOverviewTypes.ts
export interface OfferOverviewResponse {
  vendor: string;
  logoUrl: string;    // Dönüşte logoUrl alanı varsa, yoksa boş geliyor
  price: string;      // Zaten “8.900 TL” gibi biçimlendirilmiş
  productUrl: string;
}

export interface BrandProductOverviewResponse {
  id: number;
  name: string;
  imageUrl: string;
  topOffers: OfferOverviewResponse[];
  offersCount: number;
}
