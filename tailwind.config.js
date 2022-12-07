/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      screens: {
        'supports-hover': { raw: '(hover: hover)' },
        'no-hover-support': { raw: '(hover: none)' },
        // 'max-lg': { max: '1023px' },
        // 'max-md': { max: '767px' },
      },
    },
  },
};
