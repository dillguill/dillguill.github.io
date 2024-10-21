module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neumorphic': '10px 10px 20px #0d0d0d, -10px -10px 20px #1a1a1a',
        'neumorphic-inset': 'inset 10px 10px 20px #0d0d0d, inset -10px -10px 20px #1a1a1a',
      },
    },
  },
  plugins: [],
}