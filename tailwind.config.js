module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        l20_1: {
          "0%": {
            clipPath: "polygon(50% 50%,0 0,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%)",
          },
          "12.5%": {
            clipPath:
              "polygon(50% 50%,0 0,50% 0%,100% 0%,100% 0%,100% 0%,100% 0%)",
          },
          "25%": {
            clipPath:
              "polygon(50% 50%,0 0,50% 0%,100% 0%,100% 100%,100% 100%,100% 100%)",
          },
          "50%": {
            clipPath:
              "polygon(50% 50%,0 0,50% 0%,100% 0%,100% 100%,50% 100%,0 100%)",
          },
          "62.5%": {
            clipPath:
              "polygon(50% 50%,100% 0,100% 0%,100% 0%,100% 100%,50% 100%,0 100%)",
          },
          "75%": {
            clipPath:
              "polygon(50% 50%,100% 100%,100% 100%,100% 100%,100% 100%,50% 100%,0 100%)",
          },
          "100%": {
            clipPath:
              "polygon(50% 50%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,0 100%)",
          },
        },
        l20_2: {
          "0%": { transform: "scaleY(1) rotate(0deg)" },
          "49.99%": { transform: "scaleY(1) rotate(135deg)" },
          "50%": { transform: "scaleY(-1) rotate(0deg)" },
          "100%": { transform: "scaleY(-1) rotate(-135deg)" },
        },
      },
      animation: {
        l20_1: "l20_1 0.8s infinite linear alternate",
        l20_2: "l20_2 1.6s infinite linear",
      },
      colors: {
        lightblue: "#514b82",
      },
    },
  },
  plugins: [],
};
