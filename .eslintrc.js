module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': 'off',
    'no-console': 'off',
    'quote-props': 'off',
    'no-multi-spaces': 'off',
    'arrow-parens': 'off',
    'require-await': 'off',
    'no-useless-escape': 'off',
  }
}
