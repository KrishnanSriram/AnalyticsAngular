import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {routing} from './register.routing'

@NgModule({
    imports: [CommonModule, routing],
    declarations: [RegisterComponent],
    // exports: [LoginComponent],
    bootstrap: [RegisterComponent],
})

export class RegisterModule { }
