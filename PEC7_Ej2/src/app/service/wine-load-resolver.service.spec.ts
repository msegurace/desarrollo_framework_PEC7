import { TestBed } from '@angular/core/testing';

import { WineLoadResolverService } from './wine-load-resolver.service';

describe('WineLoadResolverService', () => {
  let service: WineLoadResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WineLoadResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
