import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Router} from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {TopnavbarComponent} from "./topnavbar/topnavbar.component";


@NgModule({
    imports: [CommonModule,RouterModule],
    declarations: [NavbarComponent, TopnavbarComponent],
    exports: [NavbarComponent, TopnavbarComponent,
        CommonModule, RouterModule]
})

export class SharedModule { }