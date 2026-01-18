import React from 'react'

const ProductCard = ({ product, addToCart }) => {
  // Handle click on the entire card
  const handleCardClick = () => {
    addToCart(product)
  }

  // Handle click on just the button (optional)
  const handleButtonClick = (e) => {
    e.stopPropagation() // Don't trigger card click
    addToCart(product)
  }

  return (
    // Whole card is clickable - test clicks product-1 div
    <div 
      onClick={handleCardClick}
      data-testid={`product-${product.id}`}
      style={{
        border: '1px solid #ffffff',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: 'white',
        cursor: 'pointer' // Shows it's clickable
      }}
    >
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      
      {/* Button still works too */}
      <button 
        onClick={handleButtonClick}
        style={{
          padding: '10px 15px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard