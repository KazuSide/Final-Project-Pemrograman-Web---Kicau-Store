import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Navbar({ currentPage, setPage, onSearch }) {
  const { totalItems } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  // expose cart toggle globally so other components can open it
  if (typeof window !== 'undefined') window.__openCart = () => setCartOpen(true)

  const navLinks = [
    { id: 'home',     label: 'Beranda' },
    { id: 'products', label: 'Produk' },
    { id: 'about',    label: 'Tentang' },
    { id: 'contact',  label: 'Kontak' },
  ]

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <button onClick={() => setPage('home')} className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 bg-brand-500 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8 2 5 5 5 9c0 2.4 1.1 4.5 2.8 5.9L12 22l4.2-7.1C17.9 13.5 19 11.4 19 9c0-4-3-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
              </svg>
            </div>
            <span className="text-xl font-black text-gray-900 tracking-tight">
              Kicau<span className="text-brand-500">Store</span>
            </span>
          </button>

          {/* Search */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari produk burung..."
                onChange={e => onSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-400 text-sm bg-gray-50"
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0"/>
              </svg>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            {navLinks.map(l => (
              <button key={l.id} onClick={() => setPage(l.id)}
                className={`hover:text-brand-500 transition-colors ${currentPage === l.id ? 'text-brand-500 font-bold' : ''}`}>
                {l.label}
              </button>
            ))}
          </div>

          {/* Cart + Hamburger */}
          <div className="flex items-center gap-3">
            <button onClick={() => setCartOpen(true)} className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              {totalItems > 0 && (
                <span className="badge-pulse absolute -top-1 -right-1 bg-brand-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-2 text-sm font-medium">
            <div className="mb-2">
              <input type="text" placeholder="Cari produk..." onChange={e => onSearch(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"/>
            </div>
            {navLinks.map(l => (
              <button key={l.id} onClick={() => { setPage(l.id); setMenuOpen(false) }}
                className="block py-2 text-gray-600 hover:text-brand-500 w-full text-left">
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Cart Sidebar (imported inline to avoid circular deps) */}
      {cartOpen && <CartSidebar onClose={() => setCartOpen(false)} />}
    </>
  )
}

function CartSidebar({ onClose }) {
  const { cart, removeFromCart, changeQty, totalPrice, clearCart, showToast } = useCart()

  const handleCheckout = () => {
    if (cart.length === 0) { showToast('Keranjang kosong!', true); return }
    const no = '#KS' + String(Math.floor(Math.random() * 9000) + 1000)
    clearCart()
    onClose()
    alert(`✅ Pesanan ${no} berhasil! Estimasi pengiriman 1-2 hari kerja.`)
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose}/>
      <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col fade-in">
        <div className="p-5 border-b flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Keranjang Belanja</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-3">🛒</div>
              <div className="text-gray-500 text-sm font-medium">Keranjang masih kosong</div>
              <div className="text-gray-400 text-xs mt-1">Tambahkan produk favoritmu!</div>
            </div>
          ) : cart.map(item => (
            <div key={item.id} className="flex gap-3 items-start">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{item.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-900 truncate">{item.name}</div>
                <div className="text-brand-500 font-bold text-sm mt-0.5">Rp {item.price.toLocaleString('id')}</div>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => changeQty(item.id, -1)} className="w-7 h-7 rounded-lg border border-gray-200 hover:bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-sm">−</button>
                  <span className="text-sm font-bold text-gray-900 w-5 text-center">{item.qty}</span>
                  <button onClick={() => changeQty(item.id, 1)} className="w-7 h-7 rounded-lg border border-gray-200 hover:bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-sm">+</button>
                  <button onClick={() => removeFromCart(item.id)} className="ml-auto text-red-400 hover:text-red-600 text-xs">Hapus</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-5 border-t bg-gray-50">
          <div className="flex justify-between text-sm text-gray-600 mb-1"><span>Subtotal</span><span>Rp {totalPrice.toLocaleString('id')}</span></div>
          <div className="flex justify-between text-sm text-gray-600 mb-3"><span>Ongkos kirim</span><span className="text-forest-600 font-medium">Gratis</span></div>
          <div className="flex justify-between font-bold text-gray-900 text-lg mb-4"><span>Total</span><span>Rp {totalPrice.toLocaleString('id')}</span></div>
          <button onClick={handleCheckout} className="btn-bounce w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 rounded-xl transition-colors text-sm">Bayar Sekarang</button>
          <button onClick={onClose} className="w-full mt-2 border border-gray-200 text-gray-600 font-medium py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm">Lanjut Belanja</button>
        </div>
      </div>
    </>
  )
}
