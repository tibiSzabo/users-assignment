import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ServiceResponse } from '../models/service-response.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _users: Array<User> = new Array<User>();
    get users(): Array<User> {
        return this._users;
    }
    set users(value: Array<User>) {
        this._users = value;
    }

    constructor() {
    }

    public getAllUsers(): ServiceResponse {
        return null;
    }

    public addUser(user: User): ServiceResponse  {
        return null;
    }

    public removeUser(id: number): ServiceResponse  {
        return null;
    }

    public updateUser(user: User): ServiceResponse  {
        return null;
    }
}
