import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HorComponent } from './hor/hor.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { PlaygroundComponent } from './playground/playground.component';
import { OcrComponent } from './ocr/ocr.component';
import { ReportComponent } from './report/report.component';
import { MisReportComponent } from './mis-report/mis-report.component';

const routes: Routes = [
  { path: "", redirectTo: "/entry-form", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "entry-form", component: EntryFormComponent },
  { path: "hor", component: HorComponent },
  { path: "playground", component: PlaygroundComponent },
  { path: "ocr", component: OcrComponent },
  { path: "report", component: ReportComponent },
  { path: "mis-report", component: MisReportComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }