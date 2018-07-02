/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
import * as i0 from "@angular/core";
var IonicAmapLocate = /** @class */ (function (_super) {
    tslib_1.__extends(IonicAmapLocate, _super);
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
    return IonicAmapLocate;
}(IonicNativePlugin));
export { IonicAmapLocate };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtYW1hcC1sb2NhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb3Jkb3ZhLWFtYXAtbG9jYXRlLyIsInNvdXJjZXMiOlsibGliL2lvbmljLWFtYXAtbG9jYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDOzs7SUFZakMsMkNBQWlCOzs7Ozs7O0lBRXBELDRDQUFrQjs7OztRQUNoQixNQUFNLENBQUM7S0FDUjs7Z0JBUEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztRQUVFLE9BQU8sRUFBRTs7Ozs2REFHVDtJQUpVLGVBQWU7UUFWM0IsTUFBTSxDQUFDO1lBQ04sVUFBVSxFQUFFLFlBQVk7WUFDeEIsTUFBTSxFQUFFLHFCQUFxQjtZQUM3QixTQUFTLEVBQUUsd0JBQXdCO1lBQ25DLElBQUksRUFBRSxpREFBaUQ7WUFDdkQsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztTQUM5QixDQUFDO09BSVcsZUFBZSxFQUszQjswQkFsQkQ7RUFhcUMsaUJBQWlCO1NBQXpDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb3Jkb3ZhLCBQbHVnaW4sIElvbmljTmF0aXZlUGx1Z2lufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FNYXBMb2NhdGUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWFtYXAtbG9jYXRlJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmxvY2F0ZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdmFuLXRlYW0vY29yZG92YS1hbWFwLWxvY2F0ZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSW9uaWNBbWFwTG9jYXRlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBAQ29yZG92YSgpXG4gIGdldEN1cnJlbnRQb3NpdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19