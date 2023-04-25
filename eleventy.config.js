const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");
module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css/special");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
