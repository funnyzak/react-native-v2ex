# React Native V2EX

[![Build Status][build-status-image]][build-status]
[![license][license-image]][repository-url]
[![GitHub repo size][repo-size-image]][repository-url]
[![Release Date][rle-image]][rle-url]
[![GitHub last commit][last-commit-image]][repository-url]
[![tag][tag-image]][rle-url]

项目使用了 React Native 构建了一个 [V2EX](https://v2ex.com) 移动客户端应用。目的是为了构建一个 React Native 快速开发脚手架。客户端数据完全基于 [V2EX](https://v2ex.com) 开放 API。基于 RN 0.71.3。

`Figma 设计稿` 已经开源，可[从此 Duplicate](https://www.figma.com/community/file/1101074002447399194)。

## Installation

- [Android APK](https://github.com/funnyzak/react-native-v2ex/releases/latest)
- [iOS Testflight](https://testflight.apple.com/join/7UnGRzH1)

## TODO

- [ ] 上架 App Store、Google Play
- [ ] 通过 cheerio，获取更多的数据，开发交互功能

## Done

- [x] 升级提醒
- [x] 升级 RN 到到 **0.71.3**
- [x] 升级 RN 到到 **0.70.6**
- [x] 升级 RN 到到 **0.70.5**
- [x] 升级 RN 到到 **0.70.4**
- [x] 升级 RN 到到 **0.70.3**
- [x] plop 模板创建
- [x] 升级 RN 到到 **0.70.1**
- [x] 升级 RN 到到 **0.69.4**
- [x] 整体规划，重新设计功能架构
- [x] 发布 Testflight 版
- [x] 节点模块
- [x] 规划重新设计 UI 交互
- [x] 界面语言文案修正
- [x] 整理项目所使用开源库
- [x] 全新开发
- [x] 评论列表
- [x] 通知模块
- [x] 收藏主题
- [x] 关注的人

## Features

1. 基于 React Native 0.71.3 版本。
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

## Preview

### iOS

![preview](https://raw.githubusercontent.com/funnyzak/react-native-v2ex/dev/_docs/assets/screenshot/iOS/preview2.jpeg)

### Android

![preview](https://raw.githubusercontent.com/funnyzak/react-native-v2ex/dev/_docs/assets/screenshot/Android/preview2.jpeg)

## Development

目前在 MacOS 下开发，在 iOS 为 16+ 的 iPhone Simulator/iPhone 14、Android 9.0 的 AVD 模拟器/Mi Phone 均编译成功运行。

- 安装 NodeJS(18.0+)、Yarn、[Watchman](https://reactnative.cn/docs/environment-setup)。
- Java JDK建议用 11（配置环境变量 **JAVE_HOME**，高于这个版本编译可能会报错）。
- iOS平台需要配置[CocoaPods](https://reactnative.cn/docs/environment-setup)、Xcode、iOS Simulator。
- Android Studio、Gradle、Android SDK、[Android Home 配置](https://reactnative.cn/docs/environment-setup)、Android NDK。
- Android平台需要 [Android 真机](https://reactnative.cn/docs/running-on-device) 或 [Android AVD](https://developer.android.com/studio/run/managing-avds)（建议用真机）。

具体可根据官网进行 React Native 开发环境和 iOS、Android 运行环境的配置。参考[这里](https://reactnative.dev/docs/environment-setup)。

## Develop

```bash

# clone repos
$ git clone https://github.com/funnyzak/react-native-v2ex.git && cd react-native-v2ex

# deps install
$ yarn

# 依赖包额外补丁
yarn postinstall

# ios pod install
yarn pod

# start react-native-debugger（only mac）
yarn debug

# debug https://reactnative.cn/docs/debugging
npx react-devtools

# iOS simulator start
yarn ios

# Android simulator start
yarn android

# plop generate template
yarn p

# print rn info
npx react-native info

# upgrade rn version
npx react-native upgrade

# iOS debug info start
npx react-native run-ios --verbose

# iOS release build
npx react-native run-ios --configuration Release

# iOS debug use special device
react-native run-ios --simulator="iPhone 8"

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

npx react-native run-android --variant release

```

## Structure

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
│   └── api                  # API库
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

## Contribution

如果你有任何的想法或者意见，欢迎提 Issue 或者 PR。

<a href="https://github.com/funnyzak/react-native-v2ex/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=funnyzak/react-native-v2ex" />
</a>

## Debug

### Debug Tools

- **[Hermes Debugger](https://reactnative.cn/docs/hermes#debugger)** is a standalone app for debugging React Native apps that use Hermes.
- **[Flipper](https://fbflipper.com/docs/getting-started/index/)** is a desktop debugging platform for mobile developers.
- **[react-devtools](https://www.npmjs.com/package/react-devtools)** is a standalone app for inspecting the React component hierarchy.
- **[React Native Debugger](https://github.com/jhen0409/react-native-debugger/blob/master/docs/getting-started.md) is a standalone app for debugging React Native apps, and includes React DevTools.
- Google Chrome 调试，[参考](https://reactnative.cn/docs/debugging#chrome)。

### Debug Menu

可以通过摇晃设备或是选择 iOS 模拟器的"Hardware"菜单中的"Shake Gesture"选项来打开开发菜单。另外，如果是在 iOS 模拟器中运行，还可以按下 Command⌘ + D 快捷键，Android 模拟器对应的则是 Command⌘ + M（windows 上可能是 F1 或者 F2），或是直接在命令行中运行 adb shell input keyevent 82 来发送菜单键命令。

### react-native-debugger

1. 安装 **[react-native-debugger](https://github.com/jhen0409/react-native-debugger/blob/master/docs/getting-started.md)**;
2. `yarn debug` 启动 react-native-debugger;
3. 启动模拟器 `yarn ios`，在模拟器打开 debug remote 选项。

**注意：** 使用此方式，需要禁用 `Hermes`，否则会报错。建议启用 Hermes 开关，使用 Hermes 调试。

## FAQ

### 配置BugSnag

1. [Create a bugsnag account](https://app.bugsnag.com/user/new).
2. Add your project api key to [android/app/src/main/AndroidManifest.xml](android/app/src/main/AndroidManifest.xml#L25-L26):

   ```xml
      <meta-data android:name="com.bugsnag.android.API_KEY"
                 android:value="YOUR-API-KEY-HERE" />
   ```

   and [ios/app/Info.plist](ios/app/Info.plist):

   ```xml
    <key>BugsnagAPIKey</key>
    <string>YOUR-API-KEY-HERE</string>
   ```

    The API key can be found in the Bugsnag settings for your project.

### Invariant Violation: Module AppRegistry is not a registered callable module

```bash
npm cache clean --force
watchman watch-del-all
rm -rf node_modules

# for ios
cd ios
pod update && pod install
cd ..
npx react-native run-ios
# for android
cd android && ./gradlew clean
cd ..
npx react-native run-android
```

Reference: [https://stackoverflow.com/questions/64768328/invariant-violation-module-appregistry-is-not-a-registered-callable-module-cal](https://stackoverflow.com/questions/64768328/invariant-violation-module-appregistry-is-not-a-registered-callable-module-cal)

### RCTBridge required dispatch_sync to load RNGestureHandlerModule

> [https://github.com/software-mansion/react-native-gesture-handler/issues/722](https://github.com/software-mansion/react-native-gesture-handler/issues/722)

### xcode 编译报错

```bash
# 删除编译缓存
rm -rf ~/Library/Developer/Xcode/DerivedData
```

### Android 编译启动注意

注意 gradle 和 java sdk(java home)的版本对应，可在 ./android/gradle.properties 设置 org.gradle.java.home

### 开屏图的设置

iOS 使用 LaunchScreen.storyboard，使用 Xcode 修改即可。

### 修改 bundle name

[看这里](https://stackoverflow.com/questions/37389905/change-package-name-for-android-in-react-native)。

### Android签名打包发布

[看这里](https://reactnative.cn/docs/signed-apk-android/)。

### Using fetch to get/post on a HTTPS web server which is using a valid and trusted but not public CA.

1. Edit the android/app/src/main/AndroidManifest.xml
2. Add the android:networkSecurityConfig="@xml/network_security_config" to the <application /> tag
3. Create the folder android/app/src/main/res/xml and inside a file called network_security_config.xml
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <network-security-config>
      <base-config cleartextTrafficPermitted="true" />
    </network-security-config>
    ```
- [https://github.com/facebook/react-native/issues/32931](https://github.com/facebook/react-native/issues/32931)
- [https://developer.android.com/training/articles/security-config](https://developer.android.com/training/articles/security-config)

## Dependencies

- eslint
- lodash
- redux
- react-native-safe-area-context
- react-native-render-html
- react-navigation
- react-devtools
- @redux-devtools/extension
- async-storage
- react-native-gesture-handler
- react-native-fast-image
- react-native-reanimated
- react-native-localize
- react-native-device-info
- react-native-webview
- [react-native-skeleton-placeholder](https://github.com/chramos/react-native-skeleton-placeholder)
- [react-native-actions-sheet](https://github.com/ammarahm-ed/react-native-actions-sheet)
- prettier
- [patch-package](https://github.com/ds300/patch-package)

## Reference

- [enviroment setup](https://reactnative.dev/docs/environment-setup) to setup react-native development environment.
- [running on device](https://reactnative.dev/docs/running-on-device) to run app on device.
- [debugging](https://twitter.com/i/spaces/1YqJDqDpqzAxV) to debug app.
- [react native typescript](https://reactnative.dev/docs/typescript) to use typescript in react-native.
- [react native cn](https://reactnative.cn/) to learn react-native.
- [react-devtools](https://www.npmjs.com/package/react-devtools) to debug react component.
- [fetch](https://reactnative.cn/docs/network) to use fetch in react-native.
- [bundle tool](https://developer.android.google.cn/studio/command-line/bundletool) to generate android bundle.
- [android build](https://reactnative.cn/docs/signed-apk-android) to generate android apk.
- [watchman](https://facebook.github.io/watchman/docs/cli-options.html) to watch file change.
- [EsLint](https://eslint.org/docs/user-guide/configuring/) to lint code.
- [eslintignore-file](https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file) to ignore lint file.
- [TSconfig](https://www.typescriptlang.org/tsconfig/) to config typescript.
- [npmrc](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc) to config npm.
- [gitignore](https://git-scm.com/docs/gitignore) to ignore git file.
- [prettier](https://prettier.io/docs/en/index.html) to format code.
- [v2ex api 2.0](https://v2ex.com/help/api) to get v2ex api.
- [v2ex api](https://www.v2ex.com/p/7v9TEc53) to get v2ex api.
- [v2ex token](https://www.v2ex.com/settings/tokens) to get v2ex token.
- [react native sample](https://github.com/facebook/react-native) to learn react-native.
- [react native typescript sample](https://github.com/react-native-community/react-native-template-typescript) to learn react-native typescript.
- [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) to upgrade react-native.
- [Easy App Icon](https://easyappicon.com/) to generate app icon.
- [App Image Sets](https://appicon.co/#image-sets) to generate app icon and image set.

## License

Apache-2.0 License © 2021 [funnyzak](https://github.com/funnyzak)


<!-- [![action][ci-image]][ci-url] -->
<!-- [![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/feross/standard) -->
<!-- [![GitHub commit activity][commit-activity-image]][repository-url] -->
<!-- [![Sourcegraph][sg-image]][sg-url] -->

[repo-size-image]: https://img.shields.io/github/repo-size/funnyzak/react-native-v2ex?style=flat-square&logo=github&logoColor=white&label=size
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
[rle-image]: https://img.shields.io/github/release-date/funnyzak/react-native-v2ex.svg?style=flat-square&label=release
[sg-image]: https://img.shields.io/badge/view%20on-Sourcegraph-brightgreen.svg?style=flat-square
[sg-url]: https://sourcegraph.com/github.com/funnyzak/react-native-v2ex
[build-status-image]: https://github.com/funnyzak/react-native-v2ex/actions/workflows/release.yml/badge.svg
[build-status]: https://github.com/funnyzak/react-native-v2ex/actions
[tag-image]: https://img.shields.io/github/tag/funnyzak/react-native-v2ex.svg