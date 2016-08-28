import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LogoutComponent} from './logout.component';
import {routing} from './logout.routing'
import {ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../services/user.service";

@NgModule({
    imports: [CommonModule, routing],
    declarations: [LogoutComponent],
    // exports: [LoginComponent],
    bootstrap: [LogoutComponent],
})

export class LogoutModule { }
