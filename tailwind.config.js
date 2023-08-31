/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
    },
    extend: {
      colors: {
        primary: "#183661",
        primaryBrand: "#2062F6",
        success: "#4DA261",
        createdStatusBg: "#EDF9F0",
        createdStatusColor: "#4DA261",
        doingStatusBg: "#FFF6CA",
        doingStatusColor:"#BA9C01",
        doneStatusBg: "#FEEFEF",
        doneStatusColor: "#DA1414",
      },
    },
  },
  plugins: [],
}