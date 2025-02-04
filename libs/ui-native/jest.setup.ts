import '@testing-library/jest-native/extend-expect';
// import 'react-native-gesture-handler/jestSetup';

// Mock pour `react-native-reanimated`
// jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

// Mock pour `react-native-svg`
jest.mock('react-native-svg', () => 'SvgMock');

// Désactiver les logs des erreurs de React Native dans les tests
jest.spyOn(global.console, 'error').mockImplementation((message) => {
  if (message.includes('Warning:')) return;
  console.error(message);
});