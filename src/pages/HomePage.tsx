// src/pages/HomePage.tsx
import React from 'react';
import HomeTemplate from '../components/templates/HomeTemplate';
import Header from '../components/organisms/Header';
import PopularProductsSection from '../components/organisms/PopularProductsSection';
import PriceDropSection from '../components/organisms/PriceDropSection';
import SpecialChoicesSection from '../components/organisms/SpecialChoicesSection';
import PopularStores from '../components/organisms/PopularStores';
import PopularBrands from '../components/organisms/PopularBrands';
import FilterSidebar from '../components/organisms/FilterSidebar';

import { Product } from '../components/molecules/ProductCard';

const mockProducts: Product[] = [
  { id: '1', name: 'Apple iPhone 13 256GB', imageUrl: '/images/iphone-yeni.jpeg', cheapestStore: 'Pazarama', cheapestPrice: '46.549,05 TL', otherStore: 'Teknosa', otherPrice: '46.999,00 TL', offersCount: 12 },
  { id: '2', name: 'Apple iPhone 13 256GB', imageUrl: '/images/iphone-yeni.jpeg', cheapestStore: 'Pazarama', cheapestPrice: '46.549,05 TL', otherStore: 'Teknosa', otherPrice: '46.999,00 TL', offersCount: 12 },
  { id: '3', name: 'Apple iPhone 13 256GB', imageUrl: '/images/iphone-yeni.jpeg', cheapestStore: 'Pazarama', cheapestPrice: '46.549,05 TL', otherStore: 'Teknosa', otherPrice: '46.999,00 TL', offersCount: 12 },
  { id: '4', name: 'Apple iPhone 13 256GB', imageUrl: '/images/iphone-yeni.jpeg', cheapestStore: 'Pazarama', cheapestPrice: '46.549,05 TL', otherStore: 'Teknosa', otherPrice: '46.999,00 TL', offersCount: 12 },
  { id: '5', name: 'Apple iPhone 13 256GB', imageUrl: '/images/iphone-yeni.jpeg', cheapestStore: 'Pazarama', cheapestPrice: '46.549,05 TL', otherStore: 'Teknosa', otherPrice: '46.999,00 TL', offersCount: 12 },
  { id: '6', name: 'Apple iPhone 13 256GB', imageUrl: '/images/indir.jpeg', cheapestStore: 'Pazarama', cheapestPrice: '46.549,05 TL', otherStore: 'Teknosa', otherPrice: '46.999,00 TL', offersCount: 12 },
  { id: '7', name: 'Apple iPhone 13 256GB', imageUrl: '/images/indir.jpeg', cheapestStore: 'Pazarama', cheapestPrice: '46.549,05 TL', otherStore: 'Teknosa', otherPrice: '46.999,00 TL', offersCount: 12 },
  { id: '8', name: 'Apple iPhone 13 256GB', imageUrl: '/images/indir.jpeg', cheapestStore: 'Pazarama', cheapestPrice: '46.549,05 TL', otherStore: 'Teknosa', otherPrice: '46.999,00 TL', offersCount: 12 },
  { id: '9', name: 'Apple iPhone 13 256GB', imageUrl: '/images/indir.jpeg', cheapestStore: 'Pazarama', cheapestPrice: '46.549,05 TL', otherStore: 'Teknosa', otherPrice: '46.999,00 TL', offersCount: 12 },
  { id: '10', name: 'Apple iPhone 13 256GB', imageUrl: '/images/indir.jpeg', cheapestStore: 'Pazarama', cheapestPrice: '46.549,05 TL', otherStore: 'Teknosa', otherPrice: '46.999,00 TL', offersCount: 12 },
];

const HomePage: React.FC = () => (
  <HomeTemplate header={<Header />}>
    <PopularProductsSection products={mockProducts} />
    <PriceDropSection products={mockProducts} />
    <SpecialChoicesSection products={mockProducts} />
    <PopularStores />
    <PopularBrands />
    <FilterSidebar />
  </HomeTemplate>
);

export default HomePage;
