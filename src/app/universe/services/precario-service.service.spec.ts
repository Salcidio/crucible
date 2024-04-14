import { TestBed } from '@angular/core/testing';

import { PrecarioServiceService } from './precario-service.service';

describe('PrecarioServiceService', () => {
  let service: PrecarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrecarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
