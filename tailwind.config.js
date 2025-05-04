/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        typewriter: ['RoughTypewriter', 'monospace'],
        lora: ['Lora', 'serif'],
        belgian: ['SouthBelgian', 'serif'],
      },
    },
  },
  plugins: [],
}

