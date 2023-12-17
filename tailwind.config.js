import DaisyUiPlugin from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-1": "var(--color-1)",
        "color-2": "var(--color-2)",
        "color-3": "var(--color-3)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00cedf",
          secondary: "#f39b83",
          accent: "#0070ff",
          neutral: "#030f19",
          "base-100": "#fffbf4",
          info: "#00b0f2",
          success: "#00b774",
          warning: "#ffb300",
          error: "#ff7890",
        },
      },
      "night",
    ],
  },
  plugins: [DaisyUiPlugin],
};
