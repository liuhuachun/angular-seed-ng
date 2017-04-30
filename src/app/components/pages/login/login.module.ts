import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routes';

@NgModule({
  imports: [ LoginRoutingModule ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
