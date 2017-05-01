// app
import { AuthGuard } from '../services/auth/auth-guard.service';

export const routes: Array<any> = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: 'app/components/pages/main/main.module#MainModule'
  }, {
    path: 'login',
    loadChildren: 'app/components/pages/login/login.module#LoginModule'
  }
];
