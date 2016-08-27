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
/**
 * This class represents the navigation bar component.
 */
var NavbarComponent = (function () {
    function NavbarComponent() {
        //TODO: Load all nav bar items from here
        // set default selected item or handle each selection item operation
        // This is where the events are navigated to other places
        this.title = "IBM Personal Analytics";
        this._seletecNavItem = "Home";
        this.selectedMenu = new core_1.EventEmitter();
    }
    NavbarComponent.prototype.isActiveNavItem = function (item) {
        return (item == this._seletecNavItem);
    };
    NavbarComponent.prototype.onAbout = function () {
        this._seletecNavItem = "About";
        // this.selectedMenu.emit('About');
        console.log('NavbarComponent: About selected');
    };
    NavbarComponent.prototype.onHome = function () {
        this._seletecNavItem = "Home";
        this.selectedMenu.emit('Home');
        console.log('NavbarComponent: Home selected');
    };
    NavbarComponent.prototype.onContact = function () {
        this._seletecNavItem = "Contact";
        // this.selectedMenu.emit('Contact');
        console.log('NavbarComponent: Contact selected');
    };
    NavbarComponent.prototype.onChannels = function () {
        this._seletecNavItem = "Channels";
        this.selectedMenu.emit('Channels');
    };
    NavbarComponent.prototype.onLogin = function () {
        this._seletecNavItem = "Login";
        this.selectedMenu.emit('Login');
        console.log('NavbarComponent: Login selected');
    };
    NavbarComponent.prototype.onRegister = function () {
        this._seletecNavItem = "Register";
        this.selectedMenu.emit('Register');
        console.log('NavbarComponent: Register selected');
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NavbarComponent.prototype, "selectedMenu", void 0);
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pa-navbar',
            templateUrl: 'navbar.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map