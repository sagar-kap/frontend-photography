/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // A warm darkroom at golden hour.
        ink: {
          DEFAULT: "#0c0b09", // warm near-black
          soft: "#15120d",
          raised: "#1d1812",
        },
        bone: {
          DEFAULT: "#f3ece0", // primary text
          dim: "#b3a892",
          faint: "#776e5e",
        },
        amber: {
          DEFAULT: "#e0a04a", // molten golden-hour accent
          deep: "#c87b2d",
          glow: "#f4c87a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        label: "0.32em",
      },
      maxWidth: {
        editorial: "1320px",
      },
      boxShadow: {
        frame: "0 40px 80px -30px rgba(0,0,0,0.85)",
        glow: "0 0 0 1px rgba(224,160,74,0.25), 0 20px 60px -20px rgba(224,160,74,0.35)",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1.08) translate3d(0,0,0)" },
          "100%": { transform: "scale(1.22) translate3d(-1.5%,-2%,0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "reveal-line": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scroll-dot": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(18px)", opacity: "0" },
        },
        aperture: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        kenburns: "kenburns 18s ease-out forwards",
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fade-in 1.2s ease forwards",
        "reveal-line": "reveal-line 1s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee: "marquee 34s linear infinite",
        float: "float 5s ease-in-out infinite",
        "scroll-dot": "scroll-dot 1.8s ease-in-out infinite",
        aperture: "aperture 24s linear infinite",
      },
    },
  },
  plugins: [],
};
