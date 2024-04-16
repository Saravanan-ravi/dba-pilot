import { Component, OnInit, Injectable, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { forkJoin } from 'rxjs';
import { SanitizerService } from '../sanitizer.service';
import { SessionService } from '../session.service';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  providers: [SanitizerService],
  encapsulation: ViewEncapsulation.None,
})

export class StatusComponent implements OnInit {

  responsejsonconvert: any;
  jsonarrayconvert: any[];
  responsejsonconvert1: any;
  jsonarrayconvert1: any[];
  responsejsonconvert2: any;
  jsonarrayconvert2: any[];


  idGetter: any;
  pdfUrl: SafeResourceUrl;
  pdfRaw: any;
  notification_number: any;
  activity_type: any;
  notify_status: any;
  pdfstatus: boolean;
  workdoneby:any;
  trainaction:any;
  efromdate:any;
  etodate:any;
  remarks:any;
  alertdate:any;
  checkresult:any;
  ProgLoaded: boolean = false;

  flagpdf:boolean=false;

  pdffilenotification: any;
  error: any;
  errorMsg: any;

  errorst: any;
  errorMsgst: any;

  errorauv: any;
  errorMsgauv: any;

  errorau: any;
  errorMsgau: any;

  username: any;

  user:any;
  dudename:any;

  activitypicked:any;

  userremarks:any;
  useralertdate:any;
  remarksadmin:any;
  role:any;

  completedate:any;
  completetime:any;

  alertflag:boolean=false;

  revokeremark:any;
  adminremarksshow:any;
  useralertdateshow:any;
  userremarksshow:any;
  workdonebyshow:any;

  constructor(private session: SessionService,private httpClient: HttpClient, private sanitizer: DomSanitizer, private sanitizerService: SanitizerService) { }

  ngOnInit(): void {
    this.statusTable();
    
    this.activitypicked[0].pdfstatus=false;
    this.activitypicked[0]._id=1;
    
  }

