import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) {
    console.log('Login constructor invoked');
  }

  ngOnInit() {
  }

}
