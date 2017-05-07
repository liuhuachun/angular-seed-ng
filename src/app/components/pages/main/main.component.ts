import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../../services/component/main.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  errorMessage: string;
  menus: any ;
  leftNavShow = false;

  constructor(
    private mainServer: MainService,
    private authServer: AuthService) {}

  ngOnInit() {
    this.mainServer.getMenus()
      .subscribe(
        menus => this.menus = menus,
        error =>  this.errorMessage = <any>error
      );
  }
  loginOut() {
    this.authServer.loginOut();
  }
  handleNavsLeft() {
    this.leftNavShow = !this.leftNavShow;
  }
  onClickWord(agreed: boolean) {
    this.leftNavShow = !agreed;
  }
}
