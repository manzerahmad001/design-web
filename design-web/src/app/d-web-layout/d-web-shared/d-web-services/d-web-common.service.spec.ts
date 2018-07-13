import { TestBed, inject } from '@angular/core/testing';

import { DWebCommonService } from './d-web-common.service';

describe('DWebCommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DWebCommonService]
    });
  });

  it('should be created', inject([DWebCommonService], (service: DWebCommonService) => {
    expect(service).toBeTruthy();
  }));
});
