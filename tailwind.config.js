/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8B4513', // Saddle brown - bookstore wood color
        'secondary': '#3A3A3C', // Dark charcoal
        'accent': '#C19A6B', // Camel/tan - paper color
        'light': '#F5F5DC', // Beige - parchment color
        'dark': '#1F1F1F', // Almost black - bookstore dark corners
        'success': '#4D7C0F', // Olive green - natural tone
        'error': '#A52A2A', // Brown red - aged book
        'blackBG': '#F5F5DC', // Light parchment background
        'Favorite': '#A52A2A', // Brown red for favorite
      }, 
      fontFamily: {
        'primary': ["Inter", "sans-serif"],
        'secondary': ["Poppins", "sans-serif"],
        'heading': ["Playfair Display", "serif"]
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}

