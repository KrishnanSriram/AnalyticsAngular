import {Injectable} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {User} from "../models/user";

@Injectable()
export class UserService {

    public loginEvent: EventEmitter<User>;

    constructor() {
        this.loginEvent = new EventEmitter<User>();
    }

    public login(username: string, password: string): boolean {
        console.log('Login invoked');
        if(username == null || password == null) {
            return false;
        }

        return true;
    }

    public signout() {
        console.log('Will sign out user');
    }
}