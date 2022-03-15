[ADB](https://so.csdn.net/so/search?q=ADB&spm=1001.2101.3001.7020)，即 [Android Debug Bridge](https://developer.android.com/studio/command-line/adb.html)，它是 Android 开发 / 测试人员不可替代的强大工具，也是 Android 设备玩家的好玩具。

持续更新中，欢迎提 PR 和 Issue 补充指正，觉得有用的可以将 [此 GitHub 仓库](https://github.com/mzlogin/awesome-adb) Star 收藏备用。

**注：** 有部分命令的支持情况可能与 Android 系统版本及定制 ROM 的实现有关。

- [基本用法](#基本用法)
  - [命令语法](#命令语法)
  - [为命令指定目标设备](#为命令指定目标设备)
  - [启动 / 停止](#启动--停止)
  - [查看 adb 版本](#查看-adb-版本)
  - [以 root 权限运行 adbd](#以-root-权限运行-adbd)
  - [指定 adb server 的网络端口](#指定-adb-server-的网络端口)
- [设备连接管理](#设备连接管理)
  - [查询已连接设备 / 模拟器](#查询已连接设备--模拟器)
  - [USB 连接](#usb-连接)
  - [无线连接（需要借助 USB 线）](#无线连接需要借助-usb-线)
  - [无线连接（无需借助 USB 线）](#无线连接无需借助-usb-线)
- [应用管理](#应用管理)
  - [查看应用列表](#查看应用列表)
    - [所有应用](#所有应用)
    - [系统应用](#系统应用)
    - [第三方应用](#第三方应用)
    - [包名包含某字符串的应用](#包名包含某字符串的应用)
  - [安装 APK](#安装-apk)
  - [卸载应用](#卸载应用)
  - [清除应用数据与缓存](#清除应用数据与缓存)
  - [查看前台 Activity](#查看前台-activity)
  - [查看正在运行的 Services](#查看正在运行的-services)
- [与应用交互](#与应用交互)
  - [调起 Activity](#调起-activity)
  - [调起 Service](#调起-service)
  - [发送广播](#发送广播)
  - [强制停止应用](#强制停止应用)
- [文件管理](#文件管理)
  - [复制设备里的文件到电脑](#复制设备里的文件到电脑)
  - [复制电脑里的文件到设备](#复制电脑里的文件到设备)
- [模拟按键 / 输入](#模拟按键--输入)
  - [电源键](#电源键)
  - [菜单键](#菜单键)
  - [HOME 键](#home-键)
  - [返回键](#返回键)
  - [音量控制](#音量控制)
  - [媒体控制](#媒体控制)
  - [点亮 / 熄灭屏幕](#点亮--熄灭屏幕)
  - [滑动解锁](#滑动解锁)
  - [输入文本](#输入文本)
- [查看日志](#查看日志)
  - [Android 日志](#android-日志)
    - [按级别过滤日志](#按级别过滤日志)
    - [按 tag 和级别过滤日志](#按-tag-和级别过滤日志)
    - [日志格式](#日志格式)
    - [清空日志](#清空日志)
  - [内核日志](#内核日志)
- [查看设备信息](#查看设备信息)
  - [型号](#型号)
  - [电池状况](#电池状况)
  - [屏幕分辨率](#屏幕分辨率)
  - [屏幕密度](#屏幕密度)
  - [显示屏参数](#显示屏参数)
  - [android_id](#android_id)
  - [IMEI](#imei)
  - [Android 系统版本](#android-系统版本)
  - [IP 地址](#ip-地址)
  - [Mac 地址](#mac-地址)
  - [CPU 信息](#cpu-信息)
  - [内存信息](#内存信息)
  - [更多硬件与系统属性](#更多硬件与系统属性)
- [修改设置](#修改设置)
  - [分辨率](#分辨率)
  - [屏幕密度](#屏幕密度-1)
  - [显示区域](#显示区域)
  - [关闭 USB 调试模式](#关闭-usb-调试模式)
  - [状态栏和导航栏的显示隐藏](#状态栏和导航栏的显示隐藏)
- [实用功能](#实用功能)
  - [屏幕截图](#屏幕截图)
  - [录制屏幕](#录制屏幕)
  - [重新挂载 system 分区为可写](#重新挂载-system-分区为可写)
  - [查看连接过的 WiFi 密码](#查看连接过的-wifi-密码)
  - [设置系统日期和时间](#设置系统日期和时间)
  - [重启手机](#重启手机)
  - [检测设备是否已 root](#检测设备是否已-root)
  - [使用 Monkey 进行压力测试](#使用-monkey-进行压力测试)
  - [开启 / 关闭 WiFi](#开启--关闭-wifi)
- [刷机相关命令](#刷机相关命令)
  - [重启到 Recovery 模式](#重启到-recovery-模式)
  - [从 Recovery 重启到 Android](#从-recovery-重启到-android)
  - [重启到 Fastboot 模式](#重启到-fastboot-模式)
  - [通过 sideload 更新系统](#通过-sideload-更新系统)
- [更多 adb shell 命令](#更多-adb-shell-命令)
  - [查看进程](#查看进程)
  - [查看实时资源占用情况](#查看实时资源占用情况)
  - [其它](#其它)
- [常见问题](#常见问题)
  - [启动 adb server 失败](#启动-adb-server-失败)
- [adb 的非官方实现](#adb-的非官方实现)
- [致谢](#致谢)
- [参考链接](#参考链接)

## 基本用法

### 命令语法

adb 命令的基本语法如下：

```
adb [-d|-e|-s <serialNumber>] <command>
```

如果只有一个设备 / 模拟器连接时，可以省略掉 `[-d|-e|-s <serialNumber>]` 这一部分，直接使用 `adb <command>`。

### 为命令指定目标设备

如果有多个设备 / 模拟器连接，则需要为命令指定目标设备。

<table><thead><tr><th>参数</th><th>含义</th></tr></thead><tbody><tr><td>-d</td><td>指定当前唯一通过 USB 连接的 Android 设备为命令目标</td></tr><tr><td>-e</td><td>指定当前唯一运行的模拟器为命令目标</td></tr><tr><td><code>-s &lt;serialNumber&gt;</code></td><td>指定相应 serialNumber 号的设备 / 模拟器为命令目标</td></tr></tbody></table>

在多个设备 / 模拟器连接的情况下较常用的是 `-s <serialNumber>` 参数，serialNumber 可以通过 `adb devices` 命令获取。如：

```
$ adb devices

List of devices attached
cf264b8f    device
emulator-5554   device
10.129.164.6:5555   device
```

输出里的 `cf264b8f`、`emulator-5554` 和 `10.129.164.6:5555` 即为 serialNumber。

比如这时想指定 `cf264b8f` 这个设备来运行 adb 命令获取屏幕分辨率：

```
adb -s cf264b8f shell wm size
```

又如想给 `10.129.164.6:5555` 这个设备安装应用（_这种形式的 serialNumber 格式为 `<IP>:<Port>`，一般为无线连接的设备或 Genymotion 等第三方 Android 模拟器_）：

```
adb -s 10.129.164.6:5555 install test.apk
```

**遇到多设备 / 模拟器的情况均使用这几个参数为命令指定目标设备，下文中为简化描述，不再重复。**

### 启动 / 停止

启动 adb server 命令：

```
adb start-server
```

（一般无需手动执行此命令，在运行 adb 命令时若发现 adb server 没有启动会自动调起。）

停止 adb server 命令：

```
adb kill-server
```

### 查看 adb 版本

命令：

```
adb version
```

示例输出：

```
Android Debug Bridge version 1.0.36
Revision 8f855a3d9b35-android
```

### 以 root 权限运行 adbd

adb 的运行原理是 PC 端的 adb server 与手机端的守护进程 adbd 建立连接，然后 PC 端的 adb client 通过 adb server 转发命令，adbd 接收命令后解析运行。

所以如果 adbd 以普通权限执行，有些需要 root 权限才能执行的命令无法直接用 `adb xxx` 执行。这时可以 `adb shell` 然后 `su` 后执行命令，也可以让 adbd 以 root 权限执行，这个就能随意执行高权限命令了。

命令：

```
adb root
```

正常输出：

```
restarting adbd as root
```

现在再运行 `adb shell`，看看命令行提示符是不是变成 `#` 了？

有些手机 root 后也无法通过 `adb root` 命令让 adbd 以 root 权限执行，比如三星的部分机型，会提示 `adbd cannot run as root in production builds`，此时可以先安装 adbd Insecure，然后 `adb root` 试试。

相应地，如果要恢复 adbd 为非 root 权限的话，可以使用 `adb unroot` 命令。

### 指定 adb server 的网络端口

命令：

```
adb -P <port> start-server
```

默认端口为 5037。

## 设备连接管理

### 查询已连接设备 / 模拟器

命令：

```
adb devices
```

输出示例：

```
List of devices attached
cf264b8f    device
emulator-5554   device
10.129.164.6:5555   device
```

输出格式为 `[serialNumber] [state]`，serialNumber 即我们常说的 SN，state 有如下几种：

- `offline` —— 表示设备未连接成功或无响应。

- `device` —— 设备已连接。注意这个状态并不能标识 Android 系统已经完全启动和可操作，在设备启动过程中设备实例就可连接到 adb，但启动完毕后系统才处于可操作状态。

- `no device` —— 没有设备 / 模拟器连接。

以上输出显示当前已经连接了三台设备 / 模拟器，`cf264b8f`、`emulator-5554` 和 `10.129.164.6:5555` 分别是它们的 SN。从 `emulator-5554` 这个名字可以看出它是一个 Android 模拟器，而 `10.129.164.6:5555` 这种形为 `<IP>:<Port>` 的 serialNumber 一般是无线连接的设备或 Genymotion 等第三方 Android 模拟器。

常见异常输出：

1.  没有设备 / 模拟器连接成功。

    ```
    List of devices attached
    ```

2.  设备 / 模拟器未连接到 adb 或无响应。

    ```
    List of devices attached
    cf264b8f offline
    ```

### USB 连接

通过 USB 连接来正常使用 adb 需要保证几点：

1.  硬件状态正常。

    包括 Android 设备处于正常开机状态，USB 连接线和各种接口完好。

2.  Android 设备的开发者选项和 USB 调试模式已开启。

    可以到「设置」-「开发者选项」-「Android 调试」查看。

    如果在设置里找不到开发者选项，那需要通过一个彩蛋来让它显示出来：在「设置」-「关于手机」连续点击「版本号」7 次。

3.  设备驱动状态正常。

    这一点貌似在 Linux 和 Mac OS X 下不用操心，在 Windows 下有可能遇到需要安装驱动的情况，确认这一点可以右键「计算机」-「属性」，到「设备管理器」里查看相关设备上是否有黄色感叹号或问号，如果没有就说明驱动状态已经好了。否则可以下载一个手机助手类程序来安装驱动先。

4.  通过 USB 线连接好电脑和设备后确认状态。

    ```
    adb devices
    ```

    如果能看到

    ```
    xxxxxx device
    ```

    说明连接成功。

### 无线连接（需要借助 USB 线）

除了可以通过 USB 连接设备与电脑来使用 adb，也可以通过无线连接——虽然连接过程中也有需要使用 USB 的步骤，但是连接成功之后你的设备就可以在一定范围内摆脱 USB 连接线的限制啦！

操作步骤：

1.  将 Android 设备与要运行 adb 的电脑连接到同一个局域网，比如连到同一个 WiFi。

2.  将设备与电脑通过 USB 线连接。

    应确保连接成功（可运行 `adb devices` 看是否能列出该设备）。

3.  让设备在 5555 端口监听 TCP/IP 连接：

    ```
    adb tcpip 5555
    ```

4.  断开 USB 连接。

5.  找到设备的 IP 地址。

    一般能在「设置」-「关于手机」-「状态信息」-「IP 地址」找到，也可以使用下文里 [查看设备信息 - IP 地址](#ip-地址) 一节里的方法用 adb 命令来查看。

6.  通过 IP 地址连接设备。

    ```
    adb connect <device-ip-address>
    ```

    这里的 `<device-ip-address>` 就是上一步中找到的设备 IP 地址。

7.  确认连接状态。

    ```
    adb devices
    ```

    如果能看到

    ```
    <device-ip-address>:5555 device
    ```

    说明连接成功。

如果连接不了，请确认 Android 设备与电脑是连接到了同一个 WiFi，然后再次执行 `adb connect <device-ip-address>` 那一步；

如果还是不行的话，通过 `adb kill-server` 重新启动 adb 然后从头再来一次试试。

**断开无线连接**

命令：

```
adb disconnect <device-ip-address>
```

### 无线连接（无需借助 USB 线）

**注：需要 root 权限。**

上一节「无线连接（需要借助 USB 线）」是官方文档里介绍的方法，需要借助于 USB 数据线来实现无线连接。

既然我们想要实现无线连接，那能不能所有步骤下来都是无线的呢？答案是能的。

1.  在 Android 设备上安装一个终端模拟器。

    已经安装过的设备可以跳过此步。我使用的终端模拟器下载地址是：[Terminal Emulator for Android Downloads](https://jackpal.github.io/Android-Terminal-Emulator/)

2.  将 Android 设备与要运行 adb 的电脑连接到同一个局域网，比如连到同一个 WiFi。

3.  打开 Android 设备上的终端模拟器，在里面依次运行命令：

    ```
    su
    setprop service.adb.tcp.port 5555
    ```

4.  找到 Android 设备的 IP 地址。

    一般能在「设置」-「关于手机」-「状态信息」-「IP 地址」找到，也可以使用下文里 [查看设备信息 - IP 地址](#ip-地址) 一节里的方法用 adb 命令来查看。

5.  在电脑上通过 adb 和 IP 地址连接 Android 设备。

    ```
    adb connect <device-ip-address>
    ```

    这里的 `<device-ip-address>` 就是上一步中找到的设备 IP 地址。

    如果能看到 `connected to <device-ip-address>:5555` 这样的输出则表示连接成功。

_节注一：_

有的设备，比如小米 5S + MIUI 8.0 + Android 6.0.1 MXB48T，可能在第 5 步之前需要重启 adbd 服务，在设备的终端模拟器上运行：

```
restart adbd
```

如果 restart 无效，尝试以下命令：

```
start adbd
stop adbd
```

## 应用管理

### 查看应用列表

查看应用列表的基本命令格式是

```
adb shell pm list packages [-f] [-d] [-e] [-s] [-3] [-i] [-u] [--user USER_ID] [FILTER]
```

即在 `adb shell pm list packages` 的基础上可以加一些参数进行过滤查看不同的列表，支持的过滤参数如下：

<table><thead><tr><th>参数</th><th>显示列表</th></tr></thead><tbody><tr><td>无</td><td>所有应用</td></tr><tr><td>-f</td><td>显示应用关联的 apk 文件</td></tr><tr><td>-d</td><td>只显示 disabled 的应用</td></tr><tr><td>-e</td><td>只显示 enabled 的应用</td></tr><tr><td>-s</td><td>只显示系统应用</td></tr><tr><td>-3</td><td>只显示第三方应用</td></tr><tr><td>-i</td><td>显示应用的 installer</td></tr><tr><td>-u</td><td>包含已卸载应用</td></tr><tr><td><code>&lt;FILTER&gt;</code></td><td>包名包含 <code>&lt;FILTER&gt;</code> 字符串</td></tr></tbody></table>

#### 所有应用

命令：

```
adb shell pm list packages
```

输出示例：

```
package:com.android.smoketest
package:com.example.android.livecubes
package:com.android.providers.telephony
package:com.google.android.googlequicksearchbox
package:com.android.providers.calendar
package:com.android.providers.media
package:com.android.protips
package:com.android.documentsui
package:com.android.gallery
package:com.android.externalstorage
...
// other packages here
...
```

#### 系统应用

命令：

```
adb shell pm list packages -s
```

#### 第三方应用

命令：

```
adb shell pm list packages -3
```

#### 包名包含某字符串的应用

比如要查看包名包含字符串 `mazhuang` 的应用列表，命令：

```
adb shell pm list packages mazhuang
```

当然也可以使用 grep 来过滤：

```
adb shell pm list packages | grep mazhuang
```

### 安装 APK

命令格式：

```
adb install [-lrtsdg] <path_to_apk>
```

参数：

`adb install` 后面可以跟一些可选参数来控制安装 APK 的行为，可用参数及含义如下：

<table><thead><tr><th>参数</th><th>含义</th></tr></thead><tbody><tr><td>-l</td><td>将应用安装到保护目录 /mnt/asec</td></tr><tr><td>-r</td><td>允许覆盖安装</td></tr><tr><td>-t</td><td>允许安装 AndroidManifest.xml 里 application 指定 <code>android:testOnly="true"</code> 的应用</td></tr><tr><td>-s</td><td>将应用安装到 sdcard</td></tr><tr><td>-d</td><td>允许降级覆盖安装</td></tr><tr><td>-g</td><td>授予所有运行时权限</td></tr></tbody></table>

运行命令后如果见到类似如下输出（状态为 `Success`）代表安装成功：

```
[100%] /data/local/tmp/1.apk
    pkg: /data/local/tmp/1.apk
Success
```

上面是当前最新版 v1.0.36 的 adb 的输出，会显示 push apk 文件到手机的进度百分比。

使用旧版本 adb 的输出则是这样的：

```
12040 KB/s (22205609 bytes in 1.801s)
        pkg: /data/local/tmp/SogouInput_android_v8.3_sweb.apk
Success
```

而如果状态为 `Failure` 则表示安装失败，比如：

```
[100%] /data/local/tmp/map-20160831.apk
        pkg: /data/local/tmp/map-20160831.apk
Failure [INSTALL_FAILED_ALREADY_EXISTS]
```

常见安装失败输出代码、含义及可能的解决办法如下：

<table><thead><tr><th>输出</th><th>含义</th><th>解决办法</th></tr></thead><tbody><tr><td>INSTALL_FAILED_ALREADY_EXISTS</td><td>应用已经存在，或卸载了但没卸载干净</td><td><code>adb install</code> 时使用 <code>-r</code> 参数，或者先 <code>adb uninstall &lt;packagename&gt;</code> 再安装</td></tr><tr><td>INSTALL_FAILED_INVALID_APK</td><td>无效的 APK 文件</td><td></td></tr><tr><td>INSTALL_FAILED_INVALID_URI</td><td>无效的 APK 文件名</td><td>确保 APK 文件名里无中文</td></tr><tr><td>INSTALL_FAILED_INSUFFICIENT_STORAGE</td><td>空间不足</td><td>清理空间</td></tr><tr><td>INSTALL_FAILED_DUPLICATE_PACKAGE</td><td>已经存在同名程序</td><td></td></tr><tr><td>INSTALL_FAILED_NO_SHARED_USER</td><td>请求的共享用户不存在</td><td></td></tr><tr><td>INSTALL_FAILED_UPDATE_INCOMPATIBLE</td><td>以前安装过同名应用，但卸载时数据没有移除；或者已安装该应用，但签名不一致</td><td>先 <code>adb uninstall &lt;packagename&gt;</code> 再安装</td></tr><tr><td>INSTALL_FAILED_SHARED_USER_INCOMPATIBLE</td><td>请求的共享用户存在但签名不一致</td><td></td></tr><tr><td>INSTALL_FAILED_MISSING_SHARED_LIBRARY</td><td>安装包使用了设备上不可用的共享库</td><td></td></tr><tr><td>INSTALL_FAILED_REPLACE_COULDNT_DELETE</td><td>替换时无法删除</td><td></td></tr><tr><td>INSTALL_FAILED_DEXOPT</td><td>dex 优化验证失败或空间不足</td><td></td></tr><tr><td>INSTALL_FAILED_OLDER_SDK</td><td>设备系统版本低于应用要求</td><td></td></tr><tr><td>INSTALL_FAILED_CONFLICTING_PROVIDER</td><td>设备里已经存在与应用里同名的 content provider</td><td></td></tr><tr><td>INSTALL_FAILED_NEWER_SDK</td><td>设备系统版本高于应用要求</td><td></td></tr><tr><td>INSTALL_FAILED_TEST_ONLY</td><td>应用是 test-only 的，但安装时没有指定 <code>-t</code> 参数</td><td></td></tr><tr><td>INSTALL_FAILED_CPU_ABI_INCOMPATIBLE</td><td>包含不兼容设备 CPU 应用程序二进制接口的 native code</td><td></td></tr><tr><td>INSTALL_FAILED_MISSING_FEATURE</td><td>应用使用了设备不可用的功能</td><td></td></tr><tr><td>INSTALL_FAILED_CONTAINER_ERROR</td><td>sdcard 访问失败; 2. 应用签名与 ROM 签名一致，被当作内置应用</td><td>确认 sdcard 可用，或者安装到内置存储; 2. 打包时不与 ROM 使用相同签名</td></tr><tr><td>INSTALL_FAILED_INVALID_INSTALL_LOCATION</td><td>不能安装到指定位置; 2. 应用签名与 ROM 签名一致，被当作内置应用</td><td>切换安装位置，添加或删除 <code>-s</code> 参数; 2. 打包时不与 ROM 使用相同签名</td></tr><tr><td>INSTALL_FAILED_MEDIA_UNAVAILABLE</td><td>安装位置不可用</td><td>一般为 sdcard，确认 sdcard 可用或安装到内置存储</td></tr><tr><td>INSTALL_FAILED_VERIFICATION_TIMEOUT</td><td>验证安装包超时</td><td></td></tr><tr><td>INSTALL_FAILED_VERIFICATION_FAILURE</td><td>验证安装包失败</td><td></td></tr><tr><td>INSTALL_FAILED_PACKAGE_CHANGED</td><td>应用与调用程序期望的不一致</td><td></td></tr><tr><td>INSTALL_FAILED_UID_CHANGED</td><td>以前安装过该应用，与本次分配的 UID 不一致</td><td>清除以前安装过的残留文件</td></tr><tr><td>INSTALL_FAILED_VERSION_DOWNGRADE</td><td>已经安装了该应用更高版本</td><td>使用 <code>-d</code> 参数</td></tr><tr><td>INSTALL_FAILED_PERMISSION_MODEL_DOWNGRADE</td><td>已安装 target SDK 支持运行时权限的同名应用，要安装的版本不支持运行时权限</td><td></td></tr><tr><td>INSTALL_PARSE_FAILED_NOT_APK</td><td>指定路径不是文件，或不是以 <code>.apk</code> 结尾</td><td></td></tr><tr><td>INSTALL_PARSE_FAILED_BAD_MANIFEST</td><td>无法解析的 AndroidManifest.xml 文件</td><td></td></tr><tr><td>INSTALL_PARSE_FAILED_UNEXPECTED_EXCEPTION</td><td>解析器遇到异常</td><td></td></tr><tr><td>INSTALL_PARSE_FAILED_NO_CERTIFICATES</td><td>安装包没有签名</td><td></td></tr><tr><td>INSTALL_PARSE_FAILED_INCONSISTENT_CERTIFICATES</td><td>已安装该应用，且签名与 APK 文件不一致</td><td>先卸载设备上的该应用，再安装</td></tr><tr><td>INSTALL_PARSE_FAILED_CERTIFICATE_ENCODING</td><td>解析 APK 文件时遇到 <code>CertificateEncodingException</code></td><td></td></tr><tr><td>INSTALL_PARSE_FAILED_BAD_PACKAGE_NAME</td><td>manifest 文件里没有或者使用了无效的包名</td><td></td></tr><tr><td>INSTALL_PARSE_FAILED_BAD_SHARED_USER_ID</td><td>manifest 文件里指定了无效的共享用户 ID</td><td></td></tr><tr><td>INSTALL_PARSE_FAILED_MANIFEST_MALFORMED</td><td>解析 manifest 文件时遇到结构性错误</td><td></td></tr><tr><td>INSTALL_PARSE_FAILED_MANIFEST_EMPTY</td><td>在 manifest 文件里找不到找可操作标签（instrumentation 或 application）</td><td></td></tr><tr><td>INSTALL_FAILED_INTERNAL_ERROR</td><td>因系统问题安装失败</td><td></td></tr><tr><td>INSTALL_FAILED_USER_RESTRICTED</td><td>用户被限制安装应用</td><td></td></tr><tr><td>INSTALL_FAILED_DUPLICATE_PERMISSION</td><td>应用尝试定义一个已经存在的权限名称</td><td></td></tr><tr><td>INSTALL_FAILED_NO_MATCHING_ABIS</td><td>应用包含设备的应用程序二进制接口不支持的 native code</td><td></td></tr><tr><td>INSTALL_CANCELED_BY_USER</td><td>应用安装需要在设备上确认，但未操作设备或点了取消</td><td>在设备上同意安装</td></tr><tr><td>INSTALL_FAILED_ACWF_INCOMPATIBLE</td><td>应用程序与设备不兼容</td><td></td></tr><tr><td>does not contain AndroidManifest.xml</td><td>无效的 APK 文件</td><td></td></tr><tr><td>is not a valid zip file</td><td>无效的 APK 文件</td><td></td></tr><tr><td>Offline</td><td>设备未连接成功</td><td>先将设备与 adb 连接成功</td></tr><tr><td>unauthorized</td><td>设备未授权允许调试</td><td></td></tr><tr><td>error: device not found</td><td>没有连接成功的设备</td><td>先将设备与 adb 连接成功</td></tr><tr><td>protocol failure</td><td>设备已断开连接</td><td>先将设备与 adb 连接成功</td></tr><tr><td>Unknown option: -s</td><td>Android 2.2 以下不支持安装到 sdcard</td><td>不使用 <code>-s</code> 参数</td></tr><tr><td>No space left on device</td><td>空间不足</td><td>清理空间</td></tr><tr><td>Permission denied … sdcard …</td><td>sdcard 不可用</td><td></td></tr><tr><td>signatures do not match the previously installed version; ignoring!</td><td>已安装该应用且签名不一致</td><td>先卸载设备上的该应用，再安装</td></tr></tbody></table>

参考：[PackageManager.java](https://github.com/android/platform_frameworks_base/blob/master/core%2Fjava%2Fandroid%2Fcontent%2Fpm%2FPackageManager.java)

_`adb install` 内部原理简介_

`adb install` 实际是分三步完成：

1.  push apk 文件到 /data/local/tmp。

2.  调用 pm install 安装。

3.  删除 /data/local/tmp 下的对应 apk 文件。

所以，必要的时候也可以根据这个步骤，手动分步执行安装过程。

### 卸载应用

命令：

```
adb uninstall [-k] <packagename>
```

`<packagename>` 表示应用的包名，`-k` 参数可选，表示卸载应用但保留数据和缓存目录。

命令示例：

```
adb uninstall com.qihoo360.mobilesafe
```

表示卸载 360 手机卫士。

### 清除应用数据与缓存

命令：

```
adb shell pm clear <packagename>
```

`<packagename>` 表示应用名包，这条命令的效果相当于在设置里的应用信息界面点击了「清除缓存」和「清除数据」。

命令示例：

```
adb shell pm clear com.qihoo360.mobilesafe
```

表示清除 360 手机卫士的数据和缓存。

### 查看前台 Activity

命令：

```
adb shell dumpsys activity activities | grep mFocusedActivity
```

输出示例：

```
mFocusedActivity: ActivityRecord{8079d7e u0 com.cyanogenmod.trebuchet/com.android.launcher3.Launcher t42}
```

其中的 `com.cyanogenmod.trebuchet/com.android.launcher3.Launcher` 就是当前处于前台的 Activity。

### 查看正在运行的 Services

命令：

```
adb shell dumpsys activity services [<packagename>]
```

`<packagename>` 参数不是必须的，指定 `<packagename>` 表示查看与某个包名相关的 Services，不指定表示查看所有 Services。

`<packagename>` 不一定要给出完整的包名，比如运行 `adb shell dumpsys activity services org.mazhuang`，那么包名 `org.mazhuang.demo1`、`org.mazhuang.demo2` 和 `org.mazhuang123` 等相关的 Services 都会列出来。

## 与应用交互

主要是使用 `am <command>` 命令，常用的 `<command>` 如下：

<table><thead><tr><th>command</th><th>用途</th></tr></thead><tbody><tr><td><code>start [options] &lt;INTENT&gt;</code></td><td>启动 <code>&lt;INTENT&gt;</code> 指定的 Activity</td></tr><tr><td><code>startservice [options] &lt;INTENT&gt;</code></td><td>启动 <code>&lt;INTENT&gt;</code> 指定的 Service</td></tr><tr><td><code>broadcast [options] &lt;INTENT&gt;</code></td><td>发送 <code>&lt;INTENT&gt;</code> 指定的广播</td></tr><tr><td><code>force-stop &lt;packagename&gt;</code></td><td>停止 <code>&lt;packagename&gt;</code> 相关的进程</td></tr></tbody></table>

`<INTENT>` 参数很灵活，和写 Android 程序时代码里的 Intent 相对应。

用于决定 intent 对象的选项如下：

<table><thead><tr><th>参数</th><th>含义</th></tr></thead><tbody><tr><td><code>-a &lt;ACTION&gt;</code></td><td>指定 action，比如 <code>android.intent.action.VIEW</code></td></tr><tr><td><code>-c &lt;CATEGORY&gt;</code></td><td>指定 category，比如 <code>android.intent.category.APP_CONTACTS</code></td></tr><tr><td><code>-n &lt;COMPONENT&gt;</code></td><td>指定完整 component 名，用于明确指定启动哪个 Activity，如 <code>com.example.app/.ExampleActivity</code></td></tr></tbody></table>

`<INTENT>` 里还能带数据，就像写代码时的 Bundle 一样：

<table><thead><tr><th>参数</th><th>含义</th></tr></thead><tbody><tr><td><code>--esn &lt;EXTRA_KEY&gt;</code></td><td>null 值（只有 key 名）</td></tr><tr><td>`-e</td><td>–es `</td></tr><tr><td><code>--ez &lt;EXTRA_KEY&gt; &lt;EXTRA_BOOLEAN_VALUE&gt;</code></td><td>boolean 值</td></tr><tr><td><code>--ei &lt;EXTRA_KEY&gt; &lt;EXTRA_INT_VALUE&gt;</code></td><td>integer 值</td></tr><tr><td><code>--el &lt;EXTRA_KEY&gt; &lt;EXTRA_LONG_VALUE&gt;</code></td><td>long 值</td></tr><tr><td><code>--ef &lt;EXTRA_KEY&gt; &lt;EXTRA_FLOAT_VALUE&gt;</code></td><td>float 值</td></tr><tr><td><code>--eu &lt;EXTRA_KEY&gt; &lt;EXTRA_URI_VALUE&gt;</code></td><td>URI</td></tr><tr><td><code>--ecn &lt;EXTRA_KEY&gt; &lt;EXTRA_COMPONENT_NAME_VALUE&gt;</code></td><td>component name</td></tr><tr><td><code>--eia &lt;EXTRA_KEY&gt; &lt;EXTRA_INT_VALUE&gt;[,&lt;EXTRA_INT_VALUE...]</code></td><td>integer 数组</td></tr><tr><td><code>--ela &lt;EXTRA_KEY&gt; &lt;EXTRA_LONG_VALUE&gt;[,&lt;EXTRA_LONG_VALUE...]</code></td><td>long 数组</td></tr></tbody></table>

### 调起 Activity

命令格式：

```
adb shell am start [options] <INTENT>
```

例如：

```
adb shell am start -n com.tencent.mm/.ui.LauncherUI
```

表示调起微信主界面。

```
adb shell am start -n org.mazhuang.boottimemeasure/.MainActivity --es "toast" "hello, world"
```

表示调起 `org.mazhuang.boottimemeasure/.MainActivity` 并传给它 string 数据键值对 `toast - hello, world`。

### 调起 Service

命令格式：

```
adb shell am startservice [options] <INTENT>
```

例如：

```
adb shell am startservice -n com.tencent.mm/.plugin.accountsync.model.AccountAuthenticatorService
```

表示调起微信的某 Service。

### 发送广播

命令格式：

```
adb shell am broadcast [options] <INTENT>
```

可以向所有组件广播，也可以只向指定组件广播。

例如，向所有组件广播 `BOOT_COMPLETED`：

```
adb shell am broadcast -a android.intent.action.BOOT_COMPLETED
```

又例如，只向 `org.mazhuang.boottimemeasure/.BootCompletedReceiver` 广播 `BOOT_COMPLETED`：

```
adb shell am broadcast -a android.intent.action.BOOT_COMPLETED -n org.mazhuang.boottimemeasure/.BootCompletedReceiver
```

这类用法在测试的时候很实用，比如某个广播的场景很难制造，可以考虑通过这种方式来发送广播。

既能发送系统预定义的广播，也能发送自定义广播。如下是部分系统预定义广播及正常触发时机：

<table><thead><tr><th>action</th><th>触发时机</th></tr></thead><tbody><tr><td>android.net.conn.CONNECTIVITY_CHANGE</td><td>网络连接发生变化</td></tr><tr><td>android.intent.action.SCREEN_ON</td><td>屏幕点亮</td></tr><tr><td>android.intent.action.SCREEN_OFF</td><td>屏幕熄灭</td></tr><tr><td>android.intent.action.BATTERY_LOW</td><td>电量低，会弹出电量低提示框</td></tr><tr><td>android.intent.action.BATTERY_OKAY</td><td>电量恢复了</td></tr><tr><td>android.intent.action.BOOT_COMPLETED</td><td>设备启动完毕</td></tr><tr><td>android.intent.action.DEVICE_STORAGE_LOW</td><td>存储空间过低</td></tr><tr><td>android.intent.action.DEVICE_STORAGE_OK</td><td>存储空间恢复</td></tr><tr><td>android.intent.action.PACKAGE_ADDED</td><td>安装了新的应用</td></tr><tr><td>android.net.wifi.STATE_CHANGE</td><td>WiFi 连接状态发生变化</td></tr><tr><td>android.net.wifi.WIFI_STATE_CHANGED</td><td>WiFi 状态变为启用 / 关闭 / 正在启动 / 正在关闭 / 未知</td></tr><tr><td>android.intent.action.BATTERY_CHANGED</td><td>电池电量发生变化</td></tr><tr><td>android.intent.action.INPUT_METHOD_CHANGED</td><td>系统输入法发生变化</td></tr><tr><td>android.intent.action.ACTION_POWER_CONNECTED</td><td>外部电源连接</td></tr><tr><td>android.intent.action.ACTION_POWER_DISCONNECTED</td><td>外部电源断开连接</td></tr><tr><td>android.intent.action.DREAMING_STARTED</td><td>系统开始休眠</td></tr><tr><td>android.intent.action.DREAMING_STOPPED</td><td>系统停止休眠</td></tr><tr><td>android.intent.action.WALLPAPER_CHANGED</td><td>壁纸发生变化</td></tr><tr><td>android.intent.action.HEADSET_PLUG</td><td>插入耳机</td></tr><tr><td>android.intent.action.MEDIA_UNMOUNTED</td><td>卸载外部介质</td></tr><tr><td>android.intent.action.MEDIA_MOUNTED</td><td>挂载外部介质</td></tr><tr><td>android.os.action.POWER_SAVE_MODE_CHANGED</td><td>省电模式开启</td></tr></tbody></table>

_（以上广播均可使用 adb 触发）_

### 强制停止应用

命令：

```
adb shell am force-stop <packagename>
```

命令示例：

```
adb shell am force-stop com.qihoo360.mobilesafe
```

表示停止 360 安全卫士的一切进程与服务。

## 文件管理

### 复制设备里的文件到电脑

命令：

```
adb pull <设备里的文件路径> [电脑上的目录]
```

其中 `电脑上的目录` 参数可以省略，默认复制到当前目录。

例：

```
adb pull /sdcard/sr.mp4 ~/tmp/
```

*小技巧：*设备上的文件路径可能需要 root 权限才能访问，如果你的设备已经 root 过，可以先使用 `adb shell` 和 `su` 命令在 adb shell 里获取 root 权限后，先 `cp /path/on/device /sdcard/filename` 将文件复制到 sdcard，然后 `adb pull /sdcard/filename /path/on/pc`。

### 复制电脑里的文件到设备

命令：

```
adb push <电脑上的文件路径> <设备里的目录>
```

例：

```
adb push ~/sr.mp4 /sdcard/
```

*小技巧：*设备上的文件路径普通权限可能无法直接写入，如果你的设备已经 root 过，可以先 `adb push /path/on/pc /sdcard/filename`，然后 `adb shell` 和 `su` 在 adb shell 里获取 root 权限后，`cp /sdcard/filename /path/on/device`。

## 模拟按键 / 输入

在 `adb shell` 里有个很实用的命令叫 `input`，通过它可以做一些有趣的事情。

`input` 命令的完整 help 信息如下：

```
Usage: input [<source>] <command> [<arg>...]

The sources are:
      mouse
      keyboard
      joystick
      touchnavigation
      touchpad
      trackball
      stylus
      dpad
      gesture
      touchscreen
      gamepad

The commands and default sources are:
      text <string> (Default: touchscreen)
      keyevent [--longpress] <key code number or name> ... (Default: keyboard)
      tap <x> <y> (Default: touchscreen)
      swipe <x1> <y1> <x2> <y2> [duration(ms)] (Default: touchscreen)
      press (Default: trackball)
      roll <dx> <dy> (Default: trackball)
```

比如使用 `adb shell input keyevent <keycode>` 命令，不同的 keycode 能实现不同的功能，完整的 keycode 列表详见 [KeyEvent](https://developer.android.com/reference/android/view/KeyEvent.html)，摘引部分我觉得有意思的如下：

<table><thead><tr><th>keycode</th><th>含义</th></tr></thead><tbody><tr><td>3</td><td>HOME 键</td></tr><tr><td>4</td><td>返回键</td></tr><tr><td>5</td><td>打开拨号应用</td></tr><tr><td>6</td><td>挂断电话</td></tr><tr><td>24</td><td>增加音量</td></tr><tr><td>25</td><td>降低音量</td></tr><tr><td>26</td><td>电源键</td></tr><tr><td>27</td><td>拍照（需要在相机应用里）</td></tr><tr><td>64</td><td>打开浏览器</td></tr><tr><td>82</td><td>菜单键</td></tr><tr><td>85</td><td>播放 / 暂停</td></tr><tr><td>86</td><td>停止播放</td></tr><tr><td>87</td><td>播放下一首</td></tr><tr><td>88</td><td>播放上一首</td></tr><tr><td>122</td><td>移动光标到行首或列表顶部</td></tr><tr><td>123</td><td>移动光标到行末或列表底部</td></tr><tr><td>126</td><td>恢复播放</td></tr><tr><td>127</td><td>暂停播放</td></tr><tr><td>164</td><td>静音</td></tr><tr><td>176</td><td>打开系统设置</td></tr><tr><td>187</td><td>切换应用</td></tr><tr><td>207</td><td>打开联系人</td></tr><tr><td>208</td><td>打开日历</td></tr><tr><td>209</td><td>打开音乐</td></tr><tr><td>210</td><td>打开计算器</td></tr><tr><td>220</td><td>降低屏幕亮度</td></tr><tr><td>221</td><td>提高屏幕亮度</td></tr><tr><td>223</td><td>系统休眠</td></tr><tr><td>224</td><td>点亮屏幕</td></tr><tr><td>231</td><td>打开语音助手</td></tr><tr><td>276</td><td>如果没有 wakelock 则让系统休眠</td></tr></tbody></table>

下面是 `input` 命令的一些用法举例。

### 电源键

命令：

```
adb shell input keyevent 26
```

执行效果相当于按电源键。

### 菜单键

命令：

```
adb shell input keyevent 82
```

### HOME 键

命令：

```
adb shell input keyevent 3
```

### 返回键

命令：

```
adb shell input keyevent 4
```

### 音量控制

增加音量：

```
adb shell input keyevent 24
```

降低音量：

```
adb shell input keyevent 25
```

静音：

```
adb shell input keyevent 164
```

### 媒体控制

播放 / 暂停：

```
adb shell input keyevent 85
```

停止播放：

```
adb shell input keyevent 86
```

播放下一首：

```
adb shell input keyevent 87
```

播放上一首：

```
adb shell input keyevent 88
```

恢复播放：

```
adb shell input keyevent 126
```

暂停播放：

```
adb shell input keyevent 127
```

### 点亮 / 熄灭屏幕

可以通过上文讲述过的模拟电源键来切换点亮和熄灭屏幕，但如果明确地想要点亮或者熄灭屏幕，那可以使用如下方法。

点亮屏幕：

```
adb shell input keyevent 224
```

熄灭屏幕：

```
adb shell input keyevent 223
```

### 滑动解锁

如果锁屏没有密码，是通过滑动手势解锁，那么可以通过 `input swipe` 来解锁。

命令（参数以机型 Nexus 5，向上滑动手势解锁举例）：

```
adb shell input swipe 300 1000 300 500
```

参数 `300 1000 300 500` 分别表示`起始点x坐标 起始点y坐标 结束点x坐标 结束点y坐标`。

### 输入文本

在焦点处于某文本框时，可以通过 `input` 命令来输入文本。

命令：

```
adb shell input text hello
```

现在 `hello` 出现在文本框了。

## 查看日志

Android 系统的日志分为两部分，底层的 Linux 内核日志输出到 /proc/kmsg，Android 的日志输出到 /dev/log。

### Android 日志

命令格式：

```
[adb] logcat [<option>] ... [<filter-spec>] ...
```

常用用法列举如下：

#### 按级别过滤日志

Android 的日志分为如下几个优先级（priority）：

- V —— Verbose（最低，输出得最多）
- D —— Debug
- I —— Info
- W —— Warning
- E —— Error
- F —— Fatal
- S —— Silent（最高，啥也不输出）

按某级别过滤日志则会将该级别及以上的日志输出。

比如，命令：

```
adb logcat *:W
```

会将 Warning、Error、Fatal 和 Silent 日志输出。

（**注：** 在 macOS 下需要给 `*:W` 这样以 `*` 作为 tag 的参数加双引号，如 `adb logcat "*:W"`，不然会报错 `no matches found: *:W`。）

#### 按 tag 和级别过滤日志

`<filter-spec>` 可以由多个 `<tag>[:priority]` 组成。

比如，命令：

```
adb logcat ActivityManager:I MyApp:D *:S
```

表示输出 tag `ActivityManager` 的 Info 以上级别日志，输出 tag `MyApp` 的 Debug 以上级别日志，及其它 tag 的 Silent 级别日志（即屏蔽其它 tag 日志）。

#### 日志格式

可以用 `adb logcat -v <format>` 选项指定日志输出格式。

日志支持按以下几种 `<format>`：

- brief

  默认格式。格式为：

  ```
  <priority>/<tag>(<pid>): <message>
  ```

  示例：

  ```
  D/HeadsetStateMachine( 1785): Disconnected process message: 10, size: 0
  ```

- process

  格式为：

  ```
  <priority>(<pid>) <message>
  ```

  示例：

  ```
  D( 1785) Disconnected process message: 10, size: 0  (HeadsetStateMachine)
  ```

- tag

  格式为：

  ```
  <priority>/<tag>: <message>
  ```

  示例：

  ```
  D/HeadsetStateMachine: Disconnected process message: 10, size: 0
  ```

- raw

  格式为：

  ```
  <message>
  ```

  示例：

  ```
  Disconnected process message: 10, size: 0
  ```

- time

  格式为：

  ```
  <datetime> <priority>/<tag>(<pid>): <message>
  ```

  示例：

  ```
  08-28 22:39:39.974 D/HeadsetStateMachine( 1785): Disconnected process message: 10, size: 0
  ```

- threadtime

  格式为：

  ```
  <datetime> <pid> <tid> <priority> <tag>: <message>
  ```

  示例：

  ```
  08-28 22:39:39.974  1785  1832 D HeadsetStateMachine: Disconnected process message: 10, size: 0
  ```

- long

  格式为：

  ```
  [ <datetime> <pid>:<tid> <priority>/<tag> ]
  <message>
  ```

  示例：

  ```
  [ 08-28 22:39:39.974  1785: 1832 D/HeadsetStateMachine ]
  Disconnected process message: 10, size: 0
  ```

指定格式可与上面的过滤同时使用。比如：

```
adb logcat -v long ActivityManager:I *:S
```

#### 清空日志

```
adb logcat -c
```

### 内核日志

命令：

```
adb shell dmesg
```

输出示例：

```
<6>[14201.684016] PM: noirq resume of devices complete after 0.982 msecs
<6>[14201.685525] PM: early resume of devices complete after 0.838 msecs
<6>[14201.753642] PM: resume of devices complete after 68.106 msecs
<4>[14201.755954] Restarting tasks ... done.
<6>[14201.771229] PM: suspend exit 2016-08-28 13:31:32.679217193 UTC
<6>[14201.872373] PM: suspend entry 2016-08-28 13:31:32.780363596 UTC
<6>[14201.872498] PM: Syncing filesystems ... done.
```

中括号里的 `[14201.684016]` 代表内核开始启动后的时间，单位为秒。

通过内核日志我们可以做一些事情，比如衡量内核启动时间，在系统启动完毕后的内核日志里找到 `Freeing init memory` 那一行前面的时间就是。

## 查看设备信息

### 型号

命令：

```
adb shell getprop ro.product.model
```

输出示例：

```
Nexus 5
```

### 电池状况

命令：

```
adb shell dumpsys battery
```

输入示例：

```
Current Battery Service state:
  AC powered: false
  USB powered: true
  Wireless powered: false
  status: 2
  health: 2
  present: true
  level: 44
  scale: 100
  voltage: 3872
  temperature: 280
  technology: Li-poly
```

其中 `scale` 代表最大电量，`level` 代表当前电量。上面的输出表示还剩下 44% 的电量。

### 屏幕分辨率

命令：

```
adb shell wm size
```

输出示例：

```
Physical size: 1080x1920
```

该设备屏幕分辨率为 1080px \* 1920px。

如果使用命令修改过，那输出可能是：

```
Physical size: 1080x1920
Override size: 480x1024
```

表明设备的屏幕分辨率原本是 1080px _ 1920px，当前被修改为 480px _ 1024px。

### 屏幕密度

命令：

```
adb shell wm density
```

输出示例：

```
Physical density: 420
```

该设备屏幕密度为 420dpi。

如果使用命令修改过，那输出可能是：

```
Physical density: 480
Override density: 160
```

表明设备的屏幕密度原来是 480dpi，当前被修改为 160dpi。

### 显示屏参数

命令：

```
adb shell dumpsys window displays
```

输出示例：

```
WINDOW MANAGER DISPLAY CONTENTS (dumpsys window displays)
  Display: mDisplayId=0
    init=1080x1920 420dpi cur=1080x1920 app=1080x1794 rng=1080x1017-1810x1731
    deferred=false layoutNeeded=false
```

其中 `mDisplayId` 为 显示屏编号，`init` 是初始分辨率和屏幕密度，`app` 的高度比 `init` 里的要小，表示屏幕底部有虚拟按键，高度为 1920 - 1794 = 126px 合 42dp。

### android_id

命令：

```
adb shell settings get secure android_id
```

输出示例：

```
51b6be48bac8c569
```

### IMEI

在 Android 4.4 及以下版本可通过如下命令获取 IMEI：

```
adb shell dumpsys iphonesubinfo
```

输出示例：

```
Phone Subscriber Info:
  Phone Type = GSM
  Device ID = 860955027785041
```

其中的 `Device ID` 就是 IMEI。

而在 Android 5.0 及以上版本里这个命令输出为空，得通过其它方式获取了（需要 root 权限）：

```
adb shell
su
service call iphonesubinfo 1
```

输出示例：

```
Result: Parcel(
  0x00000000: 00000000 0000000f 00360038 00390030 '........8.6.0.9.'
  0x00000010: 00350035 00320030 00370037 00350038 '5.5.0.2.7.7.8.5.'
  0x00000020: 00340030 00000031                   '0.4.1...        ')
```

把里面的有效内容提取出来就是 IMEI 了，比如这里的是 `860955027785041`。

参考：[adb shell dumpsys iphonesubinfo not working since Android 5.0 Lollipop](http://stackoverflow.com/questions/27002663/adb-shell-dumpsys-iphonesubinfo-not-working-since-android-5-0-lollipop)

### Android 系统版本

命令：

```
adb shell getprop ro.build.version.release
```

输出示例：

```
5.0.2
```

### IP 地址

每次想知道设备的 IP 地址的时候都得「设置」-「关于手机」-「状态信息」-「IP 地址」很烦对不对？通过 adb 可以方便地查看。

命令：

```
adb shell ifconfig | grep Mask
```

输出示例：

```
inet addr:10.130.245.230  Mask:255.255.255.252
inet addr:127.0.0.1  Mask:255.0.0.0
```

那么 `10.130.245.230` 就是设备 IP 地址。

在有的设备上这个命令没有输出，如果设备连着 WiFi，可以使用如下命令来查看局域网 IP：

```
adb shell ifconfig wlan0
```

输出示例：

```
wlan0: ip 10.129.160.99 mask 255.255.240.0 flags [up broadcast running multicast]
```

或

```
wlan0     Link encap:UNSPEC
          inet addr:10.129.168.57  Bcast:10.129.175.255  Mask:255.255.240.0
          inet6 addr: fe80::66cc:2eff:fe68:b6b6/64 Scope: Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:496520 errors:0 dropped:0 overruns:0 frame:0
          TX packets:68215 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:3000
          RX bytes:116266821 TX bytes:8311736
```

如果以上命令仍然不能得到期望的信息，那可以试试以下命令（部分系统版本里可用）：

```
adb shell netcfg
```

输出示例：

```
wlan0    UP                               10.129.160.99/20  0x00001043 f8:a9:d0:17:42:4d
lo       UP                                   127.0.0.1/8   0x00000049 00:00:00:00:00:00
p2p0     UP                                     0.0.0.0/0   0x00001003 fa:a9:d0:17:42:4d
sit0     DOWN                                   0.0.0.0/0   0x00000080 00:00:00:00:00:00
rmnet0   DOWN                                   0.0.0.0/0   0x00000000 00:00:00:00:00:00
rmnet1   DOWN                                   0.0.0.0/0   0x00000000 00:00:00:00:00:00
rmnet3   DOWN                                   0.0.0.0/0   0x00000000 00:00:00:00:00:00
rmnet2   DOWN                                   0.0.0.0/0   0x00000000 00:00:00:00:00:00
rmnet4   DOWN                                   0.0.0.0/0   0x00000000 00:00:00:00:00:00
rmnet6   DOWN                                   0.0.0.0/0   0x00000000 00:00:00:00:00:00
rmnet5   DOWN                                   0.0.0.0/0   0x00000000 00:00:00:00:00:00
rmnet7   DOWN                                   0.0.0.0/0   0x00000000 00:00:00:00:00:00
rev_rmnet3 DOWN                                   0.0.0.0/0   0x00001002 4e:b7:e4:2e:17:58
rev_rmnet2 DOWN                                   0.0.0.0/0   0x00001002 4e:f0:c8:bf:7a:cf
rev_rmnet4 DOWN                                   0.0.0.0/0   0x00001002 a6:c0:3b:6b:c4:1f
rev_rmnet6 DOWN                                   0.0.0.0/0   0x00001002 66:bb:5d:64:2e:e9
rev_rmnet5 DOWN                                   0.0.0.0/0   0x00001002 0e:1b:eb:b9:23:a0
rev_rmnet7 DOWN                                   0.0.0.0/0   0x00001002 7a:d9:f6:81:40:5a
rev_rmnet8 DOWN                                   0.0.0.0/0   0x00001002 4e:e2:a9:bb:d0:1b
rev_rmnet0 DOWN                                   0.0.0.0/0   0x00001002 fe:65:d0:ca:82:a9
rev_rmnet1 DOWN                                   0.0.0.0/0   0x00001002 da:d8:e8:4f:2e:fe
```

可以看到网络连接名称、启用状态、IP 地址和 Mac 地址等信息。

### Mac 地址

命令：

```
adb shell cat /sys/class/net/wlan0/address
```

输出示例：

```
f8:a9:d0:17:42:4d
```

这查看的是局域网 Mac 地址，移动网络或其它连接的信息可以通过前面的小节「IP 地址」里提到的 `adb shell netcfg` 命令来查看。

### CPU 信息

命令：

```
adb shell cat /proc/cpuinfo
```

输出示例：

```
Processor       : ARMv7 Processor rev 0 (v7l)
processor       : 0
BogoMIPS        : 38.40

processor       : 1
BogoMIPS        : 38.40

processor       : 2
BogoMIPS        : 38.40

processor       : 3
BogoMIPS        : 38.40

Features        : swp half thumb fastmult vfp edsp neon vfpv3 tls vfpv4 idiva idivt
CPU implementer : 0x51
CPU architecture: 7
CPU variant     : 0x2
CPU part        : 0x06f
CPU revision    : 0

Hardware        : Qualcomm MSM 8974 HAMMERHEAD (Flattened Device Tree)
Revision        : 000b
Serial          : 0000000000000000
```

这是 Nexus 5 的 CPU 信息，我们从输出里可以看到使用的硬件是 `Qualcomm MSM 8974`，processor 的编号是 0 到 3，所以它是四核的，采用的架构是 `ARMv7 Processor rev 0 (v71)`。

### 内存信息

命令：

```
adb shell cat /proc/meminfo
```

输出示例：

```
MemTotal:        1027424 kB
MemFree:          486564 kB
Buffers:           15224 kB
Cached:            72464 kB
SwapCached:        24152 kB
Active:           110572 kB
Inactive:         259060 kB
Active(anon):      79176 kB
Inactive(anon):   207736 kB
Active(file):      31396 kB
Inactive(file):    51324 kB
Unevictable:        3948 kB
Mlocked:               0 kB
HighTotal:        409600 kB
HighFree:         132612 kB
LowTotal:         617824 kB
LowFree:          353952 kB
SwapTotal:        262140 kB
SwapFree:         207572 kB
Dirty:                 0 kB
Writeback:             0 kB
AnonPages:        265324 kB
Mapped:            47072 kB
Shmem:              1020 kB
Slab:              57372 kB
SReclaimable:       7692 kB
SUnreclaim:        49680 kB
KernelStack:        4512 kB
PageTables:         5912 kB
NFS_Unstable:          0 kB
Bounce:                0 kB
WritebackTmp:          0 kB
CommitLimit:      775852 kB
Committed_AS:   13520632 kB
VmallocTotal:     385024 kB
VmallocUsed:       61004 kB
VmallocChunk:     209668 kB
```

其中，`MemTotal` 就是设备的总内存，`MemFree` 是当前空闲内存。

### 更多硬件与系统属性

设备的更多硬件与系统属性可以通过如下命令查看：

```
adb shell cat /system/build.prop
```

这会输出很多信息，包括前面几个小节提到的「型号」和「Android 系统版本」等。

输出里还包括一些其它有用的信息，它们也可通过 `adb shell getprop <属性名>` 命令单独查看，列举一部分属性如下：

<table><thead><tr><th>属性名</th><th>含义</th></tr></thead><tbody><tr><td>ro.build.version.sdk</td><td>SDK 版本</td></tr><tr><td>ro.build.version.release</td><td>Android 系统版本</td></tr><tr><td>ro.build.version.security_patch</td><td>Android 安全补丁程序级别</td></tr><tr><td>ro.product.model</td><td>型号</td></tr><tr><td>ro.product.brand</td><td>品牌</td></tr><tr><td>ro.product.name</td><td>设备名</td></tr><tr><td>ro.product.board</td><td>处理器型号</td></tr><tr><td>ro.product.cpu.abilist</td><td>CPU 支持的 abi 列表 [<em>节注一</em>]</td></tr><tr><td>persist.sys.isUsbOtgEnabled</td><td>是否支持 OTG</td></tr><tr><td>dalvik.vm.heapsize</td><td>每个应用程序的内存上限</td></tr><tr><td>ro.sf.lcd_density</td><td>屏幕密度</td></tr></tbody></table>

_节注一：_

一些小厂定制的 ROM 可能修改过 CPU 支持的 abi 列表的属性名，如果用 `ro.product.cpu.abilist` 属性名查找不到，可以这样试试：

```
adb shell cat /system/build.prop | grep ro.product.cpu.abi
```

示例输出：

```
ro.product.cpu.abi=armeabi-v7a
ro.product.cpu.abi2=armeabi
```

## 修改设置

**注：** 修改设置之后，运行恢复命令有可能显示仍然不太正常，可以运行 `adb reboot` 重启设备，或手动重启。

修改设置的原理主要是通过 settings 命令修改 /data/data/com.android.providers.settings/databases/settings.db 里存放的设置值。

### 分辨率

命令：

```
adb shell wm size 480x1024
```

表示将分辨率修改为 480px \* 1024px。

恢复原分辨率命令：

```
adb shell wm size reset
```

### 屏幕密度

命令：

```
adb shell wm density 160
```

表示将屏幕密度修改为 160dpi。

恢复原屏幕密度命令：

```
adb shell wm density reset
```

### 显示区域

命令：

```
adb shell wm overscan 0,0,0,200
```

四个数字分别表示距离左、上、右、下边缘的留白像素，以上命令表示将屏幕底部 200px 留白。

恢复原显示区域命令：

```
adb shell wm overscan reset
```

### 关闭 USB 调试模式

命令：

```
adb shell settings put global adb_enabled 0
```

恢复：

用命令恢复不了了，毕竟关闭了 USB 调试 adb 就连接不上 Android 设备了。

去设备上手动恢复吧：「设置」-「开发者选项」-「Android 调试」。

### 状态栏和导航栏的显示隐藏

本节所说的相关设置对应 Cyanogenmod 里的「扩展桌面」。

命令：

```
adb shell settings put global policy_control <key-values>
```

`<key-values>` 可由如下几种键及其对应的值组成，格式为 `<key1>=<value1>:<key2>=<value2>`。

<table><thead><tr><th>key</th><th>含义</th></tr></thead><tbody><tr><td>immersive.full</td><td>同时隐藏</td></tr><tr><td>immersive.status</td><td>隐藏状态栏</td></tr><tr><td>immersive.navigation</td><td>隐藏导航栏</td></tr><tr><td>immersive.preconfirms</td><td>?</td></tr></tbody></table>

这些键对应的值可则如下值用逗号组合：

<table><thead><tr><th>value</th><th>含义</th></tr></thead><tbody><tr><td><code>apps</code></td><td>所有应用</td></tr><tr><td><code>*</code></td><td>所有界面</td></tr><tr><td><code>packagename</code></td><td>指定应用</td></tr><tr><td><code>-packagename</code></td><td>排除指定应用</td></tr></tbody></table>

例如：

```
adb shell settings put global policy_control immersive.full=*
```

表示设置在所有界面下都同时隐藏状态栏和导航栏。

```
adb shell settings put global policy_control immersive.status=com.package1,com.package2:immersive.navigation=apps,-com.package3
```

表示设置在包名为 `com.package1` 和 `com.package2` 的应用里隐藏状态栏，在除了包名为 `com.package3` 的所有应用里隐藏导航栏。

## 实用功能

### 屏幕截图

截图保存到电脑：

```
adb exec-out screencap -p > sc.png
```

如果 adb 版本较老，无法使用 `exec-out` 命令，这时候建议更新 adb 版本。无法更新的话可以使用以下麻烦点的办法：

先截图保存到设备里：

```
adb shell screencap -p /sdcard/sc.png
```

然后将 png 文件导出到电脑：

```
adb pull /sdcard/sc.png
```

可以使用 `adb shell screencap -h` 查看 `screencap` 命令的帮助信息，下面是两个有意义的参数及含义：

<table><thead><tr><th>参数</th><th>含义</th></tr></thead><tbody><tr><td>-p</td><td>指定保存文件为 png 格式</td></tr><tr><td>-d display-id</td><td>指定截图的显示屏编号（有多显示屏的情况下）</td></tr></tbody></table>

实测如果指定文件名以 `.png` 结尾时可以省略 -p 参数；否则需要使用 -p 参数。如果不指定文件名，截图文件的内容将直接输出到 stdout。

另外一种一行命令截图并保存到电脑的方法：

_Linux 和 Windows_

```
adb shell screencap -p | sed "s/\r$//" > sc.png
```

_Mac OS X_

```
adb shell screencap -p | gsed "s/\r$//" > sc.png
```

这个方法需要用到 gnu sed 命令，在 Linux 下直接就有，在 Windows 下 Git 安装目录的 bin 文件夹下也有。如果确实找不到该命令，可以下载 [sed for Windows](http://gnuwin32.sourceforge.net/packages/sed.htm) 并将 sed.exe 所在文件夹添加到 PATH 环境变量里。

而在 Mac 下使用系统自带的 sed 命令会报错：

```
sed: RE error: illegal byte sequence
```

需要安装 gnu-sed，然后使用 gsed 命令：

```
brew install gnu-sed
```

### 录制屏幕

录制屏幕以 mp4 格式保存到 /sdcard：

```
adb shell screenrecord /sdcard/filename.mp4
```

需要停止时按 Ctrl-C，默认录制时间和最长录制时间都是 180 秒。

如果需要导出到电脑：

```
adb pull /sdcard/filename.mp4
```

可以使用 `adb shell screenrecord --help` 查看 `screenrecord` 命令的帮助信息，下面是常见参数及含义：

<table><thead><tr><th>参数</th><th>含义</th></tr></thead><tbody><tr><td>–size WIDTHxHEIGHT</td><td>视频的尺寸，比如 <code>1280x720</code>，默认是屏幕分辨率。</td></tr><tr><td>–bit-rate RATE</td><td>视频的比特率，默认是 4Mbps。</td></tr><tr><td>–time-limit TIME</td><td>录制时长，单位秒。</td></tr><tr><td>–verbose</td><td>输出更多信息。</td></tr></tbody></table>

### 重新挂载 system 分区为可写

**注：需要 root 权限。**

/system 分区默认挂载为只读，但有些操作比如给 Android 系统添加命令、删除自带应用等需要对 /system 进行写操作，所以需要重新挂载它为可读写。

步骤：

1.  进入 shell 并切换到 root 用户权限。

    命令：

    ```
    adb shell
    su
    ```

2.  查看当前分区挂载情况。

    命令：

    ```
    mount
    ```

    输出示例：

    ```
    rootfs / rootfs ro,relatime 0 0
    tmpfs /dev tmpfs rw,seclabel,nosuid,relatime,mode=755 0 0
    devpts /dev/pts devpts rw,seclabel,relatime,mode=600 0 0
    proc /proc proc rw,relatime 0 0
    sysfs /sys sysfs rw,seclabel,relatime 0 0
    selinuxfs /sys/fs/selinux selinuxfs rw,relatime 0 0
    debugfs /sys/kernel/debug debugfs rw,relatime 0 0
    none /var tmpfs rw,seclabel,relatime,mode=770,gid=1000 0 0
    none /acct cgroup rw,relatime,cpuacct 0 0
    none /sys/fs/cgroup tmpfs rw,seclabel,relatime,mode=750,gid=1000 0 0
    none /sys/fs/cgroup/memory cgroup rw,relatime,memory 0 0
    tmpfs /mnt/asec tmpfs rw,seclabel,relatime,mode=755,gid=1000 0 0
    tmpfs /mnt/obb tmpfs rw,seclabel,relatime,mode=755,gid=1000 0 0
    none /dev/memcg cgroup rw,relatime,memory 0 0
    none /dev/cpuctl cgroup rw,relatime,cpu 0 0
    none /sys/fs/cgroup tmpfs rw,seclabel,relatime,mode=750,gid=1000 0 0
    none /sys/fs/cgroup/memory cgroup rw,relatime,memory 0 0
    none /sys/fs/cgroup/freezer cgroup rw,relatime,freezer 0 0
    /dev/block/platform/msm_sdcc.1/by-name/system /system ext4 ro,seclabel,relatime,data=ordered 0 0
    /dev/block/platform/msm_sdcc.1/by-name/userdata /data ext4 rw,seclabel,nosuid,nodev,relatime,noauto_da_alloc,data=ordered 0 0
    /dev/block/platform/msm_sdcc.1/by-name/cache /cache ext4 rw,seclabel,nosuid,nodev,relatime,data=ordered 0 0
    /dev/block/platform/msm_sdcc.1/by-name/persist /persist ext4 rw,seclabel,nosuid,nodev,relatime,data=ordered 0 0
    /dev/block/platform/msm_sdcc.1/by-name/modem /firmware vfat ro,context=u:object_r:firmware_file:s0,relatime,uid=1000,gid=1000,fmask=0337,dmask=0227,codepage=cp437,iocharset=iso8859-1,shortname=lower,errors=remount-ro 0 0
    /dev/fuse /mnt/shell/emulated fuse rw,nosuid,nodev,relatime,user_id=1023,group_id=1023,default_permissions,allow_other 0 0
    /dev/fuse /mnt/shell/emulated/0 fuse rw,nosuid,nodev,relatime,user_id=1023,group_id=1023,default_permissions,allow_other 0 0
    ```

    找到其中我们关注的带 /system 的那一行：

    ```
    /dev/block/platform/msm_sdcc.1/by-name/system /system ext4 ro,seclabel,relatime,data=ordered 0 0
    ```

3.  重新挂载。

    命令：

    ```
    mount -o remount,rw -t yaffs2 /dev/block/platform/msm_sdcc.1/by-name/system /system
    ```

    这里的 `/dev/block/platform/msm_sdcc.1/by-name/system` 就是我们从上一步的输出里得到的文件路径。

如果输出没有提示错误的话，操作就成功了，可以对 /system 下的文件为所欲为了。

### 查看连接过的 WiFi 密码

**注：需要 root 权限。**

命令：

```
adb shell
su
cat /data/misc/wifi/*.conf
```

输出示例：

```
network={
    ssid="TP-LINK_9DFC"
    scan_ssid=1
    psk="123456789"
    key_mgmt=WPA-PSK
    group=CCMP TKIP
    auth_alg=OPEN
    sim_num=1
    priority=13893
}

network={
    ssid="TP-LINK_F11E"
    psk="987654321"
    key_mgmt=WPA-PSK
    sim_num=1
    priority=17293
}
```

`ssid` 即为我们在 WLAN 设置里看到的名称，`psk` 为密码，`key_mgmt` 为安全加密方式。

### 设置系统日期和时间

**注：需要 root 权限。**

命令：

```
adb shell
su
date -s 20160823.131500
```

表示将系统日期和时间更改为 2016 年 08 月 23 日 13 点 15 分 00 秒。

### 重启手机

命令：

```
adb reboot
```

### 检测设备是否已 root

命令：

```
adb shell
su
```

此时命令行提示符是 `$` 则表示没有 root 权限，是 `#` 则表示已 root。

### 使用 Monkey 进行压力测试

Monkey 可以生成伪随机用户事件来模拟单击、触摸、手势等操作，可以对正在开发中的程序进行随机压力测试。

简单用法：

```
adb shell monkey -p <packagename> -v 500
```

表示向 `<packagename>` 指定的应用程序发送 500 个伪随机事件。

Monkey 的详细用法参考 [官方文档](https://developer.android.com/studio/test/monkey.html)。

### 开启 / 关闭 WiFi

**注：需要 root 权限。**

有时需要控制设备的 WiFi 状态，可以用以下指令完成。

开启 WiFi：

```
adb root
adb shell svc wifi enable
```

关闭 WiFi：

```
adb root
adb shell svc wifi disable
```

若执行成功，输出为空；若未取得 root 权限执行此命令，将执行失败，输出 `Killed`。

## 刷机相关命令

### 重启到 Recovery 模式

命令：

```
adb reboot recovery
```

### 从 Recovery 重启到 Android

命令：

```
adb reboot
```

### 重启到 Fastboot 模式

命令：

```
adb reboot bootloader
```

### 通过 sideload 更新系统

如果我们下载了 Android 设备对应的系统更新包到电脑上，那么也可以通过 adb 来完成更新。

以 Recovery 模式下更新为例：

1.  重启到 Recovery 模式。

    命令：

    ```
    adb reboot recovery
    ```

2.  在设备的 Recovery 界面上操作进入 `Apply update`-`Apply from ADB`。

    注：不同的 Recovery 菜单可能与此有差异，有的是一级菜单就有 `Apply update from ADB`。

3.  通过 adb 上传和更新系统。

    命令：

    ```
    adb sideload <path-to-update.zip>
    ```

## 更多 adb shell 命令

Android 系统是基于 Linux 内核的，所以 Linux 里的很多命令在 Android 里也有相同或类似的实现，在 `adb shell` 里可以调用。本文档前面的部分内容已经用到了 `adb shell` 命令。

### 查看进程

命令：

```
adb shell ps
```

输出示例：

```
USER     PID   PPID  VSIZE  RSS     WCHAN    PC        NAME
root      1     0     8904   788   ffffffff 00000000 S /init
root      2     0     0      0     ffffffff 00000000 S kthreadd
...
u0_a71    7779  5926  1538748 48896 ffffffff 00000000 S com.sohu.inputmethod.sogou:classic
u0_a58    7963  5926  1561916 59568 ffffffff 00000000 S org.mazhuang.boottimemeasure
...
shell     8750  217   10640  740   00000000 b6f28340 R ps
```

各列含义：

<table><thead><tr><th>列名</th><th>含义</th></tr></thead><tbody><tr><td>USER</td><td>所属用户</td></tr><tr><td>PID</td><td>进程 ID</td></tr><tr><td>PPID</td><td>父进程 ID</td></tr><tr><td>NAME</td><td>进程名</td></tr></tbody></table>

### 查看实时资源占用情况

命令：

```
adb shell top
```

输出示例：

```
User 0%, System 6%, IOW 0%, IRQ 0%
User 3 + Nice 0 + Sys 21 + Idle 280 + IOW 0 + IRQ 0 + SIRQ 3 = 307

  PID PR CPU% S  #THR     VSS     RSS PCY UID      Name
 8763  0   3% R     1  10640K   1064K  fg shell    top
  131  0   3% S     1      0K      0K  fg root     dhd_dpc
 6144  0   0% S   115 1682004K 115916K  fg system   system_server
  132  0   0% S     1      0K      0K  fg root     dhd_rxf
 1731  0   0% S     6  20288K    788K  fg root     /system/bin/mpdecision
  217  0   0% S     6  18008K    356K  fg shell    /sbin/adbd
 ...
 7779  2   0% S    19 1538748K  48896K  bg u0_a71   com.sohu.inputmethod.sogou:classic
 7963  0   0% S    18 1561916K  59568K  fg u0_a58   org.mazhuang.boottimemeasure
 ...
```

各列含义：

<table><thead><tr><th>列名</th><th>含义</th></tr></thead><tbody><tr><td>PID</td><td>进程 ID</td></tr><tr><td>PR</td><td>优先级</td></tr><tr><td>CPU%</td><td>当前瞬间占用 CPU 百分比</td></tr><tr><td>S</td><td>进程状态（R = 运行，S = 睡眠，T = 跟踪 / 停止，Z = 僵尸进程）</td></tr><tr><td>THR</td><td>线程数</td></tr><tr><td>VSS</td><td>Virtual Set Size 虚拟耗用内存（包含共享库占用的内存）</td></tr><tr><td>RSS</td><td>Resident Set Size 实际使用物理内存（包含共享库占用的内存）</td></tr><tr><td>PCY</td><td>调度策略优先级，SP_BACKGROUND/SPFOREGROUND</td></tr><tr><td>UID</td><td>进程所有者的用户 ID</td></tr><tr><td>NAME</td><td>进程名</td></tr></tbody></table>

`top` 命令还支持一些命令行参数，详细用法如下：

```
Usage: top [ -m max_procs ] [ -n iterations ] [ -d delay ] [ -s sort_column ] [ -t ] [ -h ]
    -m num  最多显示多少个进程
    -n num  刷新多少次后退出
    -d num  刷新时间间隔（单位秒，默认值 5）
    -s col  按某列排序（可用 col 值：cpu, vss, rss, thr）
    -t      显示线程信息
    -h      显示帮助文档
```

### 其它

如下是其它常用命令的简单描述，前文已经专门讲过的命令不再额外说明：

<table><thead><tr><th>命令</th><th>功能</th></tr></thead><tbody><tr><td>cat</td><td>显示文件内容</td></tr><tr><td>cd</td><td>切换目录</td></tr><tr><td>chmod</td><td>改变文件的存取模式 / 访问权限</td></tr><tr><td>df</td><td>查看磁盘空间使用情况</td></tr><tr><td>grep</td><td>过滤输出</td></tr><tr><td>kill</td><td>杀死指定 PID 的进程</td></tr><tr><td>ls</td><td>列举目录内容</td></tr><tr><td>mount</td><td>挂载目录的查看和管理</td></tr><tr><td>mv</td><td>移动或重命名文件</td></tr><tr><td>ps</td><td>查看正在运行的进程</td></tr><tr><td>rm</td><td>删除文件</td></tr><tr><td>top</td><td>查看进程的资源占用情况</td></tr></tbody></table>

## 常见问题

### 启动 adb server 失败

**出错提示**

```
error: protocol fault (couldn't read status): No error
```

**可能原因**

adb server 进程想使用的 5037 端口被占用。

**解决方案**

找到占用 5037 端口的进程，然后终止它。以 Windows 下为例：

```
netstat -ano | findstr LISTENING

...
TCP    0.0.0.0:5037           0.0.0.0:0              LISTENING       1548
...
```

这里 1548 即为进程 ID，用命令结束该进程：

```
taskkill /PID 1548
```

然后再启动 adb 就没问题了。

## adb 的非官方实现

- [fb-adb](https://github.com/facebook/fb-adb) - A better shell for Android devices (for Mac).

## 致谢

感谢朋友们无私的分享与补充（排名不分先后）。

[zxning](https://github.com/zxning)，[linhua55](https://github.com/linhua55)，[codeskyblue](https://github.com/codeskyblue)，[seasonyuu](https://github.com/seasonyuu)，[fan123199](https://github.com/fan123199)，[zhEdward](https://github.com/zhEdward)，[0x8BADFOOD](https://github.com/0x8BADFOOD)，[keith666666](https://github.com/keith666666)。

## 参考链接

- [Android Debug Bridge](https://developer.android.com/studio/command-line/adb.html)
- [ADB Shell Commands](https://developer.android.com/studio/command-line/shell.html)
- [logcat Command-line Tool](https://developer.android.com/studio/command-line/logcat.html)
- [Android ADB 命令大全](http://zmywly8866.github.io/2015/01/24/all-adb-command.html)
- [adb 命令行的使用记录](https://github.com/ZQiang94/StudyRecords/blob/master/other/src/main/java/com/other/adb%20%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%9A%84%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.md)
- [Android ADB 命令大全 (通过 ADB 命令查看 wifi 密码、MAC 地址、设备信息、操作文件、查看文件、日志信息、卸载、启动和安装 APK 等)](http://www.jianshu.com/p/860bc2bf1a6a)
- [那些做 Android 开发必须知道的 ADB 命令](http://yifeiyuan.me/2016/06/30/ADB%E5%91%BD%E4%BB%A4%E6%95%B4%E7%90%86/)
- [adb shell top](http://blog.csdn.net/kittyboy0001/article/details/38562515)
- [像高手一样使用 ADB 命令行（2）](http://cabins.github.io/2016/03/25/UseAdbLikeAPro-2/)

[img-0]: data:image/png;base64,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
