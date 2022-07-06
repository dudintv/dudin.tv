module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  rules: {
    'comma-dangle': 'off',
    'no-console': 'off',
    'quote-props': 'off',
    'no-multi-spaces': 'off',
    'arrow-parens': 'off',
    'require-await': 'off',
    'no-useless-escape': 'off',
    'css-semicolonexpected': 'off',
    'space-before-function-paren': 'off',
    'unicorn/number-literal-case': 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'vue/comment-directive': 'off',
      },
    },
  ],
}
