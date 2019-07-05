const CleanCSS = require('clean-css')

module.exports = function (eleventyConfig) {
  // Filters
  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles
  })

  // Aliases are in relation to the _includes folder
  eleventyConfig.addLayoutAlias('base', 'layouts/base.liquid')

  // Passtrhough copy
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy('src/js')
  eleventyConfig.addPassthroughCopy('src/upup.min.js')
  eleventyConfig.addPassthroughCopy('src/upup.sw.min.js')

  eleventyConfig.addPassthroughCopy('src/favicon.ico')
  eleventyConfig.addPassthroughCopy('src/favicon-16x16.png')
  eleventyConfig.addPassthroughCopy('src/favicon-32x32.png')
  eleventyConfig.addPassthroughCopy('src/mstile-150x150.png')
  eleventyConfig.addPassthroughCopy('src/safari-pinned-tab.svg')
  eleventyConfig.addPassthroughCopy('src/apple-touch-icon.png')
  eleventyConfig.addPassthroughCopy('src/android-chrome-192x192.png')
  eleventyConfig.addPassthroughCopy('src/android-chrome-512x512.png')
  eleventyConfig.addPassthroughCopy('src/browserconfig.xml')
  eleventyConfig.addPassthroughCopy('src/site.webmanifest')

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],
    dir: {
      includes: '_includes', // Equivalent to Jekyll's includes property
      input: './src',      // Equivalent to Jekyll's source property
      output: './dist' // Equivalent to Jekyll's destination property
    },
    passthroughFileCopy: true
  }
}
