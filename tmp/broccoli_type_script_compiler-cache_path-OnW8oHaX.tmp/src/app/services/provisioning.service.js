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
var http_1 = require("@angular/http");
var ProvisioningService = (function () {
    function ProvisioningService(http) {
        this.http = http;
        this._CONFIG_FILE = "data.json";
        this.configType = "HOME";
        this.configFilePath = "app/data/json/home/data.json";
    }
    ProvisioningService.prototype.getData = function () {
        if (this.configType == "HOME") {
            return this.getHomePageData();
        }
    };
    ProvisioningService.prototype.getHomePageData = function () {
        var _this = this;
        console.log('Get data for HOME page');
        this.http.get(this.configFilePath)
            .map(function (res) { return _this.extractData(res); });
        // .subscribe(
        //   data => { console.dir(data)},
        //   err => console.error(err),
        //   () => console.log('done')
        // )
        // .catch(this.handleError);
    };
    ProvisioningService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProvisioningService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    ProvisioningService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProvisioningService);
    return ProvisioningService;
}());
exports.ProvisioningService = ProvisioningService;
//# sourceMappingURL=provisioning.service.js.map