// src/AppRoutes.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

const AppRoute: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/product/:productId" element={<ProductPage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoute;
