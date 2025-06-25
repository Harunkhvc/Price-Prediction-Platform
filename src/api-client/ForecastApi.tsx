import axios from 'axios';

export interface ForecastResponse {
  history: number[];
  forecast: number[];
}

const ForecastApi = {
  getForecast: (urunId: number): Promise<ForecastResponse> => {
    return axios
      .get<ForecastResponse>(`/api/forecast/${urunId}`)
      .then(res => res.data);
  }
};

export default ForecastApi;
