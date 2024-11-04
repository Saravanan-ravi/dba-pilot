import { Component, OnInit, SecurityContext, ViewChild, ElementRef } from '@angular/core';
import Swal from 'sweetalert2'
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import printJS from 'print-js';

import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'] // Fixed the property name from styleUrl to styleUrls
})

export class ReportComponent implements OnInit {

  user: any = {};
  pdfRaw: any;
  isPdf: boolean = false;
  pdfUrl: any; // Initialize pdfUrl
  forwardedWithoutPdf: number = 0;
  returnedWithoutPdf: number = 0;
  forwardedSinglePdf: number = 0;
  returnedSinglePdf: number = 0;
  forwardedMultiplePdf: number = 0;
  acceptWithoutPdf: number = 0;
  trainsinglepdf: number;
  acceptSinglePdf: number = 0;
  acceptMultiplePdf: number = 0;
  forwardedtextCounts: any[] = [];
  textforwardedeqrequestclassaccepted = [];
  returntextCounts: any[] = [];
  acceptedtextCounts: any[] = [];
  forwardedtextCountspdf: any[] = [];
  returntextCountspdf: any[] = [];
  acceptedtextCountspdf: any[] = [];
  acceptedtextCountspdfmultiple: any[] = [];
  forwardedtextCountspdfmultiple: any[] = [];
  singlereturnedpdftrain: any[] = []
  singlereturnedpdftrain1: any[] = []
  textforwardedeqrequest: any[] = [];
  textacceptedeqrequestclass = [];
  textreturnedeqrequestclass = [];
  singlepdftrain: any[] = [];
  textforwardedeqrequestclass = [];
  textforwardedeqrequestclassReturned = []
  status: any;
  requesttype: any;
  singleacceptedpdftrain: any[] = [];
  showRemark: any;
  primaryidparamas: any;
  returnInput: boolean = false;
  reasonReturnInput: boolean = false;
  reason_for_return: any;
  viewaccepted: any;
  eq_requested_by: any;
  eq_conveyed_by: any;
  designation: any;
  offmobilenumber: any;
  eq_taken_by: any;
  rece_mode: any;
  createdAt: any;
  lengthofreports: any;
  reports: any[] = [];
  loading: boolean = true;
  acceptedReports: any[] = [];
  generatePdf: boolean = false;
  showDecisionMaker: boolean = false;
  showComplete: boolean = false;
  cardsview: any;

  filteredForwardedCounts = [];
  filteredReturnedCounts = [];
  filteredAcceptedCounts = [];
  filteredForwardedPDFCounts = [];
  filteredReturnedPDFCounts = [];
  filteredAcceptedPDFCounts = [];
  filteredForwardedBulkCounts = [];
  filteredAcceptedBulkCounts = [];
  filteredSinglePDFTrain = [];
  filteredSingleReturnedPDFTrain = [];
  lastSyncTime: string = '';
  searchTermForwarded: string = '';
  searchTermReturned: string = '';
  searchTermAccepted: string = '';
  searchTermForwardedPDF: string = '';
  searchTermReturnedPDF: string = '';
  searchTermAcceptedPDF: string = '';
  searchTermForwardedBulk: string = '';
  searchTermAcceptedBulk: string = '';
  searchTermSinglePDF: string = '';
  searchTermSingleReturnedPDF: string = '';

  updatereportreturned: any;

  woPDFforwardedSync: any;
  woPDFreturnedSync: any;
  woPDFacceptedSync: any;

  sPDFforwardedSync: any;
  sPDFreturnedSync: any;
  sPDFacceptedSync: any;

  reqForwardedPDFBulk: any;
  reqAcceptedPDFBulk: any;
  reqforwardedPDFwithIMG: any;
  reqtextForwarded: any;
  forwardedTextEQ: any;
  username: any;


  constructor(private session: SessionService, private httpClient: HttpClient, private router: Router, private sanitizer: DomSanitizer) { }
  @ViewChild('targetElement') targetElement: ElementRef;
  @ViewChild('targetModal') targetModal: ElementRef;
  ngOnInit(): void {
    this.authUser();
    this.fetchStatusCounts();
    this.initializeFilteredCounts();
    this.allupdateLastSyncTime();
    //  this.fetchStatusCountsRealTime();
  }

