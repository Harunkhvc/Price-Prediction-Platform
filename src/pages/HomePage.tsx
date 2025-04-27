// src/pages/HomePage.tsx
import React from 'react'
import HomeTemplate from '../components/templates/HomeTemplate'
import Header from '../components/organisms/Header'
import PopularProductsSection from '../components/organisms/PopularProductsSection'
import PriceDropSection from '../components/organisms/PriceDropSection'
import { Product } from '../components/molecules/ProductCard'

// 1) Mock veri dizisi:
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Apple iPhone 13 256GB',
    imageUrl: '/images/iphone.jpg',      // yerel / public/images altında dursun
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
  // … diğer ürünler
]

const HomePage: React.FC = () => {
  return (
    <HomeTemplate header={<Header />}>
      {/* 2) mockProducts’u bölümlere geçiriyoruz */}
      <PopularProductsSection products={mockProducts} />
      <PriceDropSection products={mockProducts} />
      {/* … sonraki 3 bölüm de aynı mockProducts veya ayrı mock verilerle */}
    </HomeTemplate>
  )
}

export default HomePage
