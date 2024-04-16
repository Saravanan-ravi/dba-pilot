import { Component, OnInit, Injectable, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { forkJoin } from 'rxjs';
import { SanitizerService } from '../sanitizer.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {

  constructor(private session: SessionService, private httpClient: HttpClient, private sanitizer: DomSanitizer, private sanitizerService: SanitizerService) { }

  idGetter: any;
  pdfUrl: SafeResourceUrl;
  pdfRaw: any
  searchText: any;
  errorst: any;
  errorMsgst: any;
  jsonarrayconvert: any;
  ProgLoaded: boolean = false;
  flagpdf: boolean = false;
  todayDate: Date;

  ngOnInit(): void {
    this.loadReport();
  }

  loadReport() {
    this.todayDate = new Date();
    try {
      this.httpClient.get("/fetchnotify/fetchdailyreport").subscribe(data => {
        var responsejsonconvert = JSON.stringify(data);
        this.jsonarrayconvert = JSON.parse(responsejsonconvert);
        console.log(this.jsonarrayconvert)

        console.log("sundar")
      }, error => {
        this.errorst = true;
        console.log('Unable to Fetch:', error);
        this.errorMsgst = error.error.message;
      });
    } catch (error) {
      console.log('Unable to Fetch:', error);
    }
  }

  openPDF(value: any) {
    this.idGetter = value;
    console.log(value)
    this.viewPDF();
  }

  viewPDF() {
    document.getElementById('pdfOpenModal').style.display = 'block';
    this.ProgLoaded = true;
    const pdfObservable = this.httpClient.get(`/fetchnotify/fetchnotificationID/${this.idGetter}`, { responseType: 'blob' });
    forkJoin([pdfObservable]).subscribe(([pdfBlob]) => {
      // Handling PDF
      this.pdfRaw = URL.createObjectURL(pdfBlob as Blob);
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfRaw) as SafeResourceUrl;
    });
  }
}
