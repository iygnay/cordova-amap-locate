import { __extends, __decorate, __metadata } from 'tslib';
import { Injectable, defineInjectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IonicAmapLocate = /** @class */ (function (_super) {
    __extends(IonicAmapLocate, _super);
    function IonicAmapLocate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    IonicAmapLocate.prototype.getCurrentPosition = /**
     * @return {?}
     */
    function () {
        return;
    };
    IonicAmapLocate.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */ IonicAmapLocate.ngInjectableDef = defineInjectable({ factory: function IonicAmapLocate_Factory() { return new IonicAmapLocate(); }, token: IonicAmapLocate, providedIn: "root" });
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], IonicAmapLocate.prototype, "getCurrentPosition", null);
    IonicAmapLocate = __decorate([
        Plugin({
            pluginName: 'AMapLocate',
            plugin: 'cordova-amap-locate',
            pluginRef: 'cordova.plugins.locate',
            repo: 'https://github.com/van-team/cordova-amap-locate',
            platforms: ['Android', 'iOS']
        })
    ], IonicAmapLocate);
    return IonicAmapLocate;
}(IonicNativePlugin));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { IonicAmapLocate };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZG92YS1hbWFwLWxvY2F0ZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY29yZG92YS1hbWFwLWxvY2F0ZS9saWIvaW9uaWMtYW1hcC1sb2NhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29yZG92YSwgUGx1Z2luLCBJb25pY05hdGl2ZVBsdWdpbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBTWFwTG9jYXRlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1hbWFwLWxvY2F0ZScsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5sb2NhdGUnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Zhbi10ZWFtL2NvcmRvdmEtYW1hcC1sb2NhdGUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIElvbmljQW1hcExvY2F0ZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgQENvcmRvdmEoKVxuICBnZXRDdXJyZW50UG9zaXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBYXFDQSxtQ0FBaUI7Ozs7Ozs7SUFFcEQsNENBQWtCOzs7O1FBQ2hCLE9BQU87S0FDUjs7Z0JBUEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztRQUVFLE9BQU8sRUFBRTs7Ozs2REFHVDtJQUpVLGVBQWU7UUFWM0IsTUFBTSxDQUFDO1lBQ04sVUFBVSxFQUFFLFlBQVk7WUFDeEIsTUFBTSxFQUFFLHFCQUFxQjtZQUM3QixTQUFTLEVBQUUsd0JBQXdCO1lBQ25DLElBQUksRUFBRSxpREFBaUQ7WUFDdkQsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztTQUM5QixDQUFDO09BSVcsZUFBZSxFQUszQjswQkFsQkQ7RUFhcUMsaUJBQWlCOzs7Ozs7Ozs7Ozs7OzsifQ==