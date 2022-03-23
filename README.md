# React Native V2EX

[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![license][license-image]][repository-url]
[![GitHub last commit][last-commit-image]][repository-url]
[![GitHub commit activity][commit-activity-image]][repository-url]
[![action][ci-image]][ci-url]
[![Release Date][rle-image]][rle-url]

[down-latest-image]: https://img.shields.io/github/downloads/funnyzak/react-native-v2ex/latest/total.svg
[down-total-image]: https://img.shields.io/github/downloads/funnyzak/react-native-v2ex/total.svg
[commit-activity-image]: https://img.shields.io/github/commit-activity/m/funnyzak/react-native-v2ex?style=flat-square
[last-commit-image]: https://img.shields.io/github/last-commit/funnyzak/react-native-v2ex?style=flat-square
[license-image]: https://img.shields.io/github/license/funnyzak/react-native-v2ex.svg?style=flat-square
[repository-url]: https://github.com/funnyzak/react-native-v2ex
[rle-url]: https://github.com/funnyzak/react-native-v2ex/releases/latest
[rle-all-url]: https://github.com/funnyzak/react-native-v2ex/releases
[ci-image]: https://img.shields.io/github/workflow/status/funnyzak/react-native-v2ex/react-native-android-build-apk
[ci-url]: https://github.com/funnyzak/react-native-v2ex/actions
[rle-image]: https://img.shields.io/github/release-date/funnyzak/react-native-v2ex.svg

