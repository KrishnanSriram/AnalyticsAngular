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
var user_service_1 = require("../services/user.service");
var forms_1 = require('@angular/forms');
var common_1 = require("@angular/common");
var user_1 = require("../models/user");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(formBuilder, userService, route, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.route = route;
        this.router = router;
        console.log('Login constructor invoked');
        // email: FormControl = new FormControl('', Validators.required);
        // password: FormControl = new FormControl('', Validators.required);
        this.loginForm = formBuilder.group({
            'email': ['', common_1.Validators.required],
            'password': ['', common_1.Validators.required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log(this.loginForm.value.email);
        var user = new user_1.User("Krishnan", "sdakjfbhsakjdf2354asfd");
        user.password = this.loginForm.value.password;
        this.userService.login(user);
        this.userService.loginEvent.emit(user);
        var link = ['/home'];
        this.router.navigate(link);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: 'login.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, user_service_1.UserService, router_1.ActivatedRoute, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map