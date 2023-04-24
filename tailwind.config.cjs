/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#f3f3f3",
                secondary: "#28364c",
                green: "#4a7200",
            },
            boxShadow: {
                card: "0px 35px 120px -15px #211e35",
            },
            screens: {
                xs: "450px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
            },
            backgroundImage: {
                "hero-pattern": "url('/src/assets/herobg.jpg')",
            },
        },
    },
    plugins: [],
};
