// components/products/ProductListSection.jsx
'use client'

import ProductListCard from './ProductListCard'

const ProductListSection = () => {
  // Datos de ejemplo con el estilo de la imagen
  const productos = [
    {
      id: 1,
      nombre: "Cuaderno Norma Color 100 hojas DOBLE RAYA",
      vendedor: "MisterOffice",
      precio: 129,
    //   precioAnterior: 764,
    //   descuento: 25,
      imagen: "/images/banner1.jpg",
      rating: 4.7,
      reviews: 403,
      envioGratis: true,
      textoEnvio: "Llega gratis mañana sábado",
    },
    {
      id: 2,
      nombre: "Cuaderno Scribe 100 hojas CUADRICULADO SERIE 3",
      vendedor: "MisterOffice",
      precio: 129,
    //   precioAnterior: 155,
    //   descuento: 8,
      imagen: "/images/cuadernos.png",
      rating: 4.6,
      reviews: 26,
      envioGratis: true,
      textoEnvio: "Envío gratis",
    },
    {
      id: 3,
      nombre: "Silla Ergonómica GIANNELLI ",
      vendedor: "MisterOffice",
      precio: 3285,
      precioAnterior: 3500,
      descuento: 19,
      imagen: "/images/oferta2.png",
      rating: 4.5,
      reviews: 89,
      envioGratis: true,
      textoEnvio: "Llega gratis el lunes",
    }
  ]

  return (
    <section className="Productos py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título de Sección */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-3 px-4">
            Productos Recomendados
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-4 max-w-2xl mx-auto">
            Basado en tus búsquedas recientes
          </p>
        </div>

        {/* Lista de Productos */}
        <div className="space-y-1 max-w-3xl mx-auto">
          {productos.map((product) => (
            <ProductListCard key={product.id} product={product} />
          ))}
        </div>

        {/* Botón Ver Más */}
        <div className="text-center mt-8">
          <button className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
            Ver más productos recomendados →
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductListSection