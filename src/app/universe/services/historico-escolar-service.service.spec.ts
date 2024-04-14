import { TestBed } from '@angular/core/testing';

import { HistoricoEscolarServiceService } from './historico-escolar-service.service';

describe('HistoricoEscolarServiceService', () => {
  let service: HistoricoEscolarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricoEscolarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
