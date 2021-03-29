module.export = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  testMatch: ['<rootDir>/src/**/>(*.)test.{js, jsx}'], // finds test
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/public/',
    'src/index',
    'src/App.js',
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
  ],
  moduleNameMapper: {
    '@api': '<rootDir>/src/services/api/',
    '@assets/(.*)$': '<rootDir>/src/assets/$1',
    '@commons/(.*)$': '<rootDir>/src/commons/$1',
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@config': '<rootDir>/src/config/',
    '@fonts/(.*)$': '<rootDir>/src/assets/fonts/$1',
    '@images/(.*)$': '<rootDir>/src/assets/images/$1',
    '@pages/(.*)$': '<rootDir>/src/pages/$1',
    '@routes': '<rootDir>/src/config/routes/',
    '@services/(.*)$': '<rootDir>/src/services/$1',
    '@utils/(.*)$': '<rootDir>/src/commons/utils/$1',
  },
};
