import { useCart } from '../context/CartContext'

export default function ProductModal({ product, onClose }) {
  const { addToCart } = useCart()

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="font-black">Detail Produk</h2>

          <button onClick={onClose}>✕</button>
        </div>

        <div className="p-5">

          <div className="flex gap-5">

            <div className="w-40 h-40 flex items-center justify-center bg-orange-50 rounded-xl">
              <img
                src={`/images/${product.image}`}
                alt={product.name}
                className="w-32 h-32 object-contain"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150"
                }}
              />
            </div>

            <div className="flex-1">

              <p className="text-sm text-brand-500">
                {product.category}
              </p>

              <h2 className="font-black text-xl">
                {product.name}
              </h2>

              <p className="text-gray-500 mt-3">
                {product.description}
              </p>

              <p className="mt-3">
                <b>Stok :</b> {product.stock}
              </p>

              <h3 className="text-2xl font-black mt-4">
                Rp {Number(product.price).toLocaleString("id-ID")}
              </h3>

            </div>

          </div>

          <div className="flex gap-3 mt-6">

            <button
              onClick={() => {
                addToCart(product)
                onClose()
              }}
              className="flex-1 bg-brand-500 text-white rounded-xl py-3"
            >
              + Keranjang
            </button>

            <button
              onClick={() => {
                addToCart(product)
                onClose()
              }}
              className="flex-1 bg-black text-white rounded-xl py-3"
            >
              Beli
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}