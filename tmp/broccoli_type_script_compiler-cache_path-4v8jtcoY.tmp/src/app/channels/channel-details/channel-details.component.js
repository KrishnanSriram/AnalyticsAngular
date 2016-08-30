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
var channel_1 = require("../channel");
var channelservice_service_1 = require("../channelservice.service");
var ChannelDetailsComponent = (function () {
    function ChannelDetailsComponent(channelService) {
        this.channelService = channelService;
        console.log('ChannelDetailsComponent constructor');
        console.dir(this.selectedchannel);
        this.editChannelDialogId = "editChannelDialog";
        this.editChannelModalTitle = "Edit Channel";
        this.editChannelModalSubmitButtonTitle = "Update Channel";
    }
    ChannelDetailsComponent.prototype.ngOnInit = function () {
    };
    ChannelDetailsComponent.prototype.onDelete = function () {
        var _this = this;
        if (this.selectedchannel == null) {
            alert("Please select a channcel to delete");
            return;
        }
        if (this.selectedchannel.isNewChannel()) {
            alert('Cannot delete channel');
        }
        this.channelService.deleteChannel(this.selectedchannel).subscribe(function (data) { return _this.confirmDelete(data); }, function (err) { return _this.handleError(err); }, function () { return console.log('Completed Delete Channel action'); });
    };
    ChannelDetailsComponent.prototype.confirmDelete = function (data) {
        console.dir(data);
        this.selectedchannel = null;
    };
    ChannelDetailsComponent.prototype.handleError = function (err) {
        var message = 'Failed to remove channel information. Please try again later';
        message += 'ERROR: ' + err.description;
        alert(message);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', channel_1.Channel)
    ], ChannelDetailsComponent.prototype, "selectedchannel", void 0);
    ChannelDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-channel-details',
            templateUrl: 'channel-details.component.html',
        }), 
        __metadata('design:paramtypes', [channelservice_service_1.ChannelService])
    ], ChannelDetailsComponent);
    return ChannelDetailsComponent;
}());
exports.ChannelDetailsComponent = ChannelDetailsComponent;
//# sourceMappingURL=channel-details.component.js.map