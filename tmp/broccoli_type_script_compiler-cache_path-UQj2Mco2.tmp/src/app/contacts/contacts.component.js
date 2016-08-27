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
var ContactsComponent = (function () {
    function ContactsComponent() {
        this.data = {
            "contacts": [{
                    "header": "Mobile Contact",
                    "text": "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
                    "buttonTitle": "Mobile contact",
                    "showHeaderImage": false,
                    "showHeaderButton": true
                }, {
                    "header": "Services Contact",
                    "text": "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
                    "buttonTitle": "Service contact",
                    "showHeaderImage": false,
                    "showHeaderButton": true
                }, {
                    "header": "Web Contact",
                    "text": "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
                    "buttonTitle": "Web contact",
                    "showHeaderImage": false,
                    "showHeaderButton": true
                }]
        };
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent.prototype.getContacts = function () {
        return this.data.contacts;
    };
    ContactsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-contacts',
            templateUrl: 'contacts.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map