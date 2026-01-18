// Import jest-dom to add custom DOM matchers for testing
// These matchers include: toBeInTheDocument(), toHaveTextContent(), etc.
import '@testing-library/jest-dom';

// TEMPORARY FIX: Suppress React act() warning that appears in tests
// This warning happens when state updates aren't wrapped in act()
// We save the original console.error function
const originalError = console.error;

// Before all tests run, modify console.error
beforeAll(() => {
  // Replace console.error with custom function
  console.error = (...args) => {
    // Check if the error message contains the act warning
    if (/Warning.*not wrapped in act/.test(args[0])) {
      // If it's the act warning, suppress it (return without logging)
      return;
    }
    // For all other errors, use the original console.error
    originalError.call(console, ...args);
  };
});

// After all tests finish, restore original console.error
afterAll(() => {
  console.error = originalError;
});