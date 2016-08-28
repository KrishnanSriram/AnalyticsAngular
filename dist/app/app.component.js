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
var user_service_1 = require("./services/user.service");
var AppComponent = (function () {
    function AppComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.title = '';
        this.username = null;
        userService.loginEvent.subscribe(function (userInfo) { return _this.updateNavbarWithUserInfo(userInfo); });
        userService.logoutEvent.subscribe(function (data) { return _this.updateNavbarForLogout(data); }, function () { return console.log("Logout from AppComponent"); });
    }
    AppComponent.prototype.updateNavbarWithUserInfo = function (userInfo) {
        console.log("Received username in app component: " + userInfo.name);
        this.username = "Krishnan";
    };
    AppComponent.prototype.updateNavbarForLogout = function (data) {
        this.username = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map