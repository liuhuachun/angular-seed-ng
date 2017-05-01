import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { LogService } from '../../../shared/core/services/logging/log.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public name: string;
  public password: string;
  public success = true;

  constructor(
    public authServer: AuthService,
    public log: LogService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authServer.login(this.name, this.password);
    if (this.name === this.password) {
      this.router.navigate(['']);
    } else {
      this.success = false;
    }
  }
}
