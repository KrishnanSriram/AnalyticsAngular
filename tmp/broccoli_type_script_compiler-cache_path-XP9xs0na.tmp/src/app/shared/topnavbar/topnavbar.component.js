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
var navbaritem_1 = require("../navbaritem");
var TopnavbarComponent = (function () {
    function TopnavbarComponent() {
        if (this.navbartitle == null) {
            this.navbartitle = "Test";
        }
    }
    TopnavbarComponent.prototype.ngOnInit = function () {
        if (this.navbarusername == null) {
            this.navbarItems = this.preloginNavbarItems();
        }
    };
    TopnavbarComponent.prototype.preloginNavbarItems = function () {
        return [
            new navbaritem_1.NavbarItem('about', 'About'),
            new navbaritem_1.NavbarItem('contacts', 'Contacts')
        ];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TopnavbarComponent.prototype, "navbartitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TopnavbarComponent.prototype, "navbarusername", void 0);
    TopnavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-topnavbar',
            templateUrl: 'topnavbar.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], TopnavbarComponent);
    return TopnavbarComponent;
}());
exports.TopnavbarComponent = TopnavbarComponent;
//# sourceMappingURL=topnavbar.component.js.map