// src/components/templates/HomeTemplate.tsx
import React from 'react'

interface HomeTemplateProps {
  header: React.ReactNode
  children: React.ReactNode
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ header, children }) => (
  <div className="min-h-screen flex flex-col">
    <header>{header}</header>
    <main className="flex-1 container mx-auto px-4 py-8">
      {children}
    </main>
    <footer className="py-4 text-center text-sm text-gray-500">
      © 2025 YourCompany
    </footer>
  </div>
)

export default HomeTemplate
