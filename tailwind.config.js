/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        // Cor primária institucional (Azul TSE)
        primary: {
          900: "#0C2340",
          700: "#003E7E",
          500: "#1A6FB5",
          200: "#A8C8EC",
          100: "#E8F1FA",
        },
        // Cor secundária (Dourado)
        secondary: {
          700: "#92652B",
          500: "#C9924D",
          100: "#FDF6EC",
        },
        // Neutros
        neutral: {
          950: "#0F1419",
          700: "#374151",
          400: "#9CA3AF",
          100: "#F3F4F6",
          50: "#F9FAFB",
        },
        // Semânticas
        success: "#059669",
        warning: "#D97706",
        muted: "#9CA3AF",
        // Categorias
        cat: {
          ELE: "#003E7E",
          REG: "#1B6B4A",
          PRO: "#C75C00",
          FIN: "#8B6914",
          ADM: "#3D5A80",
          FIS: "#2E4057",
          CON: "#B91C1C",
          VOT: "#1E3A5F",
          PES: "#0E7490",
          DIP: "#14532D",
        },
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.06)",
        "card-hover":
          "0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.08)",
      },
      animation: {
        "slide-down": "slideDown 300ms ease-out",
        "slide-up": "slideUp 300ms ease-out",
        "fade-in": "fadeIn 400ms ease-out",
      },
      keyframes: {
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
