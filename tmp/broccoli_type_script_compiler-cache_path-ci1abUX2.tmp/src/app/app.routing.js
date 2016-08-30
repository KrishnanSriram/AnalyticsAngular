"use strict";
/**
 * Created by krishnansriramrama on 8/20/16.
 */
var router_1 = require("@angular/router");
var http_1 = require('@angular/http');
var APP_ROUTES = [
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
];
exports.appRoutingProviders = [
    http_1.Http,
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map