const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                yellow: "#F9E94B",
                blue: "#58C1EE",
                bone: "#F4F3BB",
                red: "#EE6A5B",
                pink: "#F1A5C9",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
