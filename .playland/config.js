const alias = require('./alias.config')
const {getBabelLoader, withLoader} = require('playland/webpack')

module.exports = {
  webpack(config) {
    Object.assign(config.resolve.alias, alias.resolve.alias)
    const babelLoader = getBabelLoader(config)
    babelLoader.options.plugins.push(
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining'
    )
    return config
  },
}