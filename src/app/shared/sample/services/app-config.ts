// app
import { ILang } from '../../core/index';

export class AppConfig {

  public static SUPPORTED_LANGUAGES: Array<ILang> = [
    { code: 'zh', title: '简体中文' },
    { code: 'en', title: 'English' }
  ];

}
