import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../service/user.service';
import {IUser} from '../user/iuser';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
// @ts-ignore
  newUserForm: FormGroup;
  constructor(private userS: UserService, private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.newUserForm = this.fb.group({
      username: [null],
      password: [null]
    });
  }

  createNewUser() {
    const newU: IUser = this.newUserForm.value;
    this.userS.create(newU).subscribe(() => {alert('them ok');
                                             this.router.navigate(['list']);
    }, error => {
      alert('loi');
    });
  }

}
