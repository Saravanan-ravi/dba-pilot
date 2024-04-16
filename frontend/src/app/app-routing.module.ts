import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
import { StatusComponent } from './status/status.component';
import { UserActivationComponent } from './user-activation/user-activation.component';
import { TechiesComponent } from './techies/techies.component';
import { ReportsComponent } from './reports/reports.component';
import { CustomisedReportComponent } from './customised-report/customised-report.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "notification", component: NotificationComponent },
  { path: "status", component: StatusComponent },
  { path: "user-activation", component: UserActivationComponent },
  { path: "techies", component: TechiesComponent },
  { path: "reports", component: ReportsComponent },
  { path: "customised-report", component: CustomisedReportComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }