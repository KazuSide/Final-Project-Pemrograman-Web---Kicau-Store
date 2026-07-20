# 🐦 Kicau Store

Kicau Store adalah aplikasi web penjualan perlengkapan burung berbasis **React.js** yang terintegrasi dengan **Backend NestJS** dan **Database MySQL**. Aplikasi ini dibuat sebagai Final Project Mata Kuliah **Pemrograman Web (ST084)**.

---

## 👨‍💻 Anggota Kelompok

- Daffa Sabiq Hibban
- (Tambahkan nama anggota kelompok lainnya)

---

## 🚀 Teknologi yang Digunakan

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

### Backend
- NestJS
- TypeORM

### Database
- MySQL (XAMPP)

---

## ✨ Fitur

- Menampilkan daftar produk
- Pencarian produk
- Filter kategori
- Detail produk
- Keranjang belanja
- Data produk langsung dari MySQL melalui REST API
- Responsive Design

---

## 📁 Struktur Project

```
src/
│
├── components/
├── context/
├── pages/
├── data/
├── App.jsx
└── main.jsx

public/
└── images/
```

---

## ⚙️ Instalasi

Clone repository

```bash
git clone https://github.com/USERNAME/kicau-store-kicaustore.git
```

Masuk ke folder project

```bash
cd kicau-store-kicaustore
```

Install dependency

```bash
npm install
```

Jalankan aplikasi

```bash
npm run dev
```

Frontend akan berjalan di

```
http://localhost:5173
```

---

## 🔗 Backend API

Project ini terhubung dengan Backend NestJS.

Endpoint yang digunakan

```
GET /products
```

Contoh

```
http://localhost:3000/products
```

---

## 🗄️ Database

Database menggunakan MySQL.

Nama Database

```
kicau_store
```

Tabel

```
product
```

Field

- id
- name
- description
- category
- image
- price
- stock

---

## 📷 Tampilan

### Beranda

- Hero Section
- Kategori Produk
- Produk Unggulan

### Produk

- Daftar Produk
- Filter
- Pencarian
- Detail Produk

---

## 📌 Cara Menjalankan

### Backend

```bash
cd kicau-store-backend

npm install

npm run start:dev
```

Pastikan MySQL XAMPP sudah berjalan.

---

### Frontend

```bash
cd kicau-store-kicaustore

npm install

npm run dev
```

---

## 📷 Screenshot

Tambahkan screenshot aplikasi di sini.

---

## 📄 Lisensi

Project ini dibuat untuk keperluan pembelajaran Mata Kuliah Pemrograman Web ST084 Universitas AMIKOM Yogyakarta.


# 🚀 Kicau Store Backend

Backend REST API menggunakan NestJS, TypeORM, dan MySQL.

## Teknologi

- NestJS
- TypeORM
- MySQL
- REST API

## Instalasi

```bash
npm install
```

## Menjalankan

```bash
npm run start:dev
```

Server berjalan di

```
http://localhost:3000
```

---

## Database

Database

```
kicau_store
```

---

## Endpoint

### GET Semua Produk

```
GET /products
```

### GET Produk Berdasarkan ID

```
GET /products/:id
```

### POST Produk

```
POST /products
```

### PATCH Produk

```
PATCH /products/:id
```

### DELETE Produk

```
DELETE /products/:id
```

---

## Entity Product

- id
- name
- description
- category
- image
- price
- stock
