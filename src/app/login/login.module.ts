import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {routing} from './login.routing'
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, routing, ReactiveFormsModule],
    declarations: [LoginComponent],
    // exports: [LoginComponent],
    bootstrap: [LoginComponent],
})

export class LoginModule { }
