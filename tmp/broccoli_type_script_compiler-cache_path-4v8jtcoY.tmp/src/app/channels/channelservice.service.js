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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var core_1 = require("@angular/core");
var ChannelService = (function () {
    function ChannelService(http) {
        this.http = http;
        //TODO: this should be moved into a configuration file, and should be used across the application.
        // private BASE_URL = "http://localhost:3000/api/";
        this.BASE_URL = "http://personalanalytics.mybluemix.net/api/";
        this.CHANNEL_LIST = this.BASE_URL + "channels";
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // this.headers.append('Access-Control-Allow-Origin', '*');
    }
    ChannelService.prototype.getChannels = function () {
        return this.http.get(this.CHANNEL_LIST, this.headers)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /**
     * Handle HTTP error
     */
    ChannelService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ChannelService.prototype.addNewChannel = function (channel) {
        console.log("addNewChannel for new channel");
        var channelJSON = channel.toJSON();
        console.log(channelJSON);
        return this.http.post(this.CHANNEL_LIST, channelJSON)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ChannelService.prototype.editChannel = function (channel) {
        console.log("editChannel");
        // this should return an observable
    };
    ChannelService.prototype.updateChannel = function (channel) {
        console.log("updateChannel in Channel");
        var url = this.CHANNEL_LIST + "/" + channel._id;
        var channelJSON = channel.toJSON();
        console.log('UpdateChannel JSON: ');
        console.dir(channelJSON);
        return this.http.put(url, channelJSON)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ChannelService.prototype.deleteChannel = function (channel) {
        console.log("deleteChannel");
        // this should return an observable
    };
    ChannelService.prototype.findChannel = function () {
        console.log("getChannelList");
        // this should return an observable
    };
    ChannelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ChannelService);
    return ChannelService;
}());
exports.ChannelService = ChannelService;
//# sourceMappingURL=channelservice.service.js.map