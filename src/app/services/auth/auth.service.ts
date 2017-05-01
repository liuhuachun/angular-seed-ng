import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LogService } from '../../shared/core/services/logging/log.service';

@Injectable()
export class AuthService {
  isLogIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(
    private router: Router,
    public log: LogService
  ) { }

  login(name: string, password: string): Observable<boolean> {
    this.isLogIn = true;
    return Observable.of(true).delay(1000).do(val => this.isLogIn = true);
  }

  loginOut() {
    this.isLogIn = false;
    this.router.navigate(['/login']);
  }
}
