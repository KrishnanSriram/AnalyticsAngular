/**
 * Created by krishnansriramrama on 8/20/16.
 */
import {Routes, RouterModule} from "@angular/router";
import { Http } from '@angular/http';

const APP_ROUTES:Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: 'app/home.routing#HomeModule'
    },
    {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule'
    },
    {
        path: 'logout',
        loadChildren: 'app/logout/logout.module#LogoutModule'
    },
    {
        path: 'register',
        loadChildren: 'app/register/register.module#RegisterModule'
    },
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    // { path: '**', redirectTo: '', pathMatch: 'full'}
];
export const appRoutingProviders: any[] = [
        Http,
];
export const routing = RouterModule.forRoot(APP_ROUTES);