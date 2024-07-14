export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'ci', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert', 'security'],
    ],
    'type-case': [2, 'always', 'lower-case'],
  },
};
