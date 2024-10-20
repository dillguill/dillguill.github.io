/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode based on a class toggle
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#dec4ad",
        "space-gray": "#1c1c1e",
        "sunset-orange": "#ff5e3a",
        "neon-blue": "#00f6ff", 
        "galaxy-purple": "#8000ff",
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],  // For headers
        mono: ['Space Mono', 'monospace'],   // For paragraphs and body      },
      }
    },
  },
  plugins: [],
};
