module.exports = {
  extends: [
    '@nekohack/eslint-config-vue',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  rules: {
    'vue/no-multiple-template-root': 'off'
  }
}