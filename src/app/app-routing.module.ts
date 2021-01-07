import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdduserComponent} from './adduser/adduser.component';
import {ListUserComponent} from './list-user/list-user.component';
import {EditComponent} from './edit/edit.component';
import {DeleteComponent} from './delete/delete.component';
import { DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: ListUserComponent
  },
  {
    path: 'create',
    component: AdduserComponent
  },
  {
    path: 'list',
    component: ListUserComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'delete/:id',
    component: DeleteComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
