/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this line to include any file types that might contain Tailwind classes
  ],
  theme: {
    extend: {
      colors:{
        'code_color': '#272822',
        'color_titre_code': '#1D2024',
        'color_header_code': '#202529',
      }
    },
  },
  plugins: [],
}

