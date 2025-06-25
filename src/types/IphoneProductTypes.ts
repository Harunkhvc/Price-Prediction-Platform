export interface IphoneProductResponse {
  id: number;
  name: string;
  imageUrl: string;
  offers: IphoneOffer[];
}

export interface IphoneOffer {
  siteName: string;
  seller: string;
  price: number;
  productUrl: string;
}
