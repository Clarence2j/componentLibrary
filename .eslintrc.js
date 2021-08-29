const path = require('path')
const resolvePath = path.resolve.bind(null, __dirname)

module.exports = {
  settings: {
    'import/resolver': {
      webpack: {
        // 为 eslint-plugin-import 处理 examples 目录下的引用
        config: resolvePath('.playland/alias.config.js'),
      },
    },
  },
  rules: {
    'react/jsx-uses-react': 1,
  },
}