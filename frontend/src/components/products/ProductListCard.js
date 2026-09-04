// components/products/ProductListCard.jsx
'use client'

import Image from 'next/image'
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa'
import { useState } from 'react'

const ProductListCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  // Función para renderizar estrellas
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-blue-500 w-4 h-4" />)
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-blue-500 w-4 h-4" />)
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-blue-500 w-4 h-4" />)
    }

    return stars
  }

  return (
    <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex gap-6">
        {/* Imagen del producto */}
        <div className="flex-shrink-0">
          <div className="w-42 h-42 bg-gray-50 rounded-lg overflow-hidden relative">
            {/* Botón de Favorito */}
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all z-10"
            >
              {isFavorite ? (
                <FaHeart className="text-red-500 w-4 h-4" />
              ) : (
                <FaRegHeart className="text-gray-600 w-4 h-4" />
              )}
            </button>
            
            <Image
              src={product.imagen}
              alt={product.nombre}
              width={450}
              height={450}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Información del producto */}
        <div className="flex-grow flex flex-col">
          {/* Título */}
          <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
            {product.nombre}
          </h3>

          {/* Vendedor */}
          <p className="text-sm text-gray-600 mb-3">
            Por <span className="text-blue-600">{product.vendedor}</span>
          </p>

          {/* Precios */}
          <div className="flex items-baseline gap-3 mb-3">
            {product.precioAnterior && (
              <span className="text-gray-500 line-through">
                {formatPrice(product.precioAnterior)}
              </span>
            )}
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(product.precio)}
            </span>
          </div>

          {/* Envío */}
          {product.envioGratis && (
            <p className="text-sm text-blue-600 font-medium mb-2">
              {product.textoEnvio || 'Envío gratis'}
            </p>
          )}

          {/* Espaciador flexible */}
          <div className="flex-grow"></div>

          {/* Botón de Agregar al Carrito */}
          <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <FaShoppingCart className="w-4 h-4" />
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductListCard