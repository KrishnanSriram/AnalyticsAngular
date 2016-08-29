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
var channelservice_service_1 = require("../channelservice.service");
var channel_1 = require("../channel");
var ListChannelComponent = (function () {
    function ListChannelComponent(channelService) {
        this.channelService = channelService;
        this.channelListError = null;
        this.isLoading = false;
    }
    ListChannelComponent.prototype.ngOnInit = function () {
        this.channelSelected = new core_1.EventEmitter();
        this.getChannels();
    };
    ListChannelComponent.prototype.getChannels = function () {
        var _this = this;
        this.isLoading = true;
        this.channelService.getChannels()
            .subscribe(function (data) { _this.channelItems = data; console.log(data); }, function (error) { return _this.channelListError = error; }, function () { console.log('getChannels() in ListChannelComponent completed.'); _this.isLoading = false; });
    };
    ListChannelComponent.prototype.onRefresh = function () {
        this.isLoading = true;
        this.getChannels();
    };
    ListChannelComponent.prototype.onSelected = function (channel) {
        var model = new channel_1.Channel(channel.name, channel.description, channel.tags.join(', '), channel.isPrivate, channel.status);
        model._id = channel._id;
        model.rev = channel._rev;
        console.log('Channel selected event fired ListChannelComponent: ' + model.toJSON());
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ListChannelComponent.prototype, "channelSelected", void 0);
    ListChannelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-listchannel',
            templateUrl: 'listchannel.component.html',
        }), 
        __metadata('design:paramtypes', [channelservice_service_1.ChannelService])
    ], ListChannelComponent);
    return ListChannelComponent;
}());
exports.ListChannelComponent = ListChannelComponent;
//# sourceMappingURL=listchannel.component.js.map