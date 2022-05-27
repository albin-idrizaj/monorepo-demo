import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyReportingComponent } from './dummy-reporting.component';

describe('DummyReportingComponent', () => {
  let component: DummyReportingComponent;
  let fixture: ComponentFixture<DummyReportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyReportingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
