import { __extends, __decorate, __metadata } from 'tslib';
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AMapLocate = /** @class */ (function (_super) {
    __extends(AMapLocate, _super);
    function AMapLocate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AMapLocate.prototype.getCurrentPosition = /**
     * @return {?}
     */
    function () {
        return;
    };
    AMapLocate.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AMapLocate.prototype, "getCurrentPosition", null);
    AMapLocate = __decorate([
        Plugin({
            pluginName: 'AMapLocate',
            plugin: 'cordova-amap-locate',
            pluginRef: 'cordova.plugins.locate',
            repo: 'https://github.com/van-team/cordova-amap-locate',
            platforms: ['Android', 'iOS']
        })
    ], AMapLocate);
    return AMapLocate;
}(IonicNativePlugin));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { AMapLocate };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZG92YS1hbWFwLWxvY2F0ZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY29yZG92YS1hbWFwLWxvY2F0ZS9saWIvbmF2dGl2ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb3Jkb3ZhLCBQbHVnaW4sIElvbmljTmF0aXZlUGx1Z2lufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FNYXBMb2NhdGUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWFtYXAtbG9jYXRlJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmxvY2F0ZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdmFuLXRlYW0vY29yZG92YS1hbWFwLWxvY2F0ZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFNYXBMb2NhdGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q3VycmVudFBvc2l0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQVdnQ0EsOEJBQWlCOzs7Ozs7O0lBRS9DLHVDQUFrQjs7OztRQUNoQixPQUFPO0tBQ1I7O2dCQUxGLFVBQVU7OztRQUVSLE9BQU8sRUFBRTs7Ozt3REFHVDtJQUpVLFVBQVU7UUFSdEIsTUFBTSxDQUFDO1lBQ04sVUFBVSxFQUFFLFlBQVk7WUFDeEIsTUFBTSxFQUFFLHFCQUFxQjtZQUM3QixTQUFTLEVBQUUsd0JBQXdCO1lBQ25DLElBQUksRUFBRSxpREFBaUQ7WUFDdkQsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztTQUM5QixDQUFDO09BRVcsVUFBVSxFQUt0QjtxQkFoQkQ7RUFXZ0MsaUJBQWlCOzs7Ozs7Ozs7Ozs7OzsifQ==