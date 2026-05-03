import { useState, useEffect } from 'react'
import { CartContext } from './CartContextFile'

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  const [addedProducts, setAddedProducts] = useState(() => {
    const savedAdded = localStorage.getItem('addedProducts')
    return savedAdded ? JSON.parse(savedAdded) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('addedProducts', JSON.stringify(addedProducts))
  }, [addedProducts])

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const markProductAsAdded = (productId) => {
    if (!addedProducts.includes(productId)) {
      setAddedProducts([...addedProducts, productId])
    }
  }

  const unmarkProductAsAdded = (productId) => {
    setAddedProducts(addedProducts.filter(id => id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      ))
    }
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const clearCart = () => {
    setCart([])
    setAddedProducts([])
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace(/,/g, ''))
      return total + (price * item.quantity)
    }, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, getTotalPrice, addedProducts, markProductAsAdded, unmarkProductAsAdded }}>
      {children}
    </CartContext.Provider>
  )
}
