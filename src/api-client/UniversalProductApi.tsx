import axios from "axios";

export type ProductListType = "popular" | "price-drop" | "featured";

export interface UniversalProductListItem {
  id: number;
  name: string;
  imageUrl: string;
  vendor: string;
  price: string;
  offersCount: number;
  productUrl: string;
}

export async function fetchUniversalProducts(listType: ProductListType, count: number = 10): Promise<UniversalProductListItem[]> {
  const response = await axios.post("/api/UniversalProducts/list", {
    listType,
    count
  });
  return response.data;
}
