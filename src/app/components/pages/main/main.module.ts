import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { MainRoutingModule } from './main.routes';
import { MainComponent } from './main.component';
import { LangSwitcherComponent } from '../../../shared/i18n/components/index';
import { NavsComponent } from '../navs/navs.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterModule,
    MainRoutingModule
  ],
  declarations: [
    LangSwitcherComponent,
    NavsComponent,
    MainComponent
  ]
})
export class MainModule { }
