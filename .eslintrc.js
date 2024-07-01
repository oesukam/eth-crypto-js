module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  exclude: ['node_modules/**', 'dist/**'],
  overrides: [
    {
      files: ['rollup.config.js'],
      parser: 'espree', // Use the default JS parser for this file
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // Disable TS specific rules for this file
      },
    },
  ],
};
