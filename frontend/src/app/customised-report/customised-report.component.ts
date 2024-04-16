import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customised-report',
  templateUrl: './customised-report.component.html',
  styleUrl: './customised-report.component.css'
})
export class CustomisedReportComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  // ELEMENT_DATA: PeriodicElement[];
  // displayedColumns = ['notification_number', 'notification_date', 'notification_received_date', 'notification_received_time', 'reception_mode', 'notify_status', 'activity_type', 'trainaction', 'effectivefromdate', 'pdfstatus'];
  // dataSource = new MatTableDataSource();
  responsejsonconvert: any;
  jsonarrayconvert: any;
  errorst: any;
  errorMsgst: any;
  idGetter: any;
  pdfRaw: any;
  pdfUrl: any;
  ddActivity: any;
  activityboolean: Boolean = false;
  ddTrainaction: any;
  trainactionboolean: Boolean = false;
  activityarray: any;
  trainactionarray: any;
  effectdatearray: any;
  ddeffevtivefrom: any;
  ddeffectiveboolean: Boolean = false;
  jobpickedbyarray: any;
  ddjobpicked: any;
  jobboolean: Boolean = false;
  customarray: any;
  g: any;
  todayDate: Date;
  searchText: any;

  ngOnInit(): void {
    this.loadfun();
  }


  loadfun() {
    // custom report
    this.todayDate = new Date();
    try {
      this.httpClient.get("/fetchnotify/activity").subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.activityarray = JSON.parse(this.responsejsonconvert);
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }

    try {
      this.httpClient.get("/fetchnotify/trainaction").subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.trainactionarray = JSON.parse(this.responsejsonconvert);
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }

    try {
      this.httpClient.get("/fetchnotify/effectdate").subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.effectdatearray = JSON.parse(this.responsejsonconvert);
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }


    try {
      this.httpClient.get("/fetchnotify/jobpickedby").subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.jobpickedbyarray = JSON.parse(this.responsejsonconvert);
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }
  }

  reportcustom() {
    var activity_type = ""
    var trainaction = ""
    var effectivefromdate;
    var jobpickedby = "";
    this.g = "";
    if (this.activityboolean) {
      activity_type += this.ddActivity
      this.g = { activity_type }
    }
    if (this.trainactionboolean) {
      trainaction += this.ddTrainaction
      if (this.activityboolean) { this.g = { activity_type, trainaction } }
      else {
        this.g = { trainaction }
      }
    }
    if (this.ddeffectiveboolean) {


      var newdate = this.ddeffevtivefrom.split("/").reverse().join("/");
      var dummy = new Date(newdate);
      dummy.setMinutes(dummy.getMinutes() + 330)
      effectivefromdate = {
        $gte: dummy.toISOString(),
        $lte: dummy.toISOString()
      }
      if ((this.activityboolean) && (this.trainactionboolean)) {
        this.g = { activity_type, trainaction, effectivefromdate } // , effectivefromdate
      }
      else if ((this.activityboolean) && (!this.trainactionboolean)) {
        this.g = { activity_type, effectivefromdate } // , effectivefromdate
      }
      else if ((!this.activityboolean) && (this.trainactionboolean)) {
        this.g = { trainaction, effectivefromdate } //, effectivefromdate
      }
      else if ((!this.activityboolean) && (this.trainactionboolean)) {
        this.g = { effectivefromdate }// effectivefromdate
      }
    }
    if (this.jobboolean) {
      jobpickedby = this.ddjobpicked;
      if ((this.activityboolean) && (this.trainactionboolean) && (this.ddeffectiveboolean)) {
        this.g = { activity_type, trainaction, jobpickedby, effectivefromdate } //, effectivefromdate
      }
      else if ((this.activityboolean) && (!this.trainactionboolean) && (this.ddeffectiveboolean)) {
        this.g = { activity_type, jobpickedby, effectivefromdate } //, effectivefromdate
      }
      else if ((!this.activityboolean) && (this.trainactionboolean) && (this.ddeffectiveboolean)) {
        this.g = { trainaction, jobpickedby, effectivefromdate } //, effectivefromdate
      }
      else if ((!this.activityboolean) && (!this.trainactionboolean) && (this.ddeffectiveboolean)) {
        this.g = { jobpickedby, effectivefromdate } //effectivefromdate,
      }
      else if ((this.activityboolean) && (this.trainactionboolean) && (!this.ddeffectiveboolean)) {
        this.g = { activity_type, trainaction, jobpickedby }
      }
      else if ((!this.activityboolean) && (!this.trainactionboolean) && (!this.ddeffectiveboolean)) {
        this.g = { jobpickedby }
      }
      else if ((!this.activityboolean) && (this.trainactionboolean) && (!this.ddeffectiveboolean)) {
        this.g = { trainaction, jobpickedby }
      }
      else if ((this.activityboolean) && (!this.trainactionboolean) && (!this.ddeffectiveboolean)) {
        this.g = { activity_type, jobpickedby }
      }
    }
    try {
      console.log(activity_type)
      this.httpClient.post("/fetchnotify/custom", this.g).subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.customarray = JSON.parse(this.responsejsonconvert);
        console.log(this.customarray)
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }
  }

  activity(activitytype: any) {
    this.ddActivity = activitytype.target.value;
    this.activityboolean = true;
    console.log(activitytype.target.value)
    try {
      this.httpClient.post("/fetchnotify/trainaction1",{activity_type:this.ddActivity}).subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.trainactionarray = JSON.parse(this.responsejsonconvert);
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }
    this.reportcustom();
  }
  trainaction(actiontrain: any) {
    this.ddTrainaction = actiontrain.target.value;
    this.trainactionboolean = true;
    console.log(actiontrain.target.value)
    try {
      this.httpClient.post("/fetchnotify/effectdate1",{trainaction:this.ddTrainaction}).subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.effectdatearray = JSON.parse(this.responsejsonconvert);
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }
    this.reportcustom();
  }
  effective(effect: any) {
    this.ddeffevtivefrom = effect.target.value
    this.ddeffectiveboolean = true;
    var newdate = this.ddeffevtivefrom.split("/").reverse().join("/");
      var dummy = new Date(newdate);
    console.log(effect.target.value);
    try {
      this.httpClient.post("/fetchnotify/jobpickedby1",{effectivefromdate:dummy}).subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.jobpickedbyarray = JSON.parse(this.responsejsonconvert);
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }
    this.reportcustom();
  }
  jobpickedfun(job: any) {
    this.ddjobpicked = job.target.value;
    this.jobboolean = true;
    console.log(job.target.value);
    this.reportcustom();
  }
}
