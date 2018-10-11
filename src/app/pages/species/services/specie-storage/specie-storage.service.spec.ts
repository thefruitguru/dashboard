import { TestBed } from '@angular/core/testing';

import { SpecieStorageService } from './specie-storage.service';

describe('SpecieStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecieStorageService = TestBed.get(SpecieStorageService);
    expect(service).toBeTruthy();
  });
});
