module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        background: 'var(--background-color)',
        text: 'var(--text-color)',
        'text-secondary': 'var(--text-color-secondary)',
        'text-tertiary': 'var(--text-color-tertiary)',
        neutral: {
          lightest: 'var(--neutral-lightest)',
          light: 'var(--neutral-light)',
          DEFAULT: 'var(--neutral-default)',
          dark: 'var(--neutral-dark)',
          darkest: 'var(--neutral-darkest)',
        },
      },
      fontFamily: {
        body: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      spacing: {
        small: 'var(--spacing-small)',
        medium: 'var(--spacing-medium)',
        large: 'var(--spacing-large)',
      },
      borderRadius: {
        default: 'var(--border-radius)',
      },
      borderWidth: {
        default: 'var(--border-width)',
      },
      // More utilities can be added here based on requirements.
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
