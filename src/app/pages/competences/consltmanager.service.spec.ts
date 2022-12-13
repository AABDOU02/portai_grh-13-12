import { TestBed } from '@angular/core/testing';

import { ConsltmanagerService } from './consltmanager.service';

describe('ConsltmanagerService', () => {
  let service: ConsltmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsltmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
