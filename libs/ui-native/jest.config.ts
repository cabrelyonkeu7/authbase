export default {
  displayName: 'ui-native',
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {configFile: './babel.config-test.js'}],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-native-community|@testing-library)/)',
  ],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageReporters: ['cobertura', 'lcov'],
  coverageDirectory: '../../coverage/libs/ui-native',
};