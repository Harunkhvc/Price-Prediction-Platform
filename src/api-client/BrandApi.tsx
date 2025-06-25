// src/api-client/BrandApi.ts

import axios from "axios";
import { BrandProductOverviewResponse } from "../types/BrandOverviewTypes";
import { IphoneProductResponse } from "../types/IphoneProductTypes";

// Axios instance
const api = axios.create({
  baseURL: "https://localhost:7272/api",
});

// ✅ Mevcut Brand bazlı ürünleri getirme
export const getProductsByBrand = async (
  brandName: string
): Promise<BrandProductOverviewResponse[]> => {
  const { data } = await api.get<BrandProductOverviewResponse[]>(
    `/products/by-brand/${encodeURIComponent(brandName)}`
  );
  return data;
};

// ✅ Yeni Iphone özel filtreli ürünleri getirme
export const getIphoneProducts = async (): Promise<IphoneProductResponse[]> => {
  const { data } = await api.get<IphoneProductResponse[]>(`/iphoneproducts/list`);
  return data;
};
