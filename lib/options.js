'use strict'

const optionator = require('optionator')

module.exports = optionator({
  prepend: 'Usage: web-lint [options] path [dir]',
  options: [{
    option: 'help',
    alias: 'h',
    type: 'Boolean',
    description: 'displays help'
  }, {
    option: 'init',
    alias: 'i',
    type: 'path::String',
    description: 'copy config file to project'
  }]
})
