import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../index.css'
import { laptops } from '../productsData'

const Laptops = () => {
  const products = laptops
  
  return (
    <div className='site-wrapper'>
      <Navbar />
      <div className='parent-phones'>
        {products.map((product) => (
          <Card key={product.id} id={product.id} user={product.user} imgSrc={product.imgSrc} price={product.price} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Laptops

