import { TestBed } from '@angular/core/testing';

import { SidebarsService } from './sidebars.service';

describe('SidebarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidebarsService = TestBed.get(SidebarsService);
    expect(service).toBeTruthy();
  });
});
