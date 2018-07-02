/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
let AMapLocate = class AMapLocate extends IonicNativePlugin {
    /**
     * @return {?}
     */
    getCurrentPosition() {
        return;
    }
};
AMapLocate.decorators = [
    { type: Injectable },
];
tslib_1.__decorate([
    Cordova(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AMapLocate.prototype, "getCurrentPosition", null);
AMapLocate = tslib_1.__decorate([
    Plugin({
        pluginName: 'AMapLocate',
        plugin: 'cordova-amap-locate',
        pluginRef: 'cordova.plugins.locate',
        repo: 'https://github.com/van-team/cordova-amap-locate',
        platforms: ['Android', 'iOS']
    })
], AMapLocate);
export { AMapLocate };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2dGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvcmRvdmEtYW1hcC1sb2NhdGUvIiwic291cmNlcyI6WyJsaWIvbmF2dGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxJQVFhLFVBQVUsR0FSdkIsZ0JBUXdCLFNBQVEsaUJBQWlCOzs7O0lBRS9DLGtCQUFrQjtRQUNoQixNQUFNLENBQUM7S0FDUjtDQUNGLENBQUE7O1lBTkEsVUFBVTs7O0lBRVIsT0FBTyxFQUFFOzs7O29EQUdUO0FBSlUsVUFBVTtJQVJ0QixNQUFNLENBQUM7UUFDTixVQUFVLEVBQUUsWUFBWTtRQUN4QixNQUFNLEVBQUUscUJBQXFCO1FBQzdCLFNBQVMsRUFBRSx3QkFBd0I7UUFDbkMsSUFBSSxFQUFFLGlEQUFpRDtRQUN2RCxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO0tBQzlCLENBQUM7R0FFVyxVQUFVLEVBS3RCO1NBTFksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvcmRvdmEsIFBsdWdpbiwgSW9uaWNOYXRpdmVQbHVnaW59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQU1hcExvY2F0ZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtYW1hcC1sb2NhdGUnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMubG9jYXRlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92YW4tdGVhbS9jb3Jkb3ZhLWFtYXAtbG9jYXRlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQU1hcExvY2F0ZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoKVxuICBnZXRDdXJyZW50UG9zaXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==