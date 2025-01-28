/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#027738", // Com primária (clara)
        secondary: "#09351C", // Cor primária (escura)
        tertiary: "", // Opcional
        quaternary: "#737373", // Cinza neutro -> Parágrafos
        quinary: "#f6f6f6", // Com primária bem clara ou cinza -> Bg de seções
        verylighter: "#21A202",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xxs: "0.625rem",
        title1: "1.25rem", // 20px -> | Cards Mobile e subtítulos de seção
        title2: "1.375rem", // 22px -> Cards com muita info | Section header mobile, paralaxe
        title3: "1.5rem", // 24px -> Cards de serviços | Hero mobile
        title4: "1.875rem", // 30px -> Paralax e Seções 1/2 | Números grandes
        title5: "2.25rem", // 36px -> Section header
        title6: "3rem", // 48px -> Números grandes
        title7: "3.4375rem", // 55px -> Hero desktop
        paragraph1: "0.625rem", // 10px
        paragraph2: "0.75rem", // 12px | Texto da linha de crédito
        paragraph3: "0.875rem", // 14px | Texto hero section e section header description, about do footer (texto de acordion)
        paragraph4: "1rem", // 16px | Textos especiais (cards do footer, tpitulo de acordion, links do footer)
        paragraph5: "1.125rem", // 18px
      },
      spacing: {
        112: "28rem",
        120: "30rem",
        128: "32rem",
      },
      screens: {
        phone1: "320px",
        phone2: "375px",
        phone3: "425px",
        tablet1: "640px",
        tablet2: "768px",
        desktop1: "1024px",
        desktop2: "1280px",
        desktop3: "1440px",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-5%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0%)", opacity: "1" },
          "100%": { transform: "translateY(-5%)", opacity: "0" },
        },
      },
      animation: {
        "slide-down": "slideDown 1s ease",
        "slide-up": "slideUp 1s ease",
      },
    },
  },
  plugins: [],
};
