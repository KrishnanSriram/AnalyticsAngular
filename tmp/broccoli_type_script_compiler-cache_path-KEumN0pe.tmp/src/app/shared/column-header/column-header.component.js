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
// import {EventEmitter} from "@angular/common/esm/src/facade/async";
/**
 * This class represents the navigation bar component.
 */
var ColumnHeaderComponent = (function (_super) {
    __extends(ColumnHeaderComponent, _super);
    function ColumnHeaderComponent() {
        _super.apply(this, arguments);
    }
    // @Output() buttonSelected = new EventEmitter<string>();
    // constructor() {
    //
    // }
    ColumnHeaderComponent.prototype.ngOnInit = function () {
        this.headerbuttontext = this.headerbuttontext; // + " " + "&raquo";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ColumnHeaderComponent.prototype, "heading", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ColumnHeaderComponent.prototype, "text", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ColumnHeaderComponent.prototype, "headerimage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ColumnHeaderComponent.prototype, "showheaderimage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ColumnHeaderComponent.prototype, "showheaderbutton", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ColumnHeaderComponent.prototype, "headerbuttontext", void 0);
    ColumnHeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pa-column-header',
            templateUrl: 'column-header.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ColumnHeaderComponent);
    return ColumnHeaderComponent;
}(core_1.OnInit));
exports.ColumnHeaderComponent = ColumnHeaderComponent;
//# sourceMappingURL=column-header.component.js.map