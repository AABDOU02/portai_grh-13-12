import { TestBed } from '@angular/core/testing';

import { EditionRetardService } from './edition-retard.service';

describe('EditionRetardService', () => {
  let service: EditionRetardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditionRetardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
