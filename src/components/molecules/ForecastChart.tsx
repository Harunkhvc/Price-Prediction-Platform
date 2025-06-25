import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import ForecastApi from '../../api-client/ForecastApi';

interface ChartPoint {
  day: number;
  actual?: number;
  forecast?: number;
}

interface Props {
  urunId: number;
}

const ForecastChart: React.FC<Props> = ({ urunId }) => {
  const [data, setData] = useState<ChartPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    ForecastApi.getForecast(urunId)
      .then(({ history, forecast }) => {
        const pts: ChartPoint[] = [
          ...history.map((h, i) => ({ day: i + 1, actual: h })),
          ...forecast.map((f, i) => ({ day: history.length + i + 1, forecast: f }))
        ];
        setData(pts);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [urunId]);

  if (loading) return <div style={{ textAlign: 'center', padding: '2rem' }}>Yükleniyor…</div>;
  if (error) return <div style={{ textAlign: 'center', color: '#b00020', padding: '2rem' }}>Hata: {error}</div>;

  return (
    <div
      style={{
        width: '100%',
        height: 400,
        padding: '16px',
        backgroundColor: '#fafafa',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 12 }}
            axisLine={{ stroke: '#8884d8' }}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            axisLine={{ stroke: '#8884d8' }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
            itemStyle={{ fontSize: '0.9rem' }}
          />
          <Legend wrapperStyle={{ paddingBottom: '8px' }} />
          <Line
            type="monotone"
            dataKey="actual"
            name="Gerçek"
            stroke="#3f51b5"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="forecast"
            name="Tahmin"
            stroke="#ff9800"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastChart;
