import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Contact() {
  const { showToast } = useCart()
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' })

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      showToast('Mohon isi semua field!', true)
      return
    }
    showToast('Pesan berhasil dikirim! Kami akan segera menghubungi Anda.')
    setForm({ name: '', email: '', topic: '', message: '' })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 fade-in">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-black text-gray-900 mb-2">Hubungi Kami</h1>
        <p className="text-gray-500 text-sm">Kami siap membantu kamu 24/7</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-5">
          {[
            { emoji: '📞', title: 'Telepon / WhatsApp', desc: '+62 812-3456-7890', note: 'Senin–Sabtu, 08.00–20.00' },
            { emoji: '✉️', title: 'Email', desc: 'hello@kicaustore.id', note: 'Balasan dalam 1 jam' },
            { emoji: '📍', title: 'Alamat', desc: 'Jl. Pahlawan No. 45, Depok, Yogyakarta', note: null },
          ].map(item => (
            <div key={item.title} className="bg-white rounded-2xl p-5 flex gap-4 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center text-lg flex-shrink-0">{item.emoji}</div>
              <div>
                <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                <div className="text-gray-500 text-sm mt-0.5">{item.desc}</div>
                {item.note && <div className="text-xs text-gray-400">{item.note}</div>}
              </div>
            </div>
          ))}

          <div className="flex gap-3">
            <a href="#" className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl text-center text-sm transition-colors">
              WhatsApp Chat
            </a>
            <a href="#" className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl text-center text-sm transition-colors">
              Instagram
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-black text-gray-900 mb-4">Kirim Pesan</h3>
          <div className="space-y-3">
            <input
              type="text" placeholder="Nama lengkap" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"/>
            <input
              type="email" placeholder="Email" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"/>
            <select value={form.topic} onChange={e => setForm({ ...form, topic: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 bg-white text-gray-600">
              <option value="">Pilih topik...</option>
              <option>Pertanyaan Produk</option>
              <option>Status Pesanan</option>
              <option>Komplain & Retur</option>
              <option>Kerjasama</option>
            </select>
            <textarea
              placeholder="Tulis pesanmu di sini..." rows={4} value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 resize-none"/>
            <button onClick={handleSubmit}
              className="btn-bounce w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 rounded-xl transition-colors text-sm">
              Kirim Pesan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
