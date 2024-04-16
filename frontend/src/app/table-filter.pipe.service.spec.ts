import { TestBed } from '@angular/core/testing';

import { TableFilter.PipeService } from './table-filter.pipe.service';

describe('TableFilter.PipeService', () => {
  let service: TableFilter.PipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableFilter.PipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
