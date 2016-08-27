"use strict";
/**
 * Created by krishnansriramrama on 8/20/16.
 */
var router_1 = require("@angular/router");
var channels_component_1 = require("./channels/channels.component");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var about_component_1 = require("./about/about.component");
var contacts_component_1 = require("./contacts/contacts.component");
var home_component_1 = require("./home/home.component");
var APP_ROUTES = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'login/:user_id', component: login_component_1.LoginComponent },
    { path: 'channels', component: channels_component_1.ChannelsComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contacts_component_1.ContactsComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map