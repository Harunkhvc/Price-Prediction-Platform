// src/api/SiteApi.ts
import axios from "axios";
import { SiteDto } from "../types/SiteTypes";

const api = axios.create({
  baseURL: "https://localhost:7272/api",
});

export const getAllSites = async (): Promise<SiteDto[]> => {
  const { data } = await api.get<SiteDto[]>(`/sites`);
  return data;
};
