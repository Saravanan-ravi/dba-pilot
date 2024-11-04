import { BrowserModule, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioButton, MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MisReportComponent } from './mis-report/mis-report.component';

import { HorComponent } from './hor/hor.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ReportComponent } from './report/report.component';
import { RequestTypeModalComponent } from './request-type-modal/request-type-modal.component';

import { MatButtonModule } from '@angular/material/button';


import { HttpClientModule } from '@angular/common/http';
import { ExcelService } from './excel.service';
import { provideUserIdleConfig } from 'angular-user-idle'; //new
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateFormatPipe } from './date-format.pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { OcrComponent } from './ocr/ocr.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';



const idleConfig = {
  idle: 1800, // in seconds
  timeout: 50, // in seconds
  ping: 300 // in seconds
};

@NgModule({
  declarations: [
    AppComponent,
    DateFormatPipe,
    LoginComponent,
    DashboardComponent,
    HorComponent,
    EntryFormComponent,
    PlaygroundComponent,
    RequestTypeModalComponent,
    OcrComponent,
    ReportComponent,
    MisReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioButton,
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatAutocompleteModule,
    NgIf,
    ReactiveFormsModule
  ],
  providers: [
    provideUserIdleConfig({ idle: 2200, timeout: 1500, ping: 820 }), //new //idle: 600, timeout: 300, ping: 120 
    ExcelService,
    DatePipe,
    MatDatepickerModule,
    provideAnimationsAsync(),
  ],
  bootstrap: [
    AppComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
