import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
// import {ProvisioningService} from "../services/provisioning.service";
import {routing} from './home.routes'

@NgModule({
    imports: [CommonModule, routing],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    bootstrap: [HomeComponent],
    // providers: [ProvisioningService]
})

export class HomeModule { }
