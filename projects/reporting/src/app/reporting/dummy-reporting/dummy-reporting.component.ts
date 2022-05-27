import { Component, OnInit } from '@angular/core';
import { RegularLibService } from 'projects/regular-lib/src/projects';
import { BehaviorSubject } from 'rxjs';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-dummy-reporting',
  templateUrl: './dummy-reporting.component.html',
  styleUrls: ['./dummy-reporting.component.scss']
})
export class DummyReportingComponent implements OnInit {
  sharedData: BehaviorSubject<string>;
  regularData: BehaviorSubject<string>;

  constructor(private sharedLibService: SharedLibService, private regularLibService: RegularLibService) {
    this.sharedData = sharedLibService.data;
    this.regularData = regularLibService.data;
   }

  ngOnInit(): void {
  }

  setDataWithReporting(): void {
    this.sharedLibService.data.next('reporting');
    this.regularLibService.data.next('reporting')
  }
}
