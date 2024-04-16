import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { IpServiceService } from '../ip-service.service';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  error = false;
  errorMsg = "";
  errorRecvy = false;
  errorMsgRecvy = "";
  errorSign = false;
  errorMsgSign = "";
  errorConfirm = false;
  errorMsgConfirm = "";

  CRyear: number = new Date().getFullYear();
  Loggedusername;
  EntireUserRole;
  ipAddress;
  ipv4;
  SuperOption: string = '';
  hrs;
  showPassword = true;
  passwords;

  resCheck;

  registerdudename;
  registerusername;
  registerpassword;
  registerrole;
  registersecretquestion;
  registersecretanswer;


  updateusername;
  updatepassword;
  confirmpassword;
  passwordMatchError = "";

  recoveryusername;
  recoverysecretquestion;
  recoverysecretanswer;

  recoveryValidationResponse;

  constructor(private datepipe: DatePipe, private httpClient: HttpClient, private session: SessionService, private router: Router, private ipadd: IpServiceService, public dialog: MatDialog) { }

  ngOnInit() {
    var isLoggedIn = this.session.getUser();
    if (isLoggedIn != null) {
      this.router.navigate(["/dashboard"]);
    }
    this.passwords = 'password';
  }

  togglePassword() {
    if (this.passwords === 'password') {
      this.showPassword = false;
      this.passwords = ''
    } else {
      this.passwords = 'password';
      this.showPassword = true;
    }
  }

  loginMe() {
    this.error = false;
    this.errorMsg = "";
    if (!this.username) {
      this.error = true;
      this.errorMsg = "Incorrect Username or Password";
      return;
    }
    if (!this.password) {
      this.error = true;
      this.errorMsg = "Check your Password";
      return;
    }
    this.httpClient.post("/auth/login", { username: this.username, password: this.password }).subscribe(data => {
      // console.log(data);
      // this.UserLog();
      this.session.setUser(data);
      window.location.href = "/dashboard";
    }, error => {
      console.log(error)
      this.error = true;
      this.errorMsg = error.error.message;
    })
  }

  dbausers = [
    "SuperAdmin",
    "Admin",
    "DBAU-1",
    "DBAU-2",
    "DBAU-3",
    "DBAU-4",
    "DBAU-5",
    "DBAU-6"
  ];

  // openDialog(){
  //   const dialogRef = this.dialog.open();

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  getIP() {
    this.ipadd.getIPAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
    });
  }

  fetcher() {
    this.Loggedusername = this.username;
    var myDate = new Date();
    const iso = myDate.toISOString();
    this.hrs = this.datepipe.transform(iso, 'dd-MMM-yyyy, h:mm:ss a');
  }

  UserLog() {
    this.fetcher();
    this.httpClient.post("/loginlog/savelog", {
      UsrName: this.Loggedusername,
      UsrDate: this.hrs,
      UsrIPv4: this.ipAddress,
      UsrRemark: "Logged-In"
    }).subscribe(data => {
      console.log("USERLOG: " + data)
    }, error => {
      console.log(error)
      this.error = true;
      this.errorMsg = error.error.message;
    })
  }

  signUpValidate() {
    this.errorSign = false;
    this.errorMsgSign = "";
    if (!this.registerdudename) {
      this.errorSign = true;
      this.errorMsgSign = "Incomplete Field Error";
      return;
    }
    if (!this.registerusername) {
      this.errorSign = true;
      this.errorMsgSign = "Incomplete Field Error";
      return;
    }
    if (!this.registerpassword) {
      this.errorSign = true;
      this.errorMsgSign = "Incomplete Field Error";
      return;
    }
    if (!this.registerrole) {
      this.errorSign = true;
      this.errorMsgSign = "Incomplete Field Error";
      return;
    }
    if (!this.registersecretquestion) {
      this.errorSign = true;
      this.errorMsgSign = "Incomplete Field Error";
      return;
    }
    if (!this.registersecretanswer) {
      this.errorSign = true;
      this.errorMsgSign = "Incomplete Field Error";
      return;
    }
    this.signUp();
  }

  recoveryPwdValidate() {
    this.errorRecvy = false;
    this.errorMsgRecvy = "";
    if (!this.recoveryusername) {
      this.errorRecvy = true;
      this.errorMsgRecvy = "Incomplete Field Error";
      return;
    }
    if (!this.recoverysecretquestion) {
      this.errorRecvy = true;
      this.errorMsgRecvy = "Incomplete Field Error";
      return;
    }
    if (!this.recoverysecretanswer) {
      this.errorRecvy = true;
      this.errorMsgRecvy = "Incomplete Field Error";
      return;
    }
    this.recoverPassword();
  }

  DisablePaste(event: any) {
    alert("You can't paste in this input");
    event.preventDefault();
  }

  updatePwdValidate() {
    this.errorConfirm = false;
    this.errorMsgConfirm = "";
    if (!this.updatepassword) {
      this.errorConfirm = true;
      this.errorMsgConfirm = "Incomplete Field Error";
      return;
    }
    if (!this.confirmpassword) {
      this.errorConfirm = true;
      this.errorMsgConfirm = "Incomplete Field Error";
      return;
    }
    this.updatePassword();
  }

  signUp() {
    this.httpClient.post("/registeruser/registration", {
      dude: this.registerdudename,
      username: this.registerusername,
      password: this.registerpassword,
      role: this.registerrole,
      token: null,
      secretquestion: this.registersecretquestion,
      secretanswer: this.registersecretanswer,
      isActive: "false",

    }).subscribe(data => {
      console.log("USERregistration:", data)
    }, error => {
      console.log(error)
      this.error = true;
      this.errorMsg = error.error.message;
    })
    window.location.reload();
  }

  recoverPassword() {
    try {
      this.httpClient.post("/auth/recover", {
        username: this.recoveryusername,
        secretquestion: this.recoverysecretquestion,
        secretanswer: this.recoverysecretanswer,
      }).subscribe(data => {
        console.log("RecoverPassword:", data)
        this.updateusername = this.recoveryusername;
        document.getElementById('forgotPassword').style.display='none';
        document.getElementById('registerNewPassword').style.display = 'block';
      }, (error) => {
        if (error.status === 0) {
          console.error('An error occurred:', error.error);
          this.recoveryValidationResponse = "Wrong username or Secret question or Answer.";
        } else {
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
          this.recoveryValidationResponse = "Wrong username or Secret question or Answer.";
        }
        // console.log("recvyError", error)
        this.error = true;
        this.errorMsg = error.error.message;
        return throwError(() => new Error('Something bad happened; please try again later.'));
      });
    } catch {
      console.log("error in uploading")
    }
  }

  updatePassword() {
    this.updateusername;
    if (this.updatepassword === this.confirmpassword) {
      this.httpClient.post("/auth/updatepassword", {
        username: this.updateusername,
        password: this.confirmpassword,
      }).subscribe(data => {
        console.log("Password Updated:", data)
      }, error => {
        console.log(error)
        this.error = true;
        this.errorMsg = error.error.message;
      })
      window.location.reload();
      console.log("Password Correct");
    } else {
      console.log("Passwords do not match");
      this.passwordMatchError = "Passwords do not match.";
    }
  }
}
