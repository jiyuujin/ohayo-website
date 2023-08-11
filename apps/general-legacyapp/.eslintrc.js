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
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/no-v-html': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', 'Pagination', '[date]', '[tag]', '[...all]', 'default', '404']
      }
    ]
  }
}
