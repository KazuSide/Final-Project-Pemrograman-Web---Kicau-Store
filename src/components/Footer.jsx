export default function Footer({ setPage, filterCategory }) {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-brand-500 rounded-xl flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8 2 5 5 5 9c0 2.4 1.1 4.5 2.8 5.9L12 22l4.2-7.1C17.9 13.5 19 11.4 19 9c0-4-3-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
              </svg>
            </div>
            <span className="text-white font-black text-lg">Kicau<span className="text-brand-400">Store</span></span>
          </div>
          <p className="text-sm leading-relaxed mb-4">Solusi lengkap perlengkapan burung peliharaan Anda. Produk berkualitas, harga terjangkau, pengiriman cepat.</p>
          <div className="flex gap-3">
            {['f','ig','wa','yt'].map((s,i) => (
              <a key={i} href="#" className="w-9 h-9 bg-gray-800 hover:bg-brand-500 rounded-xl flex items-center justify-center transition-colors text-xs font-bold">{s}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-sm">Produk</h4>
          <ul className="space-y-2 text-sm">
            {['Pakan','Sangkar','Vitamin','Aksesoris','Mainan'].map(cat => (
              <li key={cat}>
                <button onClick={() => filterCategory(cat)} className="hover:text-white transition-colors">{cat}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-sm">Layanan</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Tentang Kami', page: 'about' },
              { label: 'Kontak', page: 'contact' },
            ].map(item => (
              <li key={item.label}>
                <button onClick={() => setPage(item.page)} className="hover:text-white transition-colors">{item.label}</button>
              </li>
            ))}
            {['Kebijakan Privasi','Syarat & Ketentuan','Panduan Pembelian'].map(l => (
              <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 py-5 px-4 text-center text-sm">
        © 2026 KicauStore – All Rights Reserved | Dibuat dengan ❤️ untuk pecinta manuk Indonesia
      </div>
    </footer>
  )
}
