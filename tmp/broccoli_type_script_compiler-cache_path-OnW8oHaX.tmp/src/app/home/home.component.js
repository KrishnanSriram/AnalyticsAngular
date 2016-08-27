"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var provisioning_service_1 = require("../services/provisioning.service");
// import { NameListService } from '../shared/index';
/**
 * This class represents the lazy loaded HomeComponent.
 */
var HomeComponent = (function () {
    function HomeComponent(provisionService) {
        this.provisionService = provisionService;
        //TODO: Create something like HomePage service that should, feed into here
        // This homepage service in Angular2 should have a corresponding service in the back-end
        // It should cater to content for all of the components in this page
        //   Carousel, Three-column-header, feature, footer components
        // sample code for communication with service - BEGINS
        /*
         newName: string = '';
         errorMessage: string;
         names: any[] = [];
      
         getNames() {
         this.nameListService.get()
         .subscribe(
         names => this.names = names,
         error =>  this.errorMessage = <any>error
         );
         }
      
         addName(): boolean {
         // TODO: implement nameListService.post
         this.names.push(this.newName);
         this.newName = '';
         return false;
         }
         */
        // sample code - ENDS
        this._provisionData = null;
        this._columnHeaderData = null;
        this._carouselData = null;
        this._featureHeaderData = null;
        this._footerData = null;
        this.loadDataFromExternalConfig();
    }
    /**
     * Get the names OnInit
     */
    HomeComponent.prototype.ngOnInit = function () {
        console.log('Home component created');
        // Pass parameters to carousel component
        // Pass parameters into Three-column-header component
        // Pass parameters to each of the feature-header component
        this.featureHeader = "First featurette heading.";
        this.featureMutedHeader = "It'll blow your mind.";
        this.featureText = "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.";
    };
    HomeComponent.prototype.loadCarousel = function () {
        return this._provisionData.carousel;
    };
    HomeComponent.prototype.loadColumnHeader = function () {
        if (this._provisionData == null) {
            console.log('Data is not loaded at all');
        }
        else {
            this._columnHeaderData = this._provisionData["column-headers"];
            // console.dir(this._provisionData);
            for (var header in this._columnHeaderData) {
                console.log(header);
            }
        }
        return this._columnHeaderData;
    };
    HomeComponent.prototype.loadFeatureHeader = function () {
        return this._provisionData.columnheaders;
    };
    HomeComponent.prototype.loadFooter = function () {
        return this._provisionData.footer;
    };
    HomeComponent.prototype.loadDataFromExternalConfig = function () {
        this.provisionService.configType = "HOME";
        this._provisionData = this.provisionService.getData();
    };
    HomeComponent.prototype.provisionHeaderComponent = function () {
        // this.headerTitle = "Heading";
        // this.headerText = "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.";
        // this.headerImage = "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
        // this.headerButtonText = "View details";
    };
    /**
     * Navbar item selected
     * @param menu item selected
     */
    HomeComponent.prototype.onNavSelectedItem = function (item) {
        alert("Selected item is: " + item);
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pa-home',
            templateUrl: 'home.component.html',
        }), 
        __metadata('design:paramtypes', [provisioning_service_1.ProvisioningService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
var ColumnHeader = (function () {
    // header: string;
    // text: string;
    // headerImage: string;
    // buttonText: string;
    function ColumnHeader(header, text, headerImage, buttonText) {
        this.header = header;
        this.text = text;
        this.headerImage = headerImage;
        this.buttonText = buttonText;
    }
    return ColumnHeader;
}());
var FeatureHeader = (function () {
    function FeatureHeader(header, mutedHeader, text) {
        this.header = header;
        this.mutedHeader = mutedHeader;
        this.text = text;
    }
    return FeatureHeader;
}());
var Carousel = (function () {
    function Carousel() {
    }
    return Carousel;
}());
var Footer = (function () {
    function Footer() {
    }
    return Footer;
}());
//# sourceMappingURL=home.component.js.map