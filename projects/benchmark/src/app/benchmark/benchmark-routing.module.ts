import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyBenchComponent } from './dummy-bench/dummy-bench.component';

const routes: Routes = [
  {
    path: '', component: DummyBenchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenchmarkRoutingModule { }
