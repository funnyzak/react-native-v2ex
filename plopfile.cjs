const screenGenerator = require('./plop/screen/prompt.cjs')
const componentGenerator = require('./plop/component/prompt.cjs')

module.exports = function (plop) {
  plop.setGenerator('screen', screenGenerator)
  plop.setGenerator('component', componentGenerator)
}
