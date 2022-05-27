import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyBenchComponent } from './dummy-bench/dummy-bench.component';
import { BenchmarkRoutingModule } from './benchmark-routing.module';
import { SharedLibModule } from 'shared-lib';
import { RegularLibModule } from 'projects/regular-lib/src/projects';

@NgModule({
  declarations: [
    DummyBenchComponent
  ],
  imports: [
    CommonModule,
    BenchmarkRoutingModule,
    SharedLibModule,
    RegularLibModule
  ]
})
export class BenchmarkModule { }
