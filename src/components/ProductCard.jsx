import { useState } from 'react'
import { useCart } from '../context/CartContext'
import ProductModal from './ProductModal'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [showDetail, setShowDetail] = useState(false)

  return (
    <>
      <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">

        <div className="h-40 bg-orange-50 flex items-center justify-center">
          <img
            src={`/images/${product.image}`}
            alt={product.name}
            className="w-28 h-28 object-contain"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/150"
            }}
          />
        </div>

        <div className="p-4 flex flex-col flex-1">

          <span className="text-xs text-brand-500 font-semibold">
            {product.category}
          </span>

          <h3 className="font-bold text-gray-900 mt-1">
            {product.name}
          </h3>

          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
            {product.description}
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Stok : {product.stock}
          </p>

          <div className="mt-auto">

            <div className="text-xl font-black mt-3">
              Rp {Number(product.price).toLocaleString("id-ID")}
            </div>

            <div className="flex gap-2 mt-4">

              <button
                onClick={() => setShowDetail(true)}
                className="flex-1 border rounded-xl py-2"
              >
                Detail
              </button>

              <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-brand-500 text-white rounded-xl py-2"
              >
                + Keranjang
              </button>

            </div>

          </div>

        </div>

      </div>

      {showDetail && (
        <ProductModal
          product={product}
          onClose={() => setShowDetail(false)}
        />
      )}
    </>
  )
}