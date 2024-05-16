/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "red-weave":
          "linear-gradient(135deg, rgba(128,0,0,0.65), transparent, rgba(128,0,0,0.65)), url('/ChoctawIndianFair/img/weave02.svg')",
        rope: "linear-gradient(transparent, transparent, rgba(255,0,0,0.25)), url('/ChoctawIndianFair/img/rope.svg')",
        "sponsor-background":
          "url('/ChoctawIndianFair/img/lattice.svg'), linear-gradient(to bottom, rgba(255,0,0,0.15), transparent, transparent, rgba(255,0,0,0.15))",
      },
      backgroundSize: {
        "size-weave": "cover, 144px 96px",
      },
    },
  },
  plugins: [],
};
