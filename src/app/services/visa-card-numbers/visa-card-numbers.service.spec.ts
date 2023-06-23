import { TestBed } from '@angular/core/testing';

import { VisaCardNumbersService } from './visa-card-numbers.service';

describe('VisaCardNumbersService', () => {
  let service: VisaCardNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisaCardNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
