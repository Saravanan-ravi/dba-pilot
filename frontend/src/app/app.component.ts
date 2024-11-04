import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SessionService } from './session.service';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { UserIdleService } from 'angular-user-idle';
import { Key } from 'protractor';

var roleindex, Loggedusername, strip;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menuList = [
    // {
    //   navtab: 'EQ',
    //   isSelected: false,
    //   icon: 'fa-solid fa-ticket',
    //   subMenu: [
    //     { navtab: 'Entry Form', hrefURL: '/entry-form' },
    //     { navtab: 'Report', hrefURL: '/report' },
    //     // { navtab: 'Playground', hrefURL: '/playground' },
    //     // { navtab: 'Submenu 3', hrefURL: '/submenu3' },
    //     // { navtab: 'Submenu 4', hrefURL: '/submenu4' }
    //   ]
    // },
    // {
    //   navtab: 'FootFall',
    //   isSelected: false,
    //   icon: 'fa-solid fa-shoe-prints',
    //   subMenu: [
    //     { navtab: 'Upload', hrefURL: '/' },
    //     { navtab: 'Report', hrefURL: '/' },
    //     // { navtab: 'Submenu 3', hrefURL: '/submenu3' },
    //     // { navtab: 'Submenu 4', hrefURL: '/submenu4' }
    //   ]
    // },
    {
      navtab: 'EQ Entry-Form',
      isSelected: false,
      icon: 'fa-solid fa-address-card',
      hrefURL: '/entry-form'
    },
    {
      navtab: 'EQ - Receipt',
      isSelected: false,
      icon: 'fa-solid fa-address-card',
      hrefURL: '/report'
    },
    {
      navtab: 'MIS - Report',
      isSelected: false,
      icon: 'fa-solid fa-square-poll-vertical',
      hrefURL: '/mis-report'
    }
  ];

  constructor(private session: SessionService, private httpClient: HttpClient, private router: Router, private userIdle: UserIdleService) { }

  CRyear: number = new Date().getFullYear();
  isLoggedIn = null;
  urlRouting: any;
  dudename;
  ipAddress: string;
  logOutTime;
  user: any = {};
  roleindex;
  usernav: any = [];
  resStr: any;
  resJSON: any;
  username: any;
  Loggedusername;
  EntireUserRole: any;
  navData: any = [];
  dayWiseData: any = [];
  grandtotaltext: any;
  textCount: any;
  PDFcount: any;
  countPDF: any;

  error;
  errorMsg;

  myDate;
  greet;
  hrs;

  ngOnInit() {
    this.user = this.session.getUser();
    this.isLoggedIn = this.user;
    this.securedLogin();
    this.authCheck();
    this.loadSelectedTab();
    this.authUser();
    this.DayWise();
  }

  authUser() {
    this.user = this.session.getUser();
    console.log();
    if (this.user.role == "Administrator") {
      this.router.navigateByUrl("/entry-form");
      console.log("Admin to navigate entry form");
    } if (this.user.role == "Generaluser") {
      this.router.navigateByUrl("/report");
      console.log("General User");
    }
  }

  changeColor(menu: { navtab: string, icon?: string, isSelected: boolean, hrefURL: string }): void {
    // console.log("UserSelect", menu);
    this.menuList.forEach(item => item.isSelected = false);
    menu.isSelected = true;
    this.urlRouting = menu.hrefURL;
    this.navData = menu.navtab;
    localStorage.setItem('selectedTab', JSON.stringify(menu));
    try {
      this.router.navigate([this.urlRouting]);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }

  loadSelectedTab(): void {
    const savedTab = localStorage.getItem('selectedTab');
    if (savedTab) {
      try {
        const menu = JSON.parse(savedTab);
        const selectedMenu = this.menuList.find(item => item.navtab === menu.navtab);
        if (selectedMenu) {
          selectedMenu.isSelected = true;
          this.urlRouting = selectedMenu.hrefURL;
          this.navData = selectedMenu.navtab;
        }
      } catch (error) {
        console.error('Error parsing saved tab from localStorage:', error);
      }
    }
  }

  securedLogin() {
    try {
      if (this.isLoggedIn == null) {
        this.session.delUser();
        sessionStorage.clear();
        console.log("Session Cleared", this.user);
        this.router.navigate(["/login"]);
      }
    } catch (error) {
      console.log("Something Went Wrong in User Secured Login", error);
    }
  }

  authCheck() {
    try {
      this.httpClient.get("/users?token=" + this.user.token).subscribe(data => {
        // console.log("user: ", data)
        this.resStr = JSON.stringify(data);
        this.resJSON = JSON.parse(this.resStr);
      }, error => {
        console.log(error);
        if (error.status == 401) {
          this.session.delUser();
          window.location.href = "/login";
        }
      });
    } catch (error) {
      console.log("Login to Continue", this.user.token);
    }
  }

  userWelcome() {
    this.myDate = new Date();
    this.hrs = this.myDate.getHours();
    if (this.hrs < 12)
      this.greet = 'Good Morning';
    else if (this.hrs >= 12 && this.hrs <= 16)
      this.greet = 'Good Afternoon';
    else if (this.hrs >= 16 && this.hrs <= 22)
      this.greet = 'Good Evening';
    else if (this.hrs >= 22 && this.hrs <= 24)
      this.greet = 'Good Evening, Dawn is Coming Soon';
  }

  gtUSR() {
    try {
      this.user = this.session.getUser();
      this.dudename = this.user.dude;
      this.roleindex = this.user.role;
      this.username = this.user.username;
      // this.Loggedusername = this.user.username;
      // roleindex = this.user.role;
      // this.EntireUserRole = this.user.role;
    } catch (error) {
      console.log("Login Records Not Available");
    }
  }

  stop() {
    this.userIdle.stopTimer();
  }

  stopWatching() {
    this.userIdle.stopWatching();
  }

  startWatching() {
    this.userIdle.startWatching();
  }

  restart() {
    this.userIdle.resetTimer();
  }

  logMeOut() {
    // const allInfo = `You've Logged Out..!`;
    // alert(allInfo);
    this.httpClient.post("/auth/logout", { token: this.user.token }).subscribe(data => {
      this.session.delUser();
      var lgodate = new Date();
      this.logOutTime = lgodate;
      sessionStorage.clear();
      localStorage.clear();
      // window.location.href = "/login";
    }, error => {
      console.log(error)
      this.session.delUser();
      sessionStorage.clear();
      localStorage.setItem('selectedTab', null);
      window.location.href = "/login";
    })
  }
  
  logOutTimer() {
    Swal.fire({
      title: 'Session Time-Out! \n Please Re-login',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    // const allInfo = `Oops..!! Timed Out.. Please Re-login..!`;
    // alert(allInfo);
    this.httpClient.post("/auth/logout", { token: this.user.token }).subscribe(data => {
      this.session.delUser();
      window.location.href = "/login";
      var lgodate = new Date();
      this.logOutTime = lgodate;
    }, error => {
      console.log(error)
      window.location.href = "/login";
    })
  }

  logOutAlert() {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do You Wanna Logout..?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, LogOut!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'GoodBye!',
          'See you next time..!',
          'success'
        )
        this.logMeOut();  //This function logsOut the user and the timer
      }
    })
  }

  DayWise() {
    console.log("Day Check");
    this.httpClient.get<any>('/eqrequestapi/getDayWise').subscribe(
      response => {
        this.dayWiseData = response;
        this.textCount = this.dayWiseData.countpnr;
        this.PDFcount = this.dayWiseData.countpage;
        this.countPDF = this.dayWiseData.countPdf;
        this.grandtotaltext = this.dayWiseData.totalpnr;
        console.log("DayWise", this.dayWiseData);

      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
  }

}