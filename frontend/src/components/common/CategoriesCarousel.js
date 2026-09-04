// components/CategoriesCarousel.jsx
'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { 
  FaLaptop,         // Computación
  FaPrint,          // Impresoras
  FaPencilAlt,      // Papelería
  FaBroom,          // Limpieza
  FaTools,          // Ferretería
  FaGift,           // Regalos
  FaGraduationCap,  // Escolares
  FaBuilding,       // Oficina
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa'

const categories = [
  {
    id: 1,
    name: 'Papelería',
    icon: FaPencilAlt,
    color: 'bg-pink-500',
    itemCount: 156,
    image: '/images/papeleria.png'
  },
  {
    id: 2,
    name: 'Limpieza',
    icon: FaBroom,
    color: 'bg-green-500',
    itemCount: 89,
    image: '/images/limpieza.png'
  },
  {
    id: 3,
    name: 'Ferretería',
    icon: FaTools,
    color: 'bg-gray-500',
    itemCount: 45,
    image: '/images/ferreteria.png'
  },
  {
    id: 4,
    name: 'Computación',
    icon: FaLaptop,
    color: 'bg-blue-500',
    itemCount: 124,
    image: '/images/computacion.png'
  },
  {
    id: 5,
    name: 'Impresoras',
    icon: FaPrint,
    color: 'bg-purple-500',
    itemCount: 25,
    image: '/images/impresora.png'
  },
  {
    id: 6,
    name: 'Regalos',
    icon: FaGift,
    color: 'bg-red-500',
    itemCount: 78,
    image: '/images/regalos.png'
  },
  {
    id: 7,
    name: 'Escolares',
    icon: FaGraduationCap,
    color: 'bg-yellow-500',
    itemCount: 93,
    image: '/images/escolares.png'
  },
  {
    id: 8,
    name: 'Oficina',
    icon: FaBuilding,
    color: 'bg-indigo-500',
    itemCount: 63,
    image: '/images/oficina.png'
  }
]

export default function CategoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
        const maxScroll = scrollWidth - clientWidth
        
        if (scrollLeft >= maxScroll - 10) {
          // Si llegamos al final, volver al inicio
          carouselRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
          })
        } else {
          // Avanzar al siguiente
          scrollToDirection('right')
        }
      }
    }, 1500) // Cambia cada 1.5 segundos

    return () => clearInterval(interval)
  }, [isPaused])

  useEffect(() => {
    checkScroll()
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', checkScroll)
      return () => carousel.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const scrollToDirection = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320 // ancho de una card + gap
      const newScrollPosition = direction === 'left' 
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount
      
      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section 
      className="py-8 sm:py-12 px-4 bg-gray-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Título y Subtítulo Centrados y Responsive */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-3 px-4">
            Categorías Populares
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-4 max-w-2xl mx-auto">
            Explora nuestras categorías más buscadas
          </p>
        </div>

        <div className="relative">
          {/* Botón Izquierdo */}
          <button
            onClick={() => scrollToDirection('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 transition-all ${
              canScrollLeft 
                ? 'opacity-100 hover:scale-110' 
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <FaChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Botón Derecho */}
          <button
            onClick={() => scrollToDirection('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 transition-all ${
              canScrollRight 
                ? 'opacity-100 hover:scale-110' 
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <FaChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={category.id}
                  className="flex-none w-72 group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-600">
                    {/* Versión con imagen */}
                    {category.image ? (
                      <div className="h-40 relative overflow-hidden">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <Icon className="absolute right-4 bottom-4 w-8 h-8 text-white" />
                      </div>
                    ) : (
                      /* Versión con color de fondo */
                      <div className={`${category.color} h-40 relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black opacity-10"></div>
                        <Icon className="absolute right-4 bottom-4 w-24 h-24 text-white opacity-20" />
                        <div className="relative z-10 h-full flex items-center justify-center">
                          <Icon className="w-16 h-16 text-white" />
                        </div>
                      </div>
                    )}

                    {/* Contenido */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {category.itemCount} productos disponibles
                      </p>
                      <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center gap-2 group">
                        Ver categoría
                        <FaChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}