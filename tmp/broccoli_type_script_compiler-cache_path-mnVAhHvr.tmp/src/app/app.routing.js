"use strict";
/**
 * Created by krishnansriramrama on 8/20/16.
 */
var router_1 = require("@angular/router");
var APP_ROUTES = [
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map