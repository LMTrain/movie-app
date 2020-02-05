
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const PORT = process.env.PORT || 3000;

module.exports = withCss(withSass())
