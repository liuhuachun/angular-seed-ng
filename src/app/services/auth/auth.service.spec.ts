import { TestBed, inject, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LogService } from '../../shared/core/services/logging/log.service';
import { AuthService } from './auth.service';

class MocLogService {
  debug() {}
}

describe('AuthService', () => {
  const routerStub = {
    navigate: jasmine.createSpy('navigate')
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: LogService, useClass: MocLogService },
        { provide: Router, useValue: routerStub }
      ]
    });
  });

  it('should toBeTruthy', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
