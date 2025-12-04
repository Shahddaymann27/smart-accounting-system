// Utility functions for React Native components
// This replaces Tailwind CSS utilities with inline styles

export function cn(...inputs: any[]) {
  // For React Native, return the first non-null/non-false value
  return inputs.find(input => input);
}
