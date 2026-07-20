# 🦜 Kicau Store

Website e-commerce perlengkapan burung menggunakan React + Vite + Tailwind CSS.

## Cara Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan development server
```bash
npm run dev
```

Buka http://localhost:5173 di browser.

### 3. Build untuk production
```bash
npm run build
```

## Struktur Proyek

```
kicau-store/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── products.js        # Data 12 produk
    ├── context/
    │   └── CartContext.jsx    # State management keranjang
    ├── components/
    │   ├── Navbar.jsx         # Navbar + CartSidebar
    │   ├── ProductCard.jsx    # Kartu produk
    │   ├── ProductModal.jsx   # Modal detail produk
    │   ├── Toast.jsx          # Notifikasi
    │   └── Footer.jsx         # Footer
    └── pages/
        ├── Home.jsx           # Halaman beranda
        ├── Products.jsx       # Halaman semua produk
        ├── About.jsx          # Halaman tentang
        └── Contact.jsx        # Halaman kontak
```

## Fitur

- ✅ Navbar responsif (mobile hamburger menu)
- ✅ Hero section dengan modal promo
- ✅ Filter & sort produk (kategori, harga, rating)
- ✅ Keranjang belanja dengan sidebar
- ✅ Modal detail produk
- ✅ Toast notification
- ✅ Halaman Tentang & Kontak
- ✅ Footer lengkap
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Custom tema Tailwind (warna brand & forest)
- ✅ Font Roboto

## Teknologi

- React 18
- Vite 4
- Tailwind CSS 3
- Google Fonts (Roboto)
