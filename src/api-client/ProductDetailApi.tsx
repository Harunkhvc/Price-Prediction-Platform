// src/api/ProductDetailApi.ts
import axios from "axios";
import { ProductDetailResponse } from "../types/ProductDetailTypes";

const api = axios.create({
  baseURL: "https://localhost:7272/api/products",  // tüm ürün endpoint’leri burada
});

export const getProductDetail = async (
  id: number
): Promise<ProductDetailResponse> => {
  const { data } = await api.get<ProductDetailResponse>(`/${id}`);
  return data;
};
