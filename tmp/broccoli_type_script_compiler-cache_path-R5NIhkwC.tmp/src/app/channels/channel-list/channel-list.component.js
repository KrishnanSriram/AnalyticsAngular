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
var channel_list_item_1 = require("../channel-list-item");
var channel_1 = require("../channel");
var log_service_1 = require("../../services/log.service");
var channel_service_1 = require("../services/channel.service");
var ChannelListComponent = (function () {
    //TODO: set up a broadcast event that will refresh the contents
    function ChannelListComponent(logService, channelService) {
        this.logService = logService;
        this.channelService = channelService;
        this.channelSelected = new core_1.EventEmitter();
        this.channelListError = null;
        this.isLoading = false;
        logService.writeLog("ChannelListComponent created");
        this.createChannelFormTitle = "Create New Channel";
        this.createChannelSubmitButtonTitle = "Save Channel";
    }
    ChannelListComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.updateChannelList();
    };
    ChannelListComponent.prototype.updateChannelList = function () {
        var _this = this;
        this.channelService.getChannels()
            .subscribe(function (data) { return _this.channelItems = data; }, function (error) { return _this.channelListError = error; }, function () { console.log('getChannels() completed'); _this.isLoading = false; });
    };
    ChannelListComponent.prototype.onRefresh = function () {
        this.isLoading = true;
        this.updateChannelList();
    };
    ChannelListComponent.prototype.onSelected = function (channel) {
        console.log('Channel selected event - ChannelListComponent');
        var model = channel_1.Channel.fromJSON(channel);
        this.channelSelected.emit(model);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ChannelListComponent.prototype, "channelSelected", void 0);
    ChannelListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pa-channel-list',
            templateUrl: 'channel-list.component.html',
            directives: [channel_list_item_1.ChannelListItemComponent],
        }), 
        __metadata('design:paramtypes', [log_service_1.LogService, channel_service_1.ChannelService])
    ], ChannelListComponent);
    return ChannelListComponent;
}());
exports.ChannelListComponent = ChannelListComponent;
//# sourceMappingURL=channel-list.component.js.map