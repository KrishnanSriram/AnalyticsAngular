"use strict";
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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
// import { ToolbarComponent } from './toolbar/index';
var index_1 = require('./navbar/index');
var carousel_component_1 = require("./carousel/carousel.component");
var column_header_component_1 = require("./column-header/column-header.component");
var feature_header_component_1 = require("./feature-header/feature-header.component");
var footer_component_1 = require("./footer/footer.component");
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
        };
    };
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule],
            declarations: [index_1.NavbarComponent, carousel_component_1.CarouselComponent, column_header_component_1.ColumnHeaderComponent, feature_header_component_1.FeatureHeaderComponent,
                footer_component_1.FooterComponent],
            exports: [index_1.NavbarComponent, common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule, carousel_component_1.CarouselComponent,
                column_header_component_1.ColumnHeaderComponent, feature_header_component_1.FeatureHeaderComponent, footer_component_1.FooterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map