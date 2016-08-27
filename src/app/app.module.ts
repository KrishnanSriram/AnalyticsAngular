/**
 * Created by krishnansriramrama on 8/20/16.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import {HttpModule, HTTP_PROVIDERS} from '@angular/http';
import { AppComponent } from './app.component';
import {routing, appRoutingProviders} from "./app.routing";
import {HomeModule} from "./home/home.module";
import {SharedModule} from "./shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports:      [BrowserModule, HttpModule, HomeModule, routing,SharedModule],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }],

  bootstrap:    [AppComponent],
})
export class AppModule {}
