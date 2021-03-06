import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

// app
import { LogService } from '../shared/core/index';
import { SeedConfig } from '../../../tools/config/seed.config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HELLO';
  menus: any[];

  constructor(
    public log: LogService,
    private titleService: Title
  ) {
    this.setTitle(this.title);
    log.debug(`Config env: ${SeedConfig.BUILD_TYPE}`);
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
