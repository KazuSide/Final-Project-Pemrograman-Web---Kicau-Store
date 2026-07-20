import { useState, useMemo, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

const CATEGORIES = ['Pakan', 'Sangkar', 'Vitamin', 'Aksesoris', 'Perawatan', 'Mainan']

export default function Products({ initialCategory = '', searchQuery = '' }) {
  const [category, setCategory] = useState(initialCategory)
  const [sort, setSort] = useState('')
  const [products, setProducts] = useState([])

  // Ambil data dari Backend NestJS
  useEffect(() => {
    axios
      .get('http://localhost:3000/products')
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.error('Gagal mengambil data produk:', error)
      })
  }, [])

  const filtered = useMemo(() => {
    let result = [...products]

    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (category) {
      result = result.filter((p) => p.category === category)
    }

    if (sort === 'price-asc') {
      result.sort((a, b) => Number(a.price) - Number(b.price))
    }

    if (sort === 'price-desc') {
      result.sort((a, b) => Number(b.price) - Number(a.price))
    }

    if (sort === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name))
    }

    // Backend belum punya rating
    if (sort === 'rating') {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    }

    return result
  }, [products, searchQuery, category, sort])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-black text-gray-900">
            Semua Produk
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            {filtered.length} produk ditemukan
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-xl text-sm bg-white"
          >
            <option value="">Urutkan</option>
            <option value="price-asc">Harga Terendah</option>
            <option value="price-desc">Harga Tertinggi</option>
            <option value="name">Nama A-Z</option>
            <option value="rating">Rating Tertinggi</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-xl text-sm bg-white"
          >
            <option value="">Semua Kategori</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setCategory('')}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
            category === ''
              ? 'bg-brand-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Semua
        </button>

        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
              category === c
                ? 'bg-brand-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-lg font-bold text-gray-700">
            Produk tidak ditemukan
          </h3>
          <p className="text-gray-400 text-sm">
            Coba kata kunci atau kategori lain
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}