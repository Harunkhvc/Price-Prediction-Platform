import axios from "axios";
import { ProductCardResponse } from "../types/ProductTypes";

const api = axios.create({
  baseURL: "https://localhost:7272/api",
});

export const searchProducts = async (query: string): Promise<ProductCardResponse[]> => {
  if (!query.trim()) return [];
  const { data } = await api.get<ProductCardResponse[]>(
    `/products/search`,
    { params: { query } }
  );
  return data;
};
