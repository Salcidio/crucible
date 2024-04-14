import { TestBed } from '@angular/core/testing';

import { EncarregadoServiceService } from './encarregado-service.service';

describe('EncarregadoServiceService', () => {
  let service: EncarregadoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncarregadoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
