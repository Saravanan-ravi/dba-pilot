import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SessionService } from './session.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IpServiceService } from './ip-service.service';
import Swal from 'sweetalert2';
import { UserIdleService } from 'angular-user-idle';


var roleindex, Loggedusername, strip;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // @ViewChild('navToggleCheckbox') navToggleCheckbox: any;
  @ViewChild('navToggle') navToggleCheckbox!: ElementRef<HTMLInputElement>;

  constructor(private session: SessionService, private httpClient: HttpClient, private router: Router, private ip: IpServiceService, private userIdle: UserIdleService) { }
  CRyear: number = new Date().getFullYear();
  autoCloseTimeout: any;
  isLoggedIn = null;
  dudename;
  ipAddress: string;
  logOutTime;
  user: any = {};
  resStr: any;
  resJSON: any;
  username: any;
  Loggedusername;
  EntireUserRole: any;
  error;
  errorMsg;
  roleindex;
  myDate;
  greet;
  hrs;
  resJSN;
  ipv4;
  ipv6;
  ipmac;
  ngOnInit() {
    this.user = this.session.getUser();
    this.isLoggedIn = this.user;
    // this.getIP();
    this.authCheck();
    this.gtUSR();
    this.userTimeOut();
    this.userWelcome();
    this.navAutoClose();
    
  }

  navAutoClose(): void {
    clearTimeout(this.autoCloseTimeout);
    this.autoCloseTimeout = setTimeout(() => {
      this.navToggleCheckbox.nativeElement.checked = false;
    }, 800);
    
  }

  cancelAutoClose(): void {
    clearTimeout(this.autoCloseTimeout);
  }

  authCheck() {
    try {
      if (this.isLoggedIn == null) {
        this.router.navigate(["/login"]);
      }
      this.httpClient.get("/users?token=" + this.user.token).subscribe(data => {
        // console.log(data)
        this.resStr = JSON.stringify(data);
        this.resJSON = JSON.parse(this.resStr);
      }, error => {
        // console.log(error);
        if (error.status == 401) {
          this.session.delUser();
          window.location.href = "/login";
        }
      });
    } catch (error) {
      console.log("Login to Continue");
    }
  }

  userTimeOut() {
    setTimeout(() => {
      this.navToggleCheckbox.nativeElement.checked = true;
    }, 1500);
    this.userIdle.startWatching();
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    this.userIdle.onTimeout().subscribe(() => console.log('Session Time-out!'));
    this.userIdle.onTimeout().subscribe(() => this.logOutTimer());
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

  returnTop() {
    //  window.scrollTo(0,0);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    // console.log("i=" + this.ipAddress);
  }
  returnBottom() {
    window.scrollTo(0, document.body.scrollHeight), { behavior: 'smooth' };
  }
  NavFunc() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  logMeOut() {
    // const allInfo = `You've Logged Out..!`;
    // alert(allInfo);
    this.httpClient.post("/auth/logout", { token: this.user.token }).subscribe(data => {
      this.session.delUser();
      window.location.href = "/login";
      var lgodate = new Date();
      this.logOutTime = lgodate;
      sessionStorage.clear();
    }, error => {
      console.log(error)
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

  // geting user ip code. DO NOT DETELE
  // UserLog() {
  //   var myDate = new Date();
  //   this.hrs = myDate;
  //     this.httpClient.post("/logfile/savelog", {
  //       UsrName: this.Loggedusername,
  //       UsrRole: this.EntireUserRole,
  //       UsrDate: this.hrs,
  //       UsrIPv4: this.ipv4,
  //       UsrIPv6: this.ipv6,
  //       UsrMAC: this.ipmac

  //     }).subscribe(data => {
  //         console.log("USERLOG: "+data)
  //     }, error => {
  //       console.log(error)
  //       this.error = true;
  //       this.errorMsg = error.error.message;
  //     })
  // }

  notification() {
    this.router.navigate(['/notification']);
  }

  status() {
    this.router.navigate(['/status']);
  }

  reports() {
    this.router.navigate(['/reports']);
  }

  customReports() {
    this.router.navigate(['/customised-report']);
  }

  activation() {
    this.router.navigate(['/user-activation']);
  }

  icms(): void {
    var url: string = 'https://icms.indianrail.gov.in/reports/';
    window.open(url, '_blank');

  }

  ntes() {
    var url: string = 'https://enquiry.indianrail.gov.in/mntes/';
    window.open(url, '_blank');
  }
  irctc() {
    var url: string = 'https://www.irctc.co.in/nget/train-search';
    window.open(url, '_blank');
  }
  primes() {
    var url: string = 'https://primes.indianrail.gov.in/PRIMES/logi';
    window.open(url, '_blank');
  }
  govdotin() {
    var url: string = 'https://email.gov.in/';
    window.open(url, '_blank');
  }
  techies() {
    this.router.navigate(['/techies']);
  }
}