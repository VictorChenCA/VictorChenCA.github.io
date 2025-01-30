/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        prussian_blue: {
          DEFAULT: "#002642",
          100: "#00080d",
          200: "#000f1b",
          300: "#001728",
          400: "#001f35",
          500: "#002642",
          600: "#005a9b",
          700: "#008ef4",
          800: "#4eb5ff",
          900: "#a6daff",
        },
        baby_powder: {
          DEFAULT: "#f7f7f2",
          100: "#3d3d25",
          200: "#79794a",
          300: "#adad79",
          400: "#d2d2b6",
          500: "#f7f7f2",
          600: "#f9f9f5",
          700: "#fafaf7",
          800: "#fcfcfa",
          900: "#fdfdfc",
        },
        beige: {
          DEFAULT: "#e4e6c3",
          100: "#3a3c19",
          200: "#747732",
          300: "#aeb34b",
          400: "#c9cc86",
          500: "#e4e6c3",
          600: "#e9ebce",
          700: "#eff0da",
          800: "#f4f5e7",
          900: "#fafaf3",
        },
        myrtle_green: {
          DEFAULT: "#587b7f",
          100: "#121919",
          200: "#233133",
          300: "#354a4c",
          400: "#466265",
          500: "#587b7f",
          600: "#739a9e",
          700: "#96b3b6",
          800: "#b9ccce",
          900: "#dce6e7",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
        gradient: "gradient 5s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        gradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

