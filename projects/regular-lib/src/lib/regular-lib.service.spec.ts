import { TestBed } from '@angular/core/testing';

import { RegularLibService } from './regular-lib.service';

describe('RegularLibService', () => {
  let service: RegularLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegularLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
