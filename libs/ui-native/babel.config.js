module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        '@nx/react/babel',
        {
          runtime: 'automatic',
          useBuiltIns: 'usage',
        },
      ],
    ],
    plugins: [],
    env: {
      test: {
        presets: [
          'module:metro-react-native-babel-preset',
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
          ['module:@react-native/babel-preset', { useTransformReactJSX: true }],
        ],
        plugins: [
          '@babel/plugin-transform-flow-strip-types'
        ],
      },
    },
  };
};
