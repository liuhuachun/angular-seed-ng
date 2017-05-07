import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../../services/auth/auth.service';
import { LogService } from '../../../shared/core/services/logging/log.service';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerStub;
  const authServerStub = {
    isLogIn: true
  };
  const logServerStub = {};

  beforeEach(async(() => {
    routerStub = {
      navigate: jasmine.createSpy('navigate')
    };
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        TranslateModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        { provide: AuthService, useValue: authServerStub },
        { provide: LogService, useValue: logServerStub },
        { provide: Router, useValue: routerStub }
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
