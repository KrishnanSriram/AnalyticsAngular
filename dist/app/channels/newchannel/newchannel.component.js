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
var channel_1 = require("../channel");
var channelservice_service_1 = require("../channelservice.service");
var NewchannelComponent = (function () {
    function NewchannelComponent(channelService, formBuilder) {
        this.channelService = channelService;
        this.formBuilder = formBuilder;
        console.log("NewChannelDialog instantiated: " + formBuilder);
        this.channelForm = formBuilder.group({
            'name': ['', forms_1.Validators.required],
            'description': ['', forms_1.Validators.required],
            'tags': ['', forms_1.Validators.required],
            'status': ['Open', forms_1.Validators.required],
            'start_date': [channel_1.Channel.todaysDate(), forms_1.Validators.required],
            'isPrivate': ['private', forms_1.Validators.required]
        });
        this.statusChoices = ['', 'Open', 'Close'];
        this.addChannelStatus = true;
    }
    NewchannelComponent.prototype.ngOnInit = function () {
    };
    NewchannelComponent.prototype.onSubmit = function () {
        var _this = this;
        var name = this.channelForm.controls['name'].value;
        var description = this.channelForm.controls['description'].value;
        var tags = this.channelForm.controls['tags'].value;
        var status = this.channelForm.controls['status'].value;
        var start_date = this.channelForm.controls['start_date'].value;
        var isPrivate = this.channelForm.controls['isPrivate'].value;
        console.log('New ChannelForm');
        console.dir(this.channelForm);
        //
        if (this.channel == null && this.channelForm.valid == true) {
            this.channel = new channel_1.Channel(name, description, tags, isPrivate, status);
            console.dir(this.channel);
            // save new channel
            this.channelService.addNewChannel(this.channel).subscribe(function (data) { return _this.addSuccess(data); }, function (err) { return _this.handleServiceError(err); }, function () { return console.log('Completed addNewChannel service request'); });
        }
        else {
        }
    };
    NewchannelComponent.prototype.addSuccess = function (data) {
        this.addChannelStatus = true;
        this.channel = null;
        // Fire an event to refresh button in Channels component
    };
    NewchannelComponent.prototype.handleServiceError = function (err) {
        this.addChannelStatus = false;
        this.addChannelErrorMessage = 'Failed to add channel. Please try again later. ' + err.description;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NewchannelComponent.prototype, "formid", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NewchannelComponent.prototype, "formtitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', channel_1.Channel)
    ], NewchannelComponent.prototype, "channel", void 0);
    NewchannelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-newchannel',
            templateUrl: 'newchannel.component.html',
        }), 
        __metadata('design:paramtypes', [channelservice_service_1.ChannelService, forms_1.FormBuilder])
    ], NewchannelComponent);
    return NewchannelComponent;
}());
exports.NewchannelComponent = NewchannelComponent;
//# sourceMappingURL=newchannel.component.js.map