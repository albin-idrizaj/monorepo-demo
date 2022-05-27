import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyReportingComponent } from './dummy-reporting/dummy-reporting.component';

const routes: Routes = [
  {
    path: '', component: DummyReportingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRoutingModule { }
