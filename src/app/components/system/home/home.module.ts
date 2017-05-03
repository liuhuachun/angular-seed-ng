import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { InputTextModule, ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    HomeRoutingModule,
    InputTextModule,
    ButtonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
