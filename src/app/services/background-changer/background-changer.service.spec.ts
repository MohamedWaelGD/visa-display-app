import { TestBed } from '@angular/core/testing';

import { BackgroundChangerService } from './background-changer.service';

describe('BackgroundChangerService', () => {
  let service: BackgroundChangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgroundChangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
