// angular
import { Injectable } from '@angular/core';

// libs
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

// app
import { Analytics, AnalyticsService } from '../../analytics/index';
import { ILang } from '../../core/index';
import { WindowService } from '../../core/services/window.service';

// module
import { CATEGORY } from '../common/category.common';
import { IMultilingualState } from '../states/index';
import { ChangeAction } from '../actions/index';

// service
@Injectable()
export class MultilingualService extends Analytics {

  // default supported languages
  // see web.module.ts for example of how to provide different value
  public static SUPPORTED_LANGUAGES: Array<ILang> = [
    { code: 'zh', title: '简体中文' }
  ];

  constructor(
    public analytics: AnalyticsService,
    private translate: TranslateService,
    private win: WindowService,
    private store: Store<IMultilingualState>
  ) {
    super(analytics);
    this.category = CATEGORY;

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('zh');

    // use browser/platform lang if available
    const userLang = win.navigator.language.split('-')[0];

    // subscribe to changes
    store.select('i18n').subscribe((state: IMultilingualState) => {
      // update ng2-translate which will cause translations to occur wherever the TranslatePipe is used in the view
      this.translate.use(state.lang);
    });

    // init the lang
    this.store.dispatch(new ChangeAction(userLang));
  }
}
