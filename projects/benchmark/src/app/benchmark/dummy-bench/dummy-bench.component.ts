import { Component, OnInit } from '@angular/core';
import { RegularLibService } from 'projects/regular-lib/src/projects';
import { BehaviorSubject, share } from 'rxjs';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-dummy-bench',
  templateUrl: './dummy-bench.component.html',
  styleUrls: ['./dummy-bench.component.scss']
})
export class DummyBenchComponent implements OnInit {

  sharedData: BehaviorSubject<string>;
  regularData: BehaviorSubject<string>;

  constructor(private sharedLibService: SharedLibService, private regularLibService: RegularLibService) {
    this.sharedData = sharedLibService.data;
    this.regularData = regularLibService.data;
   }

  ngOnInit(): void {
  }

  setDataWithBenchmark(): void {
    this.sharedLibService.data.next('benchmark');
    this.regularLibService.data.next('benchmark')
  }
}
