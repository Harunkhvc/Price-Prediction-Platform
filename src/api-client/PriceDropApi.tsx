import axios from 'axios';

export interface PriceDropItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  originalPrice: number;
}

const API_BASE_URL = '/api/products';

export const getPriceDrops = async (): Promise<PriceDropItem[]> => {
  const response = await axios.get(`${API_BASE_URL}/price-drop`);
  return response.data;
};
