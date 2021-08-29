module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {node: 'current'},
        modules: process.env.BABEL_ENV === 'esm' ? false : 'commonjs',
      },
    ],
    [
      '@babel/preset-react',
      {
        useBuiltIns: true,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
  ],
}