/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark monochromatic theme with white glow
        'cream': '#000000',
        'soft-pink': '#1A1A1A',
        'sage': '#2A2A2A',
        'warm-gray': '#E5E5E5',
        'dark-text': '#FFFFFF',
        'light-pink': '#0D0D0D',
        'mint': '#1F1F1F',
        'lavender': '#F5F5F5',
        'peach': '#CCCCCC',
        'gray-dark': '#0A0A0A',
        'gray-medium': '#1A1A1A',
        'gray-light': '#2A2A2A',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
