import { Component, input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormControl, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { RequestTypeModalComponent } from '../request-type-modal/request-type-modal.component';
import { MatDialog } from '@angular/material/dialog';

interface Station {
  _id: string;
  StnCode: string;
  Zone: string;
}

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']  // Corrected from "styleUrl" to "styleUrls"
})
export class EntryFormComponent implements OnInit {

  user: any = {};
  inputSets: any[] = [];
  requestType: any;
  addremarks: any;
  // Form Fields
  class_mode: string = '';
  passenger_name: string = '';
  no_of_passengers: any;
  passenger_phone: any;
  pnr_number: string = '';
  eq_requested_by: string = '';
  eq_conveyed_by: string = '';
  eq_taken_by: string = '';
  designation: string;
  remarks: string = '';
  rece_mode: string = '';
  seat_berth: any;
  date_of_journey: string = '';
  tso_date: any;
  officerPhone: string;
  from_station: any;
  to_station: any;
  minDate: string;
  //Addtional PNR
  additional_PNR: any;
  addpnrrow: boolean = false;
  existingRecord: any;
  showEditTable: any;
  // File Upload
  pdfname: string[] = []; // Declare pdfname as an array of strings
  pdffilenotification: File[] = [];
  pdfstatus: boolean = false;

  // Error Handling
  error: boolean = false;
  errorMsg: string = '';

  returnedWithoutPdf: number = 0;

  lastseenjs: any;
  lastseensummary: any;
  lastseenreceiptsummary: any;
  lastseentotalbyuser: any;
  startDateTime: any;
  endDateTime: any;

  trainControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{4,5}$/)  // Allows 4 to 5 digits only
  ]); // Form control for the train input
  trains: string[] = []; // All train numbers fetched from the API
  filteredTrains: Observable<string[]>; // Filtered train numbers for autocomplete
  train_number: string; // Model bound to ngModel for train number
  boardingControl = new FormControl(); // Form control for boarding station input
  destinationControl = new FormControl(); // Form control for destination station input
  boarding_at: string; // NgModel for boarding station
  destination: string; // NgModel for destination station
  stations: Station[] = []; // List of all boarding stations
  tostations: Station[] = []; // List of all destination stations
  filteredBoardingStations: Observable<Station[]>; // Filtered boarding stations
  filteredDestinationStations: Observable<Station[]>;
  conveyedControl = new FormControl(); // Form control for boarding station input
  requestControl = new FormControl();
  takenControl = new FormControl();// Form control for destination station input
  conveyed: string; // NgModel for boarding station
  requested: string; // NgModel for destination station
  taken: string;
  convyedarr: string[] = []; // List of all boarding stations
  requestedarr: string[] = []; // List of all destination stations
  takenarr: string[] = [];
  designationarr: string[] = [];
  offmobilenumberarr: string[] = [];
  filteredconveyed: Observable<string[]>; // Filtered conveyed stations
  filteredrequested: Observable<string[]>; // Filtered requested stations
  filteredtaken: Observable<string[]>; // Filtered taken stations
  officerPhoneControl = new FormControl();
  designationsControl = new FormControl();
  filteredDesignations: Observable<string[]>;
  filteredSourceStations: Observable<Station[]>;
  filteredOfficerPhones: Observable<string[]>;

  SourceControl = new FormControl();

  constructor(private session: SessionService, private httpClient: HttpClient, private router: Router, private sanitizer: DomSanitizer, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchTrainNumbers();
    this.fetchStations();
    this.fetchallStations();
    this.authUser();
    this.fetchConveyedBy();
    this.eqrequestedby();
    this.eq_taken_by1();
    this.designation1();
    this.officerPhone1();
    this.fetchReturnCounts();
    // Filter train numbers based on user input
    this.filteredTrains = this.trainControl.valueChanges.pipe(
      startWith(''), // Start with an empty string
      map(value => this._filterTrains(value)) // Apply filtering logic
    );

    this.filteredBoardingStations = this.boardingControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterStations(value, this.tostations)) // Apply filtering logic
    );

    // Filter destination stations based on user input
    this.filteredDestinationStations = this.destinationControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterStations(value, this.tostations)) // Apply filtering logic
    );

    this.filteredconveyed = this.conveyedControl.valueChanges.pipe(
      startWith(''), // Starting with an empty string for the filter
      map(value => this._filterConveyed(value))
    );

    this.filteredSourceStations = this.SourceControl.valueChanges.pipe(startWith(''),
      map(value => this._filterStations(value, this.tostations)) // Apply filtering logic
    );


    // Filter for requested stations
    this.filteredrequested = this.requestControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterRequested(value))
    );

    // Filter for taken stations
    this.filteredtaken = this.takenControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterTaken(value))
    );

    this.filteredDesignations = this.designationsControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterdesignations(value))
    );
    this.filteredOfficerPhones = this.officerPhoneControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterofficerphone(value))
    );

  }


  authUser() {
    this.user = this.session.getUser();
    this.taken = this.user.username;
    if (this.user.role == "Administrator") {
      this.router.navigateByUrl("/entry-form");
      console.log("Admin to navigate entry form");
    } if (this.user.role == "Generaluser") {
      this.router.navigateByUrl("/report");
      console.log("General User");
    }
  }

  addInputSet() {
    this.addpnrrow = true;
    this.inputSets.push({
      additional_PNR: ''
    });
  }

  removeInputSet(index: number) {
    this.inputSets.splice(index, 1);
  }

  closeInputSet() {
    this.inputSets.length = 0;
    this.addpnrrow = false;
  }

  openLastSeenModal() {
    document.getElementById('pdfOpenModal').style.display = 'block';
    this.lastSeen();
  }


  lastSeen() {
    try {
      var date = new Date();
      var y = date.getFullYear();
      var m = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      var d = String(date.getDate() - 1).padStart(2, '0');
      var d2 = String(date.getDate()).padStart(2, '0');
      var h = String(date.getHours() - 5).padStart(2, '0'); // Adding 1 hour as an example
      var min = String(date.getMinutes() + 10).padStart(2, '0'); // Adding 10 minutes as an example
      var s = String(date.getSeconds() + 30).padStart(2, '0'); // Adding 30 seconds as an example
      var ms = String(date.getMilliseconds()).padStart(3, '0');

      // Constructing the modified date string
      var modifiedDateONE = `${y}-${m}-${d}T${h}:${min}:${s}.${ms}+00:00`;
      var modifiedDateTWO = `${y}-${m}-${d2}T${h}:${min}:${s}.${ms}+00:00`;

      // console.log("modified date:", modifiedDateONE, modifiedDateTWO); // Example output: 2024-09-23T12:04:29.351+00:00
      this.httpClient.get("/eqrequestapi/latest-by-rece-mode").subscribe(data => {
        var responsejsonconvert = JSON.stringify(data);
        this.lastseenjs = JSON.parse(responsejsonconvert);
      }, error => {
        console.log('Unable to fetch last seen:', error);
      });

      this.httpClient.get("/eqrequestapi/total-by-conveyed-range").subscribe(data => {
        this.lastseensummary = data;
        console.log(this.lastseensummary)
      }, error => {
        console.log('Unable to fetch last seen Summary:', error);
      });
      this.httpClient.get("/eqrequestapi/total-by-receipt-mode").subscribe(data => {
        this.lastseenreceiptsummary = data;
        console.log(this.lastseenreceiptsummary)
      }, error => {
        console.log('Unable to fetch last seen Summary:', error);
      });
      this.httpClient.get("/eqrequestapi/total-by-user").subscribe(data => {
        this.lastseentotalbyuser = data;
        console.log(this.lastseentotalbyuser)
      }, error => {
        console.log('Unable to fetch last seen user total:', error);
      });
    } catch (error) {
      console.log('Unable to fetch last seen user total:', error);
    }
  }


  // Fetch unique train numbers from the API
  fetchTrainNumbers() {
    console.log("Fetching train numbers...");
    this.httpClient.get<any>("/eqrequestapi/uniqueTrainNumbers").subscribe(
      response => {
        // console.log('API Response:', response); // Log the entire response to inspect its structure
        if (response && response.success && Array.isArray(response.trainNumbers)) {
          this.trains = response.trainNumbers;
          // console.log('Fetched unique train numbers:', this.trains); // Should log the correct numbers now
        } else {
          console.log('No train numbers in response.');
          this.trains = [];
        }
      },
      error => {
        console.error('Error fetching train numbers:', error);
        this.error = true;
        this.errorMsg = error.error.message || "No Records in Database to fetch train numbers.";
      }
    );
  }

  // Fetch stations for 'Boarding At (From)'
  fetchStations() {
    this.httpClient.get<Station[]>("/stationapi/fromstn").subscribe(
      data => {
        this.stations = data;
        //console.log('Fetched stations:', this.stations);
      },
      error => {
        console.log(error);
        this.error = true;
        this.errorMsg = error.error.message || "Error fetching stations.";
      }
    );
  }

  fetchallStations() {
    this.httpClient.get<Station[]>("/stationapi/tostn").subscribe(
      data => {
        this.tostations = data;
        //console.log('Fetched stations:', this.tostations);
      },
      error => {
        console.log(error);
        this.error = true;
        this.errorMsg = error.error.message || "Error fetching stations.";
      }
    );
  }
  fetchConveyedBy() {
    this.httpClient.get<{ success: boolean; eq_conveyed_by: string[] }>('/eqrequestapi/EQ_Conveyed_By').subscribe(
      data => {
        if (data.success) {
          this.convyedarr = data.eq_conveyed_by; // This should work correctly
          // console.log('Fetched EQ Conveyed By:', this.convyedarr);
        }
      },
      error => {
        console.error('Error fetching EQ Conveyed By:', error);
        this.error = true;
        this.errorMsg = error.error.message || "Error fetching EQ Conveyed By.";
      }
    );
  }

  eqrequestedby() {
    this.httpClient.get<{ success: boolean; eq_requested_by: string[] }>('/eqrequestapi/EQ_Requested_By').subscribe(
      data => {
        if (data.success) {
          this.requestedarr = data.eq_requested_by; // This should work correctly
          // console.log('Fetched EQ Requested By:', this.requestedarr);
        }
      },
      error => {
        console.error('Error fetching EQ Conveyed By:', error);
        this.error = true;
        this.errorMsg = error.error.message || "Error fetching EQ Conveyed By.";
      }
    );
  }

  eq_taken_by1() {
    this.httpClient.get<{ success: boolean; eq_taken_by: string[] }>('/eqrequestapi/EQ_Taken_By').subscribe(
      data => {
        if (data.success) {
          this.takenarr = data.eq_taken_by; // This should work correctly
          //  console.log('Fetched EQ Conveyed By:', this.takenarr);
        }
      },
      error => {
        console.error('Error fetching EQ Conveyed By:', error);
        this.error = true;
        this.errorMsg = error.error.message || "Error fetching EQ Conveyed By.";
      }
    );
  }
  designation1() {
    this.httpClient.get<{ success: boolean; designation: string[] }>('/eqrequestapi/designation').subscribe(
      data => {
        if (data.success) {
          this.designationarr = data.designation; // This should work correctly
          // console.log('Fetched EQ Conveyed By:', this.designationarr);
        }
      },
      error => {
        console.error('Error fetching EQ Conveyed By:', error);
        this.error = true;
        this.errorMsg = error.error.message || "Error fetching EQ Conveyed By.";
      }
    );
  }
  officerPhone1() {
    this.httpClient.get<{ success: boolean; offmobilenumber: string[] }>('/eqrequestapi/officenumber').subscribe(
      data => {
        if (data.success) {
          this.offmobilenumberarr = data.offmobilenumber; // This should work correctly
          //  console.log('Fetched EQ Conveyed By:', this.offmobilenumberarr);
        }
      },
      error => {
        console.error('Error fetching EQ Conveyed By:', error);
        this.error = true;
        this.errorMsg = error.error.message || "Error fetching EQ Conveyed By.";
      }
    );

  }


  // Handle file selection
  // Handle file selection for PDFs
  onNotifypdfSelected(event: any, type: string): void {
    const files: FileList = event.target.files; // Get the list of files
    const validFiles: File[] = []; // Array to hold valid files
    const validFileNames: string[] = []; // Array to hold valid file names

    // Validate files
    for (let i = 0; i < files.length; i++) {
      const file: File = files[i];
      const fileName = file.name;

      // Validate file type (PDF, JPG, JPEG, PNG)
      if (!fileName.toLowerCase().endsWith('.pdf') &&
        !fileName.toLowerCase().endsWith('.jpg') &&
        !fileName.toLowerCase().endsWith('.jpeg') &&
        !fileName.toLowerCase().endsWith('.png')) {
        alert('Please upload only PDF, JPG, JPEG, or PNG files.');
        return; // Stop processing if an invalid file is found
      }

      validFiles.push(file); // Add valid file to the array
      validFileNames.push(fileName); // Add valid file name to the array
    }

    // Handle file upload logic
    this.pdffilenotification = validFiles; // Store the uploaded files
    this.pdfname = validFileNames; // Store the file names
    this.pdfstatus = validFiles.length > 0; // Set PDF status based on file length
    console.log('Files uploaded:', this.pdfname);

    // If only one file is uploaded, open the modal to select request type
    if (validFiles.length === 1) {
      const dialogRef = this.dialog.open(RequestTypeModalComponent);

      dialogRef.afterClosed().subscribe(selectedType => {
        if (selectedType) {
          this.requestType = selectedType; // Store the selected type
          console.log('Selected Request Type:', this.requestType);
        }
      });
    } else if (validFiles.length > 1) {
      // For multiple files, set the request type directly
      this.requestType = 'multiple';
    }
  }


  RegisterNotifyerrorCheck() {
    this.error = false;
    this.errorMsg = "";

    // Always Mandatory Fields
    const mandatoryAlways = {

      'officerPhone': this.officerPhone,
      'designation': this.designation,
      'eq_taken_by': this.taken,
      'rece_mode': this.rece_mode,
    };

    // Conditionally Mandatory Fields based on pdfstatus
    const mandatoryConditional = this.pdfstatus ? {} : {
      'pnr_number': this.pnr_number,
      'date_of_journey': this.tso_date,
      'class_mode': this.class_mode,
      'source': this.from_station,
      'destination': this.destination,
      'passenger_name': this.passenger_name,
      'no_of_passengers': this.no_of_passengers,

    };

    // Merge mandatory fields based on pdfstatus
    let mandatoryFields = { ...mandatoryAlways, ...mandatoryConditional };

    // Check if requestType is "single" or pdfstatus is false, then train_number should be mandatory
    if ((this.requestType === 'single') || (!this.pdfstatus)) {
      mandatoryFields['train_number'] = this.train_number;
    }

    // Validate Train Number (should be between 4 to 5 digits)
    if (((this.requestType === 'single') || (!this.pdfstatus)) && (!this.train_number || !/^\d{4,5}$/.test(this.train_number.toString()))) {
      this.error = true;
      this.errorMsg = "Train Number must be a 4 or 5-digit number when request type is 'single' or when no PDF is uploaded.";
      console.error("Invalid Train Number:", this.train_number);
      return;
    }



    // Validate PNR number (10 digits for Indian Railways)
    if (!this.pdfstatus && this.pnr_number && !/^\d{10}$/.test(this.pnr_number)) {
      this.error = true;
      this.errorMsg = "PNR Number must be a 10-digit number.";
      console.error("Invalid PNR Number:", this.pnr_number);
      return;
    }

    // Validate each additional PNR in inputSets
    for (let i = 0; i < this.inputSets.length; i++) {
      const additionalPNR = this.inputSets[i].additional_PNR;
      if (!additionalPNR || additionalPNR.trim() === '') {
        this.error = true;
        this.errorMsg = `PNR in sequence ${i + 1} is required.`;
        console.error(`Field additional_PNR in sequence ${i + 1} is missing.`);
        return;
      } else if (!/^\d{10}$/.test(additionalPNR)) { // Validate if PNR is 10 digits
        this.error = true;
        this.errorMsg = `PNR in sequence ${i + 1} must be a 10-digit number.`;
        console.error(`Invalid additional_PNR in sequence ${i + 1}:`, additionalPNR);
        return;
      }
    }

    // Check for empty mandatory fields
    for (const [field, value] of Object.entries(mandatoryFields)) {
      if (!value || value.toString().trim() === '') {
        this.error = true;
        this.errorMsg = "All Mandatory Fields Are Required.";
        console.error(`Field ${field} is missing.`);
        return;
      }
    }

    // Additional check: if `date_of_journey` has a value, `boarding_at` is required
    if (this.date_of_journey && (!this.boarding_at || this.boarding_at.toString().trim() === '')) {
      this.error = true;
      this.errorMsg = "Boarding At is required when Date of Journey is provided.";
      console.error("Field boarding_at is missing when date_of_journey is set.");
      return;
    }

    // If all validations pass, proceed to save the form
    this.preSaveFormCheck();
  }







  saveForm() {
    const formData = new FormData();
    const localData = {}; // Local object to track appended fields

    // Collect PNR numbers and filenames
    const pnrNumbers = [];
    const fileNames = [];

    // Append fields based on PDF status
    if (this.pdfstatus) {
      // Append all uploaded PDF files if available
      if (this.pdffilenotification && this.pdffilenotification.length > 0) {
        this.pdffilenotification.forEach((file: File, index: number) => {
          //formData.append(`files[]`, file, file.name); // Using a generic field name
          fileNames.push(file.name); // Track file names
        });
      }

      // If `requestType` is "single", append `train_number`
      if (this.requestType === 'single' && this.train_number) {
        const trainNumberValue = Array.isArray(this.train_number) ? this.train_number[0] : this.train_number; // Get first element if it's an array
        formData.append('train_number', trainNumberValue);
        localData['train_number'] = trainNumberValue;
      }
      formData.append('requesttype', this.requestType);
      localData['requesttype'] = this.requestType;
    } else {
      // Fields mandatory when PDF is not uploaded
      if (this.train_number) {
        const trainNumberValue = Array.isArray(this.train_number) ? this.train_number[0] : this.train_number; // Get first element if it's an array
        formData.append('train_number', trainNumberValue);
        localData['train_number'] = trainNumberValue;
      }
    }

    // Append main PNR number
    if (this.pnr_number) {
      //formData.append('pnr_number', this.pnr_number);
      pnrNumbers.push(this.pnr_number); // Add to PNR check array
    } else if (!this.pdfstatus) {
      Swal.fire('Error!', 'PNR Number is required when no PDF is uploaded.', 'error');
      return; // Prevent submission if PNR is not set
    }

    // Append additional PNR numbers from inputSets
    if (this.inputSets && this.inputSets.length > 0) {
      this.inputSets.forEach((set) => {
        if (set.additional_PNR && set.additional_PNR.trim() !== '') {
          //formData.append('pnr_number', set.additional_PNR);
          pnrNumbers.push(set.additional_PNR); // Add additional PNRs to array
        }
      });
    }

    // At this point, we have collected all PNRs and file names
    console.log("Collected PNR Numbers:", pnrNumbers);
    console.log("Collected File Names:", fileNames);

    // Now check if PNR numbers or file names already exist in the database
    this.httpClient.post('/eqrequestapi/check-existing', { pnr_numbers: pnrNumbers, file_names: fileNames }).subscribe(
      (response: any) => {
        console.log(response)
        const existingRecords = response.data || [];

        // Initialize arrays to store all existing PNRs and file names
        let existingPNRs: string[] = [];
        let existingFileNames: string[] = [];

        // Iterate through each record in existingRecords and split PNRs and file names
        existingRecords.forEach(record => {
          // Split the comma-separated pnr_number and file_name, trim spaces and add to arrays
          if (record.pnr_number) {
            existingPNRs = existingPNRs.concat(record.pnr_number.split(',').map(pnr => pnr.trim()));
          }

          if (record.file_name) {
            existingFileNames = existingFileNames.concat(record.file_name.split(',').map(file => file.trim()));
          }
        });

        // Log the extracted PNRs and file names for debugging
        console.log("Existing PNRs:", existingPNRs);
        console.log("Existing File Names:", existingFileNames);

        // Filter out new PNRs and files that do not exist in the database
        const newPNRs = pnrNumbers.filter(pnr => !existingPNRs.includes(pnr));
        const newFileNames = fileNames.filter(file => !existingFileNames.includes(file));
        this.showEditTable = false;
        // Log the new PNRs and file names for debugging
        console.log("New PNRs:", newPNRs);
        console.log("New File Names:", newFileNames)
        // Show existing records for editing
        if (existingRecords.length > 0) {
          Swal.fire({
            title: 'Record(s) Already Exist',
            text: 'Do you want to edit the existing records?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Edit'
          }).then((result) => {
            if (result.isConfirmed) {
              this.existingRecord = existingRecords;
              console.log(this.existingRecord);
              // Show the edit table logic here
              this.showEditTable = true;
              if (newPNRs.length > 0 || newFileNames.length > 0) {
                Swal.fire({
                  title: 'Do You Wish To Submit New Records?',
                  text: "New data will be saved to the database",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Submit New'
                }).then((result) => {
                  if (result.isConfirmed) {
                    // Append other fields and submit new records
                    this.appendAndSubmitNewRecords(formData, localData, newPNRs, newFileNames);
                  }
                });
              }
            }
          });
        }
        else {
          this.appendAndSubmitNewRecords(formData, localData, newPNRs, newFileNames);
        }

        // If there are new records, proceed with saving them

      },
      error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong with the PNR check!",
          footer: 'Please try again.'
        });
        console.error("Error checking existing PNR or file:", error);
      }
    );
  }

  appendAndSubmitNewRecords(formData, localData, newPNRs, newFileNames) {
    console.log(newFileNames)
    // Here, append the new PNRs and filenames to the formData
    newPNRs.forEach(pnr => formData.append('pnr_number', pnr));
    newFileNames.forEach(fileName => {
      const file = this.pdffilenotification.find(f => f.name === fileName);
      if (file) {
        formData.append('files[]', file, file.name);
      } else {
        console.warn(`File not found for fileName: ${fileName}`);
        // Optionally, handle the case where the file is missing
      }
    });

    // Continue appending other fields and submit the form
    if (this.tso_date) {
      formData.append('date_of_journey', this.tso_date);
      localData['date_of_journey'] = this.tso_date;
    }
    if (this.class_mode) {
      formData.append('class_mode', this.class_mode);
      localData['class_mode'] = this.class_mode;
    }
    if (this.from_station) {
      formData.append('from_station', this.from_station);
      localData['from_station'] = this.from_station;
    }
    if (this.boarding_at) {
      formData.append('boarding_at', this.boarding_at);
      localData['boarding_at'] = this.boarding_at;
    }
    if (this.destination) {
      formData.append('destination', this.destination);
      localData['destination'] = this.destination;
    }
    if (this.passenger_name) {
      formData.append('passenger_name', this.passenger_name.toUpperCase());
      localData['passenger_name'] = this.passenger_name;
    }
    if (this.requested) {
      formData.append('eq_requested_by', this.requested);
      localData['eq_requested_by'] = this.requested;
    }

    // Append common fields for both scenarios
    if (this.eq_conveyed_by) {
      formData.append('eq_conveyed_by', this.conveyed.toUpperCase());
      localData['eq_conveyed_by'] = this.conveyed;
    }
    if (this.designation) {
      formData.append('designation', this.designation.toUpperCase());
      localData['designation'] = this.designation;
    }
    if (this.officerPhone) {
      formData.append('officerPhone', this.officerPhone);
      localData['officerPhone'] = this.officerPhone;
    }
    if (this.rece_mode) {
      formData.append('rece_mode', this.rece_mode);
      localData['rece_mode'] = this.rece_mode;
    }
    if (this.remarks) {
      formData.append('remarks', this.remarks);
      localData['remarks'] = this.remarks;
    }
    if (this.taken) {
      formData.append('eq_taken_by', this.taken.toUpperCase());
      localData['eq_taken_by'] = this.taken;
    }

    // Append additional fields
    if (this.addremarks) {
      formData.append('remarks2', this.addremarks);
      localData['remarks2'] = this.addremarks;
    }
    if (this.seat_berth) {
      console.log("seat_berth", this.seat_berth);
      formData.append('seat_berth', this.seat_berth);
      localData['seat_berth'] = this.seat_berth;
    }
    if (this.no_of_passengers) {
      formData.append('no_of_passenger', this.no_of_passengers);
      localData['no_of_passenger'] = this.no_of_passengers;
    }
    if (this.passenger_phone) {
      formData.append('passenger_phone_number', this.passenger_phone);
      localData['passenger_phone_number'] = this.passenger_phone;
    }
    if (this.date_of_journey) {
      formData.append('boardingdate', this.date_of_journey);
      localData['boardingdata'] = this.date_of_journey;
    }
    // ... append remaining fields

    // Submit the new records to the backend
    this.httpClient.post('/eqrequestapi/save', formData).subscribe(
      response => {
        Swal.fire('Submitted!', 'New Data Saved Successfully.', 'success');
        console.log("Form submitted successfully:", response);
        if (this.showEditTable == false) { setTimeout(() => { this.resetForm() }, 2000); }

      },
      error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: 'Data Not Saved. Please try again.'
        });
        console.error("Error submitting form:", error);
      }
    );
  }








  // Reset form fields after successful submission
  resetForm() {
    window.location.reload();
    // this.date_of_journey = '';
    // this.train_number = '';
    // this.class_mode = '';
    // this.boarding_at = '';
    // this.destination = '';
    // this.passenger_name = '';
    // this.pnr_number = '';
    // this.eq_requested_by = '';
    // this.eq_conveyed_by = '';
    // this.remarks = '';
    // this.pdfname = [];
    // this.pdffilenotification = [];
    // this.pdfstatus = false;
    // this.seat_berth = '';
    // this.no_of_passengers = '';
    // this.passenger_phone = '';
    // this.addremarks = '';

    // // Reset any input sets (for additional PNRs or other sets)
    // if (this.inputSets && this.inputSets.length > 0) {
    //   this.inputSets.forEach(set => {
    //     set.additional_PNR = '';
    //   });
    // }

    // // Reset form controls if using FormGroup or FormBuilder
    // if (this.trainControl) {
    //   this.trainControl.reset();
    // }

    // // Reset other custom fields you might have
    // this.officerPhone = '';
    // this.requested = '';
    // this.rece_mode = '';
    // this.conveyed = '';
    // this.designation = '';
    // this.tso_date = '';
    // this.from_station = '';
    // this.inputSets=null;
    // this.trainControl.reset();
  }

  // Filter logic for autocomplete
  private _filterTrains(value: string | number): string[] {
    // Convert the value to a string and apply toLowerCase() if it's defined
    const filterValue = value?.toString().toLowerCase();

    return this.trains.filter(train => train.toString().toLowerCase().includes(filterValue)); // Ensure train is a string
  }

  // Handle when input field loses focus (blur event)
  onInputBlur(): void {
    const inputValue = this.trainControl.value;
    if (inputValue && !this.trains.includes(inputValue.toString())) {
      this.train_number = inputValue;
      console.log('Entered value not in options:', this.train_number);
    }
  }

  // Handle when a train number is selected from the autocomplete
  onOptionSelected(event: any): void {
    this.train_number = event.option.value; // Set the selected train number
    console.log('Selected Option:', this.train_number);
  }

  // Filter logic for autocomplete based on user input
  private _filterStations(value: string | number, stations: Station[]): Station[] {
    const filterValue = value?.toString().toLowerCase(); // Convert the input to string and lowercase
    return stations.filter(station =>
      station.StnCode.toLowerCase().includes(filterValue)
    );
  }

  // Handle when input field for "Boarding At" loses focus
  onBoardingBlur(): void {
    const inputValue = this.boardingControl.value;
    if (inputValue && !this.stations.some(station => station.StnCode === inputValue)) {
      this.boarding_at = inputValue;
      console.log('Entered boarding value not in options:', this.boarding_at);
    }
  }

  onsourceBlur(): void {
    const inputValue = this.boardingControl.value;
    if (inputValue && !this.stations.some(station => station.StnCode === inputValue)) {
      this.from_station = inputValue;
      this.boarding_at = inputValue;
      console.log('Entered Source & boarding value options:', this.boarding_at);
    }
  }

  // Handle when a boarding station is selected from the autocomplete
  onBoardingSelected(event: any): void {
    this.boarding_at = event.option.value; // Set the selected boarding station
    console.log('Selected Boarding Station:', this.boarding_at);
  }


  onSourceSelected(event: any): void {
    this.boarding_at = event.option.value; // Set the selected boarding station
    this.from_station = event.option.value;
    console.log('Selected Source & Boarding Station:', this.boarding_at);
  }

  // Handle when input field for "Destination" loses focus
  onDestinationBlur(): void {
    const inputValue = this.destinationControl.value;
    if (inputValue && !this.tostations.some(station => station.StnCode === inputValue)) {
      this.destination = inputValue;
      console.log('Entered destination value not in options:', this.destination);
    }
  }



  // Handle when a destination station is selected from the autocomplete
  onDestinationSelected(event: any): void {
    this.destination = event.option.value; // Set the selected destination station
    console.log('Selected Destination Station:', this.destination);
  }

  onDesignationSelected(event: any) {
    this.designation = event.option.value;
    console.log('Selected designation Station:', this.designation);

  }
  // Filtering methods for each field
  private _filterConveyed(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.convyedarr.filter(conveyed => conveyed.toLowerCase().includes(filterValue));
  }

  private _filterRequested(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.requestedarr.filter(requested => requested.toLowerCase().includes(filterValue));
  }

  private _filterTaken(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.takenarr.filter(taken => taken.toLowerCase().includes(filterValue));
  }

  private _filterdesignations(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(filterValue)
    return this.designationarr.filter(desig => desig.toLowerCase().includes(filterValue));
  }

  private _filterofficerphone(value: string): string[] {
    // Ensure value is treated as a string
    const filterValue = String(value).replace(/\D/g, ''); // \D matches any character that is not a digit

    // If filterValue is empty, return all numbers to show in autocomplete
    if (!filterValue) {
      return this.offmobilenumberarr.map(String); // Convert all numbers to strings if necessary
    }

    // Return only numbers that include the filterValue
    return this.offmobilenumberarr
      .map(String) // Convert each number to a string
      .filter(phone =>
        phone.replace(/\D/g, '').includes(filterValue) // Remove non-numeric characters from phone numbers before comparison
      );
  }



  // Event handlers when an option is selected
  onConveyedSelected(event: any) {
    this.conveyed = event.option.value;
  }

  onRequestedSelected(event: any) {
    this.requested = event.option.value;
  }

  onTakenSelected(event: any) {
    this.taken = event.option.value;
  }
  onOfficerPhoneSelected(event: any) {
    this.officerPhone = event.option.value;
    console.log("sundar" + this.officerPhone)
  }

  // Method for when the conveyed input loses focus
  onConveyedBlur(): void {
    const inputValue = this.conveyedControl.value;
    if (inputValue && !this.convyedarr.some(conveyed => conveyed === inputValue)) {
      this.eq_conveyed_by = inputValue; // Set the corresponding variable
      console.log('Entered conveyed value not in options:', this.eq_conveyed_by);
    }
  }

  // Method for when the requested input loses focus
  onRequestedBlur(): void {
    const inputValue = this.requestControl.value;
    if (inputValue && !this.requestedarr.some(requested => requested === inputValue)) {
      this.eq_requested_by = inputValue; // Set the corresponding variable
      console.log('Entered requested value not in options:', this.eq_requested_by);
    }
  }

  // Method for when the taken input loses focus
  onTakenBlur(): void {
    const inputValue = this.takenControl.value;
    if (inputValue && !this.takenarr.some(taken => taken === inputValue)) {
      this.eq_taken_by = inputValue; // Set the corresponding variable
      console.log('Entered taken value not in options:', this.eq_taken_by);
    }
  }

  onOfficerphoneBlur(): void {
    const inputValue = this.officerPhoneControl.value;
    if (inputValue && !this.offmobilenumberarr.some(officerPhone => officerPhone === inputValue)) {
      this.officerPhone = inputValue; // Set the corresponding variable
      console.log('Entered office phone value not in options:', this.officerPhone);
    }
    else {
      this.officerPhone = inputValue;
      console.log("officer")
    }
  }

  onDesignBlur(): void {
    const inputValue = this.designationsControl.value;
    if (inputValue && !this.designationarr.some(designation => designation === inputValue)) {
      this.designation = inputValue; // Set the corresponding variable
      console.log('Entered designation value not in options:', this.officerPhone);
    }
  }

  updateMinDate() {
    this.minDate = this.tso_date;
  }

  validateInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = parseInt(input.value, 10);

    if (value < 1) {
      input.value = '1';
    } else if (value > 20) {
      input.value = '20';
    }
  }
  // Pre-saveForm check
  preSaveFormCheck() {
    if (!this.pdfstatus) {
      // Generate summary of form values
      const formSummary = this.generateFormSummary(); // Function to generate summary

      Swal.fire({
        title: 'Review Your Submission',
        html: formSummary, // Display generated form summary
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Confirm and Submit',
        cancelButtonText: 'Edit',
        customClass: {
          popup: 'custom-swal-popup' // Add custom class here
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // If user confirms, call saveForm
          this.saveForm();
        }
        // If the user cancels, they can go back and edit the form
      });
    } else {
      // If PDF status is true, proceed directly to saveForm
      this.saveForm();
    }
  }

  // Helper method to generate a summary of the form values
  generateFormSummary() {
    const formatDate = (dateStr) => {
      const dateObj = new Date(dateStr);
      const day = String(dateObj.getDate()).padStart(2, '0');
      const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = dateObj.getFullYear();
      return `${day}/${month}/${year}`;
    };

    let allPnrNumbers = [];
    if (this.pnr_number) {
      allPnrNumbers.push(this.pnr_number); // Add the main PNR number
    }

    // Add additional PNRs from inputSets
    if (this.inputSets && this.inputSets.length > 0) {
      this.inputSets.forEach((set) => {
        if (set.additional_PNR && set.additional_PNR.trim() !== '') {
          allPnrNumbers.push(set.additional_PNR.trim()); // Add additional PNR numbers
        }
      });
    }

    // Join all PNR numbers with a comma
    const concatenatedPnrNumbers = allPnrNumbers.join(', ');

    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    // Format the date and time as dd/mm/yyyy hh:mm
    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
    let summary = `
    <div style="text-align: center;">
      <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; margin: 0 auto; text-align: left;">
        ${this.designation ? `<tr><td><strong>Designation</strong></td><td>${this.designation}</td></tr>` : ''}
        ${this.eq_conveyed_by ? `<tr><td><strong>Applied By</strong></td><td>${this.conveyed}</td></tr>` : ''}
        ${this.officerPhone ? `<tr><td><strong>Officer Phone</strong></td><td>${this.officerPhone}</td></tr>` : ''}
        ${this.requested ? `<tr><td><strong>Requested By</strong></td><td>${this.requested}</td></tr>` : ''}
        ${this.rece_mode ? `<tr><td><strong>Receipt Mode</strong></td><td>${this.rece_mode}</td></tr>` : ''}
        ${this.remarks ? `<tr><td><strong>Remarks</strong></td><td>${this.remarks}</td></tr>` : ''}
        ${this.train_number ? `<tr><td><strong>Train Number</strong></td><td>${this.train_number}</td></tr>` : ''}
        
        <tr><td colspan="2" style="text-align: center;"><strong>PNR Number(s)</strong></td></tr> <!-- Header row for PNRs with colspan -->
        <tr><td colspan="2" style="text-align: center;">${concatenatedPnrNumbers}</td></tr> <!-- Concatenated PNR numbers in a new row -->
        
        ${this.tso_date ? `<tr><td><strong>Date of Journey</strong></td><td>${formatDate(this.tso_date)}</td></tr>` : ''}
        ${this.date_of_journey ? `<tr><td><strong>Boarding Date</strong></td><td>${formatDate(this.date_of_journey)}</td></tr>` : ''}
        ${this.class_mode ? `<tr><td><strong>Class Mode</strong></td><td>${this.class_mode}</td></tr>` : ''}
        ${this.from_station ? `<tr><td><strong>From Station</strong></td><td>${this.from_station}</td></tr>` : ''}
        ${this.boarding_at ? `<tr><td><strong>Boarding At</strong></td><td>${this.boarding_at}</td></tr>` : ''}
        ${this.destination ? `<tr><td><strong>Destination</strong></td><td>${this.destination}</td></tr>` : ''}
        ${this.passenger_name ? `<tr><td><strong>Passenger Name</strong></td><td>${this.passenger_name}</td></tr>` : ''}
        ${this.no_of_passengers ? `<tr><td><strong>No. of Passengers</strong></td><td>${this.no_of_passengers}</td></tr>` : ''}
        ${this.seat_berth ? `<tr><td><strong>Seat/Berth</strong></td><td>${this.seat_berth}</td></tr>` : ''}
        ${this.passenger_phone ? `<tr><td><strong>Passenger Phone</strong></td><td>${this.passenger_phone}</td></tr>` : ''}
        ${this.addremarks ? `<tr><td><strong>Additional Remarks</strong></td><td>${this.addremarks}</td></tr>` : ''}
        ${this.eq_taken_by ? `<tr><td><strong>Eq Taken By</strong></td><td>${this.eq_taken_by}</td></tr>` : ''}
        <tr><td><strong>Received Date and Time</strong></td><td>${formattedDateTime}</td></tr>
      </table>
    </div>
  `;
    return summary;
  }


  updateRecord(record: any) {
    console.log('Before update:', record);
    record.updated = true; // Locally mark as updated

    const updatedData = {
      pnr_number: record.pnr_number,
      file_name: record.file_name,
      designation: record.designation,
      conveyed_by: record.conveyed_by,
      officer_mobile_number: record.officer_mobile_number
    };

    this.httpClient.post('/eqrequestapi/update-records', updatedData).subscribe(
      (response: any) => {
        console.log(response.message);
        // Optionally show a success message to the user
      },
      (error: any) => {
        console.error('Error updating record:', error);
        // If there was an error, undo the local "updated" flag
        record.updated = false;
      }
    );
  }
  

  openPopup() {
    this.showEditTable = true;
  }

  closePopup() {
    this.showEditTable = false;
  }
  
  conveyedby(ls: any) {
    console.log(ls)
    this.httpClient.post('/eqrequestapi/generateMergedPDF', ls, { responseType: 'blob' }).subscribe(
      (response: Blob) => {
        // Create a URL for the PDF blob
        const url = window.URL.createObjectURL(response);

        // Open the PDF in a new tab or trigger a download
        window.open(url);

        // Optionally log success message
        console.log('PDF generated successfully');
      },
      (error: any) => {
        console.error('Error generating PDF:', error);
      }
    );
  }

  fetchReturnCounts(): void {
    this.httpClient.get<any>('/eqrequestapi/get-return-counts').subscribe(
      response => {
        this.returnedWithoutPdf = response.returnedWithoutPdf;
      },
      error => {
        console.error('Error fetching return counts:', error);
      }
    );
  }

}