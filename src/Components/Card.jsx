
import { useContext } from 'react'
import { CartContext } from '../Context/CartContextFile'

const Card = ({ id, user, imgSrc, price }) => {
  const { addToCart, removeFromCart, addedProducts, markProductAsAdded, unmarkProductAsAdded } = useContext(CartContext)
  const isAdded = addedProducts.includes(id)

  const handleAddToCart = () => {
    if (!isAdded) {
      addToCart({
        id,
        name: user,
        imgSrc,
        price
      })
      markProductAsAdded(id)
    } else {
      removeFromCart(id)
      unmarkProductAsAdded(id)
    }
  }

  return (
    <div className="card">
      <img src={imgSrc} alt="Product img" />
      <h1>{user}</h1>
      <p>{`₹${price}`}</p>
      <button 
        onClick={handleAddToCart}
        style={{
          backgroundColor: isAdded ? 'red' : '',
          color: isAdded ? 'white' : ''
        }}
      >
        {isAdded ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default Card
