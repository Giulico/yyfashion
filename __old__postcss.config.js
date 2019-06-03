// in postcss.config.js
const postcssPresetEnv = require(`postcss-preset-env`)
const postcssNesting = require(`postcss-nesting`)
const postcssCustomMedia = require(`postcss-custom-media`)

module.exports = () => ({
  plugins: [
    postcssNesting(),
    postcssCustomMedia(),
    postcssPresetEnv({
      stage: 4
    })
  ]
})
