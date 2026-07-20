import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Toast from './components/Toast'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  const [page, setPage] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCat, setFilterCat] = useState('')

  const handleSearch = (q) => {
    setSearchQuery(q)
    if (q) setPage('products')
  }

  const handleFilterCategory = (cat) => {
    setFilterCat(cat)
    setPage('products')
  }

  const handleSetPage = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })

    if (p !== 'products') {
      setSearchQuery('')
      setFilterCat('')
    }
  }

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar
          currentPage={page}
          setPage={handleSetPage}
          onSearch={handleSearch}
        />

        <main className="flex-1">
          {page === 'home' && (
            <Home
              setPage={handleSetPage}
              filterCategory={handleFilterCategory}
            />
          )}

          {page === 'products' && (
            <Products
              initialCategory={filterCat}
              searchQuery={searchQuery}
            />
          )}

          {page === 'about' && <About />}
          {page === 'contact' && <Contact />}
        </main>

        <Footer
          setPage={handleSetPage}
          filterCategory={handleFilterCategory}
        />

        <Toast />
      </div>
    </CartProvider>
  )
}