// src/types/ProductTypes.ts
export interface RandomProductsRequest {
  count?: number;
}

export interface ProductCardResponse {
  id: number;
  name: string;
  siteName: string;
  seller: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  productUrl: string;
   stok: string;          
  kampanya: string | null; 
}
