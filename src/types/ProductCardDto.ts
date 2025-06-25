export interface ProductCardDto {
  id: number;
  name: string;
  siteName: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  seller: string;
  productUrl: string;
}
