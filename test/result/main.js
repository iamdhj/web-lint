var name = 'hong'
// [js-beautify] max_preserve_newlines: 3
// [eslint] no-multiple-empty-lines: 2


var age = '29'

// [js-beautify] space_after_anon_function: true
// [eslint] space-before-function-paren {anonymous: "always"}
var func = function () {
  console.log('func')
}

// [eslint] space-before-function-paren {named: "never"}
function func1() {
  console.log('func1')
}

// [eslint] space-before-function-paren {asyncArrow: "always"}
var func2 = async () => console.log('func2')

console.log(name, age)
func()
func1()
func2()
