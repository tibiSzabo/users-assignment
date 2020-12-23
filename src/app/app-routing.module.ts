import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './user-list/add-user/add-user.component';
import { RemoveUserComponent } from './user-list/remove-user/remove-user.component';

const routes: Routes = [
    { path: '', component: UserListComponent },
    { path: 'add', component: AddUserComponent },
    { path: 'remove:id', component: RemoveUserComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
