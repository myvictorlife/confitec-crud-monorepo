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
      '^@confitec-core/(.*)$': '<rootDir>/src/app/core/*',
      '^@confitec-store/(.*)$': '<rootDir>/src/app/core/store/*',
      '^@confitec-services/(.*)$': '<rootDir>/src/app/core/services/*',
      '^@confitec-models/(.*)$': '<rootDir>/src/app/core/models/*',
      '^@environment': 'environments/environment',
      '^@environment/*': 'environments/*'
    },
    transformIgnorePatterns: [ '/node_modules/(?!module1|module2/).+\\.js$' ]
  };