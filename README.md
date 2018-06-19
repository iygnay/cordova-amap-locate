# cordova-amap-location-kit

## 安装

```
> cordova plugin add cordova-amap-location-sdk --variable android_key={KEY} --variable ios_key={KEY}
```

<!-- ## Android Studio

> `cordova platform add android` 之后需要使用 Android Studio进一步设置

#### 设置 App Gradle

```
# 添加源 set repositories
maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }

# 添加依赖 set dependency
implementation 'com.android.support:appcompat-v7:26.1.0'
compile "io.reactivex.rxjava2:rxjava:2.1.8" 
``` -->

<!-- ## Xcode

#### 插件依赖

> 插件依赖于 `swift` 与 `cocoapods`，因此需要安装一下插件

```
cordova plugin add cordova-plugin-add-swift-support cordova-plugin-cocoapod-support
```

#### 修改项目config.xml文件

```
// platform ios
<preference name="UseSwiftLanguageVersion" value="4.0" />
<preference name="pods_ios_min_version" value="9.0" />
<preference name="pods_use_frameworks" value="true" />
<pod name="RxSwift" version="4.1.1" />
<pod name="RxCocoa" version="4.1.1" />

// Set CordovaWebViewEngine
<preference name="CordovaWebViewEngine" value="CDVUIWebViewEngine" />
```

> `cordova platform add ios` 之后需要使用 Xcode 设置编译版本与TeamID，并且需要开启后台定位更新。

## 使用

```
cordova.plugins.location.getLatlng(function(latlng){
    // [lat:double,lng:double]
    console.log(latlng)
})
``` -->
