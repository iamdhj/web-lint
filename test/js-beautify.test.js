const fs = require('fs')
const path = require('path')

const {
  js_beautify: jsBeautify,
  css_beautify: cssBeautify,
  html_beautify: htmlBeautify
} = require('js-beautify')
const configPath = path.resolve(__dirname, '../config/.jsbeautifyrc')

let configFile
try {
  configFile = fs.readFileSync(configPath)
} catch (e) {
  console.error(e)
}

const config = JSON.parse(configFile)
const assert = require('assert')

let { js: jsConfig, css: cssConfig, html: htmlConfig } = config

Object.keys(config).forEach((key) => {
  if (typeof config[key] !== 'object') {
    jsConfig[key] = jsConfig[key] || config[key]
    cssConfig[key] = cssConfig[key] || config[key]
    htmlConfig[key] = htmlConfig[key] || config[key]
  }
})

describe('js-beautify', () => {
  describe('js format', () => {
    it('indent size is 2', () => {
      assert.equal(jsBeautify('function test(){\nconsole.log("func")\n}', jsConfig), 'function test() {\n  console.log("func")\n}\n')
    })

    it('brace style', () => {
      assert.equal(jsBeautify('var obj={a:1} obj=\n{b:2} obj={\nc:3}', jsConfig), 'var obj = { a: 1 } obj = { b: 2 } obj = {\n  c: 3\n}\n')
    })

    it('max preserve new lines is 2', () => {
      assert.equal(jsBeautify('var a\n\n\n\n\nvar b', jsConfig), 'var a\n\nvar b\n')
    })

    it('space after anon function', () => {
      assert.equal(jsBeautify('var func=function(){}', jsConfig), 'var func = function () {}\n')
    })
  })

  describe('css format', () => {
    it('space around combinator', () => {
      assert.equal(cssBeautify('html>body{font-size:12px;}', cssConfig), 'html > body {\n  font-size: 12px;\n}\n')
    })
  })

  describe('html format', () => {
    it('indent size is 4 and extra liners null', () => {
      assert.equal(htmlBeautify('<html><head><title></title></head><body></body></html>', htmlConfig), '<html>\n<head>\n    <title></title>\n</head>\n<body></body>\n</html>\n')
    })
  })
})
