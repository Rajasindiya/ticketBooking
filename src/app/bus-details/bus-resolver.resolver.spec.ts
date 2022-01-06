import { TestBed } from '@angular/core/testing';

import { BusResolverResolver } from './bus-resolver.resolver';

describe('BusResolverResolver', () => {
  let resolver: BusResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BusResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
