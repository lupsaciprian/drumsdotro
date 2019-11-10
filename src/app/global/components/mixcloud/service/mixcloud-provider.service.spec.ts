import { TestBed } from '@angular/core/testing';

import { MixcloudProviderService } from './mixcloud-provider.service';

describe('MixcloudProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MixcloudProviderService = TestBed.get(MixcloudProviderService);
    expect(service).toBeTruthy();
  });
});
