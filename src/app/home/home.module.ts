import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {routing} from './home.routes'
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, routing],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    bootstrap: [HomeComponent],
})

export class HomeModule { }
