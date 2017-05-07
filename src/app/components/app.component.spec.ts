import { TestBed, async, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LogService } from '../shared/core/services/logging/log.service';

@Component({
  template: ''
})
class DummyComponent { }

class MocLogService {
  debug() {}
}
describe('AppComponent', () => {
  let location, router;
  const logServerStub = {};
  const titleServiceStub = {};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: 'home', component: DummyComponent }
      ])],
      declarations: [
        AppComponent,
        DummyComponent
      ],
      providers: [
        { provide: LogService, useClass: MocLogService },
        Title
      ]
    });
    const injector = getTestBed();
    location = injector.get(Location);
    router = injector.get(Router);
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should go home', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    router.navigate(['/home']).then(() => {
      expect(location.path()).toBe('/home');
    });
  }));
});
