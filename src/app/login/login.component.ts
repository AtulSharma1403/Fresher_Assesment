import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public showPassword: boolean = false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  data: any;
  constructor(private router: Router, private user: UserServiceService) {
    this.user.getData().subscribe((data) => {
      this.data = data;
      console.warn(data);
    });
  }
  userid: string;
  username: string;
  password: string;

  public onLoginClick() {
    if (this.password == 'pass@123') {
      // local storage to manage the session ko locally
      // localStorage.setItem('userName', this.username);
      // console.log("Userlogged in with token",this.username);
      localStorage.setItem('SeesionUser', this.username);
      this.router.navigate(['./home', this.username]);
    } else {
      alert('Invalid credentials');
    }
  }
  ngOnInit() {}
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
