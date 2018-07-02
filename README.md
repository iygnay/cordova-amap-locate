# cordova-amap-locate

## Install AMap SDK Plugin

``` shell
// Cordova
cordova plugin add cordova-amap-locate --variable android_key={KEY} --variable ios_key={KEY}
// Ionic
ionic cordova plugin add cordova-amap-locate --variable android_key={KEY} --variable ios_key={KEY}
```

> In order to prevent error, at present you need to set the variable information of both Android and iOS.

### Pay attention to IOS platform

> Ios is not perfect, you need to continue to set the configuration in Xcode, but this problem will be resolved later

The plug-in relies on `cordova-plugin-add-swift-support` and `cordova-plugin-cocoapods-support`, so it needs to be installed in the project and configured according to the instructions.

``` shell
cordova plugin add cordova-plugin-add-swift-support --save 
cordova plugin add cordova-plugin-cocoapod-support --save
```

### Modify the project config.xml

``` xml
<platform name="ios">
    ...
    <preference name="deployment-target" value="9.0" />
    <preference name="pods_use_frameworks" value="true" />
    <preference name="UseSwiftLanguageVersion" value="4" />

    <pod name="RxSwift" />
    <pod name="RxCocoa" />
    <pod name="AMap3DMap" />
    <pod name="AMapLocation" />
    ...
</platform>
```

### Configuring Xcode

#### - First of all 

check Project `Signing`, if this isn't configuration, please configure the `termId`.

#### - Second part

check Project and Pods `Swift Lanaguage Version`, if it is `Unspecified`, you must set a swift version. If you set the version to `4.0`, you can change the `Project Format` to `Xcode 8.0`.

#### - Third part

check Project `Objective-C Bridging Header`，if it is normal, please add these to `Bridging-Header.h`.

``` cpp
#import <AMapFoundationKit/AMapFoundationKit.h>
#import <AMapLocationKit/AMapLocationKit.h>
```

#### - Last

- `Background Modes` set `On`
- selected `Location updates` 

## Used in Cordova 

``` javascript
cordova.plugins.locate.getCurrentPosition(function (latlng) {
    console.log(latlng);
});
// output: [lat:double,lng:double]
```

## Used in Ionic

> Later Update
