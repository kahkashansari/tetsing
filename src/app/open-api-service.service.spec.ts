import { TestBed } from '@angular/core/testing';

import { OPenApiServiceService } from './open-api-service.service';

describe('OPenApiServiceService', () => {
  let service: OPenApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OPenApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
