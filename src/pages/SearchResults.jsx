import { useSearchParams, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import { searchProducts } from '../productsData'
import '../index.css'

const SearchResults = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = searchParams.get('q') || ''
  const results = searchProducts(query)

  const handleCategoryClick = (category) => {
    navigate(`/${category}`)
  }

  return (
    <div className='site-wrapper'>
      <Navbar />
      <div className='search-results-page'>
        <h1 className='search-results-title'>
          {query ? `Results for "${query}"` : 'Search Products'}
        </h1>

        {results.length === 0 && query ? (
          <div className='search-no-results'>
            <p>No products found matching "{query}"</p>
            <p className='search-suggestion'>Try searching for a phone, laptop, or tablet name</p>
          </div>
        ) : (
          <>
            <p className='search-results-count'>{results.length} product{results.length !== 1 ? 's' : ''} found</p>
            <div className='search-results-grid'>
              {results.map((product) => (
                <div key={product.id} className='search-result-item'>
                  <Card id={product.id} user={product.user} imgSrc={product.imgSrc} price={product.price} />
                  <span
                    className='search-category-tag'
                    onClick={() => handleCategoryClick(product.category)}
                  >
                    {product.category}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default SearchResults
