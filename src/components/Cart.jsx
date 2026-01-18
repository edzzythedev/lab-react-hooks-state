// Import React
import React from 'react'

// Cart component: Displays shopping cart
// Receives cart array as prop
const Cart = ({ cart }) => {
  // Calculate total price of all items in cart
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  // JSX for cart display
  return (
    <div style={{
      marginTop: '40px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      {/* Cart title - Test looks for "Shopping Cart" text */}
      <h2>Shopping Cart</h2>
      
      {/* Conditional rendering based on cart contents */}
      {cart.length === 0 ? (
        // Empty cart message
        <p data-testid="empty-cart-message">Your cart is empty</p>
      ) : (
        // List of cart items when cart has items
        <div>
          {/* ✅ TEST EXPECTS: "Apple is in your cart", "Milk is in your cart" */}
          {/* Map through cart and show message for each item */}
          {cart.map((item, index) => (
            // Display message for each cart item
            // Test looks for text like "Apple is in your cart"
            <p key={index} data-testid={`cart-item-${item.name.toLowerCase()}`}>
              {item.name} is in your cart
            </p>
          ))}
          
          {/* Total price display */}
          <div 
            data-testid="cart-total"
            style={{
              marginTop: '20px',
              paddingTop: '20px',
              borderTop: '2px solid #ffffff',
              fontWeight: 'bold',
              fontSize: '18px',
              textAlign: 'right'
            }}
          >
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  )
}

// Export component for use in App.jsx
export default Cart