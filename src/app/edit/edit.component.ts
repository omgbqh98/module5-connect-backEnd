import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IUser} from '../user/iuser';
import {UserService} from '../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
// @ts-ignore
  private id: number;
  // @ts-ignore
  private user: IUser;
  // @ts-ignore
   newUserForm: FormGroup;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.userService.findById(this.id).subscribe(res => {
        this.user = res;
        this.newUserForm.setValue({
          username: res.username,
          password: res.password
        });
      });
    });
  }

  // tslint:disable-next-line:typedef
  onUpdate() {
    if (!this.newUserForm.invalid) {
      this.user.username = this.newUserForm.value.username;
      this.user.password = this.newUserForm.value.password;
      console.log(this.user);

      this.userService.update(this.user).toPromise().then(value => {
        console.log('update', value);
      });
      this.router.navigate(['/']);
    }
  }
}
