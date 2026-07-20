import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

const CATEGORIES = [
  { name: 'Pakan',      emoji: '🌾' },
  { name: 'Sangkar',    emoji: '🏠' },
  { name: 'Vitamin',    emoji: '💊' },
  { name: 'Aksesoris',  emoji: '🔧' },
  { name: 'Perawatan',  emoji: '✂️' },
  { name: 'Mainan',     emoji: '🎭' },
]

export default function Home({ setPage, filterCategory }) {
  const [showPromo, setShowPromo] = useState(false)
  const featured = products.slice(0, 8)

  return (
    <div className="fade-in">
      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-500 via-brand-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              🐦 #1 Toko Burung Online
            </span>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
              Lengkapi Kebutuhan<br/>
              <span className="text-yellow-300">Burung Kesayanganmu</span>
            </h1>
            <p className="text-orange-100 text-lg mb-8 leading-relaxed">
              Pakan berkualitas, sangkar premium, dan aksesoris terlengkap untuk burung peliharaanmu. Pengiriman cepat ke seluruh Indonesia!
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setPage('products')}
                className="btn-bounce bg-white text-brand-600 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors shadow-lg">
                Belanja Sekarang
              </button>
              <button onClick={() => setShowPromo(true)}
                className="btn-bounce bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors border border-white/30">
                Lihat Promo 🎁
              </button>
            </div>
            <div className="flex gap-6 mt-10 pt-6 border-t border-white/20 text-sm">
              <div><div className="font-black text-2xl">5.000+</div><div className="text-orange-200">Pelanggan Puas</div></div>
              <div><div className="font-black text-2xl">200+</div><div className="text-orange-200">Produk</div></div>
              <div><div className="font-black text-2xl">4.9★</div><div className="text-orange-200">Rating</div></div>
            </div>
          </div>
          <div className="text-center hidden md:block">
            <div className="relative inline-block">
              <div className="w-72 h-72 bg-white/10 rounded-full flex items-center justify-center mx-auto border-4 border-white/20">
                <div className="text-9xl">🦜</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 font-black text-sm px-3 py-2 rounded-xl shadow-lg rotate-6">GRATIS ONGKIR!</div>
              <div className="absolute -bottom-2 -left-4 bg-forest-500 text-white font-bold text-xs px-3 py-2 rounded-xl shadow-lg -rotate-3">COD Tersedia ✓</div>
            </div>
          </div>
        </div>
      </section>

      {/* KATEGORI */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-black text-gray-900 mb-2">Kategori Produk</h2>
        <p className="text-gray-500 mb-6 text-sm">Temukan semua yang kamu butuhkan</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {CATEGORIES.map(cat => (
            <button key={cat.name} onClick={() => filterCategory(cat.name)}
              className="card-hover bg-white rounded-2xl p-4 flex flex-col items-center gap-2 border border-gray-100 shadow-sm hover:border-brand-200 hover:bg-brand-50 transition-all group">
              <div className="text-3xl">{cat.emoji}</div>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-brand-600">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* PRODUK UNGGULAN */}
      <section className="max-w-7xl mx-auto px-4 pb-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-gray-900">Produk Unggulan</h2>
            <p className="text-gray-500 text-sm mt-1">Terlaris & terpopuler minggu ini</p>
          </div>
          <button onClick={() => setPage('products')} className="text-brand-500 hover:text-brand-600 text-sm font-semibold">
            Lihat Semua →
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* BANNER PROMO */}
      <section className="bg-gradient-to-r from-forest-600 to-forest-700 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="text-4xl mb-3">🎉</div>
          <h2 className="text-2xl md:text-3xl font-black mb-2">Gratis Ongkir Seluruh Indonesia!</h2>
          <p className="text-green-200 mb-6 text-sm">Berlaku untuk semua transaksi. Tidak ada minimum pembelian.</p>
          <button onClick={() => setPage('products')}
            className="btn-bounce bg-white text-forest-700 font-bold px-8 py-3 rounded-xl hover:bg-green-50 transition-colors shadow-lg">
            Belanja Sekarang
          </button>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-black text-gray-900 text-center mb-2">Apa Kata Mereka?</h2>
        <p className="text-gray-500 text-center text-sm mb-8">Ribuan pelanggan puas di seluruh Indonesia</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Budi Santoso',  city: 'Jakarta',    color: 'brand',  initial: 'B', star: '★★★★★', text: '"Pakannya bagus banget, burung lovebird saya jadi lebih aktif dan bulu makin cerah. Pengiriman juga cepat!"' },
            { name: 'Siti Rahayu',   city: 'Surabaya',   color: 'forest', initial: 'S', star: '★★★★★', text: '"Sangkarnya sangat kokoh dan elegan. Harga terjangkau untuk kualitas premium. Sudah pesan 3x dan selalu puas!"' },
            { name: 'Ahmad Fauzi',   city: 'Yogyakarta', color: 'purple', initial: 'A', star: '★★★★☆', text: '"Vitamin burungnya recommended banget! Kenari saya jadi rajin berkicau setelah rutin dikasih vitamin dari sini."' },
          ].map(t => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-yellow-400 text-lg mb-3">{t.star}</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 bg-${t.color}-100 text-${t.color}-600 rounded-full flex items-center justify-center font-black text-sm`}>{t.initial}</div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL PROMO */}
      {showPromo && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowPromo(false)}>
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden fade-in" onClick={e => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-brand-500 to-orange-600 p-6 text-white text-center">
              <div className="text-4xl mb-2">🎁</div>
              <h2 className="text-2xl font-black">Promo Spesial!</h2>
              <p className="text-orange-100 text-sm mt-1">Penawaran terbatas hari ini</p>
            </div>
            <div className="p-6 space-y-4">
              {[
                { emoji: '🚚', title: 'Gratis Ongkir', desc: 'Ke seluruh Indonesia, tanpa minimum belanja', bg: 'orange-50', border: 'brand-200' },
                { emoji: '💰', title: 'Diskon 15% Pakan Premium', desc: 'Kode: KICAU15', bg: 'green-50', border: 'forest-200' },
                { emoji: '🎯', title: 'Cashback 10% Member Baru', desc: 'Daftar sekarang dan dapatkan cashback!', bg: 'blue-50', border: 'blue-200' },
              ].map(item => (
                <div key={item.title} className={`bg-${item.bg} border border-${item.border} rounded-xl p-4 flex items-center gap-4`}>
                  <div className="text-3xl">{item.emoji}</div>
                  <div>
                    <div className="font-bold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
              ))}
              <div className="flex gap-3 pt-2">
                <button onClick={() => { setPage('products'); setShowPromo(false) }}
                  className="btn-bounce flex-1 bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 rounded-xl transition-colors text-sm">
                  Belanja Sekarang
                </button>
                <button onClick={() => setShowPromo(false)}
                  className="flex-1 border border-gray-200 text-gray-600 font-medium py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm">
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
