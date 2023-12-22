/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "offset-top":
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px #00000",
      },
    },
  },
  plugins: [],
};
