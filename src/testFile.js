module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
}

const sum = (a, b) => {
  return a + b
}

// Missing semicolon and extra spacing
const multiply = (a, b) => { return a * b }

if (multiply(1, 2) === 2) {
  // console.log('This is not type-safe.')
}

// Unused variable 'c'
// const unusedVar = (a, b) => {
//   return a + b
// }

// '==' should be '==='
if (sum(1, 2) === 3) {
  // console.log('This is not type-safe.')
}

// Trailing whitespace at the end of the line
const divide = (a, b) => {
  if (b === 0) {
    return 'Cannot divide by zero.'
  }
  return a / b
}

if (divide(2, 2) === 1) {
  // console.log('This is not type-safe.')
}

// 'var' instead of 'let' or 'const'
// const outdatedVar = "I'm an outdated variable declaration"

// Global variable without declaration
// const undeclaredVar = 'I am undeclared'
