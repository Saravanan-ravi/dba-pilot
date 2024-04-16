import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  showTokenLost: boolean = false;
  showFrequentChange: boolean = false;
  notification_number: string = '';
  notification_date;
  notification_received_date;
  notification_received_time;
  reception_mode: string = '';
  // activity_type: string = '';
  pdffilenotification: File = null;
  tokenLost: boolean = false;
  frequentChange: boolean = false;
  notify_status: string = 'Open';

  pdfname: string = '';
  pdfUrl: SafeResourceUrl;
  error;
  errorMsg;

  user:any;
  dudename:any;

  inputSets: any[] = [];
  activity_type: string;
  trainaction: string;

  pdfstatus: boolean=false;
  responsejsonconvert: any;
  jsonarrayconvert: any;

  constructor(private session: SessionService,private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.user = this.session.getUser();
    this.dudename = this.user.dude;
    this.addInputSet()
  }

  addInputSet() {
    this.inputSets.push({
      activity_type: '',
      trainaction: '',
      efromdate: '',
      etodate: ''
    });
  }

  show() {
    console.log("testArray", JSON.stringify(this.inputSets));
  }

  toggleCheckboxes() {
    const activityType = (document.getElementById('activitytype') as HTMLSelectElement).value;
    this.showTokenLost = activityType === 'token lost';
    this.showFrequentChange = activityType === 'frequent change';
  }

  onNotifypdfSelected(event: any, type: string): void {
    this.pdffilenotification = <File>event.target.files[0];
    const fileName = event.target.files[0].name;
    if (!fileName.toLowerCase().endsWith('.pdf')) {
      alert('Please upload a PDF file.');
      return;
    }
    if (type === 'notificationpdf') {
      this.pdfname = fileName;
    }
    this.pdfstatus = true;
  }

  RegisterNotifyerrorCheck() {
    this.error = false;
    this.errorMsg = "";
    if (!this.notification_number) {
      this.error = true;
      this.errorMsg = "All Fields Are Mandatory";
      return;
    }
    if (!this.notification_date) {
      this.error = true;
      this.errorMsg = "All Fields Are Mandatory";
      return;
    }
    if (!this.notification_received_date) {
      this.error = true;
      this.errorMsg = "All Fields Are Mandatory";
      return;
    }
    if (!this.notification_received_time) {
      this.error = true;
      this.errorMsg = "All Fields Are Mandatory";
      return;
    }
    if (!this.reception_mode) {
      this.error = true;
      this.errorMsg = "All Fields Are Mandatory";
      return;
    }
    if (!this.inputSets) {
      this.error = true;
      this.errorMsg = "All Fields Are Mandatory";
      return;
    }
    else {
      this.registerNotify();
    }
  }

  registerNotify() {
    Swal.fire({
      title: 'Do You Wish To Submit?',
      text: "Data will be saved to Database",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Submitted!',
          'Data Saved',
          'success'
        )
        try {
          this.responsejsonconvert = JSON.stringify(this.inputSets);
          this.jsonarrayconvert = JSON.parse(this.responsejsonconvert);
          console.log(this.jsonarrayconvert)
          for (var t = 0; t < this.jsonarrayconvert.length; t++) {
            const formData = new FormData();
            formData.append('notification_number', this.notification_number);
            formData.append('notification_date', this.notification_date);
            formData.append('notification_received_date', this.notification_received_date);
            formData.append('notification_received_time', this.notification_received_time);
            formData.append('notificationupdatedby',this.dudename);
            formData.append('reception_mode', this.reception_mode);
            formData.append('notify_status', this.notify_status);
            formData.append('activity_type', this.jsonarrayconvert[t].activity_type);
            formData.append('trainaction', this.jsonarrayconvert[t].trainaction);
            formData.append('effectivefromdate', this.jsonarrayconvert[t].efromdate);
            formData.append('effectivetodate', this.jsonarrayconvert[t].etodate);
            formData.append('pdfstatus', this.pdfstatus.toString());
            if (this.pdfstatus) { formData.append('pdffilenotification', this.pdffilenotification, this.pdffilenotification.name); }

            // to append "inputSets as Array" 

            this.httpClient.post("/regnotify/notification", formData)
              .subscribe(response => {
                console.log("Uploading values and PDF", response);
                window.location.reload();
              },
                error => {
                  console.log(error);
                  console.log('Unable to Save Data:', error);
                  this.error = true;
                  this.errorMsg = error.error.message;
                }
              );
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: 'Data Not Saved. Check if any field is empty'
          });
          console.log("Data Not Saved");
        }
      }
    })
  }
}
