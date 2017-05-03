import { Component, OnInit, Input } from '@angular/core';
import {  Router } from '@angular/router';
import { MainService } from '../../../services/component/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  errorMessage: string;
  menus: any ;
  leftNavShow = true;

  constructor(
    private mainServer: MainService,
    private router: Router) {}

  ngOnInit() {
    this.mainServer.getMenus()
      .subscribe(
        menus => this.menus = menus,
        error =>  this.errorMessage = <any>error
      );
  }
  loginOut() {
    this.router.navigate(['/login']);
  }
}
