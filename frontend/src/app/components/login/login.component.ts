import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: string;
  password: string;
  wrong = true;
  errorMessage: string = "";
  isLoading = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.isLoading = true;
    this.userService.login(this.username,this.password).subscribe(
      response=>{
        this.router.navigate(['/logged']);
        this.wrong=true;
        this.isLoading = false;
      }, error=>{
        this.errorMessage = 'Incorrect username or password';
        this.wrong=false;
        this.isLoading = false;
      }
    )
  }

}
