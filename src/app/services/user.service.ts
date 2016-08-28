import {Injectable} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {User} from "../models/user";

@Injectable()
export class UserService {

    public loginEvent: EventEmitter<User>;
    public logoutEvent: EventEmitter<any>;
    public user: User;

    constructor() {
        this.loginEvent = new EventEmitter<User>();
        this.logoutEvent = new EventEmitter<any>();
    }

    public login(user: User) {
        console.log('Login invoked');
        if(user.name == null || user.password == null) {
            return;
        }
        this.user = new User("Krishnan", "asdlkfh435876weitruzxcnmv4327856");
        this.loginEvent.emit(this.user);
    }

    public isAuthenticated(): boolean {
        if(this.user == null) {
            return false;
        }
        return true;
        // return this.user.name.length > 0;
    }

    public signout() {
        console.log('Will sign out user');
        if(this.user == null) {
            console.log('User object is already NULL. Cannot do anything on it');
        } else {
            this.user.sessionId = "";
            this.user.name = "";
            this.user = null;
            console.log('User object cleaned up successfully');
        }
        this.logoutEvent.emit('');
    }
}