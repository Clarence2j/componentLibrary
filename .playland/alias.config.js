const path = require('path')
const resolvePath = path.resolve.bind(null, __dirname)

module.exports = {
  resolve: {
    alias: {'@testlocal/npmbag': resolvePath('../src')},
  }
}