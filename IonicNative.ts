import {Injectable} from '@angular/core';
import {Cordova, Plugin, IonicNativePlugin} from '@ionic-native/core';

@Plugin({
  pluginName: 'AMapLocate',
  plugin: 'cordova-amap-locate',
  pluginRef: 'cordova.plugins.locate',
  repo: 'https://github.com/van-team/cordova-amap-locate',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class AMapLocate extends IonicNativePlugin {
  @Cordova()
  getCurrentPosition(): Promise<any> {
    return;
  }
}

