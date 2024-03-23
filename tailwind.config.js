/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customPing: "hsla(284, 61%, 74%, 1)",
        customGreen: "hsla(172, 45%, 75%, 1)",
        customOrange: "hsla(22, 62%, 76%, 1)",
        customBlue: "hsla(206, 84%, 86%, 1)",
        customColorText: "hsla(171, 11%, 24%, 1)",
        customColorBg: "hsla(36, 31%, 90%, 1)"
      },
      screens:{
        "2xl": {max:"1535px"},
        xl: {max: "1279px"},
        lg: {max:"1023px"},
        md: {max: "767px"},
        sm: {max: "639px"},
        xs: {max: "479px"} 
      }
    },
    
  },
  plugins: [],
}

