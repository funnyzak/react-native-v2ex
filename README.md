# React Native Quick Start

[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![license][license-image]][repository-url]

[license-image]: https://img.shields.io/github/license/funnyzak/react-native-.svg?style=flat-square
[repository-url]: https://github.com/funnyzak/react-native-quick-start

React Native 快手开发脚手架项目。

特点

1. 基于 React Native 0.67.2 版本。
2. 使用 TypeScript 编写。

下一步

- [ ] 优化

## 环境

构建运行环境 **Node 16.13.0**，为避免冲突，建议使用此版本。可以使用 **_nvm_** 管理 Node 版本。

主要依赖库：

- eslint: ^7.14.0
- axion
- react-native-render-html
- react-navigation

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
cd ./ios && pod install

# cmd under root folder
yarn ios

# android build
# 注意gradle和java sdk(java home)的版本对应，可在 ./android/gradle.properties 设置 org.gradle.java.home
yarn android

```

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
- [react native typescript](https://reactnative.dev/docs/typescript)
- [react native cn](https://reactnative.cn/)
- [watchman](https://facebook.github.io/watchman/docs/cli-options.html)
- [EsLint](https://eslint.org/docs/user-guide/configuring/)
- [eslintignore-file](https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file)
- [TSconfig](https://www.typescriptlang.org/tsconfig/)
- [npmrc](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc)
- [gitignore](https://git-scm.com/docs/gitignore)
- [prettier](https://prettier.io/docs/en/index.html)

## License

MIT License © 2021 [funnyzak](https://github.com/funnyzak)
