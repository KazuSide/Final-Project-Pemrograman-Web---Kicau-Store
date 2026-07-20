import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [toastMsg, setToastMsg] = useState('')
  const [toastVisible, setToastVisible] = useState(false)
  const [toastError, setToastError] = useState(false)

  const showToast = useCallback((msg, error = false) => {
    setToastMsg(msg)
    setToastError(error)
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 3000)
  }, [])

  const addToCart = useCallback((product) => {
    setCart(prev => {
      const existing = prev.find(x => x.id === product.id)
      if (existing) return prev.map(x => x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
      return [...prev, { ...product, qty: 1 }]
    })
    showToast(`${product.name} ditambahkan ke keranjang!`)
  }, [showToast])

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(x => x.id !== id))
  }, [])

  const changeQty = useCallback((id, delta) => {
    setCart(prev => {
      const item = prev.find(x => x.id === id)
      if (!item) return prev
      if (item.qty + delta <= 0) return prev.filter(x => x.id !== id)
      return prev.map(x => x.id === id ? { ...x, qty: x.qty + delta } : x)
    })
  }, [])

  const clearCart = useCallback(() => setCart([]), [])

  const totalItems = cart.reduce((s, i) => s + i.qty, 0)
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, changeQty, clearCart,
      totalItems, totalPrice,
      toastMsg, toastVisible, toastError, showToast
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