  scrollToElement(): void {
    this.targetElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  scrollToModal(): void {
    this.targetModal.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }


  authUser() {
    this.user = this.session.getUser();
    this.username = this.user.username;
    console.log("role", this.user.role);
    if (this.user.role == "Administrator") {
      this.router.navigateByUrl("/entry-form");
      console.log("Admin to navigate entry form");
    }
    if (this.user.role == "Generaluser") {
      //this.router.navigateByUrl("/report");
      console.log("General User");
    }
    this.viewaccepted = "";
  }

  fetchStatusCounts(): void {
    // Poll the server every 5 seconds (5000 ms)
    interval(5000)
      .pipe(
        // switchMap cancels the previous request if it hasn't completed and starts a new one
        switchMap(() => this.httpClient.get<any>('/eqrequestapi/get-status-counts')))
      .subscribe(
        response => {
          this.forwardedWithoutPdf = response.forwardedWithoutPdf;
          this.returnedWithoutPdf = response.returnedWithoutPdf;
          this.forwardedSinglePdf = response.forwardedSinglePdf;
          this.returnedSinglePdf = response.returnedSinglePdf;
          this.forwardedMultiplePdf = response.forwardedMultiplePdf;
          this.acceptWithoutPdf = response.acceptedWithoutPdf;
          this.acceptSinglePdf = response.acceptedSinglePdf;
          this.acceptMultiplePdf = response.acceptedMultiplePdf;
        },
        error => {
          console.error('Error fetching status counts:', error);
        }
      );
  }

  fetchStatusCountss(): void {
    this.httpClient.get<any>('/eqrequestapi/get-status-counts').subscribe(
      response => {
        this.forwardedWithoutPdf = response.forwardedWithoutPdf;
        this.returnedWithoutPdf = response.returnedWithoutPdf;
        this.forwardedSinglePdf = response.forwardedSinglePdf;
        this.returnedSinglePdf = response.returnedSinglePdf;
        this.forwardedMultiplePdf = response.forwardedMultiplePdf;
        this.acceptWithoutPdf = response.acceptedWithoutPdf;
        this.acceptSinglePdf = response.acceptedSinglePdf;
        this.acceptMultiplePdf = response.acceptedMultiplePdf;
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
  }

  // Click functions
  onForwardedClick() {
    this.returntextCounts = [];
    this.acceptedtextCounts = [];
    this.forwardedtextCountspdf = [];
    this.textforwardedeqrequestclassaccepted = [];
    this.textacceptedeqrequestclass = [];
    this.returntextCountspdf = [];
    this.singlepdftrain = [];
    this.acceptedtextCountspdf = [];
    this.acceptedtextCountspdfmultiple = [];
    this.forwardedtextCountspdfmultiple = [];
    this.showDecisionMaker = false;
    this.singlereturnedpdftrain1 = [];
    this.singleacceptedpdftrain = [];
    this.textreturnedeqrequestclass = [];
    this.textforwardedeqrequest = [];
    this.textforwardedeqrequestclass = [];
    console.log('Total Request Forwarded clicked:', this.forwardedWithoutPdf);
    this.httpClient.get<any>('/eqrequestapi/texteqcounts').subscribe(
      response => {
        // If the response contains data, update the counts
        if (response && response.length > 0) {
          this.forwardedtextCounts = response;
        } else {
          this.forwardedtextCounts = []; // Clear if no data is returned
        }
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
    // Implement your logic here
  }

  onReturnedClick() {
    this.forwardedtextCounts = [];
    this.acceptedtextCounts = [];
    this.forwardedtextCountspdf = [];
    this.textforwardedeqrequestclassaccepted = [];
    this.textacceptedeqrequestclass = [];
    this.returntextCountspdf = [];
    this.singlepdftrain = [];
    this.acceptedtextCountspdf = [];
    this.acceptedtextCountspdfmultiple = [];
    this.forwardedtextCountspdfmultiple = [];
    this.showDecisionMaker = false;
    this.singlereturnedpdftrain1 = [];
    this.singleacceptedpdftrain = [];
    this.textforwardedeqrequest = [];
    this.textreturnedeqrequestclass = [];
    this.textforwardedeqrequestclass = [];
    console.log('Total Request Returned clicked:', this.returnedWithoutPdf);
    this.httpClient.get<any>('/eqrequestapi/textreturneqcounts').subscribe(
      response => {
        // If the response contains data, update the counts
        if (response && response.length > 0) {
          this.returntextCounts = response;
        } else {
          this.returntextCounts = []; // Clear if no data is returned
        }
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );

  }

  onAcceptedClick() {
    this.returntextCounts = [];
    this.forwardedtextCounts = [];
    this.forwardedtextCountspdf = [];
    this.textforwardedeqrequestclassaccepted = [];
    this.textacceptedeqrequestclass = [];
    this.returntextCountspdf = [];
    this.singlepdftrain = [];
    this.acceptedtextCountspdf = [];
    this.acceptedtextCountspdfmultiple = [];
    this.forwardedtextCountspdfmultiple = [];
    this.singlereturnedpdftrain1 = [];
    this.showDecisionMaker = false;
    this.singleacceptedpdftrain = [];
    this.textforwardedeqrequest = [];
    this.textreturnedeqrequestclass = [];
    this.textforwardedeqrequestclass = [];
    console.log('Total Request Accepted clicked:', this.acceptWithoutPdf);
    this.httpClient.get<any>('/eqrequestapi/textacceptedeqcounts').subscribe(
      response => {
        // If the response contains data, update the counts
        if (response && response.length > 0) {
          this.acceptedtextCounts = response;
        } else {
          this.acceptedtextCounts = []; // Clear if no data is returned
        }
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
    // Implement your logic here
  }

  onForwardedSingleClick() {
    console.log('Total Request Forwarded (Single) clicked:', this.forwardedSinglePdf);
    this.returntextCounts = [];
    this.acceptedtextCounts = [];
    this.returntextCountspdf = [];
    this.acceptedtextCountspdf = [];
    this.textforwardedeqrequestclassaccepted = [];
    this.textacceptedeqrequestclass = [];
    this.singlepdftrain = [];
    this.forwardedtextCounts = [];
    this.showDecisionMaker = false;
    this.acceptedtextCountspdfmultiple = [];
    this.forwardedtextCountspdfmultiple = [];
    this.singlereturnedpdftrain1 = [];
    this.singleacceptedpdftrain = [];
    this.textforwardedeqrequest = [];
    this.textreturnedeqrequestclass = [];
    this.textforwardedeqrequestclass = [];
    console.log('Total Request Forwarded clicked:', this.forwardedWithoutPdf);
    this.httpClient.get<any>('/eqrequestapi/texteqcountspdf').subscribe(
      response => {
        // If the response contains data, update the counts
        console.log(response)
        if (response && response.length > 0) {
          this.forwardedtextCountspdf = response;
          console.log(this.forwardedtextCountspdf)
        } else {
          this.forwardedtextCountspdf = []; // Clear if no data is returned
        }
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
    // Implement your logic here
  }

  onReturnedSingleClick() {
    console.log('Total Request Returned (Single) clicked:', this.returnedSinglePdf);
    this.forwardedtextCounts = [];
    this.returntextCounts = [];
    this.acceptedtextCounts = [];
    this.forwardedtextCountspdf = [];
    this.singlepdftrain = [];
    this.acceptedtextCountspdf = [];
    this.textacceptedeqrequestclass = [];
    this.acceptedtextCountspdfmultiple = [];
    this.forwardedtextCountspdfmultiple = [];
    this.singlereturnedpdftrain1 = [];
    this.singleacceptedpdftrain = [];
    this.showDecisionMaker = false;
    this.textforwardedeqrequest = [];
    this.textreturnedeqrequestclass = [];
    this.textforwardedeqrequestclass = [];
    console.log('Total Request Returned clicked:', this.returnedWithoutPdf);
    this.httpClient.get<any>('/eqrequestapi/textreturneqcountspdf').subscribe(
      response => {
        // If the response contains data, update the counts
        if (response && response.length > 0) {
          this.returntextCountspdf = response;
        } else {
          this.returntextCountspdf = []; // Clear if no data is returned
        }
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
  }

  onAcceptedSingleClick() {
    console.log('Total Request Accepted (Single) clicked:', this.acceptSinglePdf);
    this.returntextCounts = [];
    this.forwardedtextCounts = [];
    this.forwardedtextCountspdf = [];
    this.textforwardedeqrequestclassaccepted = [];
    this.returntextCountspdf = [];
    this.textacceptedeqrequestclass = [];
    this.singlepdftrain = [];
    this.acceptedtextCounts = [];
    this.acceptedtextCountspdfmultiple = [];
    this.forwardedtextCountspdfmultiple = [];
    this.singlereturnedpdftrain1 = [];
    this.singleacceptedpdftrain = [];
    this.showDecisionMaker = false;
    this.textforwardedeqrequest = [];
    this.textreturnedeqrequestclass = [];
    this.textforwardedeqrequestclass = [];
    console.log('Total Request Accepted clicked:', this.acceptWithoutPdf);
    this.httpClient.get<any>('/eqrequestapi/textacceptedeqcountspdf').subscribe(
      response => {
        // If the response contains data, update the counts
        if (response && response.length > 0) {
          this.acceptedtextCountspdf = response;
        } else {
          this.acceptedtextCountspdf = []; // Clear if no data is returned
        }
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
  }

  onForwardedBulkClick() {
    console.log('Total Bulk Request Forwarded clicked:', this.forwardedMultiplePdf);
    this.returntextCounts = [];
    this.forwardedtextCounts = [];
    this.forwardedtextCountspdf = [];
    this.returntextCountspdf = [];
    this.textacceptedeqrequestclass = [];
    this.singlepdftrain = [];
    this.textforwardedeqrequestclassaccepted = [];
    this.acceptedtextCounts = [];
    this.acceptedtextCountspdf = [];
    this.acceptedtextCountspdfmultiple = [];
    this.forwardedtextCountspdfmultiple = [];
    this.singleacceptedpdftrain = [];
    this.singlereturnedpdftrain1 = [];
    this.showDecisionMaker = false;
    this.singleacceptedpdftrain = [];
    this.textforwardedeqrequest = [];
    this.textreturnedeqrequestclass = [];
    this.textforwardedeqrequestclass = [];
    console.log('Total Request Accepted clicked:', this.acceptWithoutPdf);
    this.httpClient.get<any>('/eqrequestapi/textforwardeqcountspdfmultiple').subscribe(
      response => {
        // If the response contains data, update the counts
        if (response && response.length > 0) {
          console.log("onForwardedBulkClick", response)
          this.forwardedtextCountspdfmultiple = response;
        } else {
          this.forwardedtextCountspdfmultiple = []; // Clear if no data is returned
        }
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );

  }

  onAcceptedBulkClick() {
    console.log('Total Bulk Request Accepted clicked:', this.acceptMultiplePdf);
    this.returntextCounts = [];
    this.forwardedtextCounts = [];
    this.forwardedtextCountspdf = [];
    this.textforwardedeqrequestclassaccepted = [];
    this.returntextCountspdf = [];
    this.textacceptedeqrequestclass = [];
    this.acceptedtextCounts = [];
    this.acceptedtextCountspdf = [];
    this.singlepdftrain = [];
    this.forwardedtextCountspdfmultiple = [];
    this.singlereturnedpdftrain = [];
    this.singlereturnedpdftrain1 = [];
    this.singleacceptedpdftrain = [];
    this.showDecisionMaker = false;
    this.textforwardedeqrequest = [];
    this.textreturnedeqrequestclass = [];
    this.textforwardedeqrequestclass = [];
    console.log('Total Request Accepted clicked:', this.acceptWithoutPdf);
    this.httpClient.get<any>('/eqrequestapi/textacceptedeqcountspdfmultiple').subscribe(
      response => {
        // If the response contains data, update the counts
        if (response && response.length > 0) {
          this.acceptedtextCountspdfmultiple = response;
        } else {
          this.acceptedtextCountspdfmultiple = []; // Clear if no data is returned
        }
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
  }


  openPdf(remarks: any) {
    document.getElementById('pdfOpenModal')!.style.display = 'block'; // Show the modal
    this.primaryidparamas = remarks.primaryid;
    // Set remarks and other metadata
    this.showRemark = remarks.remarks;
    this.eq_requested_by = remarks.eq_requested_by;
    this.eq_conveyed_by = remarks.eq_conveyed_by;
    this.designation = remarks.designation;
    this.offmobilenumber = remarks.offmobilenumber;
    this.eq_taken_by = remarks.eq_taken_by;
    this.rece_mode = remarks.rece_mode;
    this.createdAt = remarks.createdAt;
    this.status = remarks.status;
    this.requesttype = remarks.requesttype;
    // Reset pdfUrl and isPdf
    this.pdfUrl = null; // Reset pdfUrl
    this.isPdf = false; // Initialize to false

    // Debugging: Log the structure of remarks
    console.log('remarks:', remarks);

    // Extract pdf_file from remarks
    const pdfData = remarks.pdf_file;

    // Check if the data is for an image
    if (pdfData && pdfData.contentType && pdfData.contentType.startsWith('image/')) {
      const byteArray = new Uint8Array(pdfData.data.data); // Access the image data correctly
      const blob = new Blob([byteArray], { type: pdfData.contentType });
      const imageUrl = URL.createObjectURL(blob); // Create Blob URL

      console.log('Image URL:', imageUrl); // Log the image URL for debugging
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
      this.isPdf = false; // Set to false for image

      // Check if the data is for a PDF
    } else if (pdfData && pdfData.contentType && pdfData.contentType.startsWith('application/pdf')) {
      const byteArray = new Uint8Array(pdfData.data.data); // Access the PDF data correctly
      const blob = new Blob([byteArray], { type: 'application/pdf' });
      const blobUrl = URL.createObjectURL(blob);
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl + '#toolbar=0');
      this.isPdf = true; // Set to true for PDF
    } else {
      console.error('Unsupported data type:', pdfData);
    }
  }


  acceptAndPrint() {
    const iframe: HTMLIFrameElement = document.getElementById('pdfViewer') as HTMLIFrameElement;

    if (iframe) {
      const printWindow = iframe.contentWindow;

      if (printWindow) {
        // Set zoom level if needed
        (printWindow.document.body.style as any).zoom = '100%';

        // Use setTimeout as a fallback for onafterprint
        printWindow.print();

        // Delay to allow print dialog to close
        setTimeout(() => {
          console.log("Print dialog closed");
          this.updateaccepted(); // Call your function here
        }, 1000); // Adjust time as needed (1000 ms = 1 second)
      } else {
        console.error('Content window not found!');
      }
    } else {
      console.error('Iframe not found!');
    }
  }

  forwardedpdftrain(trainno: any) {
    this.trainsinglepdf = trainno;
    this.singlepdftrain = [];
    this.singlereturnedpdftrain = [];
    this.singlereturnedpdftrain1 = [];
    this.textforwardedeqrequestclassaccepted = [];
    this.singleacceptedpdftrain = [];
    this.textacceptedeqrequestclass = [];
    this.textforwardedeqrequest = [];
    this.showDecisionMaker = false;
    this.textreturnedeqrequestclass = [];
    this.textforwardedeqrequestclass = [];
    this.viewaccepted = "";

    this.httpClient.post<any>('/eqrequestapi/pdfsingleforwardedtrain', { trainno: trainno }).subscribe(
      response => {
        // If the response contains data, update the counts
        console.log(response)
        if (response && response.length > 0) {
          this.singlepdftrain = response;
        } else {
          this.singlepdftrain = []; // Clear if no data is returned
        }
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
  }



  updateaccepted() {
    console.log("status");

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: true
    });

    swalWithBootstrapButtons.fire({
      title: "Have you taken the PRINTOUT?",
      text: "Clicking 'YES' will further forward it to the Controller",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, taken!",
      cancelButtonText: "No",
      reverseButtons: true,
      allowOutsideClick: false, // Prevents closing on clicking outside
      allowEscapeKey: false     // Prevents closing on pressing the 'Esc' key
    }).then((result) => {
      if (result.isConfirmed) {
        // Call the POST method to update the status
        this.httpClient.post('/eqrequestapi/updateStatusByPrimaryId', { primaryid: this.primaryidparamas })
          .subscribe(
            response => {
              swalWithBootstrapButtons.fire({
                title: "Forwarded!",
                text: "Application Printed & Accepted",
                icon: "success"
              });
              console.log("Application Accepted", response);

              this.closeModal();
            },
            error => {
              console.error("Error forwarding the application", error);
              swalWithBootstrapButtons.fire({
                title: "Error",
                text: "There was an issue forwarding the application",
                icon: "error"
              });
            }
          );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Controller WON'T be receiving this application",
          icon: "error"
        });
      }
    });
  }

  acceptAndPrint1(remarks: any) {
    this.httpClient.post('/eqrequestapi/pdfusernamewrite', { primaryid: remarks.primaryid, username: this.username })
      .subscribe(
        response => {
          console.log("To be sent to the controller", response);
          this.openPdf(response)
        },
        error => {
          console.error("Error forwarding the application", error);
        }
      );
  }


  returnApplication() {
    this.returnInput = true;
  }

  returnedContoller() {
    const payload = {
      primaryid: this.primaryidparamas,
      reason_for_return: this.reason_for_return
    };

    // Send the POST request to the backend API
    this.httpClient.post<any>('/eqrequestapi/returnByPrimaryId', payload)
      .subscribe(
        (response) => {
          console.log('Request returned successfully:', response);
          this.closeModal();
          // Handle the successful response, e.g., show a success message or update UI
        },
        (error) => {
          console.error('Error returning request:', error);
          // Handle the error, e.g., show an error message
        }
      );
  }

  returnedpdftrain(train_number: any) {
    this.trainsinglepdf = train_number;
    this.singlepdftrain = [];
    this.singlereturnedpdftrain = [];
    this.singlereturnedpdftrain1 = [];
    this.textacceptedeqrequestclass = [];
    this.singleacceptedpdftrain = [];
    this.textforwardedeqrequestclassaccepted = [];
    this.textforwardedeqrequest = [];
    this.showDecisionMaker = false;
    this.textreturnedeqrequestclass = [];
    this.textforwardedeqrequestclass = [];
    this.httpClient.post<any>('/eqrequestapi/pdfsinglereturnedtrain', { trainno: train_number }).subscribe(
      response => {
        // If the response contains data, update the counts
        console.log(response)
        if (response && response.length > 0) {
          this.singlereturnedpdftrain1 = response;
        } else {
          this.singlereturnedpdftrain1 = []; // Clear if no data is returned
        }
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
  }

  requestclosed() {
    const requestBody = { primaryid: this.primaryidparamas };
    console.log(requestBody)
    this.httpClient.post<any>('/eqrequestapi/closedPrimaryId', requestBody).subscribe(
      response => {
        console.log('Record closed successfully:', response);
        this.closeModal();
        // Handle success logic, e.g. show success notification or update UI
      },
      error => {
        console.error('Error closing the record:', error);
        // Handle error logic, e.g. show error notification
      }
    );

  }
  acceptedpdftrain(train_number: any) {
    this.viewaccepted = "check";
    this.trainsinglepdf = train_number;
    this.singlepdftrain = [];
    this.showDecisionMaker = false;
    this.singlereturnedpdftrain = [];
    this.singlereturnedpdftrain1 = [];
    this.textacceptedeqrequestclass = [];
    this.textforwardedeqrequestclassaccepted = [];
    this.singleacceptedpdftrain = [];
    this.textforwardedeqrequest = [];
    this.textreturnedeqrequestclass = [];
    this.textforwardedeqrequestclass = [];
    this.httpClient.post<any>('/eqrequestapi/pdfsingleacceptedtrain', { trainno: train_number }).subscribe(
      response => {
        // If the response contains data, update the counts
        console.log(response)
        if (response && response.length > 0) {
          this.singleacceptedpdftrain = response;
        } else {
          this.singleacceptedpdftrain = []; // Clear if no data is returned
        }
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
  }

  closeModal() {
    document.getElementById('pdfOpenModal')!.style.display = 'none';
    this.returnInput = false;
    if (this.forwardedtextCountspdfmultiple.length > 0) { this.onForwardedBulkClick() }
    if (this.singlepdftrain.length > 0) {
      this.forwardedpdftrain(this.trainsinglepdf)
      console.log("sundarlove" + this.trainsinglepdf)
    }
    if (this.singlereturnedpdftrain1.length > 0) {
      this.returnedpdftrain(this.trainsinglepdf)
    }
  }

  initializeFilteredCounts() {
    this.filteredForwardedCounts = this.forwardedtextCounts; // Show all data initially
    this.filteredReturnedCounts = this.returntextCounts;
    this.filteredAcceptedCounts = this.acceptedtextCounts;
    this.filteredForwardedPDFCounts = this.forwardedtextCountspdf;
    this.filteredReturnedPDFCounts = this.returntextCountspdf;
    this.filteredAcceptedPDFCounts = this.acceptedtextCountspdf;
    this.filteredForwardedBulkCounts = this.forwardedtextCountspdfmultiple;
    this.filteredAcceptedBulkCounts = this.acceptedtextCountspdfmultiple;
    this.filteredSinglePDFTrain = this.singlepdftrain;
  }

  filterForwardedCounts() {
    if (this.searchTermForwarded) {
      this.filteredForwardedCounts = this.forwardedtextCounts.filter(count =>
        count.train_number.includes(this.searchTermForwarded)
      );
    } else {
      this.filteredForwardedCounts = this.forwardedtextCounts; // Show all data if search term is empty
    }
  }

  filterReturnedCounts() {
    if (this.searchTermReturned) {
      this.filteredReturnedCounts = this.returntextCounts.filter(count =>
        count.train_number.includes(this.searchTermReturned)
      );
    } else {
      this.filteredReturnedCounts = this.returntextCounts;
    }
  }

  filterAcceptedCounts() {
    if (this.searchTermAccepted) {
      this.filteredAcceptedCounts = this.acceptedtextCounts.filter(count =>
        count.train_number.includes(this.searchTermAccepted)
      );
    } else {
      this.filteredAcceptedCounts = this.acceptedtextCounts;
    }
  }

  filterForwardedPDFCounts() {
    if (this.searchTermForwardedPDF) {
      this.filteredForwardedPDFCounts = this.forwardedtextCountspdf.filter(count =>
        count.train_number.includes(this.searchTermForwardedPDF)
      );
    } else {
      this.filteredForwardedPDFCounts = this.forwardedtextCountspdf;
    }
  }

  filterReturnedPDFCounts() {
    if (this.searchTermReturnedPDF) {
      this.filteredReturnedPDFCounts = this.returntextCountspdf.filter(count =>
        count.train_number.includes(this.searchTermReturnedPDF)
      );
    } else {
      this.filteredReturnedPDFCounts = this.returntextCountspdf;
    }
  }

  filterAcceptedPDFCounts() {
    if (this.searchTermAcceptedPDF) {
      this.filteredAcceptedPDFCounts = this.acceptedtextCountspdf.filter(count =>
        count.train_number.includes(this.searchTermAcceptedPDF)
      );
    } else {
      this.filteredAcceptedPDFCounts = this.acceptedtextCountspdf;
    }
  }

  filterForwardedBulkCounts() {
    if (this.searchTermForwardedBulk) {
      this.filteredForwardedBulkCounts = this.forwardedtextCountspdfmultiple.filter(count =>
        count.primaryid.includes(this.searchTermForwardedBulk)
      );
    } else {
      this.filteredForwardedBulkCounts = this.forwardedtextCountspdfmultiple;
    }
  }

  filterAcceptedBulkCounts() {
    if (this.searchTermAcceptedBulk) {
      this.filteredAcceptedBulkCounts = this.acceptedtextCountspdfmultiple.filter(count =>
        count.primaryid.includes(this.searchTermAcceptedBulk)
      );
    } else {
      this.filteredAcceptedBulkCounts = this.acceptedtextCountspdfmultiple;
    }
  }

  filterSinglePDFCounts() {
    if (this.searchTermSinglePDF) {
      this.filteredSinglePDFTrain = this.singlepdftrain.filter(item =>
        item.createdAt.includes(this.searchTermSinglePDF) // Adjust this based on your date format
      );
    } else {
      this.filteredSinglePDFTrain = this.singlepdftrain;
    }
  }

  textforwardedclasswise(trainnumber: any) {
    this.showDecisionMaker = false;
    this.trainsinglepdf = trainnumber;
    this.singlepdftrain = [];
    this.singlereturnedpdftrain = [];
    this.singlereturnedpdftrain1 = [];
    this.textacceptedeqrequestclass = [];
    this.textforwardedeqrequestclassaccepted = [];
    this.singleacceptedpdftrain = [];
    this.textforwardedeqrequest = [];
    this.textreturnedeqrequestclass = [];
    this.textforwardedeqrequestclass = [];
    this.httpClient.post<any>('/eqrequestapi/getClassModeCount', { train_number: this.trainsinglepdf }).subscribe(
      response => {
        // If the response contains data, update the counts
        console.log(response)
        if (response && response.length > 0) {
          console.log(response)
          this.textforwardedeqrequest = response;
        } else {
          this.textforwardedeqrequest = []; // Clear if no data is returned
        }
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
  }

  trainnowithclass(trainnumber: any, train_class: any) {
    this.singlepdftrain = [];
    this.singlereturnedpdftrain = [];
    this.singlereturnedpdftrain1 = [];
    this.singleacceptedpdftrain = [];
    this.textacceptedeqrequestclass = [];
    this.textforwardedeqrequestclass = [];
    this.textforwardedeqrequestclassaccepted = [];
    this.textreturnedeqrequestclass = [];
    this.trainsinglepdf = trainnumber;
    const trainclass = train_class;
    this.httpClient.post<any>('/eqrequestapi/getRequeststrainclass', { train_number: this.trainsinglepdf, class_mode: trainclass }).subscribe(
      response => {
        // If the response contains data, update the counts
        console.log(response)
        this.showDecisionMaker = true;
        if (response && response.length > 0) {
          console.log(response)
          this.textforwardedeqrequestclass = response;
          this.reports = response.map(report => ({
            ...report,
            accepted: false
          }));
          this.lengthofreports = this.reports.length;
          if (this.reports.length > 0) {
            this.loading = false;
          }
          console.log("Report: ", this.reports);
          console.log("Report1: ", this.lengthofreports);

        } else {
          this.textforwardedeqrequestclass = []; // Clear if no data is returned
        }
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
  }

  eqAccepted(report: any) {
    // Update report state locally
    report.accepted = true;
    report.rejected = false;
    report.status = 'Accepted';
    report.hidden = true; // Set to hide this report


    this.acceptedReports.push(report);
    console.log(report);

    // Update the reports array locally
    this.reports = this.reports.map(r =>
      r._id === report._id ? { ...r, accepted: true, rejected: false, status: 'Accepted', hidden: true } : r
    );

    // Optionally update the report count if necessary
    if (this.reports.length > 0) {
      this.updateReportCount();
    }
  }

  eqRejected(report: any) {
    console.log("eqRejected", report);

    // Split the pnr_number field by commas into an array
    const pnrArray = report.pnr_number.split(',');

    // Convert the single report into an array of reports with individual PNRs
    const reportArray = pnrArray.map(pnr => ({
      createdAt: report.createdAt,
      updatedAt: report.updatedAt,
      pnr_number: pnr.trim(), // Ensure each PNR is trimmed
      accepted: false,         // Mark as not accepted
      rejected: true,          // Mark as rejected
      status: 'Returned',      // Update status
      hidden: true,            // Set hidden to true
      _id: report._id,
      date_of_journey: report.date_of_journey,
      boardingdate: report.boardingdate,
      designation: report.designation,
      offmobilenumber: report.offmobilenumber,
      train_number: report.train_number,
      rece_mode: report.rece_mode,
      class_mode: report.class_mode,
      from_stn: report.from_stn,
      no_of_passenger: report.no_of_passenger,
      boarding_at: report.boarding_at,
      destination: report.destination,
      passenger_name: report.passenger_name,
      eq_requested_by: report.eq_requested_by,
      eq_conveyed_by: report.eq_conveyed_by,
      eq_taken_by: report.eq_taken_by,
      remarks: report.remarks,
      remarks2: report.remarks2 || '',  // Optional field, default to empty if not present
      pdfstatus: report.pdfstatus
    }));

    // API call to update status
    const apiUrl = '/eqrequestapi/updateReport';
    this.httpClient.post(apiUrl, { report: reportArray }).subscribe(
      (response) => {
        console.log("Report status updated successfully", response);

        // Update the reports array to reflect changes
        this.reports = this.reports.map(r =>
          r._id === report._id ? { ...r, accepted: false, rejected: true, status: 'Returned', hidden: true } : r
        );

        if (this.reports.length > 0) {
          this.updateReportCount();
        }
      },
      (error) => {
        console.error("Error updating report status:", error);
      }
    );
  }

  updateacceptedtext() {
    //console.log("status");

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: true
    });

    swalWithBootstrapButtons.fire({
      title: "Have you taken the PRINTOUT?",
      text: "Clicking 'YES' will further forward it to the Controller",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, taken!",
      cancelButtonText: "No",
      reverseButtons: true,
      allowOutsideClick: false, // Prevents closing on clicking outside
      allowEscapeKey: false     // Prevents closing on pressing the 'Esc' key
    }).then((result) => {
      if (result.isConfirmed) {
        // Call the POST method to update the status
        this.httpClient.post('/eqrequestapi/updateReport', { report: this.acceptedReports })
          .subscribe(
            response => {
              swalWithBootstrapButtons.fire({
                title: "Forwarded!",
                text: "Application Forwarded to the Controller",
                icon: "success"
              });
              // console.log("To be sent to the controller", response);
              this.acceptedReports = [];
              this.closeCardViewer();
              this.closeModal();
            },
            error => {
              console.error("Error forwarding the application", error);
              swalWithBootstrapButtons.fire({
                title: "Error",
                text: "There was an issue forwarding the application",
                icon: "error"
              });
            }
          );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Controller WON'T be receiving this application",
          icon: "error"
        });
      }
    });
  }

  eqEdit(report: any) {
    document.getElementById('reasonToReturn')!.style.display = 'block';
    this.reasonReturnInput = true;
    this.updatereportreturned = report;

  }
  closeReasonModal() {
    document.getElementById('reasonToReturn')!.style.display = 'none';
  }
  returnedContoller1() {
    this.eqRejected(this.updatereportreturned)
    this.closeReasonModal();
  }

  generatePDF(): void {

    const pdf = new jsPDF();
    const margin = 10;
    const cellHeight = 10;
    const cellPadding = 1;
    const columnWidth = 80; // Width for both columns
    const startX = 25; // Starting x position for the table
    let startY = 5; // Starting y position for the table
    const maxWidth = columnWidth * 2 - cellPadding * 2; // Full width for merged columns

    // Fetch the image from assets
    this.httpClient.get('assets/images/irlogo.png', { responseType: 'blob' }).subscribe((blob) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob); // Convert the blob to base64
      reader.onloadend = () => {
        let base64data = reader.result as string;
        // Optionally convert to JPEG to reduce size
        base64data = base64data.replace('data:image/png;', 'data:image/jpeg;'); // Convert to JPEG

        this.acceptedReports.forEach((report, index) => {
          let y = startY; // Reset y position for each report

          pdf.text(`Sl.no: ${report.requestno}`, 10, y, { align: 'left' });
          y += 1;
          // Add the image logo at the top center of the page
          pdf.addImage(base64data, 'PNG', 97, y, 18, 18); // Centered logo
          y += 25; // Move down after the logo

          // Add Title
          pdf.setFontSize(10);
          pdf.setFont("Helvetica", "bold");
          pdf.text('SOUTHERN RAILWAY', 105, y, { align: 'center' });
          y += 5;
          pdf.setFontSize(10);
          pdf.text('APPLICATION FOR EMERGENCY QUOTA', 105, y, { align: 'center' });
          y += 5;
          pdf.text('(RECOMMENDED BY RAILWAY OFFICIALS)', 105, y, { align: 'center' });
          y += 6;

          // Add current Date/Time to each page
          const currentDateTime = new Date();
          const formattedCurrentDateTime = this.formatDateTime(currentDateTime); // Format current date/time
          pdf.setFontSize(10);
          pdf.setFont("Helvetica", "normal");
          pdf.text(`User: ${this.username} | Date / Time: ${formattedCurrentDateTime}`, startX, y);
          y += 2;

          // Define rows with headings in the first column and values in the second column
          const rows = [
            ['EQ Applied By', report.eq_conveyed_by],
            ['Designation', report.designation],
            ['Officer Mobile Number', report.offmobilenumber],
            ['EQ Request Through', report.eq_requested_by],
            ['Train No', report.train_number],
            // Skip 'PNR No' as it will be handled separately
            ['JCO', this.formatDateTime(report.date_of_journey)],
            ['Boarding Date', this.formatDateTime(report.boardingdate)],
            ['Class', report.class_mode],
            ['Source Station (From)', report.from_stn],
            ['Destination (To)', report.destination],
            ['Boarding At', report.boarding_at],
            ['No. of Berths/Seats', report.seat_berth],
            ['Name of Passenger', report.passenger_name],
            ['No Of Passengers', report.no_of_passenger],
            ['Passenger Phone Number', report.passenger_phone],
            ['Remarks', report.remarks],
            ['Additional Remarks', report.remarks2],
            ['EQ Taken By', report.eq_taken_by],
            ['Mode Of Receipt', report.rece_mode],
            ['Received Date/Time', this.formatDateTime(report.createdAt)]
          ];

          // Filter out rows where either the heading or value is undefined or null
          const filteredRows = rows.filter(row => row[1] !== undefined && row[1] !== null);

          // Loop through filtered rows and draw them with borders
          filteredRows.forEach((row, rowIndex) => {
            var yPos = y + (rowIndex * (cellHeight + cellPadding)) + cellPadding;;

            // Draw rectangles for each cell
            pdf.rect(startX, yPos, columnWidth, cellHeight); // Left cell
            pdf.rect(startX + columnWidth + 0, yPos, columnWidth, cellHeight); // Right cell
            // Add text to cells
            pdf.setFont("Helvetica", "normal");
            pdf.text(row[0] ?? '', startX + cellPadding, yPos + cellPadding + 5); // Left cell text (heading)
            pdf.text(String(row[1]), startX + columnWidth + 0 + cellPadding, yPos + cellPadding + 5); // Right cell text (value)

          });

          // Special handling for "PNR No" field with colspan and text wrap
          y += filteredRows.length * (cellHeight + cellPadding); // Adjust y for PNR row

          // Draw the PNR No row (merging two columns)
          pdf.setFont("Helvetica", "bold");
          pdf.rect(startX, y, columnWidth * 2, cellHeight); // Full width spanning two columns
          pdf.text('PNR No', startX + cellPadding, y + cellPadding + 5); // PNR No heading
          y += cellHeight + cellPadding; // Move down for the PNR value

          // Split PNR number by commas and wrap the text
          const pnrText = String(report.pnr_number);
          const lines = pdf.splitTextToSize(pnrText.split(',').join(', '), maxWidth);

          // Draw the wrapped PNR number text in a new row below the "PNR No" heading
          const pnrHeight = cellHeight * lines.length; // Adjust height based on the number of lines
          pdf.rect(startX, y, columnWidth * 2, pnrHeight); // Full width for PNR value
          pdf.setFont("Helvetica", "normal");
          pdf.text(lines, startX + cellPadding, y + cellPadding + 5); // Add wrapped PNR text

          // Add a new page if there are multiple reports
          if (index < this.acceptedReports.length - 1) {
            pdf.addPage();
          }
        });

        const date = new Date().toLocaleDateString();
        pdf.save('Accepted_EQ_' + `${date}` + '.pdf');

        // Create a Blob from the PDF
        const pdfBlob = pdf.output('blob');
        const url = URL.createObjectURL(pdfBlob);

        // Open the PDF in a new tab
        const printWindow = window.open(url, '_blank');

        // Check if the window was opened successfully
        if (printWindow) {
          printWindow.onload = () => {
            printWindow.print();
            // Delay to allow print dialog to close
            setTimeout(() => {
              // console.log("Print dialog closed");
              this.updateacceptedtext(); // Call your function here
            }, 1000);  // Trigger the print dialog
          };
        } else {
          console.error('Failed to open print window!');
        }
      };
    });
  }

  // Helper function to format date and time as dd/MM/yyyy HH:mm
  formatDateTime(date: Date | undefined | null): string {
    if (!date) {
      return ''; // Return an empty string for undefined or null values
    }

    const d = new Date(date);

    if (isNaN(d.getTime())) {
      return ''; // Return an empty string for invalid date objects
    }

    const day = ('0' + d.getDate()).slice(-2);
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const year = d.getFullYear();
    const hours = ('0' + d.getHours()).slice(-2);
    const minutes = ('0' + d.getMinutes()).slice(-2);

    return `${day}/${month}/${year}`;
    // return `${day}/${month}/${year} ${hours}:${minutes}`; //Old Return Statement
  }

  texteqreturned(trainnumber: any) {
    this.singlepdftrain = [];
    this.singlereturnedpdftrain = [];
    this.singlereturnedpdftrain1 = [];
    this.singleacceptedpdftrain = [];
    this.textacceptedeqrequestclass = [];
    this.textforwardedeqrequestclassaccepted = [];
    this.textforwardedeqrequestclass = [];
    this.trainsinglepdf = trainnumber;
    this.httpClient.post<any>('/eqrequestapi/groupByClassMode', { train_number: this.trainsinglepdf }).subscribe(
      response => {
        if (response && response.length > 0) {
          console.log(response)
          this.textreturnedeqrequestclass = response;
          console.log("Report: ", this.textreturnedeqrequestclass);
        } else {
          this.textreturnedeqrequestclass = []; // Clear if no data is returned
        }
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );

  }

  getClose(trainnumber: any, trainclass: any) {
    this.generatePdf = false;
    this.trainsinglepdf = trainnumber;
    this.httpClient.post<any>('/eqrequestapi/getRequeststrainclassreturned', { train_number: this.trainsinglepdf, class_mode: trainclass }).subscribe(
      response => {
        // If the response contains data, update the counts
        console.log(response)
        this.showDecisionMaker = true;
        if (response && response.length > 0) {
          console.log(response)
          this.textforwardedeqrequestclassReturned = response;
          this.reports = response.map(report => ({
            ...report,
            accepted: false
          }));
          if (this.reports.length > 0) {
            this.loading = false;
          }
          console.log("gettrainwithclass: ", this.reports);
        } else {
          this.textforwardedeqrequestclassReturned = []; // Clear if no data is returned
        }
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
  }

  updateClose(report: any) {
    console.log("eqClosed", report);
    report.closed = true;
    report.status = 'Closed';
    //Accepted, Returned, Forwarded, closed
    try {
      const apiUrl = '/eqrequestapi/closeReport';
      this.httpClient.post(apiUrl, { id: report._id, status: report.status }).subscribe(
        (response) => {
          console.log("Report status updated successfully", response);
        },
        (error) => {
          console.error("Error updating report status:", error);
        }
      );
      this.showComplete = true;
    } catch (error) {
      console.log("Something Went Wrong During Return");
    }
  }

  closeCardViewer() {
    this.showDecisionMaker = false;
  }

  acceptedtexttrainwise(trainnumber: any) {
    this.generatePdf = false;
    this.singlepdftrain = [];
    this.showDecisionMaker = false;
    this.singlereturnedpdftrain = [];
    this.singlereturnedpdftrain1 = [];
    this.singleacceptedpdftrain = [];
    this.textforwardedeqrequestclass = [];
    this.textacceptedeqrequestclass = [];
    this.textforwardedeqrequestclassaccepted = [];
    this.trainsinglepdf = trainnumber;
    this.httpClient.post<any>('/eqrequestapi/AcceptedClassMode', { train_number: this.trainsinglepdf }).subscribe(
      response => {
        if (response && response.length > 0) {
          console.log(response)
          this.textacceptedeqrequestclass = response;
          console.log("Report: ", this.textacceptedeqrequestclass);
        } else {
          this.textacceptedeqrequestclass = []; // Clear if no data is returned
        }
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
  }

  getaccepted(trainnumber: any, trainclass: any) {
    this.trainsinglepdf = trainnumber;
    this.httpClient.post<any>('/eqrequestapi/getRequeststrainclassaccepted', { train_number: this.trainsinglepdf, class_mode: trainclass }).subscribe(
      response => {
        // If the response contains data, update the counts
        console.log("getaccepted", response);
        this.showDecisionMaker = true;
        if (response && response.length > 0) {
          console.log("getaccepted", response)
          this.textforwardedeqrequestclassaccepted = response;
          this.reports = response.map(report => ({
            ...report,
            accepted: false
          }));
          if (this.reports.length > 0) {
            this.loading = false;
          }
          console.log("gettrainwithclass: ", this.reports);
        } else {
          this.textforwardedeqrequestclassaccepted = []; // Clear if no data is returned
        }
      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
  }

  updateReportCount() {
    this.lengthofreports = this.lengthofreports - 1;
    console.log("updateReportCount" + this.lengthofreports)
    if ((this.lengthofreports === 0) && (this.acceptedReports.length > 0)) {
      this.generatePdf = true
    }
  }

  allupdateLastSyncTime(): void {
    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    this.lastSyncTime = `${date} ${time}`;
  }

  woPDFforwardedSyncfn() {
    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    this.woPDFforwardedSync = `${date} ${time}`;
    // console.log("check", this.woPDFforwardedSync);
  }

  woPDFreturnedSyncfn() {
    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    this.woPDFreturnedSync = `${date} ${time}`;
  }

  woPDFacceptedSyncfn() {
    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    this.woPDFacceptedSync = `${date} ${time}`;
  }

  sPDFforwardedSyncfn() {
    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    this.sPDFforwardedSync = `${date} ${time}`;
  }

  sPDFreturnedSyncfn() {
    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    this.sPDFreturnedSync = `${date} ${time}`;
  }

  sPDFacceptedSyncfn() {
    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    this.sPDFacceptedSync = `${date} ${time}`;
  }

  reqforwardedPDFwithIMGfn() {
    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    this.reqforwardedPDFwithIMG = `${date} ${time}`;
  }

  reqtextForwardedfn() {
    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    this.reqtextForwarded = `${date} ${time}`;
  }

  forwardedTextEQfn() {
    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    this.forwardedTextEQ = `${date} ${time}`;
  }


  requestForwardedPDFBulkfn() {
    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    this.reqForwardedPDFBulk = `${date} ${time}`;
  }

  requestAcceptedPDFBulkfn() {
    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    this.reqAcceptedPDFBulk = `${date} ${time}`;
  }

  addTime(date: any) {
    const updatedDate = new Date(date);
    updatedDate.setHours(updatedDate.getHours() + 5);
    updatedDate.setMinutes(updatedDate.getMinutes() + 30);
    return updatedDate;
  }
}