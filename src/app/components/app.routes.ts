// app
import { LoginComponent } from './pages/login/login.component';

export const routes: Array<any> = [
  {
    path: '',
    loadChildren: 'app/components/pages/main/main.module#MainModule'
  }, {
    path: 'login',
    component: LoginComponent
  }
];
