import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routes';

@NgModule({
  imports: [
    LoginRoutingModule,
    CommonModule,
    TranslateModule,
    ButtonsModule,
    FormsModule
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
