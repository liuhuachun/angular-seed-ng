import { TestBed, inject } from '@angular/core/testing';

import { MainService } from './main.service';

describe('MainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainService]
    });
  });

  it('should toBeDefined', inject([MainService], (service: MainService) => {
    expect(service).toBeDefined();
  }));
});