这个项目使用了 React Native 构建了一个 [V2EX](https://v2ex.com) 移动客户端应用。目的是为了构建一个 React Native 快速开发脚手架。客户端数据基于 [V2EX](https://v2ex.com) 开放 API。

## 发布

- [Android APK](https://github.com/funnyzak/react-native-v2ex/releases/latest)
- [iOS Testflight](https://testflight.apple.com/join/7UnGRzH1)

**最近在设计全新 UI 交互，功能上暂时不会继续增加。敬请期待关注。😁**

## TODO

- [x] 整体规划，重新设计功能架构
- [ ] 规划重新设计 UI 交互
- [ ] 界面语言文案修正
- [ ] 页面功能组件抽离，提高项目复用性
- [ ] 整理项目所使用开源库
- [x] 发布 Testflight 版
- [ ] 评论列表
- [x] 节点模块
- [ ] 升级提醒
- [ ] 通知模块
- [ ] 上架 App Store、Google Play
- [ ] 通过 cheerio，获取更多的数据，开发交互功能

## 特点

1. 基于 React Native 0.67.2 版本。
2. 引入 TypeScript 强类型检查，保证维护性、可读性、稳定性。
3. eslint 代码规范检查，prettier 代码美化、Husky 作为 git hooks 进行代码格式化、规范校验。
4. i18n 集成，支持多国语言。实现了语言切换功能。
5. 实现 APP 主题（浅色、深色、自动切换）切换功能。
6. 使用 Redux，异步用 Redux Thunk，并用 Redux Persist 数据持久化。
7. 使用 **@redux-devtools/extension** 进行 Redux 调试。
8. 路由使用 React Navgiation，并使用了 Stack Navigator、 Bottom Tabs Navigator、 Material Top Tabs Navigator。
9. 使用 **[react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen)** 控制开屏图。
10. Toast 同时集成了 [react-native-easy-toast](https://github.com/crazycodeboy/react-native-easy-toast#api)、[react-native-toast-message](https://github.com/calintamas/react-native-toast-message)。
11. 日期格式化使用 [dayjs](https://dayjs.gitee.io/docs/zh-CN/installation/typescript)。
12. WebView 使用 [react-native-webview](https://github.com/react-native-webview/react-native-webview)。

## 预览

### iOS

![preview](https://raw.githubusercontent.com/funnyzak/react-native-v2ex/develop/_docs/assets/screenshot/iOS/preview.png)

### Android

![preview](https://raw.githubusercontent.com/funnyzak/react-native-v2ex/develop/_docs/assets/screenshot/Android/preview.png)

## 环境

在 MacOS 下开发，在 iOS 为 13+ 的 iPhone Simulator/iPhone 12、Android 9.0 的 AVD 模拟器/Mi Phone 均编译成功运行。

必须安装 NodeJS(16.0+)、Yarn、[Watchman](https://reactnative.cn/docs/environment-setup)。

- iOS：[CocoaPods](https://reactnative.cn/docs/environment-setup)、Xcode、iOS Simulator。
- Android：Java JDK、Android Studio、Gradle、Android SDK、[Android Home 配置](https://reactnative.cn/docs/environment-setup)、[Android 真机](https://reactnative.cn/docs/running-on-device) 或 [Android AVD](https://developer.android.com/studio/run/managing-avds)（建议用真机）。

具体可根据官网进行 React Native 开发环境和 iOS、Android 运行环境的配置。

参考[这里](https://reactnative.dev/docs/environment-setup)。

关于调试可以安装如下工具：

- Flipper
- react-devtools
- React Native Debugger
- Google Chrome

## 启动

```bash

# clone repos
$ git clone https://github.com/funnyzak/react-native-v2ex.git && cd react-native-v2ex

# deps install
$ yarn

# ios build
npx pod-install

# start react-native-debugger（only mac）
yarn debug

# debug https://reactnative.cn/docs/debugging
npx react-devtools

# iOS simulator start
yarn ios

# Android simulator start
yarn android

# print rn info
npx react-native info

# upgrade rn version
npx react-native upgrade

# iOS debug info start
npx react-native run-ios --verbose

# iOS release build
npx react-native run-ios --configuration Release

# Android debug info start
npx react-native run-android --verbose

# Testing the release build
npx react-native run-android --variant=release

# build android release apk
cd android
# aab file
./gradlew bundleRelease
# apk file
./gradlew assembleRelease

```

## 目录

```plain
├── src                      # 源码目录
│   ├── App.tsx              # app根组件
│   ├── actions              # actions
│   ├── assets               # 静态资源
│   ├── components           # 组件
│   ├── config               # 配置文件
│   ├── helper               # 应用服务类
│   ├── hooks                # 钩子
│   ├── i18n                 # 多语言支持
│   ├── navigation           # 路由导航
│   ├── reducers             # reducers
│   ├── store                # store
│   ├── theme                # 主题
│   ├── types                # 类型定义
│   ├── utils                # 工具类
│   └── v2ex                 # app网络库
├── .buckconfig              # buck的配置文件，buck是Facebook开源的高效编译系统
├── .editorconfig            # 编辑器配置
├── .eslintrc.js             # eslint的配置文件
├── .gitignore               # 配置git提交需要忽略的文件
├── .husky                   # git钩子配置
├── .prettierrc.js           # 代码格式化规则
├── .watchmanconfig          # Watchman的配置文件，用于监控bug文件和文件变化，并且可以出发指定的操作
├── __tests__                # 测试
├── android                  # Android文件所在目录，包含AndroidStudio项目环境文件；
├── app.json                 #
├── babel.config.js          # Babel的配置文件
├── global.d.ts              # ts全局声明文件
├── index.js                 # 程序入口文件
├── ios                      # iOS文件所在目录，包含XCode项目环境；
├── metro.config.js
├── package.json             # 项目基本信息（比如名称、版本、许可证等元数据）以及依赖信息（npm install安装的模块）等
├── tsconfig.json            # typescript编译配置文件
└── yarn.lock                # 依赖版本锁定文件
```

## 贡献

如果你有任何的想法或者意见，欢迎提 Issue 或者 PR。

<a href="https://github.com/funnyzak/react-native-v2ex/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=funnyzak/react-native-v2ex" />
</a>

## 调试

### iOS 调试

> 可以通过摇晃设备或是选择 iOS 模拟器的"Hardware"菜单中的"Shake Gesture"选项来打开开发菜单。另外，如果是在 iOS 模拟器中运行，还可以按下 Command⌘ + D 快捷键，Android 模拟器对应的则是 Command⌘ + M（windows 上可能是 F1 或者 F2），或是直接在命令行中运行 adb shell input keyevent 82 来发送菜单键命令。

使用 **[Flipper](https://fbflipper.com/docs/getting-started/index/)** 调试。

使用 **[react-devtools](https://www.npmjs.com/package/react-devtools)**。

### react-native-debugger 调试

1. 安装 **[react-native-debugger](https://github.com/jhen0409/react-native-debugger)**；
2. `yarn debug` 启动 react-native-debugger。
3. 启动模拟器 `yarn ios`，在模拟器打开 debug remote 选项；

## 常见问题

1.  **Invariant Violation: Module AppRegistry is not a registered callable module**

        remove app from the emulator
        npm cache clean --force
        watchman watch-del-all
        cd ios
        pod update / pod install
        cd ..
        npx react-native run-ios

    [https://stackoverflow.com/questions/64768328/invariant-violation-module-appregistry-is-not-a-registered-callable-module-cal](https://stackoverflow.com/questions/64768328/invariant-violation-module-appregistry-is-not-a-registered-callable-module-cal)

2.  **RCTBridge required dispatch_sync to load RNGestureHandlerModule**

    > [https://github.com/software-mansion/react-native-gesture-handler/issues/722](https://github.com/software-mansion/react-native-gesture-handler/issues/722)

3.  **xcode 编译报错**

        # 删除编译缓存
        rm -rf ~/Library/Developer/Xcode/DerivedData

4.  Android 编译启动注意

    注意 gradle 和 java sdk(java home)的版本对应，可在 ./android/gradle.properties 设置 org.gradle.java.home

5.  开屏图的设置 iOS 使用 LaunchScreen.storyboard，使用 Xcode 修改即可。
6.  修改 bundle name [看这里](https://stackoverflow.com/questions/37389905/change-package-name-for-android-in-react-native)。

## 开源库

- eslint
- lodash
- redux
- react-native-safe-area-context
- react-native-render-html
- react-navigation
- react-devtools
- @redux-devtools/extension
- react-native-webview
- async-storage
- react-native-gesture-handler
- react-native-fast-image
- react-native-reanimated
- react-native-localize
- react-native-device-info
- react-native-webview
- prettier

## 参考

- [enviroment setup](https://reactnative.dev/docs/environment-setup)
- [running on device](https://reactnative.dev/docs/running-on-device)
- [debugging](https://twitter.com/i/spaces/1YqJDqDpqzAxV)
- [react native typescript](https://reactnative.dev/docs/typescript)
- [react native cn](https://reactnative.cn/)
- [react-devtools](https://www.npmjs.com/package/react-devtools)
- [fetch](https://reactnative.cn/docs/network)
- [bundle tool](https://developer.android.google.cn/studio/command-line/bundletool)
- [android build](https://reactnative.cn/docs/signed-apk-android)
- [watchman](https://facebook.github.io/watchman/docs/cli-options.html)
- [EsLint](https://eslint.org/docs/user-guide/configuring/)
- [eslintignore-file](https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file)
- [TSconfig](https://www.typescriptlang.org/tsconfig/)
- [npmrc](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc)
- [gitignore](https://git-scm.com/docs/gitignore)
- [prettier](https://prettier.io/docs/en/index.html)
- [v2ex api 2.0](https://v2ex.com/help/api)
- [v2ex api](https://www.v2ex.com/p/7v9TEc53)
- [v2ex token](https://www.v2ex.com/settings/tokens)
- [react native sample](https://github.com/facebook/react-native)
- [react native typescript sample](https://github.com/react-native-community/react-native-template-typescript) |

## License

MIT License © 2022 [funnyzak](https://github.com/funnyzak)
