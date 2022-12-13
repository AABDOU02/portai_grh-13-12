import { TestBed } from '@angular/core/testing';

import { MiseAObejectifService } from './mise-a-obejectif.service';

describe('MiseAObejectifService', () => {
  let service: MiseAObejectifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiseAObejectifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
