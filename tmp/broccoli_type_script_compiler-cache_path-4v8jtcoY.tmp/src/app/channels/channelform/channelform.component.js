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
var ChannelFormComponent = (function () {
    function ChannelFormComponent(channelService, formBuilder, renderer) {
        this.channelService = channelService;
        this.formBuilder = formBuilder;
        this.renderer = renderer;
        this.channelData = null;
        console.log("NewChannelDialog instantiated: " + formBuilder);
        this.statusChoices = ['', 'Open', 'Close'];
        this.addChannelStatus = true;
        if (this.channel == null) {
            this.channel = new channel_1.Channel('', '', '', true, 'Open');
            this.channelForm = this.formBuilder.group({
                'name': [this.channel.name, forms_1.Validators.required],
                'description': [this.channel.description, forms_1.Validators.required],
                'tags': [this.channel.tags, forms_1.Validators.required],
                'status': [this.channel.status, forms_1.Validators.required],
                'start_date': [channel_1.Channel.todaysDate(), forms_1.Validators.required],
                'isPrivate': [this.channel.isPrivate, forms_1.Validators.required]
            });
        }
    }
    ChannelFormComponent.prototype.ngOnInit = function () {
    };
    ChannelFormComponent.prototype.ngOnChanges = function () {
        console.log('onChanges in ChannelFormComponent');
        this.channelData = this.channel;
        if (this.channelData != null) {
            console.log("ID is: " + this.channelData._id);
            if (this.channel.status == null) {
                console.log('Updated Status');
                this.channel.status = "Open";
            }
            if (this.channel.isPrivate == null) {
                this.channel.isPrivate = false;
                console.log('Updated isPrivate');
            }
            this.channelForm = this.formBuilder.group({
                'name': [this.channel.name, forms_1.Validators.required],
                'description': [this.channel.description, forms_1.Validators.required],
                'tags': [this.channel.tags, forms_1.Validators.required],
                'status': [this.channel.status, forms_1.Validators.required],
                'start_date': [channel_1.Channel.todaysDate(), forms_1.Validators.required],
                'isPrivate': [this.channel.isPrivate, forms_1.Validators.required]
            });
        }
    };
    ChannelFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var name = this.channelForm.controls['name'].value;
        var description = this.channelForm.controls['description'].value;
        var tags = this.channelForm.controls['tags'].value;
        var status = this.channelForm.controls['status'].value;
        var start_date = this.channelForm.controls['start_date'].value;
        var isPrivate = this.channelForm.controls['isPrivate'].value;
        if (this.channel.isNewChannel() == true && this.channelForm.valid == true) {
            this.channel = new channel_1.Channel(name, description, tags, isPrivate, status);
            // save new channel
            this.channelService.addNewChannel(this.channel).subscribe(function (data) { return _this.addSuccess(data); }, function (err) { return _this.handleServiceError(err); }, function () { return console.log('Completed addNewChannel service request'); });
        }
        else {
            // update existing channel. Do not create new Channel instance. If we do, then that will be
            // treated as an insert operation
            console.log('Update new Channel information');
            this.channel.name = name;
            this.channel.description = description;
            this.channel.tags = tags;
            this.channel.status = status;
            this.channel.isPrivate = isPrivate;
            this.channel.start_date = start_date;
            console.dir(this.channel);
            this.channelService.updateChannel(this.channel).subscribe(function (data) { return _this.addSuccess(data); }, function (err) { return _this.handleServiceError(err); }, function () { return console.log('Completed updateService request'); });
        }
    };
    ChannelFormComponent.prototype.addSuccess = function (data) {
        this.addChannelStatus = true;
        this.channelForm.reset('');
        this.channel = null;
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(this.modalCancelDismiss.nativeElement, 'dispatchEvent', [event]);
        // Fire an event to refresh button in Channels component
    };
    ChannelFormComponent.prototype.handleServiceError = function (err) {
        this.addChannelStatus = false;
        this.addChannelErrorMessage = 'Failed to save channel information. Please try again later. ' + err.description;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChannelFormComponent.prototype, "formid", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChannelFormComponent.prototype, "formtitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChannelFormComponent.prototype, "formsubmitbuttontitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', channel_1.Channel)
    ], ChannelFormComponent.prototype, "channel", void 0);
    __decorate([
        core_1.ViewChild('modalCancelDismiss'), 
        __metadata('design:type', core_1.ElementRef)
    ], ChannelFormComponent.prototype, "modalCancelDismiss", void 0);
    ChannelFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-newchannel',
            templateUrl: 'channelform.component.html',
        }), 
        __metadata('design:paramtypes', [channelservice_service_1.ChannelService, forms_1.FormBuilder, core_1.Renderer])
    ], ChannelFormComponent);
    return ChannelFormComponent;
}());
exports.ChannelFormComponent = ChannelFormComponent;
//# sourceMappingURL=channelform.component.js.map