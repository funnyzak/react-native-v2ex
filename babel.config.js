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
          '@res': './src/assets',
          '@type': './src/types'
        }
      }
    ],
    'react-native-reanimated/plugin',
    '@babel/plugin-proposal-export-namespace-from'
  ]
}
