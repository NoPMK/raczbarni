/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Constantia", "Lora", "Georgia", "ui-serif", "serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        racz: {
          primary: "#228b22",
          "primary-content": "#f4f8f2",
          secondary: "#46b358",
          "secondary-content": "#06140d",
          accent: "#5cc46c",
          "accent-content": "#06140d",
          neutral: "#0a130f",
          "neutral-content": "#e7ece6",
          "base-100": "#0e1a14",
          "base-200": "#15251d",
          "base-300": "#22382c",
          "base-content": "#e7ece6",
          info: "#7fd6a3",
          success: "#4fb578",
          warning: "#d9a441",
          error: "#e0715c",
          "--rounded-box": "1.25rem",
          "--rounded-btn": "0.75rem",
        },
      },
    ],
  },
};
