import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = '';
  users: any;
  constructor(private api: ApiService) {}

  ngOnInit() {
    /*
      this.api.get('users/2').subscribe((res) => {
        this.users = res;
        console.log('data response', this.users);
      });
    */

    this.api.get('users?page=2').subscribe((res) => {
      this.users = res;
      console.log('data response', this.users);
    });
  }
}
