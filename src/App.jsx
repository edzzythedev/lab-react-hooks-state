// Import React and useState hook from React library
import React, { useState } from 'react'
// Import child components
import ProductList, { sampleProducts } from './components/ProductList'  // ✅ Import sampleProducts
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

// Main App component function
const App = () => {
  // STATE 1: Dark mode toggle
  const [darkMode, setDarkMode] = useState(false)

  // STATE 2: Shopping cart
  const [cart, setCart] = useState([])

  // STATE 3: Category filter
  const [selectedCategory, setSelectedCategory] = useState('all')

  // USE THE SAME PRODUCTS: Use the imported sampleProducts
  // This ensures consistency between App and tests
  const products = sampleProducts  // Now matches what test expects

  // FUNCTION: Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  // FILTER LOGIC: Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  // CSS CLASS: Determine which theme class to apply
  const appClass = darkMode ? 'dark-mode' : 'light-mode'

  // JSX RETURN
  return (
    <div className={`app ${appClass}`}>
      <h1>🛒 Shopping App</h1>
      
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <label>Filter by Category: </label>
      
      <select 
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)}
        data-testid="category-filter"
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
      </select>

      {/* CONDITIONAL MESSAGE: Shows when no products match filter */}
      {filteredProducts.length === 0 && (
        <p data-testid="no-products-message">No products available</p>
      )}

      <ProductList 
        products={filteredProducts} 
        addToCart={addToCart}
      />

      <Cart cart={cart} />
    </div>
  )
}

export default App