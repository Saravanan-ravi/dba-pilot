import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-request-type-modal',
  templateUrl: './request-type-modal.component.html',
})
export class RequestTypeModalComponent {
  requestType: 'single' | 'multiple' = 'single'; // Default value

  constructor(private dialogRef: MatDialogRef<RequestTypeModalComponent>) {}

  // Method to handle change in request type
  onRequestTypeChange(event: any): void {
    console.log('Radio button change event:', event); // Log the event
    this.requestType = event.value; // Set the requestType based on selected value
    console.log('Selected Request Type:', this.requestType);
  }

  onConfirm(): void {
    console.log('Final Request Type:', this.requestType);
    this.dialogRef.close(this.requestType); // Pass selected type back
  }
}
