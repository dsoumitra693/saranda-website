module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    // extend: {
    //   colors: {
    //     // Background colors
    //     background: {
    //       primary: '#f2f2f2',      // Light gray
    //       secondary: '#e4f277',    // Light lime
    //       accent: '#a9bf5a',       // Lime green
    //     },
        
    //     // Text colors
    //     text: {
    //       primary: '#012619',      // Dark green
    //       secondary: '#000d08',    // Deep green
    //       accent: '#a9bf5a',       // Lime green
    //     },
        
    //     // Border colors
    //     border: {
    //       primary: '#000d08',      // Deep green
    //       secondary: '#a9bf5a',    // Lime green
    //       light: '#e4f277',        // Light lime
    //     }
    //   }
    // },
    extend: {
      colors: {
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
      }
    }
  },
  plugins: []
};
