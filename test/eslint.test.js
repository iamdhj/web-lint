const path = require('path')
const { exec } = require('child_process')

const projectDir = path.resolve(__dirname, '..')
const sourceDir = path.join(__dirname, 'source')
const configPath = `${projectDir}/config/.eslintrc`
const binPath = `${projectDir}/node_modules/.bin/eslint`

const assertFunc = (testFile, done) => {
  exec(`${binPath} ${testFile} --format unix --config ${configPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(error)
      return
    }
    done(stdout)
  })
}

describe('eslint', () => {
  describe('rules', () => {
    it('space before function paren', (done) => {
      assertFunc(`${sourceDir}/eslint-space.js`, done)
    })

    it('no multiple empty lines', (done) => {
      assertFunc(`${sourceDir}/eslint-lines.js`, done)
    })
  })
})
