/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html",
  ],
  theme: {
    extend: {},
  },
  purge: {
    content: ["./hugo_stats.json"],
    defaultExtractor: (content) => {
      let els = JSON.parse(content).htmlElements;
      return els.tags.concat(els.classes, els.ids);
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("daisyui"),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/line-clamp'),
  ],
};
