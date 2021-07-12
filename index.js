const fs = require('fs')
const path = require('path')
const { nextStep } = require('./sim')

const argIndex = process.argv.findIndex(x => x === '--input')
const filename = process.argv[argIndex + 1]
if (argIndex === -1 || !filename) {
  console.log('missing --input argument')
  process.exit(1)
}

const fileContents = fs.readFileSync(path.join(__dirname, filename), 'utf8')
const gen1 = fileContents.split('\n').map(line => line.split(''))

const gen2 = nextStep(gen1)

console.log(gen2)
