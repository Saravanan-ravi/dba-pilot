import { BrowserModule, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { TableFilterPipe } from './table-filter.pipe.service';
import { ExcelService } from './excel.service';
import { UserIdleModule } from 'angular-user-idle'; //deprecated
// import { NgIdleModule } from '@ng-idle/core'; //not supported
import { provideUserIdleConfig } from 'angular-user-idle'; //new
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule } from '@angular/material/core';
import { StatusComponent } from './status/status.component';
import { NotificationComponent } from './notification/notification.component';
import { UserActivationComponent } from './user-activation/user-activation.component';
import { FilterPipe } from './reports/filter.pipe';
import { ReportsComponent } from './reports/reports.component';
import { CustomisedReportComponent } from './customised-report/customised-report.component';

const idleConfig = {
  idle: 1800, // in seconds
  timeout: 50, // in seconds
  ping: 300 // in seconds
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    TableFilterPipe,
    StatusComponent,
    NotificationComponent,
    UserActivationComponent,
    ReportsComponent,
    CustomisedReportComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatDialogModule
    //  NgIdleModule.forRoot(), //not supported // to be uninstalled
    //  UserIdleModule.forRoot({ idle: 1800, timeout: 50, ping: 300 }), //deprecated


  ],
  providers: [
    provideUserIdleConfig({ idle: 2200, timeout: 1500, ping: 820 }), //new //idle: 600, timeout: 300, ping: 120 
    ExcelService,    
    DatePipe],
  bootstrap: [
    AppComponent,

  ]
})
export class AppModule { }
