module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Define neutral colors for a minimalist design
      colors: {
        neutral: {
          lightest: '#F7FAFC',
          light: '#E2E8F0',
          DEFAULT: '#CBD5E0',
          dark: '#4A5568',
          darkest: '#2D3748',
        },
      },
      fontFamily: {
        // Incorporate a simple and elegant font family, like 'Helvetica Neue' 
        body: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      spacing: {
        // Refine spacing for a more consistent and minimalist approach
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
      },
      // Additional configuration could go here as per design requirements.
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '4rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
