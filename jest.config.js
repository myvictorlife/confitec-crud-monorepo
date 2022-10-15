module.exports = {
    preset: 'jest-preset-angular',
    roots: ['<rootDir>'],
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    transform: {
      '^.+\\.(ts|js|html)$': 'jest-preset-angular'
    },
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      }
    },
    coverageThreshold: {
      global: {
        branches: 1,
        functions: 1,
        lines: 1,
        statements: 1,
      },
    },
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!src/**/*.module.ts',
      '!src/main.ts',
      '!src/app/core/store/index.ts',
      '!src/app/core/core.effects.ts',
      '!<rootDir>/node_modules/',
      '!<rootDir>/src/polyfills.ts',
    ],
    coveragePathIgnorePatterns: ['src/environments/*'],
    moduleNameMapper: {
      '^@confitec-core/(.*)$': '<rootDir>/src/app/core/$1',
      '^@confitec-store/(.*)$': '<rootDir>/src/app/core/store/$1',
      '^@confitec-services/(.*)$': '<rootDir>/src/app/core/services/$1',
      '^@confitec-models/(.*)$': '<rootDir>/src/app/core/models/$1',
      '^@environment': 'environments/environment',
      '^@environment/*': 'environments/$1'
    },
    transformIgnorePatterns: [ '/node_modules/(?!module1|module2/).+\\.js$' ]
  };