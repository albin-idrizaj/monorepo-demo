import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyReportingComponent } from './dummy-reporting/dummy-reporting.component';
import { ReportingRoutingModule } from './reporting-routing.module';

@NgModule({
  declarations: [
    DummyReportingComponent
  ],
  imports: [
    CommonModule,
    ReportingRoutingModule
  ]
})
export class ReportingModule { }
