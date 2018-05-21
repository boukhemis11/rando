import { TestBed, inject } from '@angular/core/testing';

import { HikeService } from './hike.service';

describe('HikeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HikeService]
    });
  });

  it('should be created', inject([HikeService], (service: HikeService) => {
    expect(service).toBeTruthy();
  }));
});
