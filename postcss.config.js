// postcss.config.js
const themeDir = __dirname;

const purgecss = require("@fullhuman/postcss-purgecss")({
  // see https://gohugo.io/hugo-pipes/postprocess/#css-purging-with-postcss
  // content: ["./hugo_stats.json", themeDir + "/hugo_stats.json"],
  content: ["./hugo_stats.json", themeDir + "/hugo_stats.json"],
  safelist: [/type/],
  defaultExtractor: (content) => {
    let els = JSON.parse(content).htmlElements;
    return els.tags.concat(els.classes, els.ids);
  },
});

module.exports = {
  plugins: [
    require("postcss-import")({ path: [themeDir] }),
    require("tailwindcss/nesting"),
    require("tailwindcss")(themeDir + "/tailwind.config.js"),
    ...(process.env.HUGO_ENVIRONMENT === "production" ? [purgecss] : []),
    require("autoprefixer")({
      path: [themeDir],
    }),
  ],
};
