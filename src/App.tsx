// src/App.tsx
import React from 'react'
import Header from './components/organisms/Header'
import Toolbar from '@mui/material/Toolbar'
import PopularBrands from './components/organisms/PopularBrands'
import PopularStores from './components/organisms/PopularStores';

export default function App() {
  return (
    <>
      <Header />
      {/* Toolbar burada spacer görevi görür */}
      <Toolbar />
      {/* Buraya page içeriğiniz gelecek */}
      
      <PopularBrands />
      
      <PopularStores />
    </>
  )
}
