import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../index.css'
import { tablets } from '../productsData'

const Tablets = () => {
  const products = tablets
  
  return (
    <div className='site-wrapper'>
      <Navbar />
      <div className='parent-phones'>
        {products.map((product) => (
          <Card key={product.id} id={product.id} user={product.user} imgSrc={product.imgSrc} price={product.price} />
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Tablets


