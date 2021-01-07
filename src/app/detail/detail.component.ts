import { Component, OnInit } from '@angular/core';
import {IUser} from '../user/iuser';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-detal',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // @ts-ignore
  user: IUser;
  constructor(
    private activatedRouter: ActivatedRoute,
    private userService: UserService
              ) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      // @ts-ignore
      this.getById(id);
      // this.getAllUser();
    });
  }
  // tslint:disable-next-line:typedef
  getById(id: number) {
    this.userService.findById(id).subscribe(result => {
      this.user = result;
    });
  }
}
