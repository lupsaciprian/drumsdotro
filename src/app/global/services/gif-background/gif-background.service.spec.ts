import { TestBed } from '@angular/core/testing';

import { GifBackgroundService } from './gif-background.service';

describe('GifBackgroundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GifBackgroundService = TestBed.get(GifBackgroundService);
    expect(service).toBeTruthy();
  });
});
