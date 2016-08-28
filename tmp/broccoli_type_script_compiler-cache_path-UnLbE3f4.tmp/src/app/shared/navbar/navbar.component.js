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
var NavbarComponent = (function () {
    function NavbarComponent() {
        if (this.navbartitle == null) {
            this.navbartitle = "Test";
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (this.navbarusername == null) {
            this.navbarItems = this.preloginNavbarItems();
        }
    };
    NavbarComponent.prototype.preloginNavbarItems = function () {
        return [
            new NavbarItem('about', 'About'),
            new NavbarItem('contacts', 'Contacts')
        ];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NavbarComponent.prototype, "navbartitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NavbarComponent.prototype, "navbarusername", void 0);
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-navbar',
            templateUrl: 'navbar.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
var NavbarItem = (function () {
    function NavbarItem(link, title) {
        this.link = link;
        this.title = title;
    }
    return NavbarItem;
}());
//# sourceMappingURL=navbar.component.js.map