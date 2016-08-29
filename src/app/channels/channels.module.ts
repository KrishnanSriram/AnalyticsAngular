import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsComponent } from './channels.component';
import {routing} from './channels.routing'
import {NewchannelComponent} from "./newchannel/newchannel.component";

@NgModule({
    imports: [CommonModule, routing],
    declarations: [ChannelsComponent],
    exports: [ChannelsComponent],
    bootstrap: [ChannelsComponent],
})

export class ChannelsModule { }
