import { TestBed } from '@angular/core/testing';

import { EcheanceContratService } from './echeance-contrat.service';

describe('EcheanceContratService', () => {
  let service: EcheanceContratService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcheanceContratService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
