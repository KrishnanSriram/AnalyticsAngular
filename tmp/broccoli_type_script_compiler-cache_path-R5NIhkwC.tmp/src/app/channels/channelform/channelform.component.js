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
var channel_service_1 = require("../services/channel.service");
var ChannelFormComponent = (function () {
    function ChannelFormComponent(channelService) {
        this.channelService = channelService;
        this.statusChoices = ["Open", "Closed"];
        this.channelData = null;
        this.updateStatusText = "";
    }
    ChannelFormComponent.prototype.ngOnInit = function () {
        console.log('Channelform created with title: ' + this.title);
        this.payLoad();
    };
    ChannelFormComponent.prototype.ngOnChanges = function (changes) {
        console.log('Changes - ChannelFormComponent');
        console.dir(this.channel);
        this.channelData = this.channel;
    };
    ChannelFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(this.channelData);
        // check to see if channel has ID on it. If it does then do an update, else add new
        if (this.channelData._id != null) {
            this.channelService.updateChannel(this.channelData).subscribe(function (data) { return _this.addSuccess(form); }, function (error) { return _this.addFailed(error); }, function () { return console.log('update Channel completed.'); });
        }
        else {
            this.channelService.addNewChannel(this.channelData).subscribe(function (data) { return _this.addSuccess(form); }, function (error) { return _this.addFailed(error); }, function () { return console.log('addNewChannel completed.'); });
        }
    };
    ChannelFormComponent.prototype.addSuccess = function (form) {
        this.updateStatusText = "Your changes were updated successfully.";
        this.updateStatus = true;
        console.log('Success - addNewChannel');
        // form.reset("");
        // this.payLoad();
        // should emit an event to channel list component for refresh
    };
    ChannelFormComponent.prototype.addFailed = function (err) {
        this.updateStatusText = "Failed to update your changes.";
        this.updateStatus = false;
        console.log("ERROR: Failed to add a new channel - " + err);
        console.dir(err);
    };
    ChannelFormComponent.prototype.onCancel = function (form) {
        form.reset("");
        this.payLoad();
    };
    ChannelFormComponent.prototype.payLoad = function () {
        this.channelData = new channel_1.Channel('', '', '', true, 'Open');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChannelFormComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChannelFormComponent.prototype, "submitbuttontitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChannelFormComponent.prototype, "formid", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', channel_1.Channel)
    ], ChannelFormComponent.prototype, "channel", void 0);
    ChannelFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pa-channelform',
            templateUrl: 'channelform.component.html',
            styles: ["\n    .alert-danger {\n      margin-top: 10px;\n    }\n    .col-xs-6 {\n      margin-left: -11px;\n    }\n    .col-xs-2 {\n      margin-top: 24px;\n    }\n"
            ]
        }), 
        __metadata('design:paramtypes', [channel_service_1.ChannelService])
    ], ChannelFormComponent);
    return ChannelFormComponent;
}());
exports.ChannelFormComponent = ChannelFormComponent;
//# sourceMappingURL=channelform.component.js.map