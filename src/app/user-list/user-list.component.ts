import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: [ './user-list.component.sass' ]
})
export class UserListComponent implements OnInit, OnDestroy {
    users: Array<User> = [];
    usersSub: Subscription;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.usersSub = this.userService.usersChanged.subscribe(users => this.users = users);
    }

    ngOnDestroy() {
        this.usersSub.unsubscribe();
    }

    onEditUserClick(id: number) {

    }

    onDeleteUserClick(id: number) {
        this.userService.removeUser(id);
    }
}
