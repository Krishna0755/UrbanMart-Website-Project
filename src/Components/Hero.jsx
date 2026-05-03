import { Link } from 'react-router-dom'
import TechConnectLogo from '../assets/TechConnectLogo.png'
import '../index.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <img src={TechConnectLogo} alt="Tech Connect Logo" className="hero-logo" />
        <h1 className="hero-title">Welcome to <span className="hero-highlight">Urban Tech Store</span></h1>
        <p className="hero-subtitle">Discover the latest in Phones, Laptops & Tablets — curated for those who demand the best.</p>
        <div className="hero-buttons">
          <Link to="/Phones" className="hero-btn hero-btn-primary">Shop Phones</Link>
          <Link to="/Laptops" className="hero-btn hero-btn-secondary">Explore Laptops</Link>
          <Link to="/Tablets" className="hero-btn hero-btn-secondary">Browse Tablets</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
