import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ServiceResponse } from '../models/service-response.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    get users(): Array<User> {
        return this._users;
    }

    set users(value: Array<User>) {
        this._users = value;
    }

    private USERS_ROUTE = 'https://jsonplaceholder.typicode.com/users';
    private _users: Array<User> = new Array<User>();
    public usersChanged = new Subject<Array<User>>();

    constructor(private http: HttpClient) {
        this.getAllUsers();
    }

    public getAllUsers() {
        this.http.get(this.USERS_ROUTE).subscribe((response: Array<Object>) => {
            if (response && response.length > 0) {
                response.forEach(user => this._users.push(new User().deserialize(user)));
                this.usersChanged.next(this._users);
            }
        });
    }

    public addUser(user: User): ServiceResponse  {
        if (!user || !user.id) {
            return new ServiceResponse(false, 'Something went wrong!')
        } else if (this.userWithIdExists(user.id)) {
            return new ServiceResponse(false, 'User with id: ' + user.id + ' already exists!');
        }
        this.users.push(user);
        return new ServiceResponse(true, '');
    }

    public removeUser(id: number): ServiceResponse  {
        return null;
    }

    public updateUser(user: User): ServiceResponse  {
        return null;
    }

    private userWithIdExists(id: number): boolean {
        let exists = false;
        this.users.forEach(user => {
            if (user.id === id) {
                exists = true;
            }
        });
        return exists;
    }
}
