import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  username: string;
  filterTerm!: string;
  term: string;
  data: any;
  userName: any;
  constructor(
    private user: UserServiceService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    //   this.userName =  localStorage.getItem('userName');
    //   //now we can used login token "UserName" in a place of "username" in html
    // console.log(this.userName);

    this.username = this.actRoute.snapshot.params['username'];
    // console.log(this.username)
    this.user.getData().subscribe((data) => {
      this.data = data;
      console.warn(data);
    });
  }
  public userLogout() {
    localStorage.clear();
    // this.router.navigate[("/login")];
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {}
}
