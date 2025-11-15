/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        muted: "var(--muted)",
        gold: "var(--gold)",
        "gold-2": "var(--gold-2)",
        "gold-dark": "#a78316",
        glass: "var(--glass)",
        border: "var(--border)",
        error: "#ff6b6b",
        ring: "rgba(212,175,55,.35)",
      },
      fontFamily: {
        sans: [
          "Good Times Rg",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        "good-times": ['"Good Times Rg"', "sans-serif"],
        "exo-italic": ['"Exo ExtraBold Italic"', "sans-serif"],
      },
      boxShadow: {
        main: "var(--shadow)",
        button:
          "inset 0 1px 0 rgba(255,255,255,.25), 0 12px 30px rgba(212,175,55,.25)",
        "button-hover":
          "inset 0 1px 0 rgba(255,255,255,.35), 0 16px 36px rgba(212,175,55,.32), 0 0 0 8px rgba(212,175,55,.35)",
      },
      animation: {
        spin: "spin 1s linear infinite",
        blip: "blip 0.9s infinite ease-in-out",
      },
      keyframes: {
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        blip: {
          "0%, 100%": {
            transform: "translateY(0)",
            opacity: "0.8",
          },
          "50%": {
            transform: "translateY(-8px)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
}