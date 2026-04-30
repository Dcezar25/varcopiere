import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        cream: "hsl(var(--cream))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-primary": "var(--gradient-primary)",
        "gradient-accent": "var(--gradient-accent)",
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0) translateX(0)", opacity: "0.7" },
          "50%": { transform: "translateY(-22px) translateX(6px)", opacity: "1" },
        },
        "float-y-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)", opacity: "0.6" },
          "50%": { transform: "translateY(-30px) translateX(-8px)", opacity: "1" },
        },
        "blob-drift": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-30px,20px) scale(1.08)" },
        },
        "blob-drift-slow": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(40px,-25px) scale(1.12)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.85)", opacity: "0.6" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        "nose-before": {
          "0%, 40%": { opacity: "1" },
          "50%, 90%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "nose-after": {
          "0%, 40%": { opacity: "0" },
          "50%, 90%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "dash-flow": {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-180" },
        },
        "arrow-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(-3px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 1s ease-out both",
        "float-y": "float-y 5s ease-in-out infinite",
        "float-y-slow": "float-y-slow 7s ease-in-out infinite",
        "blob-drift": "blob-drift 14s ease-in-out infinite",
        "blob-drift-slow": "blob-drift-slow 18s ease-in-out infinite",
        "pulse-ring": "pulse-ring 3.5s ease-out infinite",
        "nose-before": "nose-before 5s ease-in-out infinite",
        "nose-after": "nose-after 5s ease-in-out infinite",
        "dash-flow": "dash-flow 6s linear infinite",
        "arrow-pulse": "arrow-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
