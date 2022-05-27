import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyBenchComponent } from './dummy-bench/dummy-bench.component';
import { BenchmarkRoutingModule } from './benchmark-routing.module';

@NgModule({
  declarations: [
    DummyBenchComponent
  ],
  imports: [
    CommonModule,
    BenchmarkRoutingModule
  ]
})
export class BenchmarkModule { }
