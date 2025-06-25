import axios from "axios";
import { CategoryProductResponse } from "../types/CategoryProductTypes";

const api = axios.create({
  baseURL: "https://localhost:7272/api",
});

export const getProductsByBanner = async (bannerName: string): Promise<CategoryProductResponse[]> => {
  const response = await api.get<CategoryProductResponse[]>(`/banner/${encodeURIComponent(bannerName)}`);
  return response.data;
};
