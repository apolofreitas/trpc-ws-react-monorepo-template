module.exports = {
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  extends: [
    'turbo',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@cspell/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
    'eslint-plugin-import-helpers',
    '@cspell',
  ],
  rules: {
    'import/no-relative-packages': 'error',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['parent', 'sibling', 'type', 'index'],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'space-before-function-paren': 'off',
    'multiline-ternary': 'off',
    '@cspell/spellchecker': 'warn',
  },
}
