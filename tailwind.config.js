/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "blue-weave":
          "linear-gradient(135deg, rgba(0,0,128,0.65), transparent, rgba(0,0,128,0.65)), url('/ChoctawIndianFair/img/weave02.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "lattice-background":
          "linear-gradient(135deg, rgba(128,0,0,0.15), rgba(128,96,0,0.45), rgba(128,0,0,0.15)), url('/ChoctawIndianFair/img/lattice.svg')",
        "panel-background":
          "linear-gradient(rgba(128,0,0,0.65), transparent, transparent), url('/ChoctawIndianFair/img/panel.svg')",
        "pricing-background":
          "linear-gradient(225deg, rgba(128,0,0,0.65), transparent, rgba(128,0,0,0.65)), url('/ChoctawIndianFair/img/overlapping-diamonds.svg')",
        "red-weave":
          "linear-gradient(135deg, rgba(128,0,0,0.65), transparent, rgba(128,0,0,0.65)), url('/ChoctawIndianFair/img/weave02.svg')",
        rope: "linear-gradient(transparent, transparent, rgba(255,0,0,0.25)), url('/ChoctawIndianFair/img/rope.svg')",
        "sponsor-background":
          "url('/ChoctawIndianFair/img/lattice.svg'), linear-gradient(to bottom, rgba(255,0,0,0.15), transparent, transparent, rgba(255,0,0,0.15))",
      },
      backgroundSize: {
        "size-weave": "cover, 144px 96px",
        "size-pricing": "cover, 48px 64px",
      },
    },
  },
  plugins: [],
};
