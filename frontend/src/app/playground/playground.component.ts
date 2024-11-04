import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'] // Changed from styleUrl to styleUrls
})
export class PlaygroundComponent implements OnInit {

  userId: string; // Store the user ID after verification
  pfNumber: any;
  username: any;
  dob: any;

  error = false;
  errorMsg: any;

  newPassword: any;
  confirmPassword: any;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  verifyUser() {
    this.error = false;
    this.errorMsg = '';

    // Validation logic
    if (!this.pfNumber || !this.username || !this.dob) {
      this.error = true;
      this.errorMsg = 'Please fill all fields';
      return;
    }

    // Call to the backend to verify the user
    this.httpClient.post<{ userId: string }>('/auth/forgot-password', { pfNumber: this.pfNumber, username: this.username, dob: this.dob })
      .subscribe(response => {
        // Store user ID from response
        this.userId = response.userId; // Assuming the backend sends back the userId
        alert('User verified! Please enter your new password.');
      }, error => {
        console.error(error);
        this.error = true;
        this.errorMsg = error.error.message || 'An error occurred.';
      });
  }

  resetPassword() {
    this.error = false;
    this.errorMsg = '';

    // Check if the new passwords match
    if (this.newPassword !== this.confirmPassword) {
      this.error = true;
      this.errorMsg = 'Passwords do not match.';
      return;
    }

    // Call to reset the password
    this.httpClient.post('/auth/reset-password', { userId: this.userId, newPassword: this.newPassword })
      .subscribe(
        (response: any) => { // Use 'any' to bypass type checking
          // Access the message from the response
          alert(response.message); // Show the success message to the user

          // Redirect to the login page after a successful password reset
          this.router.navigate(['/login']);
        },
        error => {
          console.error(error);
          this.error = true;
          this.errorMsg = error.error.message || 'Failed to reset password.';
        }
      );
  }

}
