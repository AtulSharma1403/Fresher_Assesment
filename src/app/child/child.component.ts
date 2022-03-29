import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  username: string;
  item_id: string;
  item_name: string;
  item_email: string;
  item_phone: string;
  item_website: string;
  item_street: string;
  item_suite: string;
  item_zipcode: string;
  item_city: string;
  item_company: string;

  constructor(private actRoute: ActivatedRoute, private router: Router) {
    this.username = this.actRoute.snapshot.params['username'];
    console.log(this.username);
    this.item_id = this.actRoute.snapshot.params['id'];
    // console.log(this.item_id)
    this.item_name = this.actRoute.snapshot.params['name'];
    // console.log(this.item_name)
    this.item_email = this.actRoute.snapshot.params['email'];
    // console.log(this.item_email)
    this.item_phone = this.actRoute.snapshot.params['phone'];
    // console.log(this.item_phone)
    this.item_website = this.actRoute.snapshot.params['website'];
    // console.log(this.item_website)
    this.item_street = this.actRoute.snapshot.params['street'];
    // console.log(this.item_street)
    this.item_suite = this.actRoute.snapshot.params['suite'];
    // console.log(this.item_suite)
    this.item_zipcode = this.actRoute.snapshot.params['zipcode'];
    // console.log(this.item_zipcode)
    this.item_company = this.actRoute.snapshot.params['company'];
    console.log(this.item_company);
  }

  public userLogout() {
    localStorage.clear();

    this.router.navigate(['/login']);
    // console.log('tata');
  }

  ngOnInit() {}
}
