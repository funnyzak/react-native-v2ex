# React Native Quick Start

[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![license][license-image]][repository-url]
[![GitHub last commit][last-commit-image]][repository-url]
[![GitHub commit activity][commit-activity-image]][repository-url]

[commit-activity-image]: https://img.shields.io/github/commit-activity/m/funnyzak/react-native-quick-start?style=flat-square
[last-commit-image]: https://img.shields.io/github/last-commit/funnyzak/react-native-quick-start?style=flat-square
[license-image]: https://img.shields.io/github/license/funnyzak/react-native-quick-start.svg?style=flat-square
[repository-url]: https://github.com/funnyzak/react-native-quick-start

React Native 快手开发脚手架项目。

特点

1. 基于 React Native 0.67.2 版本。
2. 使用 TypeScript 编写。

下一步

- [ ] 优化

## 环境

构建运行环境 **Node 16.0.0**，为避免冲突，建议使用此版本。可以使用 **_nvm_** 管理 Node 版本。

主要依赖库：

- eslint: ^7.14.0
- axion
- react-native-render-html
- react-navigation
- react-devtools
- react-native-webview

## 运行

```bash

# clone repos
git clone https://github.com/funnyzak/react-native-quick-start.git

# enter src folder
cd react-native-quick-start

# deps install
yarn

# ios build
# install ios deps
npx pod-install

# cmd under root folder
yarn ios

# android build
# 注意gradle和java sdk(java home)的版本对应，可在 ./android/gradle.properties 设置 org.gradle.java.home
yarn android

# 打印版本信息
npx react-native info

# 升级到最新版
npx react-native upgrade

```

## 调试

### iOS 调试

> 可以通过摇晃设备或是选择 iOS 模拟器的"Hardware"菜单中的"Shake Gesture"选项来打开开发菜单。另外，如果是在 iOS 模拟器中运行，还可以按下 Command⌘ + D 快捷键，Android 模拟器对应的则是 Command⌘ + M（windows 上可能是 F1 或者 F2），或是直接在命令行中运行 adb shell input keyevent 82 来发送菜单键命令。

## 目录

目录结构说明。

    ├── .buckconfig
    ├── .bundle
    ├── .eslintrc.js
    ├── .git
    ├── .gitignore
    ├── .prettierrc.js
    ├── .ruby-version
    ├── .watchmanconfig
    ├── App.tsx
    ├── Gemfile
    ├── Gemfile.lock
    ├── README.md
    ├── __tests__
    ├── android
    ├── app.json
    ├── babel.config.js
    ├── index.js
    ├── ios
    ├── metro.config.js
    ├── node_modules
    ├── package.json
    ├── tsconfig.json
    └── yarn.lock

## 参考

- [enviroment setup](https://reactnative.dev/docs/environment-setup)
- [running on device](https://reactnative.dev/docs/running-on-device)
- [debugging](https://twitter.com/i/spaces/1YqJDqDpqzAxV)
- [react native typescript](https://reactnative.dev/docs/typescript)
- [react native cn](https://reactnative.cn/)
- [react-devtools](https://www.npmjs.com/package/react-devtools)
- [fetch](https://reactnative.cn/docs/network)
- [android build](https://reactnative.cn/docs/signed-apk-android)
- [watchman](https://facebook.github.io/watchman/docs/cli-options.html)
- [EsLint](https://eslint.org/docs/user-guide/configuring/)
- [eslintignore-file](https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file)
- [TSconfig](https://www.typescriptlang.org/tsconfig/)
- [npmrc](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc)
- [gitignore](https://git-scm.com/docs/gitignore)
- [prettier](https://prettier.io/docs/en/index.html)

## License

MIT License © 2021 [funnyzak](https://github.com/funnyzak)
