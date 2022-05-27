import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyBenchComponent } from './dummy-bench.component';

describe('DummyBenchComponent', () => {
  let component: DummyBenchComponent;
  let fixture: ComponentFixture<DummyBenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyBenchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyBenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
