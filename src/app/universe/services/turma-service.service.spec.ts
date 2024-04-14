import { TestBed } from '@angular/core/testing';

import { TurmaServiceService } from './turma-service.service';

describe('TurmaServiceService', () => {
  let service: TurmaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurmaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
