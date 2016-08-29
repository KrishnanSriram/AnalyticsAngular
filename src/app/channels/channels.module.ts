import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsComponent } from './channels.component';
import {routing} from './channels.routing'

@NgModule({
    imports: [CommonModule, routing],
    declarations: [ChannelsComponent],
    exports: [ChannelsComponent],
    bootstrap: [ChannelsComponent],
})

export class ChannelsModule { }
