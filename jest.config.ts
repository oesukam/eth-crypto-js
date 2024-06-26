export default {
  testEnvironment: 'node',
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['node_modules', 'dist', 'src/index.ts', 'jest.config.js', 'package.json'],
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: ['TS151001'],
        },
        tsconfig: '<rootDir>/tsconfig.json',
      },
    ],
  },
  coverageThreshold: {
    global: {
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};
