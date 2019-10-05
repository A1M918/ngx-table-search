import { TestBed } from '@angular/core/testing';

import { NgxTableSearchService } from './ngx-table-search.service';

describe('NgxTableSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTableSearchService = TestBed.get(NgxTableSearchService);
    expect(service).toBeTruthy();
  });
});
