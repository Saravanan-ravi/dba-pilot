import { Component, OnInit, SecurityContext, ViewChild, ElementRef } from '@angular/core';
import Swal from 'sweetalert2'
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-mis-report',
  templateUrl: './mis-report.component.html',
  styleUrl: './mis-report.component.css'
})
export class MisReportComponent implements OnInit {
  datewiseReportForm: FormGroup;
  desReportForm: FormGroup;
  userReportForm: FormGroup;
  designations: string[] = [];
  takenBys: string[] = [];
  rptDatewise: any;
  rptDesignationwise: any;
  rptUserwise: any;

  constructor(private session: SessionService, private httpClient: HttpClient, private router: Router, private sanitizer: DomSanitizer, private fb: FormBuilder) {
    // Create the form with startDate and endDate fields
    this.datewiseReportForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });

    this.desReportForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      designation: [''], // Nullable designation field, so it's not required
      eq_taken_by: ['']
    });

    this.userReportForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      designation: [''], // Nullable designation field, so it's not required
      eq_taken_by: ['']
    });
  }

  ngOnInit(): void {
    this.loadDesignationsAndReport();
    this.loadUserIDAndReport();
  }

  refresh() {
    window.location.reload();
  }

  getReport() {
    // Check if the form is valid
    if (this.datewiseReportForm.invalid) {
      console.error('Form is invalid. Please fill in all required fields.');
      return; // Optionally show a message to the user
    }

    const { startDate, endDate } = this.datewiseReportForm.value;

    // Create Date objects
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    endDateObj.setHours(23, 59, 59, 999); // Set to end of the day

    // Check if the dates are valid
    if (isNaN(startDateObj.getTime()) || isNaN(endDateObj.getTime())) {
      console.error('Invalid date format');
      return; // or show an error message to the user
    }

    // Ensure start date is before end date
    if (startDateObj > endDateObj) {
      console.error('Start date must be before end date');
      return; // or show an error message to the user
    }

    // Call the backend API with the date range
    this.httpClient.get(`/misreport/latestRpt`, {
      params: {
        startDate: startDateObj.toISOString(), // Use full ISO string
        endDate: endDateObj.toISOString()      // Use full ISO string
      }
    }).subscribe({
      next: (data) => {
        // this.rptDatewise = data;
        if (Array.isArray(data)) {
          this.rptDatewise = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        } else {
          console.error("Data is not an array:", data);
        }

        console.log('Report data:', data);
        // Handle the response data (e.g., display it or download the report)
      },
      error: (err) => {
        console.error('Error fetching report:', err);
      }
    });
  }


  loadDesignationsAndReport() {
    // Step 1: Fetch designations within the selected date range
    this.desReportForm.valueChanges.subscribe((formValues) => {
      const { startDate, endDate, designation } = formValues;

      // Only proceed if both startDate and endDate are present
      if (startDate && endDate) {
        // Format the dates (e.g., YYYY-MM-DD)
        const formattedStartDate = new Date(startDate).toISOString().split('T')[0];
        const formattedEndDate = new Date(endDate).toISOString().split('T')[0];

        // Prepare the parameters for the API request
        const params: any = {
          startDate: formattedStartDate,
          endDate: formattedEndDate
        };

        // Include designation if it exists
        if (designation) {
          params.designation = designation;
        }

        // Step 2: Make the HTTP request to fetch designations and report data
        this.httpClient.get(`/misreport/latestRptDesg`, { params }).subscribe({
          next: (data: any) => {
            this.designations = data.designations; // Populate the designations array based on date range
            var rptDesignwise = data.reportData; // Populate the report data
            if (Array.isArray(rptDesignwise)) {
              this.rptDesignationwise = rptDesignwise.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            } else {
              console.error("Data is not an array:", data);
            }
            console.log('Designations:', this.designations);
            console.log('Report data:', this.rptDesignationwise);
          },
          error: (err) => {
            console.error('Error fetching designations and report data:', err);
          }
        });
      }
    });
  }


  // Combined function to fetch distinct eq_taken_by and get report data
  loadUserIDAndReport() {
    // Step 1: Listen for form changes and trigger the report fetch
    this.userReportForm.valueChanges.subscribe((formValues) => {
      const { startDate, endDate, eq_taken_by } = formValues;

      // Only proceed if startDate and endDate are provided
      if (startDate && endDate) {
        // Format the dates (e.g., YYYY-MM-DD)
        const formattedStartDate = new Date(startDate).toISOString().split('T')[0];
        const formattedEndDate = new Date(endDate).toISOString().split('T')[0];

        // Prepare the parameters for the HTTP request
        const params: any = {
          startDate: formattedStartDate,
          endDate: formattedEndDate,
        };

        // Include eq_taken_by in the request if it exists
        if (eq_taken_by) {
          params.eq_taken_by = eq_taken_by;
        }

        // Make the HTTP request to fetch the distinct eq_taken_by and report data
        this.httpClient.get(`/misreport/latestRptUser`, { params }).subscribe({
          next: (data: any) => {
            // Step 2: Assign the received eq_taken_by (distinct values) to the dropdown
            this.takenBys = data.eq_taken_by;

            // Step 3: Handle the report data and display it
            var rptUsrwise = data.reportData;
            if (Array.isArray(rptUsrwise)) {
              this.rptUserwise = rptUsrwise.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            } else {
              console.error("Data is not an array:", data);
            }

            console.log('Distinct User Names:', this.takenBys);
            console.log('Report Data:', this.rptUserwise);
          },
          error: (err) => {
            console.error('Error fetching report and eq_taken_by data:', err);
          }
        });
      }
    });
  }


  // Function to download Excel
  datewiseToExcel(): void {
    const dataToExport = this.rptDatewise.map((item, index) => ({
      'Sl. No': index + 1,
      'EQ Given Date': new Date(item.createdAt).toLocaleString(),
      'Train Number': item.train_number,
      'Source': item.from_stn,
      'Destination': item.destination,
      'Boarding': item.boarding_at,
      'PNR': item.pnr_number,
      'Designation': item.designation,
      'Officer Name': item.offmobilenumber,
      'Mode Of Receipt': item.rece_mode,
      'Status': item.status
    }));

    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    var dateAndTime = `${date} ${time}`;

    // Create a worksheet and workbook
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'User-wise Report');

    // Trigger the file download
    XLSX.writeFile(wb, 'User-wise Report ' + `${dateAndTime}` + '.xlsx');
  }

  // Function to download PDF
  datewiseToPDF(): void {
    const doc = new jsPDF();
    const columns = ['Sl. No', 'EQ Given Date', 'Train Number', 'Source', 'Destination', 'Boarding', 'PNR', 'Designation', 'Officer Name', 'Mode Of Receipt', 'Status'];
    const rows: any[] = [];

    this.rptDatewise.forEach((item, index) => {
      rows.push([
        index + 1,
        new Date(item.createdAt).toLocaleString(),
        item.train_number,
        item.from_stn,
        item.destination,
        item.boarding_at,
        item.pnr_number,
        item.designation,
        item.offmobilenumber,
        item.rece_mode,
        item.status
      ]);
    });
    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    var dateAndTime = `${date} ${time}`;

    // Add a title to the PDF
    doc.text('User-wise Report ' + dateAndTime, 14, 10);

    // Add the table using autoTable plugin
    (doc as any).autoTable({
      head: [columns],
      body: rows,
      startY: 20,
    });

    // Save the PDF file
    doc.save('User-wise Report ' + dateAndTime + '.pdf');
  }


  // Function to download Excel
  designationwiseToExcel(): void {
    const dataToExport = this.rptDesignationwise.map((item, index) => ({
      'Sl. No': index + 1,
      'EQ Given Date': new Date(item.createdAt).toLocaleString(),
      'Train Number': item.train_number,
      'Source': item.from_stn,
      'Destination': item.destination,
      'Boarding': item.boarding_at,
      'PNR': item.pnr_number,
      'Conveyed By': item.eq_conveyed_by,
      'Officer Name': item.offmobilenumber,
      'Mode Of Receipt': item.rece_mode,
      'Status': item.status
    }));

    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    var dateAndTime = `${date} ${time}`;

    // Create a worksheet and workbook
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Destination-wise Report ');

    // Trigger the file download
    XLSX.writeFile(wb, 'Destination-wise Report ' + `${dateAndTime}` + '.xlsx');
  }

  // Function to download PDF
  designationwiseToPDF(): void {
    const doc = new jsPDF();
    const columns = ['Sl. No', 'EQ Given Date', 'Train Number', 'Source', 'Destination', 'Boarding', 'PNR', 'Conveyed By', 'Officer Name', 'Mode Of Receipt', 'Status'];
    const rows: any[] = [];

    this.rptDesignationwise.forEach((item, index) => {
      rows.push([
        index + 1,
        new Date(item.createdAt).toLocaleString(),
        item.train_number,
        item.from_stn,
        item.destination,
        item.boarding_at,
        item.pnr_number,
        item.eq_conveyed_by,
        item.offmobilenumber,
        item.rece_mode,
        item.status
      ]);
    });

    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    var dateAndTime = `${date} ${time}`;

    // Add a title to the PDF
    doc.text('Designation-wise Report', 14, 10);

    // Add the table using autoTable plugin
    (doc as any).autoTable({
      head: [columns],
      body: rows,
      startY: 20,
    });

    // Save the PDF file
    doc.save('Designation-wise Report ' + dateAndTime + '.pdf');
  }


  // Function to download Excel
  userwiseToExcel(): void {
    const dataToExport = this.rptUserwise.map((item, index) => ({
      'Sl. No': index + 1,
      'EQ Given Date': new Date(item.createdAt).toLocaleString(),
      'Train Number': item.train_number,
      'Source': item.from_stn,
      'Destination': item.destination,
      'Boarding': item.boarding_at,
      'PNR': item.pnr_number,
      'Designation': item.designation,
      'Officer Name': item.offmobilenumber,
      'Mode Of Receipt': item.rece_mode,
      'Status': item.status
    }));

    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    var dateAndTime = `${date} ${time}`;

    // Create a worksheet and workbook
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'User-wise Report');

    // Trigger the file download
    XLSX.writeFile(wb, 'User-wise Report ' + `${dateAndTime}` + '.xlsx');
  }

  // Function to download PDF
  userwiseToPDF(): void {
    const doc = new jsPDF();
    const columns = ['Sl. No', 'EQ Given Date', 'Train Number', 'Source', 'Destination', 'Boarding', 'PNR', 'Designation', 'Officer Name', 'Mode Of Receipt', 'Status'];
    const rows: any[] = [];

    this.rptUserwise.forEach((item, index) => {
      rows.push([
        index + 1,
        new Date(item.createdAt).toLocaleString(),
        item.train_number,
        item.from_stn,
        item.destination,
        item.boarding_at,
        item.pnr_number,
        item.designation,
        item.offmobilenumber,
        item.rece_mode,
        item.status
      ]);
    });
    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    var dateAndTime = `${date} ${time}`;

    // Add a title to the PDF
    doc.text('User-wise Report ' + dateAndTime, 14, 10);

    // Add the table using autoTable plugin
    (doc as any).autoTable({
      head: [columns],
      body: rows,
      startY: 20,
    });

    // Save the PDF file
    doc.save('User-wise Report ' + dateAndTime + '.pdf');
  }

}