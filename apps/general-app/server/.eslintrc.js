module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  root: true,
  env: { node: true, es6: true },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
}
