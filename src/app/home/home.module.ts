import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {routing} from './home.routes'
import {ChannelsModule} from "../channels/channels.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule,routing],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    bootstrap: [HomeComponent],
    // providers: [ProvisioningService]
})

export class HomeModule { }
