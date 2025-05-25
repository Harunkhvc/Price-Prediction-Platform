// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/organisms/Header'
import Toolbar from '@mui/material/Toolbar'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <BrowserRouter>
      {/* Sabit header */}
      <Header />

      {/* Spacer: fixed AppBar altına içerik yerleşsin diye */}
      <Toolbar />

      {/* Sayfa içeriği */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* İleride ekleyeceğin diğer sayfalar */}
      </Routes>
    </BrowserRouter>
  )
}
