import { TestBed } from '@angular/core/testing';

import { NgxAccordeonService } from './ngx-accordeon.service';

describe('NgxAccordeonService', () => {
  let service: NgxAccordeonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAccordeonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
