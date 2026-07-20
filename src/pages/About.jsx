export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 fade-in">
      <div className="text-center mb-10">
        <div className="text-6xl mb-4">🦜</div>
        <h1 className="text-3xl font-black text-gray-900 mb-3">Tentang Kicau Store</h1>
        <p className="text-gray-500 max-w-xl mx-auto">Toko perlengkapan burung online terpercaya sejak 2019</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
          <h2 className="text-xl font-black text-gray-900 mb-3">Siapa Kami?</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Kicau Store hadir sebagai solusi lengkap bagi para pecinta burung Indonesia. Kami menyediakan pakan berkualitas tinggi, sangkar premium, vitamin, dan berbagai aksesoris untuk memastikan burung peliharaan Anda hidup sehat dan bahagia.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mt-3">
            Didirikan oleh komunitas pecinta burung, kami memahami kebutuhan spesifik setiap jenis burung dan selalu menghadirkan produk terbaik dengan harga yang terjangkau.
          </p>
        </div>

        <div className="bg-brand-50 rounded-2xl p-7 border border-brand-100">
          <h2 className="text-xl font-black text-gray-900 mb-4">Kenapa Pilih Kami?</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              'Produk original & bergaransi kualitas',
              'Gratis ongkir ke seluruh Indonesia',
              'Konsultasi gratis dengan dokter hewan',
              'Pengiriman dalam 1-2 hari kerja',
              'Garansi uang kembali 7 hari',
              'Customer service responsif 24/7',
            ].map(item => (
              <li key={item} className="flex gap-3">
                <span className="text-forest-500 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: '5K+', label: 'Pelanggan' },
          { value: '200+', label: 'Produk' },
          { value: '4.9', label: 'Rating ★' },
          { value: '6 Th', label: 'Berpengalaman' },
        ].map(stat => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-black text-brand-500 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
