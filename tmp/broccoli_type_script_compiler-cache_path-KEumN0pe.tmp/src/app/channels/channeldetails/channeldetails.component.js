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
// import {ConfirmationModalComponent} from "../../shared";
// import {ChannelFormComponent} from "../channelform";
var ChanneldetailsComponent = (function () {
    function ChanneldetailsComponent() {
        this.confirmationMessage = "Are you sure you want to delete channel?";
        this.confirmationModalHeader = "Delete Channel";
        this.editChannelFormTitle = "Edit Channel";
        this.editChannelSubmitBtnTitle = "Update Channel";
    }
    ChanneldetailsComponent.prototype.ngOnInit = function () {
        console.log('Init invoked');
        // if(this.selectedchannel) {
        //   if(this.selectedchannel.isPrivate == true) {
        //     this.channelType = "Yes";
        //   } else {
        //     this.channelType = "No";
        //   }
        //
        //   console.log(this.channelType);
        // }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', channel_1.Channel)
    ], ChanneldetailsComponent.prototype, "selectedchannel", void 0);
    ChanneldetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pa-channeldetails',
            templateUrl: 'channeldetails.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ChanneldetailsComponent);
    return ChanneldetailsComponent;
}());
exports.ChanneldetailsComponent = ChanneldetailsComponent;
//# sourceMappingURL=channeldetails.component.js.map