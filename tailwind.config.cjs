/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "josefina-sans": ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        "desktop-dark": "url(./assets/images/bg-desktop-dark.jpg)",
        "mobile-dark": "url(./assets/images/bg-mobile-dark.jpg)",
        "desktop-light": "url(./assets/images/bg-desktop-light.jpg)",
        "mobile-light": "url(./assets/images/bg-mobile-light.jpg)",
      },
      colors: {
        "bright-blue": " hsl(220, 98%, 61%)",
        "check-gradient1": "hsl(192, 100%, 67%)",
        "check-gradient2": "hsl(280, 87%, 65%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-grayish-blue": "hsl(233, 11%, 84%)",
        "dark-grayish-blue": "hsl(236, 9%, 61%)",
        "very-dark-grayish-blue": "hsl(235, 19%, 35%)",
        "very-dark-blue": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "light-grayish-blue2": "hsl(234, 39%, 85%)",
        "light-grayish-blue-hover": "hsl(236, 33%, 92%)",
        "dark-grayish-blue2": "hsl(234, 11%, 52%)",
        "very-dark-grayish-blue2": "hsl(233, 14%, 35%)",
        "very-dark-grayish-blue3": "hsl(237, 14%, 26%)",
      },
    },
  },
  plugins: [],
};
