"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var log_service_1 = require("./app/services/log.service");
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [log_service_1.LogService]);
//# sourceMappingURL=main.js.map