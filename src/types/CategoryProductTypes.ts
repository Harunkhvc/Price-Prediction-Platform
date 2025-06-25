export interface CategoryOfferResponse {
  siteName: string;
  seller: string;
  price: number;
  productUrl: string;
}

export interface CategoryProductResponse {
  id: number;
  name: string;
  imageUrl: string;
  offers: CategoryOfferResponse[];
}
