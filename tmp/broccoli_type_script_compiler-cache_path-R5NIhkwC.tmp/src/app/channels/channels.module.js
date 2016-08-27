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
var common_1 = require('@angular/common');
var channelform_component_1 = require("./channelform/channelform.component");
var channels_component_1 = require("./channels.component");
var channeldetails_component_1 = require("./channeldetails/channeldetails.component");
var channel_list_component_1 = require("./channel-list/channel-list.component");
var confirmation_modal_component_1 = require("../shared/confirmation-modal/confirmation-modal.component");
var forms_1 = require("@angular/forms");
var ChannelsModule = (function () {
    function ChannelsModule() {
    }
    ChannelsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [channels_component_1.ChannelsComponent, channelform_component_1.ChannelFormComponent, channeldetails_component_1.ChanneldetailsComponent,
                channel_list_component_1.ChannelListComponent, confirmation_modal_component_1.ConfirmationModalComponent],
            exports: [channels_component_1.ChannelsComponent, channelform_component_1.ChannelFormComponent, channeldetails_component_1.ChanneldetailsComponent,
                channel_list_component_1.ChannelListComponent],
            bootstrap: [channels_component_1.ChannelsComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], ChannelsModule);
    return ChannelsModule;
}());
exports.ChannelsModule = ChannelsModule;
//# sourceMappingURL=channels.module.js.map