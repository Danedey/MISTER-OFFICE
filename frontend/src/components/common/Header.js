// src/components/common/Header.js
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    
    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY
            
            // Si el scroll es menor a 100px, siempre mostrar el header
            if (currentScrollY < 100) {
                setIsVisible(true)
                return
            }
            
            // Si hacemos scroll hacia abajo, ocultar. Si hacia arriba, mostrar
            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(false)
            } else {
                // Scrolling up
                setIsVisible(true)
            }
            
            setLastScrollY(currentScrollY)
        }
        
        window.addEventListener('scroll', controlNavbar)
        
        // Cleanup
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [lastScrollY])
    
    return (
    <header className={`colorprimario shadow-md sticky top-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-12 gap-2">
          {/* Logo - abarca ambas filas */}
          <div className="col-span-2 row-span-4 flex items-center">
            <Link href="/" className="flex items-center h-full py-2">
              <img 
                src="/logo.png"
                alt='MisterOffice'
                className="h-30 md:h-30 w-auto object-contain"              
                />
            </Link>
          </div>
          
          {/* Primera fila - Barra de búsqueda e iconos */}
          <div className="col-span-10 flex items-center justify-between py-6">
            {/* Barra de búsqueda */}
            <div className="flex-1 max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-600"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
            
            {/* Iconos de usuario y carrito */}
            <div className="flex items-center space-x-4">
              <Link href="/login" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                <FiUser className="w-6 h-6" />
                <span className=" lg:inline">Iniciar Sesión</span>
              </Link>
              
              <Link href="/" className="relative text-gray-700 hover:text-gray-900">
                <FiShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
            </div>
          </div>
          
          {/* Segunda fila - Menú de navegación */}
          <div className="col-span-10 flex items-center">
            <nav className="w-full flex items-center space-x-4 md:space-x-6 lg:space-x-8 mx-40">
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
                Inicio
              </Link>
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
                Categorías
              </Link>
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
                Productos
              </Link>
              {/* <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
                Acerca de
              </Link> */}
            </nav>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Primera fila móvil - Logo y barra de búsqueda */}
          <div className="flex items-center py-2 gap-2">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img 
                src="/logo.png"
                alt='MisterOffice'
                className="h-12 w-auto object-contain"
              />
            </Link>
            
            {/* Barra de búsqueda móvil */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-1.5 pl-8 pr-3 text-sm text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-600"
                />
                <FiSearch className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
          </div>
          
          {/* Segunda fila móvil - Toggle button e iconos DISTRIBUIDOS */}
          <div className="flex items-center justify-between py-2 px-2">
            {/* Toggle button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
            
            {/* Icono de usuario */}
            <Link href="/login" className="text-gray-700 hover:text-gray-900">
              <FiUser className="w-6 h-6" />
            </Link>
            
            {/* Carrito */}
            <Link href="/" className="relative text-gray-700 hover:text-gray-900">
              <FiShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                3
              </span>
            </Link>
          </div>
        </div>
        
        {/* Mobile menu desplegable */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-gray-900">
              Inicio
            </Link>
            <Link href="/" className="block py-2 text-gray-700 hover:text-gray-900">
              Dashboard
            </Link>
            <Link href="/" className="block py-2 text-gray-700 hover:text-gray-900">
              Productos
            </Link>
            {/* <Link href="/" className="block py-2 text-gray-700 hover:text-gray-900">
              Acerca de
            </Link> */}
          </div>
        )}
      </div>
    </header>
  )
}