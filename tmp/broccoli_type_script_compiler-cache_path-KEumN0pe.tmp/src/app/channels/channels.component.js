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
var channel_service_1 = require("./services/channel.service");
var channel_list_component_1 = require("./channel-list/channel-list.component");
var channeldetails_component_1 = require("./channeldetails/channeldetails.component");
var ChannelsComponent = (function () {
    function ChannelsComponent() {
    }
    ChannelsComponent.prototype.ngOnInit = function () {
    };
    ChannelsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pa-channels',
            templateUrl: 'channels.component.html',
            directives: [channel_list_component_1.ChannelListComponent, channeldetails_component_1.ChanneldetailsComponent],
            providers: [channel_service_1.ChannelService]
        }), 
        __metadata('design:paramtypes', [])
    ], ChannelsComponent);
    return ChannelsComponent;
}());
exports.ChannelsComponent = ChannelsComponent;
//# sourceMappingURL=channels.component.js.map