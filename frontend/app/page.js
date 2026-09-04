// app/page.js
'use client';

import { useRouter } from 'next/navigation';
import SimpleCarousel from '@/components/common/SimpleCarousel';
import CategoriesCarousel from '@/components/common/CategoriesCarousel';
import ProductListSection from '@/components/products/ProductListSection'
import { FaCheckCircle, FaTruck, FaHeadset, FaShieldAlt } from 'react-icons/fa'

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Carousel - Ocupa todo el ancho */}
      <section className="w-full">
        <SimpleCarousel />
      </section>
      
      {/* Sección de bienvenida mejorada */}
      <section className="relative overflow-hidden">
        {/* Fondo con patrón */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-blue-50 opacity-60"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Encabezado principal */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Bienvenido a <span className="text-red-600">Mister</span><span className="text-red-500"></span> <span className="text-red-600">Office</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
              <p className="text-xl md:text-2xl font-semibold text-gray-700">
                Simplemente la Mejor!!!
              </p>
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tu tienda online de artículos de oficina, papelería y mucho más. 
              Encuentra todo lo que necesitas para tu negocio o estudios.
            </p>
          </div>

          {/* Características/Beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <FaTruck className="text-4xl text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Envío Rápido</h3>
              <p className="text-sm text-gray-600">Entrega en 24-48 horas en toda la región</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <FaCheckCircle className="text-4xl text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Calidad Garantizada</h3>
              <p className="text-sm text-gray-600">Productos de las mejores marcas</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <FaHeadset className="text-4xl text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Atención Personalizada</h3>
              <p className="text-sm text-gray-600">Estamos para ayudarte siempre</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <FaShieldAlt className="text-4xl text-yellow-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Compra Segura</h3>
              <p className="text-sm text-gray-600">Tus datos están protegidos</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <button 
              // onClick={() => router.push('#')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              Explorar Productos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Decoración ondulada inferior */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path
              fill="#f9fafb"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </section>
      
      {/* Sección de Categorías */}
      <CategoriesCarousel />
      
      {/* Productos recomendados */}
      <ProductListSection/>
    </main>
  )
}