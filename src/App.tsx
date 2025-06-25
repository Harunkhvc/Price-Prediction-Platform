// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/organisms/Header';
import Toolbar from '@mui/material/Toolbar';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import BrandPage from './pages/BrandPage';
import SearchPage from './pages/SearchPage';
import ProductPage from './pages/ProductPage';
import BannerProductsPage from './pages/BannerProductsPage';
import PriceDropPage from './pages/PriceDropPage';
import CategoriesPage from './pages/CategoriesPage';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Toolbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store/:storeId" element={<StorePage />} />
        <Route path="/brand/:brandName" element={<BrandPage />} />
        <Route path="/search" element={<SearchPage />} />  
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/price-drops" element={<PriceDropPage />} />
<Route path="/categories/:categoryName" element={<CategoriesPage />} />
  <Route path="/banner/:bannerName" element={<BannerProductsPage />} />





      </Routes>
    </BrowserRouter>
  );
}
