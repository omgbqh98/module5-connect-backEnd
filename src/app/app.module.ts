import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AdduserComponent } from './adduser/adduser.component';
import {ReactiveFormsModule} from '@angular/forms';

import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import {AppComponent} from './app.component';
import {ListUserComponent} from './list-user/list-user.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    AdduserComponent,
    EditComponent,
    DeleteComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
