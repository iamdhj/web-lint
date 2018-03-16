#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
const { COPYFILE_EXCL } = fs.constants

const options = require('../lib/options')
const configDir = path.resolve(__dirname, '..', 'config')

try {
  const argv = process.argv

  let opt = options.parse(argv)
  let dir = opt._

  if (dir.length === 1 || opt.init) {
    let project = dir[0] || opt.init

    // copy config file to project
    fs.readdirSync(configDir).forEach((file) => {
      let src = `${configDir}/${file}`
      let dest = `${project}/${file}`
      fs.copyFileSync(src, dest, COPYFILE_EXCL)
      console.log(`copy: ${src} -> ${dest}`)
    })
  } else if (dir.length !== 1 || opt.help) {
    console.log(options.generateHelp())
  }
} catch (e) {
  console.error(e.message)
}
