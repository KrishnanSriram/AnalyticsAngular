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
var forms_1 = require("@angular/forms");
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
        this.CLIENT_ERROR = {
            loginNameError: 'Invalid login ID',
            loginPasswordError: 'Missing or non-matching password'
        };
        this.loginFormError = {
            'email': '',
            'password': ''
        };
        this.loginForm = new forms_1.FormGroup({
            //Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b")
            email: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")
            ]),
            password: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        console.log('Login button tapped');
        if (this.loginForm.valid == false) {
            if (this.loginForm.controls['email'].invalid == true) {
                this.loginFormError.email = this.CLIENT_ERROR.loginNameError;
            }
            if (this.loginForm.controls['password'].invalid == true) {
                this.loginFormError.password = this.CLIENT_ERROR.loginPasswordError;
            }
            return;
        }
        // valid form
        // Proceed to login
        this.router.navigate(['/channels']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: 'login.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map