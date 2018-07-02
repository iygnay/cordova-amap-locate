/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
import * as i0 from "@angular/core";
let IonicAmapLocate = class IonicAmapLocate extends IonicNativePlugin {
    /**
     * @return {?}
     */
    getCurrentPosition() {
        return;
    }
};
IonicAmapLocate.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ IonicAmapLocate.ngInjectableDef = i0.defineInjectable({ factory: function IonicAmapLocate_Factory() { return new IonicAmapLocate(); }, token: IonicAmapLocate, providedIn: "root" });
tslib_1.__decorate([
    Cordova(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], IonicAmapLocate.prototype, "getCurrentPosition", null);
IonicAmapLocate = tslib_1.__decorate([
    Plugin({
        pluginName: 'AMapLocate',
        plugin: 'cordova-amap-locate',
        pluginRef: 'cordova.plugins.locate',
        repo: 'https://github.com/van-team/cordova-amap-locate',
        platforms: ['Android', 'iOS']
    })
], IonicAmapLocate);
export { IonicAmapLocate };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtYW1hcC1sb2NhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3Jkb3ZhLWFtYXAtbG9jYXRlLyIsInNvdXJjZXMiOlsibGliL2lvbmljLWFtYXAtbG9jYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDOztBQUV0RSxJQVVhLGVBQWUsR0FWNUIscUJBVTZCLFNBQVEsaUJBQWlCOzs7O0lBRXBELGtCQUFrQjtRQUNoQixNQUFNLENBQUM7S0FDUjtDQUNGLENBQUE7O1lBUkEsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O0lBRUUsT0FBTyxFQUFFOzs7O3lEQUdUO0FBSlUsZUFBZTtJQVYzQixNQUFNLENBQUM7UUFDTixVQUFVLEVBQUUsWUFBWTtRQUN4QixNQUFNLEVBQUUscUJBQXFCO1FBQzdCLFNBQVMsRUFBRSx3QkFBd0I7UUFDbkMsSUFBSSxFQUFFLGlEQUFpRDtRQUN2RCxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO0tBQzlCLENBQUM7R0FJVyxlQUFlLEVBSzNCO1NBTFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvcmRvdmEsIFBsdWdpbiwgSW9uaWNOYXRpdmVQbHVnaW59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQU1hcExvY2F0ZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtYW1hcC1sb2NhdGUnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMubG9jYXRlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92YW4tdGVhbS9jb3Jkb3ZhLWFtYXAtbG9jYXRlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJb25pY0FtYXBMb2NhdGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q3VycmVudFBvc2l0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=