import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './user-list/add-user/add-user.component';
import { RemoveUserComponent } from './user-list/remove-user/remove-user.component';

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        AddUserComponent,
        RemoveUserComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
