import { TestBed } from '@angular/core/testing';

import { TieneHeaderService } from './tiene-header.service';

describe('TieneHeaderService', () => {
  let service: TieneHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TieneHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
