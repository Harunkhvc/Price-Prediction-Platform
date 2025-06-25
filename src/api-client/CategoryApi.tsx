import axios from "axios";
import { CategoryProductResponse } from "../types/CategoryProductTypes";

const api = axios.create({
  baseURL: "https://localhost:7272/api",
});

export const getAndroidProducts = async (): Promise<CategoryProductResponse[]> => {
  const { data } = await api.get("/androidproducts/list");
  return data;
};

export const getMacosProducts = async (): Promise<CategoryProductResponse[]> => {
  const { data } = await api.get("/macosproducts/list");
  return data;
};
export const getWindowsProducts = async (): Promise<CategoryProductResponse[]> => {
  const { data } = await api.get("/windowsproducts/list");
  return data;
};
export const getTabletProducts = async (): Promise<CategoryProductResponse[]> => {
  const { data } = await api.get("/tabletproducts/list");
  return data;
};