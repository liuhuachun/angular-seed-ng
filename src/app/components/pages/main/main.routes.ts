import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../../../services/auth/auth-guard.service';

import { MainComponent } from './main.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: MainComponent,
      canActivate: [AuthGuard],
      children: [
        { path: '', loadChildren: 'app/components/system/home/home.module#HomeModule' },
        { path: 'about', loadChildren: 'app/components/system/about/about.module#AboutModule' }
      ]
    }
  ])]
})

export class MainRoutingModule {}
