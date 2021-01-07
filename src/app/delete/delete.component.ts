import {Component, OnInit} from '@angular/core';
import {IUser} from '../user/iuser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  // @ts-ignore
  user: IUser;
  // @ts-ignore
  id: number;
  // @ts-ignore
  listUser: IUser[];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      // @ts-ignore
      this.getById(id);
      this.getAllUser();
    });
  }

  // tslint:disable-next-line:typedef
  getById(id: number) {
    this.userService.findById(id).subscribe(result => {
      this.user = result;
    });
  }
  getAllUser(): IUser[]{
    this.userService.getAllUser().subscribe((data: any) => {
      this.listUser = data;
      console.log(this.listUser);
    });
    return this.listUser;
  }
  // tslint:disable-next-line:typedef
  delete() {
    this.userService.deleteById(this.user.id).subscribe();
    this.router.navigate(['list']);
  }
}

