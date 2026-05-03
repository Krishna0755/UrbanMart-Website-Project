
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Phones from './pages/Phones'
import Laptops from './pages/Laptops'
import Tablets from './pages/Tablets'
import Cart from './pages/Cart'
import SearchResults from './pages/SearchResults'
import { CartProvider } from './Context/CartContext'
import './index.css'


const App = () => {
  return (

    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Phones" element={<Phones />} />
          <Route path="/Laptops" element={<Laptops />} />
          <Route path="/Tablets" element={<Tablets />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  
  )
}

export default App
