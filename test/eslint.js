const path = require('path')
const { exec } = require('child_process')

const projectDir = path.resolve(__dirname, '..')
const configPath = `${projectDir}/config/.eslintrc`
const binPath = `${projectDir}/node_modules/.bin/eslint`

const assertFunc = (testStr, done) => {
  exec(`echo "${testStr}" | ${binPath} --stdin --format unix --config ${configPath}   `, (error, stdout, stderr) => {
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
      let testStr = 'function func() {}\nfunc()\n' +
                    'var func1 = function () {}\nfunc1()\n' +
                    'var func2 = async () => {}\nfunc2()'
      assertFunc(testStr, done)
    })

    it('no multiple empty lines', (done) => {
      let testStr = 'console.log(1)\n\nconsole.log(1)'
      assertFunc(testStr, done)
    })
  })
})
