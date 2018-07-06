var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
var AMapLocate = (function (_super) {
    __extends(AMapLocate, _super);
    function AMapLocate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AMapLocate.prototype.getCurrentPosition = function () {
        return;
    };
    AMapLocate.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AMapLocate.ctorParameters = function () { return []; };
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
export { AMapLocate };
//# sourceMappingURL=index.js.map