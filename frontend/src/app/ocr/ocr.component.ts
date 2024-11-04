import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Tesseract from 'tesseract.js';  // Import Tesseract.js

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.css']  // Corrected from "styleUrl" to "styleUrls"
})
export class OcrComponent {
  selectedFile: File | null = null;
  extractedText: string | null = null;
  isProcessing: boolean = false;
  resJSON: any;

  constructor(private http: HttpClient) { }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.selectedFile) {
      this.isProcessing = true;

      const fileReader = new FileReader();
      fileReader.readAsDataURL(this.selectedFile);

      fileReader.onload = () => {
        const imageDataUrl = fileReader.result as string;

        // Use Tesseract to extract text from the image
        Tesseract.recognize(imageDataUrl, 'eng', {
          logger: (progress) => console.log(progress)
        })
          .then((result) => {
            this.extractedText = result.data.text;
            this.isProcessing = false;
            this.resJSON = JSON.parse(this.extractedText);
            console.log("The TEXT: ",this.extractedText);
          })
          .catch((error) => {
            console.error('Text extraction error', error);
            this.isProcessing = false;
          });
      };
    }
  }
}