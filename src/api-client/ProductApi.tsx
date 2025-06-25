import axios from "axios";
import { 
  RandomProductsRequest, 
  ProductCardResponse 
} from "../types/ProductTypes";
import { ProductDetailResponse } from "../types/ProductDetailTypes";
import { ColorPriceResponse } from "../types/ColorPriceTypes";

const api = axios.create({
  baseURL: "https://localhost:7272/api",
});

export const getRandomProducts = async (params: RandomProductsRequest): Promise<ProductCardResponse[]> => {
  const { data } = await api.get(`/products/random`, { params });
  return data;
};

export const getProductsBySite = async (siteId: number): Promise<ProductCardResponse[]> => {
  const { data } = await api.get(`/products/by-site/${siteId}`);
  return data;
};

export const getPopularProducts = async (count: number = 8): Promise<ProductCardResponse[]> => {
  const { data } = await api.get(`/products/popular`, { params: { count } });
  return data;
};

export const getFeaturedProducts = async (count: number = 8): Promise<ProductCardResponse[]> => {
  const { data } = await api.get(`/products/featured`, { params: { count } });
  return data;
};

export const getPriceDropProducts = async (count: number = 8): Promise<ProductCardResponse[]> => {
  const { data } = await api.get(`/products/price-drop`, { params: { count } });
  return data;
};

export const getProductDetail = async (productId: number): Promise<ProductDetailResponse> => {
  const { data } = await api.get(`/products/${productId}`);
  return data;
};

export const getColorVariations = async (productId: number): Promise<ColorPriceResponse[]> => {
  const { data } = await api.get(`/products/color-variations/${productId}`);
  return data;
};
