import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'logout.component.html',
})
export class LogoutComponent implements OnInit {

    constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
        console.log('Logout constructor invoked');
    }

    ngOnInit() {
        this.userService.signout();
        let link = ['/home'];
        this.router.navigate(link);
    }
}
