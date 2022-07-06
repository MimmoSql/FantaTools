import { TestBed } from '@angular/core/testing';

import { FtServiceService } from './ft-service.service';

describe('FtServiceService', () => {
  let service: FtServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FtServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
