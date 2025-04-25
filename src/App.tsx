// src/App.tsx
import React from 'react'
import Header from './components/organisms/Header'
import Toolbar from '@mui/material/Toolbar'

export default function App() {
  return (
    <>
      <Header />
      {/* Toolbar burada spacer görevi görür */}
      <Toolbar />
      {/* Buraya page içeriğiniz gelecek */}
    </>
  )
}
