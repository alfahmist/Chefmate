/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                "article-1": "url('./img/makanan-artikel.jpg')",
                "article-2": "url('./img/roasted-chicken.jpg')",
                "article-3": "url('./img/ayam-goreng.jpg')",
                "article-4": "url('./img/mie-goreng-telur.jpg')",
            },
            colors: {
                primary: "#f97316",
            },
        },
    },
    plugins: [],
};
