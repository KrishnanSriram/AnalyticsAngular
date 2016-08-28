import {Component} from '@angular/core';
import {UserService} from "./services/user.service";
import {User} from "./models/user";

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    title = '';
    username = null;
    constructor(private userService: UserService) {
        userService.loginEvent.subscribe(
            (userInfo) => this.updateNavbarWithUserInfo(userInfo));
        userService.logoutEvent.subscribe(
            (data) => this.updateNavbarForLogout(data),
            () => console.log("Logout from AppComponent")
        )
    }

    updateNavbarWithUserInfo(userInfo: User) {
        console.log("Received username in app component: " + userInfo.name);
        this.username = "Krishnan";
    }

    updateNavbarForLogout(data: any) {
        this.username = null;
    }

}
