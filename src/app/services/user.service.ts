import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ServiceResponse } from '../models/service-response.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private USERS_ROUTE = 'https://jsonplaceholder.typicode.com/users';
    private users: Array<User> = new Array<User>();
    public usersChanged = new Subject<Array<User>>();

    constructor(private http: HttpClient) {
        this.getAllUsers();
    }

    public getAllUsers() {
        this.http.get(this.USERS_ROUTE).subscribe((response: Array<Object>) => {
            if (response && response.length > 0) {
                response.forEach(user => this.users.push(new User().deserialize(user)));
                this.usersChanged.next(this.users);
            }
        });
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
