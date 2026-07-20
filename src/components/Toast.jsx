import { useCart } from '../context/CartContext'

export default function Toast() {
  const { toastMsg, toastVisible, toastError } = useCart()

  if (!toastVisible) return null

  return (
    <div className="fixed top-5 right-5 z-[9999]">
      <div className={`toast ${toastError ? 'bg-red-500' : 'bg-forest-600'} text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 font-medium text-sm`}>
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
        </svg>
        <span>{toastMsg}</span>
      </div>
    </div>
  )
}
