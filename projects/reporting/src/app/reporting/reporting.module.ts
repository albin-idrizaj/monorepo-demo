import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyReportingComponent } from './dummy-reporting/dummy-reporting.component';
import { ReportingRoutingModule } from './reporting-routing.module';
import { SharedLibModule } from 'shared-lib';
import { RegularLibModule } from 'projects/regular-lib/src/projects';

@NgModule({
  declarations: [
    DummyReportingComponent
  ],
  imports: [
    CommonModule,
    ReportingRoutingModule,
    SharedLibModule,
    RegularLibModule
  ]
})
export class ReportingModule { }
