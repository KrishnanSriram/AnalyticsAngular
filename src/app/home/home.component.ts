import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {ChannelsComponent} from "../channels/channels.component";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'pa-home',
    templateUrl: 'home.component.html',
    directives: [ChannelsComponent]

})

export class HomeComponent implements OnInit {
    private isAuthenticated: boolean

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.isAuthenticated = this.userService.isAuthenticated();
        console.log('ngOnInit for HomeComponent invoked: ' + this.isAuthenticated);
    }

    updateHomeComponentOnLogout(data: any) {
        console.log('Logout on updateHomeComponentOnLogout');
        this.isAuthenticated = false;
    }

}
