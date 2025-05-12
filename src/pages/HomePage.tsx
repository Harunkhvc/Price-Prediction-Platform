import React from 'react';
import HomeTemplate from '../components/templates/HomeTemplate';
import Header from '../components/organisms/Header';
import PopularProductsSection from '../components/organisms/PopularProductsSection';
import PriceDropSection from '../components/organisms/PriceDropSection';
import PopularStores from '../components/organisms/PopularStores';
import PopularBrands from '../components/organisms/PopularBrands';
import SpecialChoicesSection from '../components/organisms/SpecialChoicesSection';
import PriceComparisonSection from '../components/organisms/OtherMarketsSection';
import FilterSidebar from '../components/organisms/FilterSidebar'; // ✅ eklenen organizma

import { Product } from '../components/molecules/ProductCard';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Apple iPhone 13 256GB',
    imageUrl: '/images/iphone.jpg',
    cheapestStore: 'Pazarama',
    cheapestPrice: '46.549,05 TL',
    otherStore: 'Teknosa',
    otherPrice: '46.999,00 TL',
    offersCount: 12,
  },
  {
    id: '2',
    name: 'Apple iPhone 13 128GB',
    imageUrl: '/images/iphone.jpg',
    cheapestStore: 'PttAVM',
    cheapestPrice: '33.114,09 TL',
    otherStore: 'Teknosa',
    otherPrice: '33.599,00 TL',
    offersCount: 40,
  },
];

const HomePage: React.FC = () => {
  return (
    <HomeTemplate header={<Header />}>
      <PopularProductsSection products={mockProducts} />
      <PriceDropSection products={mockProducts} />
      <SpecialChoicesSection products={mockProducts} />
      <PopularStores />
      <PopularBrands />
      <FilterSidebar />
      <PriceComparisonSection products={mockProducts} />
    </HomeTemplate>
  );
};

export default HomePage;
