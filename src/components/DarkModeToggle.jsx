// Import React
import React from 'react'

// DarkModeToggle component function
// Receives darkMode and setDarkMode as props from parent (App)
const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  // Function to toggle dark mode when button is clicked
  const toggleDarkMode = () => {
    // Call setDarkMode with opposite of current darkMode value
    // If darkMode is true, set to false; if false, set to true
    setDarkMode(!darkMode)
  }

  // Return JSX for the toggle button
  return (
    // Button element
    // onClick: Calls toggleDarkMode function when clicked
    // data-testid: For testing purposes
    // style: Inline styles that change based on darkMode state
    <button 
      onClick={toggleDarkMode}
      data-testid="dark-mode-toggle"
      style={{
        padding: '10px 20px',        // Button padding
        margin: '10px 0',            // Margin top and bottom
        backgroundColor: darkMode ? '#333' : '#007bff', // Dark gray if dark mode, blue if light
        color: 'white',              // White text color
        border: 'none',              // Remove default border
        borderRadius: '5px',         // Rounded corners
        cursor: 'pointer'            // Pointer cursor on hover
      }}
    >
      {/* Conditional button text using ternary operator */}
      {/* If darkMode is true, show 'Toggle Light Mode', else 'Toggle Dark Mode' */}
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

// Export component for use in App.jsx
export default DarkModeToggle