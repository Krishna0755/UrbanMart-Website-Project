import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../index.css'
import Hero from '../Components/Hero'
import { allProducts } from '../productsData'

const Home = () => {
  const products = allProducts
  
  return (
    <div className='site-wrapper'>
      <Navbar />
      <Hero />
      <div className='parent'>
        {products.map((product) => (
          <Card key={product.id} id={product.id} user={product.user} imgSrc={product.imgSrc} price={product.price} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Home
