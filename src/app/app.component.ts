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

    constructor(private userService: UserService) {
        userService.loginEvent.subscribe(
            (userInfo) => this.updateNavbarWithUserInfo(userInfo));
    }

    updateNavbarWithUserInfo(userInfo: User) {
        console.log(userInfo);
    }
}
