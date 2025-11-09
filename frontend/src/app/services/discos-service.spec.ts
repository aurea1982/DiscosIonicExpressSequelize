import { TestBed } from '@angular/core/testing';

import { DiscosService } from './discos-service';

describe('DiscosService', () => {
  let service: DiscosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
