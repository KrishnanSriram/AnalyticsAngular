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
var RegisterComponent = (function () {
    function RegisterComponent() {
        this.REGISTRATION_FORM_ERR_MSGS = {
            'email': 'Invalid or wrong email',
            'password': 'Please check on password rules',
            'confirmPassword': 'Password and confirm password don\'t match',
            'firstName': 'First name should be minimum 3 characters long',
            'lastName': 'Last name should be of minimum 2 characters long'
        };
        this.registrationFormError = {
            'email': '',
            'password': '',
            'confirmPassword': '',
            'firstName': '',
            'lastName': ''
        };
        this.genders = ['Male', 'Female', 'Other'];
        this.registrationForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")
            ]),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8)]),
            confirmPassword: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8)]),
            firstName: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            lastName: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(2)])
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        console.log('Submit button tapped');
        console.dir(this.registrationForm);
        // Check and validate
        if (this.registrationForm.invalid) {
            // email
            if (this.registrationForm.controls['email'].invalid == true) {
                this.registrationFormError.email = this.REGISTRATION_FORM_ERR_MSGS.email;
            }
            //password
            if (this.registrationForm.controls['password'].invalid == true) {
                this.registrationFormError.password = this.REGISTRATION_FORM_ERR_MSGS.password;
            }
            //confirm password
            if (this.registrationForm.controls['confirmPassword'].invalid == true) {
                this.registrationFormError.confirmPassword = this.REGISTRATION_FORM_ERR_MSGS.confirmPassword;
            }
            // first name
            if (this.registrationForm.controls['firstName'].invalid == true) {
                this.registrationFormError.firstName = this.REGISTRATION_FORM_ERR_MSGS.firstName;
            }
            // last name
            if (this.registrationForm.controls['lastName'].invalid == true) {
                this.registrationFormError.lastName = this.REGISTRATION_FORM_ERR_MSGS.lastName;
            }
            return false;
        }
        else {
            this.registrationFormError.email = '';
            this.registrationFormError.password = '';
            this.registrationFormError.confirmPassword = '';
            this.registrationFormError.firstName = '';
            this.registrationFormError.lastName = '';
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-register',
            templateUrl: 'register.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map