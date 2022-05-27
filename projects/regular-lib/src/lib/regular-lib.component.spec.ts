import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularLibComponent } from './regular-lib.component';

describe('RegularLibComponent', () => {
  let component: RegularLibComponent;
  let fixture: ComponentFixture<RegularLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
