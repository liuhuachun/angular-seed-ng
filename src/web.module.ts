// angular
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';

// libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader } from '@ngx-translate/core';

// app
import { APP_COMPONENTS, AppComponent } from './app/components/index';
import { BUILD_TYPES, SeedConfig } from '../tools/config/seed.config';
import { routes } from './app/components/app.routes';

// feature modules
import { CoreModule } from './app/shared/core/core.module';
import { AppReducer } from './app/shared/ngrx/index';
import { AnalyticsModule } from './app/shared/analytics/analytics.module';
import { MultilingualModule, translateLoaderFactory } from './app/shared/i18n/multilingual.module';
import { MultilingualEffects } from './app/shared/i18n/index';
import { NameListEffects } from './app/shared/sample/index';

// config
import { Config, WindowService, ConsoleService, LogTarget, LogLevel, ConsoleTarget } from './app/shared/core/index';
Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;


if (SeedConfig.BUILD_TYPE === 'dev') {
  // only output console logging in dev mode
  Config.DEBUG.LEVEL_4 = true;
}

// sample config (extra)
import { AppConfig } from './app/shared/sample/services/app-config';
import { MultilingualService } from './app/shared/i18n/services/multilingual.service';
import { SampleModule } from './app/shared/sample/sample.module';
import { AuthGuard } from './app/services/auth/auth-guard.service';
import { AuthService } from './app/services/auth/auth.service';
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { MainService } from './app/services/component/main.service';
import { Ng2EchartsModule } from './app/directives/ng2-echarts/ng2-echarts.module';

// custom i18n language support
MultilingualService.SUPPORTED_LANGUAGES = AppConfig.SUPPORTED_LANGUAGES;

let routerModule = RouterModule.forRoot(routes);
if (SeedConfig.TARGET_DESKTOP) {
  Config.PLATFORM_TARGET = Config.PLATFORMS.DESKTOP;
  // desktop (electron) must use hash
  routerModule = RouterModule.forRoot(routes, { useHash: true });
}

declare var window, console;

// For AoT compilation to work:
export function win() {
  return window;
}
export function cons() {
  return console;
}
export function consoleLogTarget(consoleService: ConsoleService) {
  return new ConsoleTarget(consoleService, { minLogLevel: LogLevel.Debug });
}

let DEV_IMPORTS: any[] = [];

if (SeedConfig.BUILD_TYPE === BUILD_TYPES.DEVELOPMENT) {
  DEV_IMPORTS = [
    ...DEV_IMPORTS,
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ];
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng2BootstrapModule.forRoot(),
    CoreModule.forRoot([
      { provide: WindowService, useFactory: (win) },
      { provide: ConsoleService, useFactory: (cons) },
      { provide: LogTarget, useFactory: (consoleLogTarget), deps: [ConsoleService], multi: true }
    ]),
    routerModule,
    DEV_IMPORTS,
    Ng2EchartsModule,
    SampleModule,
    AnalyticsModule,
    MultilingualModule.forRoot([{
      provide: TranslateLoader,
      deps: [Http],
      useFactory: (translateLoaderFactory)
    }]),
    StoreModule.provideStore(AppReducer),
    EffectsModule.run(MultilingualEffects),
    EffectsModule.run(NameListEffects)
  ],
  declarations: [
    APP_COMPONENTS
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: SeedConfig.APP_BASE
    },
    AuthGuard,
    AuthService,
    MainService
  ],
  bootstrap: [AppComponent]
})

export class WebModule { }
