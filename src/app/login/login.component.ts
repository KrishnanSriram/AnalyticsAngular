import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {ReactiveFormsModule, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {Validators} from "@angular/common";
import {User} from "../models/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private userService: UserService, private route: ActivatedRoute, private router: Router) {
        console.log('Login constructor invoked');
        // email: FormControl = new FormControl('', Validators.required);
        // password: FormControl = new FormControl('', Validators.required);

        this.loginForm = formBuilder.group({
                'email': ['', Validators.required],
                'password': ['', Validators.required]
            }
        );
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.loginForm.value.email);
        let user = new User("Krishnan", "sdakjfbhsakjdf2354asfd");
        user.password = this.loginForm.value.password;
        this.userService.login(user)
        this.userService.loginEvent.emit(user);
        let link = ['/home'];
        this.router.navigate(link);
    }
}
