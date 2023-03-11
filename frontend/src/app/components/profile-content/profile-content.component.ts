import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.css']
})
export class ProfileContentComponent {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  birthday: string;
  user:User;

  constructor(private userService: UserService, private router: Router) { }

  udpate(){
    this.user = {} as User;
    this.user.first = this.firstName;
    this.user.last = this.lastName;
    this.user.phoneNumber = this.phoneNumber;
    this.user.gender = this.gender;
    this.user.birthday = this.birthday;
    this.user.email = this.email;
    this.user.username = undefined;
    this.user.password = undefined;
  
    this.userService.updateProfile(this.user).subscribe(res => {
      console.log('User updated successfully');
    });
  }

}
