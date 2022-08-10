module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@src': './src',
          '@config': './src/config',
          '@res': './src/assets'
        }
      }
    ],
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin'
  ]
}
