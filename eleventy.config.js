const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");
module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPassthroughCopy("src/tests/images");
  eleventyConfig.addPassthroughCopy("src/js");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
