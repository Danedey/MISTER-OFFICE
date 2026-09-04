// src/components/common/SimpleCarousel.js
'use client'

import { useState, useEffect } from 'react'

export default function SimpleCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  
  const slides = [
    {
      id: 1,
      image: '/images/banner1.jpg',
      title: 'Ofertas Especiales',
      description: 'Descuentos increíbles'
    },
    {
      id: 2,
      image: '/images/banner3.png',
      title: 'Nuevos Productos',
      description: 'Lo último en oficina'
    },
    {
      id: 3,
      image: '/images/banner2.jpg',
      title: 'Envío Gratis',
      description: 'En todo Huatabampo'
    }
  ]

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <div 
      className="relative w-full h-[400px] md:h-[450px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <div 
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-fill relative">
            {/* Imagen */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay con texto - Siempre visible */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl drop-shadow-lg">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Indicadores tipo barras con esquinas redondeadas */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-12 bg-yellow-400' 
                : 'w-6 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
      
      {/* Botones de navegación minimalistas */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-all z-20 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-all z-20 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}