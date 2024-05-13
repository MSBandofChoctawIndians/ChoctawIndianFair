/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "red-weave":
          "linear-gradient(135deg, rgba(128,0,0,0.65), transparent, rgba(128,0,0,0.65)), url('./img/weave02.svg')",
      },
      backgroundSize: {
        "size-weave": "cover, 144px 96px",
      },
    },
  },
  plugins: [],
};
