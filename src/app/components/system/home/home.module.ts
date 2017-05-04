import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { DataTableModule } from 'primeng/primeng';
import { Ng2EchartsDirective } from '../../../directives/ng2-echarts/ng2-echarts.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    HomeRoutingModule,
    DataTableModule
  ],
  declarations: [
    HomeComponent,
    Ng2EchartsDirective
  ]
})
export class HomeModule { }
