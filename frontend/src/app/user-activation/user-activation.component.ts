import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-activation',
  templateUrl: './user-activation.component.html',
  styleUrl: './user-activation.component.css'
})
export class UserActivationComponent {

  responsejsonconvert: any;
  jsonarrayconvert: any[];
  error: any;
  errorMsg: any;
  nullMsg: any;
  rolechangeapprove: any;

  changeDude: any;
  changeUsername: any;
  changeRole: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.notActivated();
  }

  notActivated() {
    try {
      this.httpClient.get("/auth/notactivated").subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.jsonarrayconvert = JSON.parse(this.responsejsonconvert);
        console.log(this.jsonarrayconvert)
      }, error => {
        this.error = true;
        console.log('Unable to Fetch:', error);
        this.errorMsg = error.error.message;
        this.jsonarrayconvert = [];
        if (this.jsonarrayconvert = []) {
          this.nullMsg = "No Pending Approval"
        }
      });
    } catch (error) {
      console.log('Activation Fetch:', error);
    }
  }

  approved(value: any) {
    try {
      this.httpClient.post("/auth/activationupdate", {
        dude: value.dude,
        username: value.username
      }).subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.jsonarrayconvert = JSON.parse(this.responsejsonconvert);
        console.log(this.jsonarrayconvert)
      }, error => {
        this.error = true;
        this.errorMsg = error.error.message;
        this.ngOnInit();
      });
    } catch (error) {
      console.log('Unable to Update:', error);
    }
  }

  roleChangeRequest(value: any) {
    document.getElementById('changeRoleModal').style.display = 'block';
    this.changeDude = value.dude;
    this.changeUsername = value.username;
    this.changeRole = value.rolechange;
  }

  rolechange() {
    try {
      this.httpClient.post("/auth/activationonrolechange", {
        dude: this.changeDude,
        username: this.changeUsername,
        role: this.rolechangeapprove

      }).subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.jsonarrayconvert = JSON.parse(this.responsejsonconvert);
        console.log(this.jsonarrayconvert)
      }, error => {
        this.error = true;
        this.errorMsg = error.error.message;
        this.ngOnInit();
      });
    } catch (error) {
      console.log('Unable to Update:', error);
    }
    window.location.reload();
  }

}
