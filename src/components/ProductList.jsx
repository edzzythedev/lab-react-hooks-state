// Import React
import React from 'react'
// Import ProductCard component to display individual products
import ProductCard from './ProductCard'

//  EXPORT THIS: The test imports sampleProducts from this file
// This array must match what the test expects
export const sampleProducts = [
  { id: 1, name: 'Apple', category: 'Fruits', price: 1.99 },   // id must be 1
  { id: 2, name: 'Milk', category: 'Dairy', price: 3.99 },     // id must be 2  
  { id: 3, name: 'Bread', category: 'Bakery', price: 2.99 },   // id must be 3
]

// ProductList component function
// Receives products array and addToCart function as props from App
const ProductList = ({ products, addToCart }) => {
  // Return JSX for product list
  return (
    // Container div with inline styles
    <div style={{ marginTop: '20px' }}>
      {/* Section title */}
      <h2>Products</h2>
      
      {/* Grid container for product cards */}
      {/* Uses CSS Grid for responsive layout */}
      <div style={{ 
        display: 'grid',                          // CSS Grid layout
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Responsive columns
        gap: '20px',                              // Gap between grid items
        marginTop: '20px'                         // Top margin
      }}>
        {/* Map through products array to render each product */}
        {/* products array comes from props (filtered based on category) */}
        {products.map(product => (
          // Render ProductCard for each product
          // key: Unique identifier for React list rendering (product.id)
          // product: Pass individual product object as prop
          // addToCart: Pass addToCart function as prop
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  )
}

// Export ProductList component for use in App.jsx
export default ProductList