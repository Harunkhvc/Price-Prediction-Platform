// src/App.tsx
import { BrowserRouter } from 'react-router-dom';
import Header from './components/organisms/Header';
import Toolbar from '@mui/material/Toolbar';
import AppRoute from './AppRoute';

export default function App() {
  return (
    <BrowserRouter>
      {/* Sabit header */}
      <Header />

      {/* Spacer: fixed AppBar altına içerik yerleşsin diye */}
      <Toolbar />

      {/* Sayfa içeriği */}
      <AppRoute />
    </BrowserRouter>
  );
}
