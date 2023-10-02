import { TestBed } from '@angular/core/testing';

import { FeedContextService } from './feed-context.service';

describe('FeedContextService', () => {
  let service: FeedContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
