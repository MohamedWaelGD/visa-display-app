import { TestBed } from '@angular/core/testing';

import { AnimateCharacterService } from './animate-character.service';

describe('AnimateCharacterService', () => {
  let service: AnimateCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimateCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
