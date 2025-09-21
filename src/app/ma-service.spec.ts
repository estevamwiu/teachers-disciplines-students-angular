import { TestBed } from '@angular/core/testing';

import { MaService } from './ma-service';

describe('MaService', () => {
  let service: MaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
