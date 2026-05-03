import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { CartContext } from '../Context/CartContextFile'
import '../index.css' 

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useContext(CartContext)
  const navigate = useNavigate()

  const handleQuantityChange = (productId, newQuantity) => {
    const quantity = Math.max(1, parseInt(newQuantity) || 1)
    updateQuantity(productId, quantity)
  }

  const handleRemove = (productId) => {
    removeFromCart(productId)
  }

  const handleCheckout = () => {
    if (cart.length > 0) {
      alert('Thank you for your purchase!')
      clearCart()
      navigate('/Home')
    }
  }

  return (
    <div className='site-wrapper'>
      <Navbar />
      <div className='cart-page'>
        <h1 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '30px' }}>Shopping Cart</h1>

        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <p style={{ fontSize: '24px' }}>Your cart is currently empty.</p>
            <button
              onClick={() => navigate('/Home')}
              style={{
                marginTop: '20px',
                padding: '10px 30px',
                fontSize: '16px',
                backgroundColor: '#0d7aee',
                color: 'black',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '30px' }}>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    backgroundColor: '#2a2a2a',
                    padding: '15px',
                    borderRadius: '8px',
                    alignItems: 'center',
                    gap: '20px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                  }}
                >
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    style={{
                      width: '120px',
                      height: '120px',
                      objectFit: 'cover',
                      borderRadius: '5px'
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{item.name}</h3>
                    <p style={{ margin: '5px 0', color: '#ddd' }}>Price: ₹{item.price}</p>
                    <p style={{ margin: '5px 0', color: '#ddd' }}>
                      Subtotal: ₹{(parseInt(item.price.replace(/,/g, '')) * item.quantity).toLocaleString()}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label style={{ marginRight: '10px', color: '#ddd' }}>Qty:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      min="1"
                      style={{
                        width: '60px',
                        padding: '5px',
                        borderRadius: '4px',
                        border: '1px solid #555',
                        backgroundColor: '#1a1a1a',
                        color: 'white',
                        textAlign: 'center'
                      }}
                    />
                  </div>

                  <button
                    onClick={() => handleRemove(item.id)}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div
              style={{
                backgroundColor: '#2a2a2a',
                padding: '20px',
                borderRadius: '8px',
                textAlign: 'right'
              }}
            >
              <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>
                Total: ₹{getTotalPrice().toLocaleString()}
              </h2>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => navigate('/Home')}
                  style={{
                    padding: '10px 30px',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                >
                  Continue Shopping
                </button>
                <button
                  onClick={clearCart}
                  style={{
                    padding: '10px 30px',
                    backgroundColor: '#ff6b6b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                >
                  Reset Cart
                </button>
                <button
                  onClick={handleCheckout}
                  style={{
                    padding: '10px 30px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Cart