  statusTable(): void {
    this.user = this.session.getUser();
    this.dudename = this.user.dude;
    this.role=this.user.role;
    if(this.role==="Supervisor")
    {
    try {
      this.httpClient.get("/fetchnotify/fetchnotification").subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.jsonarrayconvert = JSON.parse(this.responsejsonconvert);
         console.log(this.jsonarrayconvert)
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }
    }
    else
    {

    try {
      this.httpClient.post("/fetchnotify/fetchnotificationuser",{username:this.dudename}).subscribe(data => {
        this.responsejsonconvert = JSON.stringify(data);
        this.jsonarrayconvert = JSON.parse(this.responsejsonconvert);
         console.log(this.jsonarrayconvert)
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }
  }
  }

  openPDF(value: any) {
    document.getElementById('pdfOpenModal').style.display = 'block';
    this.idGetter = value;
    this.viewPDF();
  }

  viewPDF() {
    this.ProgLoaded = true;
    const pdfObservable = this.httpClient.get(`/fetchnotify/fetchnotificationID/${this.idGetter}`, { responseType: 'blob' });
    forkJoin([pdfObservable]).subscribe(([pdfBlob]) => {
      // Handling PDF
      this.pdfRaw = URL.createObjectURL(pdfBlob as Blob);
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfRaw) as SafeResourceUrl;
    });
  }

  assigneduservalue(list:any)
  {   
    this.user = this.session.getUser();
    this.dudename = this.user.dude;
    if(list.notify_status==="Open")
    { 
      this.httpClient.post("/regnotify/jobopenstatuscheck", {id:list._id})
              .subscribe(response => {
                console.log("checking user with job picked success", response);
                this.responsejsonconvert2 = JSON.stringify(response);
                this.jsonarrayconvert2 = JSON.parse(this.responsejsonconvert2);
                if(this.jsonarrayconvert2[0].notify_status==="Open")
                {
                  document.getElementById('jobassigned').style.display='block';
                }
                else{
                  console.log("already job picked another User");
                  this.ngOnInit();
                }
              },
                error => {
                  console.log(error);
                  console.log('job picked by other user', error);
                  this.errorauv = true;
                  this.errorMsgauv = error.error.message;
                }
              );  
    }
    else if(list.notify_status==="processing")
    { 
      console.log(list._id+this.dudename)
      this.httpClient.post("/regnotify/jobusercheck", {id:list._id,username:this.dudename})
              .subscribe(response => {
                console.log("checking user with job picked success", response);
                this.activity_type="";
                this.trainaction="";
                this.efromdate="";
                this.etodate="";
                this.remarks="";
                this.alertdate="";
                this.checkresult="";
                document.getElementById('completed').style.display='block';
              },
                error => {
                  console.log(error);
                  console.log('job picked by other user', error);
                  this.errorauv = true;
                  this.errorMsgauv = error.error.message;
                }
              );
    }
    else if(list.notify_status==="Awaited for Approval")
    {
      if(this.role==="Supervisor")
      {
        this.httpClient.post("/regnotify/aprovalremarks", {id:list._id})
              .subscribe(response => {
                console.log("Get the User remarks and Alert Date", response);
                this.responsejsonconvert1 = JSON.stringify(response);
                this.jsonarrayconvert1 = JSON.parse(this.responsejsonconvert1)
                this.useralertdate=this.jsonarrayconvert1[0].alertdate;
                this.userremarks=this.jsonarrayconvert1[0].remarksbyuser;
                this.workdoneby=this.jsonarrayconvert1[0].jobpickedby;
                this.completedate=this.jsonarrayconvert1[0].completdate;
                this.completetime=this.jsonarrayconvert1[0].complettime;
                this.flagpdf=this.jsonarrayconvert1[0].pdfstatus;
                document.getElementById('checkedadmin').style.display='block';
              },
                error => {
                  console.log(error);
                  console.log('job picked by other user', error);
                  this.errorauv = true;
                  this.errorMsgauv = error.error.message;
                  
                }
              );
        
      }
      else
      {
      console.log("your not autorsied to approval please contact Supervisor")
      }
    }else if(list.notify_status==="Closed")
    {
      console.log(list)
      this.adminremarksshow=list.remarksbyadmin;
      this.useralertdateshow=list.alertdate;
      this.userremarksshow=list.remarksbyuser;
      this.workdonebyshow=list.jobpickedby;
      document.getElementById('alertrevoke').style.display='block';
    }
    this.activitypicked=list;
    
  }

  assigneduser()
  {
    this.httpClient.post("/regnotify/jobassigned", {id:this.activitypicked._id,username:this.dudename})
              .subscribe(response => {
                console.log("User assigned", response);
                this.ngOnInit();
              },
                error => {
                  console.log(error);
                  console.log('user not assigned', error);
                  this.errorau = true;
                  this.errorMsgau = error.error.message;
                }
              );
              document.getElementById('jobassigned').style.display='none';
  }
  completion()
  {
    this.errorMsg="";
    if (!this.activity_type) {
      this.error = true;
      this.errorMsg = "All Fields Are Mandatory";
      if(this.activitypicked.activity_type!=="")
      {
        this.checkresult="Not Matched with As per Notification5";
        return;}
    }
    if (!this.trainaction) {
      this.error = true;
      this.errorMsg = "All Fields Are Mandatory";

      if(this.activitypicked.trainaction!=="")
      {
        this.checkresult="Not Matched with As per Notification4";
        return;}
    }
    if (!this.efromdate) {
      this.error = true;
      this.efromdate=null;
      this.errorMsg = "All Fields Are Mandatory";
      if(this.activitypicked.effectivefromdate!==null)
      {
        this.checkresult="Not Matched with As per Notification3";
        return;}
      
    }
    if (!this.etodate) {
      this.error = true;
      this.etodate=null;
      this.errorMsg = "All Fields Are Mandatory";
      if(this.activitypicked.effectivetodate!==null)
      { this.checkresult="Not Matched with As per Notification2";
        return;}
    }
    if(!this.alertdate)
    {
      this.alertflag=false;
    }
    else{
      this.alertflag=true;
    }
    if((this.errorMsg!=="All Fields Are Mandatory")||(this.activitypicked.effectivefromdate===null)||(this.activitypicked.effectivetodate===null)||(!this.activitypicked.trainaction)||(!this.activitypicked.activity_type))
    {
      if((this.activity_type===this.activitypicked.activity_type)&&(this.trainaction===this.activitypicked.trainaction)&&(new Date(this.efromdate).toISOString()===this.activitypicked.effectivefromdate)&&(new Date(this.etodate).toISOString()===this.activitypicked.effectivetodate))
      {
        this.httpClient.post("/regnotify/jobcompltion", {id:this.activitypicked._id,remarks:this.remarks,alertdate:this.alertdate,alertflag:this.alertflag})
        .subscribe(response => {
          console.log("Completion Updated", response);
          document.getElementById('completed').style.display='none';
          this.ngOnInit();
        },
          error => {
            console.log(error);
            console.log('Completion Not Updated', error);
            this.errorau = true;
            this.errorMsgau = error.error.message;
          }
        );
        
      }
      else{
        this.checkresult="Not Matched with As per Notification1";
      }
    }
  }
  approval()
  {
    
    this.httpClient.post("/regnotify/aprovalupdate", {id:this.activitypicked._id,remarksbyadmin:this.remarksadmin})
        .subscribe(response => {
          console.log("Completion Updated", response);
          document.getElementById('checkedadmin').style.display='none';
          this.ngOnInit();
        },
          error => {
            console.log(error);
            console.log('Completion Not Updated', error);
            this.errorau = true;
            this.errorMsgau = error.error.message;
          }
        );
        
      

  }
  openPDFread() {
    document.getElementById('pdfOpenModal').style.display = 'block';
    this.idGetter = this.activitypicked._id;
    this.viewPDF();
  }
  revokeupdate() 
  {
    console.log(this.dudename)
    this.httpClient.post("/regnotify/alertrevokeupdate", {id:this.activitypicked._id,alertremarks:this.revokeremark,alertrevokedupdatedby:this.dudename})
        .subscribe(response => {
          console.log("Alert Revoked", response);
          document.getElementById('alertrevoke').style.display='none';
          this.ngOnInit();
        },
          error => {
            console.log(error);
            console.log('Alert Revoked Not Updated', error);
            this.errorau = true;
            this.errorMsgau = error.error.message;
          }
        );
  }
}
