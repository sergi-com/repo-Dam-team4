import { TestBed } from '@angular/core/testing';

import { JSONServiceService } from './json-service.service';

describe('JSONServiceService', () => {
  let service: JSONServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSONServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
