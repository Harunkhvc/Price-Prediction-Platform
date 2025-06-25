// src/api-client/urunStockCampaignApi.ts
import axios from "axios";
import { UrunStockCampaignDto } from "../types/UrunStockCampaignTypes";

const api = axios.create({
  baseURL: "https://localhost:7272/api",
});

export const getUrunStockCampaign = async (): Promise<UrunStockCampaignDto[]> => {
  const response = await api.get<UrunStockCampaignDto[]>("/UrunStockCampaign");
  return response.data;
};
