import { Component } from '@angular/core';
// app
import { AnalyticsService } from '../shared/analytics/index';
import { Config, LogService, AppService} from '../shared/core/index';
import {SeedConfig} from '../../../tools/config/seed.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HELLO';

  constructor(
    public analytics: AnalyticsService,
    public log: LogService,
    private appService: AppService
  ) {
    log.debug(`Config env: ${SeedConfig.BUILD_TYPE}`);
  }
}
