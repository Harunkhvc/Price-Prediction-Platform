// request için tipler
export interface BrandProductsRequest {
  brandName: string;
}

// response için tipler (ortak olduğu için ProductTypes’tan da import edebilirsiniz,
// ama burada örnek olarak yeniden tanımlayabilirsiniz)
export interface ProductCardResponse {
  id: number;
  name: string;
  siteName: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
}
