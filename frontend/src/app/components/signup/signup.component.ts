import { Component } from '@angular/core';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private userService: UserService) { }
  user:User;
  username:string;
  password:string;
  email:string
  signed=false;
  errorMessage: string = "";

  signUp() {
    this.user = {} as User;
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.email = this.email;

    this.userService.addUser(this.user).subscribe(res => {
      this.signed=true;
      console.log('User added successfully');
    });
  }
}
