// import { Injectable } from '@angular/core';
"use strict";
// @Injectable()
var channel_1 = require("../channel");
// import {LogService} from "../../services/log.service";
var ChannelService = (function () {
    function ChannelService() {
    }
    ChannelService.prototype.getChannelsList = function () {
        console.log("getChannelList");
        return [
            new channel_1.Channel('Tea', 'All about green tea', ['tea', 'drinks', 'anti-oxidant'], false, 'open'),
            new channel_1.Channel('Coffee', 'All about coffee', ['coffee', 'drinks', 'caffine', 'energy'], false, 'open')
        ];
    };
    ChannelService.prototype.addNewChannel = function (channel) {
        console.log("addNewChannel");
    };
    ChannelService.prototype.editChannel = function (channel) {
        console.log("editChannel");
    };
    ChannelService.prototype.updateChannel = function (channel) {
        console.log("updateChannel");
    };
    ChannelService.prototype.deleteChannel = function (channel) {
        console.log("deleteChannel");
    };
    ChannelService.prototype.findChannel = function () {
        console.log("getChannelList");
    };
    return ChannelService;
}());
exports.ChannelService = ChannelService;
//# sourceMappingURL=channel.service.js.map