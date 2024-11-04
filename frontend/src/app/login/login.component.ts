import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2'


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
  CRyear: number = new Date().getFullYear();
  Loggedusername;
  EntireUserRole;
  SuperOption: string = '';
  hrs;
  loading: boolean = true;
  visible: boolean = true;
  changetype: boolean = true;

  userId: string; // Store the user ID after verification
  pfNumber: any;
  dob: any;


  newPassword: any;
  confirmPassword: any;

  constructor(private datepipe: DatePipe, private httpClient: HttpClient, private session: SessionService, private router: Router) { }

  ngOnInit() {
    var isLoggedIn = this.session.getUser();
    if (isLoggedIn != null) {
      this.router.navigate(["/entry-form"]);
    }
  }

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  onLoad() {
    this.loading = false;
  }

  loginMe() {
    this.error = false;
    this.errorMsg = "";
    if (!this.username) {
      this.error = true;
      this.errorMsg = "Enter Username";
      return;
    }
    if (!this.password) {
      this.error = true;
      this.errorMsg = "Password can't be empty";
      return;
    }
    this.httpClient.post("/auth/login", { username: this.username, password: this.password }).subscribe(data => {
      console.log(data);
      this.session.setUser(data);
      window.location.href = "/dashboard";
    }, error => {
      console.log(error)
      this.error = true;
      this.errorMsg = error.error.message;
    })
  }

  openModal() {
    document.getElementById('frpassword')!.style.display = 'block';
  }

  closeModal() {
    document.getElementById('frpassword')!.style.display = 'none';
  }

  verifyUser() {
    this.error = false;
    this.errorMsg = '';

    if (!this.pfNumber || !this.username || !this.dob) {
      this.error = true;
      this.errorMsg = 'Please fill all fields';
      return;
    }

    this.httpClient.post<{ userId: string }>('/auth/forgot-password', { pfNumber: this.pfNumber, username: this.username, dob: this.dob })
      .subscribe(response => {
        this.userId = response.userId;
        // alert('User verified! Please enter your new password.');
        Swal.fire("User verified! Please enter your new password");
      }, error => {
        console.error(error);
        this.error = true;
        this.errorMsg = error.error.message || 'An error occurred.';
      });

  }

  resetPassword() {
    this.error = false;
    this.errorMsg = '';

    if (this.newPassword !== this.confirmPassword) {
      this.error = true;
      this.errorMsg = 'Passwords do not match.';
      return;
    }

    if (!this.newPassword || !this.confirmPassword) {
      this.error = true;
      this.errorMsg = 'Please fill all fields';
    } else {
      this.httpClient.post('/auth/reset-password', { userId: this.userId, newPassword: this.newPassword })
        .subscribe(
          (response: any) => {
            // alert(response.message); // Show the success message to the user
            this.router.navigate(['/login']);
            if (response.message) {
              Swal.fire("Password Changed Successfully!");
            }
            setTimeout(function () {
              window.location.reload();
            }, 1000);
          },
          error => {
            console.error(error);
            this.error = true;
            this.errorMsg = error.error.message || 'Failed to reset password.';
          }
        );
    }
  }
}
