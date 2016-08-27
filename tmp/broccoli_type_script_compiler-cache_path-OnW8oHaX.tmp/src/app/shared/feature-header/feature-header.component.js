"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/**
 * This class represents the navigation bar component.
 */
var FeatureHeaderComponent = (function (_super) {
    __extends(FeatureHeaderComponent, _super);
    function FeatureHeaderComponent() {
        _super.apply(this, arguments);
    }
    FeatureHeaderComponent.prototype.ngOnInit = function () {
        // this.header = "First featurette heading.";
        // this.mutedHeader = "It'll blow your mind.";
        // this.text = "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FeatureHeaderComponent.prototype, "header", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FeatureHeaderComponent.prototype, "mutedHeader", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FeatureHeaderComponent.prototype, "text", void 0);
    FeatureHeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pa-feature-header',
            templateUrl: 'feature-header.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], FeatureHeaderComponent);
    return FeatureHeaderComponent;
}(core_1.OnInit));
exports.FeatureHeaderComponent = FeatureHeaderComponent;
//# sourceMappingURL=feature-header.component.js.map