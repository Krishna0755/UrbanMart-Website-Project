
import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../index.css'
import UrbanTechLogo from '../assets/UrbanTechLogo.png'
import { searchProducts } from '../productsData'

const Navbar = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const searchRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleInputChange = (e) => {
    const value = e.target.value
    setQuery(value)
    if (value.trim()) {
      setResults(searchProducts(value))
      setShowDropdown(true)
    } else {
      setResults([])
      setShowDropdown(false)
    }
  }

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
      setShowDropdown(false)
      setQuery('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleResultClick = (category) => {
    navigate(`/${category}`)
    setShowDropdown(false)
    setQuery('')
  }

  const handleResultItemClick = (product) => {
    navigate(`/search?q=${encodeURIComponent(product.user)}`)
    setShowDropdown(false)
    setQuery('')
  }

  return (
    <div className='Navbar'>
      <img src={UrbanTechLogo} alt="Urban-Tech Logo" className="logo"/>
      <h1><Link to="/Home">Urban Tech Store</Link></h1>
      <div className='search-bar' ref={searchRef}>
        <input
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => { if (query.trim() && results.length > 0) setShowDropdown(true) }}
        />
        <button className='successButton' onClick={handleSearch}>🔍</button>

        {showDropdown && results.length > 0 && (
          <div className='search-dropdown'>
            {results.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className='search-dropdown-item'
                onClick={() => handleResultItemClick(product)}
              >
                <img src={product.imgSrc} alt={product.user} className='search-dropdown-img' />
                <div className='search-dropdown-info'>
                  <span className='search-dropdown-name'>{product.user}</span>
                  <span className='search-dropdown-price'>₹{product.price}</span>
                </div>
                <span
                  className='search-dropdown-category'
                  onClick={(e) => { e.stopPropagation(); handleResultClick(product.category) }}
                >
                  {product.category}
                </span>
              </div>
            ))}
            {results.length > 8 && (
              <div className='search-dropdown-more' onClick={handleSearch}>
                View all {results.length} results →
              </div>
            )}
          </div>
        )}

        {showDropdown && query.trim() && results.length === 0 && (
          <div className='search-dropdown'>
            <div className='search-dropdown-empty'>No products found</div>
          </div>
        )}
      </div>
      <div className='links'>
        <ul>
          <li><Link to="/Phones" onClick={() => setMenuOpen(false)}>Phones</Link></li>
          <li><Link to="/Laptops" onClick={() => setMenuOpen(false)}>Laptops</Link></li>
          <li><Link to="/Tablets" onClick={() => setMenuOpen(false)}>Tablets</Link></li>
          <li><Link to="/cart" onClick={() => setMenuOpen(false)}>Go to Cart</Link></li>
        </ul>
      </div>
      <button className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
      </button>
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/Phones" onClick={() => setMenuOpen(false)}>Phones</Link></li>
          <li><Link to="/Laptops" onClick={() => setMenuOpen(false)}>Laptops</Link></li>
          <li><Link to="/Tablets" onClick={() => setMenuOpen(false)}>Tablets</Link></li>
          <li><Link to="/cart" onClick={() => setMenuOpen(false)}>Go to Cart</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

