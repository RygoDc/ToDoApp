import { TestBed } from '@angular/core/testing';

import { ActivaFooterService } from './activa-footer.service';

describe('ActivaFooterService', () => {
  let service: ActivaFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivaFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
