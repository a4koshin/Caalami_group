/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out both",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newDelays = {
        ".delay-100": { "animation-delay": "100ms" },
        ".delay-200": { "animation-delay": "200ms" },
        ".delay-300": { "animation-delay": "300ms" },
      };
      addUtilities(newDelays, ["responsive", "hover"]);
    },
  ],
};
