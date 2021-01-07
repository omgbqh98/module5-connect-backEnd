import { Component, OnInit } from '@angular/core';
import {IUser} from '../user/iuser';
import {UserService} from '../service/user.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  // @ts-ignore
  listUser: IUser [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser(): IUser[]{
    this.userService.getAllUser().subscribe((data: any) => {
      this.listUser = data;
      console.log(this.listUser);
    });
    return this.listUser;
  }
}
