
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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        'hundo': '100vh',
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },
      backgroundImage: {
        'posa': "url('/posa.jpg')",
        'totoro': "url('/totoro.jpg')",
      },
      backdropBlur: {
        'xxs': '1px',
        'xs': '2px',
      },
      borderWidth: {
        '1': '1px',
      },
      backgroundSize: {
        'full': '100% auto',
      },
    },
  },
  plugins: [],
};
