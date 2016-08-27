import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Router} from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";


@NgModule({
    imports: [CommonModule,RouterModule],
    declarations: [NavbarComponent],
    exports: [NavbarComponent,
        CommonModule, RouterModule]
})

export class SharedModule { }