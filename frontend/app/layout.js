// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MisterOffice - Papelería',
  description: 'Tu tienda online de artículos de oficina - Simplemente la Mejor!!!',
  icons: {
    icon:'/logo.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}