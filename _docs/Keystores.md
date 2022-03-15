# Android: Generate Release/Debug Keystores (Example)

> A protip by swampmobile about debug, release, android, and keystore.

## Generate Keystores

To generate keystores for signing Android apps at the command line, use:

```
$ keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

A debug keystore which is used to sign an Android app during development needs a specific alias and password combination as dictated by Google. To create a debug keystore, use:

```
$ keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

- Keystore name: "debug.keystore"
- Keystore password: "android"
- Key alias: "androiddebugkey"
- Key password: "android"
- CN: "CN=Android Debug,O=Android,C=US"

[http://developer.android.com/tools/publishing/app-signing.html#debugmode](http://developer.android.com/tools/publishing/app-signing.html#debugmode)

For your release keystore, do the same as above but choose a name, alias, and password that you prefer.

## Get Key Fingerprints

To hook your app up with services like Google APIs you'll need to print out each of your keys' fingerprints and give them to the services you're using. To do that, use:

```
$ keytool -list -v -keystore [keystore path] -alias [alias-name] -storepass [storepass] -keypass [keypass]
```

For your debug key that would look like:

```
$ keytool -list -v -keystore debug.keystore -alias androiddebugkey -storepass android -keypass android
```

re
