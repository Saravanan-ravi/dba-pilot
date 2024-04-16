import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common'

var resStr, resJSON;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private session: SessionService, private httpClient: HttpClient, private datepipe: DatePipe) { }
  error: any;
  errorMsg: string = "All the fields are mandatory";
  user: any = {};
  zone = "Southern Railway";
  roleindex;
  username;
  dudename;

  ngOnInit() {
    this.user = this.session.getUser();
    this.gtUSR();
    this.CheckAdmin();
  }



  CheckAdmin() {
    this.httpClient.get("/users?token=" + this.user.token).subscribe(data => {
      resStr = JSON.stringify(data);
      resJSON = JSON.parse(resStr);
      this.roleindex = this.user.role;
      this.username = this.user.username;
      this.dudename = this.user.dude;
      // console.log("tokenCheck", this.user);
    }, error => {
      console.log(error);
      if (error.status == 401) {
        this.session.delUser();
        window.location.href = "/login";
      }
    })
  }

  gtUSR() {
    this.user = this.session.getUser();
    this.roleindex = this.user.role;
    window.location.href = "/notification";

  }

  logMeOut() {
    this.httpClient.post("/auth/logout", { token: this.user.token }).subscribe(data => {
      this.session.delUser();
      window.location.href = "/login";
      sessionStorage.clear();
    }, error => {
      console.log(error)
    })
  }

} 