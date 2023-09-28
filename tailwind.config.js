/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        userMainBgColor: "hsl(228, 71%, 99%)",
        userCardBgColor: "hsl(0, 0%, 100%)",
        userNotificationNotReadBgColor: "hsl(206, 64%, 98%)",
        userNotificationReadBgColor: "hsl(0, 0%, 100%)",
        userNotificationMessageHoverBgColor: "hsl(210, 60%, 98%)",
        userUserTextColor: "hsl(224, 21%, 14%)",
        userLinkHoverColor: "hsl(222, 71%, 24%)",
        userTextColor: "hsl(219, 14%, 63%)",
        userBoldTextColor: "hsl(219, 12%, 42%)",
        userLinkBlueColor: "hsl(218, 58%, 25%)",
        userVerLightGrayistBlue: "hsl(210, 60%, 98%)",
        userLightGrayishBlue1: "hsl(211, 68%, 94%)",
        userLightGrayishBlue2: "hsl(205, 33%, 90%)",
        userGrayishBlue: "hsl(219, 14%, 63%)",
      },
    },
  },
  plugins: [],
}