/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",     // Escaneia arquivos na pasta app
    "./src/components/**/*.{js,ts,jsx,tsx}", // Se usar components separados
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
