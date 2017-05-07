import { TestBed, inject } from '@angular/core/testing';

import { MainService } from './main.service';
import { HttpModule } from '@angular/http';

describe('MainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [ MainService ]
    });
  });

  it('should toBeDefined', inject([MainService], (service: MainService) => {
    expect(service).toBeTruthy();
  }));
});
