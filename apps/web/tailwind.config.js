module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Your existing palette from CSS variables
        'primary-dark': '#012619',
        'primary-deep': '#000d08', 
        'primary-lime': '#a9bf5a',
        'primary-light-lime': '#e4f277',
        'primary-light-gray': '#f2f2f2',
        
        'secondary-forest': '#244038',
        'secondary-sage': '#638c46',
        'secondary-olive': '#9aa680',
        'secondary-beige': '#d9d2b0',
        'secondary-cream': '#f2ecd8',
        
        // Background colors
        background: {
          primary: '#f2ecd8',      // Cream
          secondary: '#d9d2b0',    // Beige
          accent: '#9aa680',       // Olive
        },
        
        // Text colors
        text: {
          primary: '#244038',      // Forest green
          secondary: '#638c46',    // Sage
          muted: '#9aa680',        // Olive
        },
        
        // Border colors
        border: {
          primary: '#244038',      // Forest green
          secondary: '#638c46',    // Sage
          light: '#d9d2b0',        // Beige
        }
      },
      boxShadow: {
        'primary': '0 4px 6px -1px rgba(169, 191, 90, 0.3), 0 2px 4px -1px rgba(169, 191, 90, 0.1)',
        'secondary': '0 4px 6px -1px rgba(36, 64, 56, 0.3), 0 2px 4px -1px rgba(36, 64, 56, 0.1)',
        'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.1), 0 1px 3px -1px rgba(0, 0, 0, 0.1)',
      }
    }
  },
  plugins: []
};
