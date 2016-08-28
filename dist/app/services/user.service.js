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
var core_2 = require('@angular/core');
var user_1 = require("../models/user");
var UserService = (function () {
    function UserService() {
        this.loginEvent = new core_2.EventEmitter();
        this.logoutEvent = new core_2.EventEmitter();
    }
    UserService.prototype.login = function (user) {
        console.log('Login invoked');
        if (user.name == null || user.password == null) {
            return;
        }
        this.user = new user_1.User("Krishnan", "asdlkfh435876weitruzxcnmv4327856");
        this.loginEvent.emit(this.user);
    };
    UserService.prototype.isAuthenticated = function () {
        if (this.user == null) {
            return false;
        }
        return true;
        // return this.user.name.length > 0;
    };
    UserService.prototype.signout = function () {
        console.log('Will sign out user');
        if (this.user == null) {
            console.log('User object is already NULL. Cannot do anything on it');
        }
        else {
            this.user.sessionId = "";
            this.user.name = "";
            this.user = null;
            console.log('User object cleaned up successfully');
        }
        this.logoutEvent.emit('');
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map